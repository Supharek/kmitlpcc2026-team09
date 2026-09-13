import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { calculateTotalVisits, BASE_VISITOR_COUNT } from "@/lib/constants/stats";

export async function POST() {
  try {
    const { data, error } = await supabaseAdmin
      .from("site_visits")
      .insert({})
      .select("id, created_at")
      .single();

    if (error) {
      // If DB is in test mode / not configured yet
      if (!process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY.includes("...")) {
        const mockRawCount = 19;
        return NextResponse.json(
          {
            ok: true,
            data: {
              id: "mock-visit-" + Math.random().toString(36).substring(2, 9),
              createdAt: new Date().toISOString(),
              count: calculateTotalVisits(mockRawCount),
              totalVisits: calculateTotalVisits(mockRawCount),
              rawCount: mockRawCount,
              baseCount: BASE_VISITOR_COUNT,
            },
          },
          { status: 201 }
        );
      }

      console.error("Supabase visit insert error:", error);
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: "DATABASE_ERROR",
            message: "ไม่สามารถบันทึกสถิติการเข้าชมได้",
          },
        },
        { status: 500 }
      );
    }

    // Retrieve updated count after insertion
    const { count: updatedCount } = await supabaseAdmin
      .from("site_visits")
      .select("*", { count: "exact", head: true });

    const rawCount = updatedCount ?? 1;
    const totalVisits = calculateTotalVisits(rawCount);

    return NextResponse.json(
      {
        ok: true,
        data: {
          id: data.id,
          createdAt: data.created_at,
          count: totalVisits,
          totalVisits,
          rawCount,
          baseCount: BASE_VISITOR_COUNT,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Unexpected error in visits route:", err);
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "SERVER_ERROR",
          message: "เกิดข้อผิดพลาดของระบบ",
        },
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { count, error } = await supabaseAdmin
      .from("site_visits")
      .select("*", { count: "exact", head: true });

    if (error) {
      // Fallback in local/mock mode
      return NextResponse.json({
        ok: true,
        data: {
          count: BASE_VISITOR_COUNT,
          totalVisits: BASE_VISITOR_COUNT,
          rawCount: 0,
          baseCount: BASE_VISITOR_COUNT,
        },
      });
    }

    const rawCount = count ?? 0;
    const totalVisits = calculateTotalVisits(rawCount);

    return NextResponse.json({
      ok: true,
      data: {
        count: totalVisits,
        totalVisits,
        rawCount,
        baseCount: BASE_VISITOR_COUNT,
      },
    });
  } catch {
    return NextResponse.json({
      ok: true,
      data: {
        count: BASE_VISITOR_COUNT,
        totalVisits: BASE_VISITOR_COUNT,
        rawCount: 0,
        baseCount: BASE_VISITOR_COUNT,
      },
    });
  }
}

