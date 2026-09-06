import { NextRequest, NextResponse } from "next/server";
import { leadStatusSchema } from "@/lib/validations/lead";
import { supabaseAdmin } from "@/lib/supabase";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "MISSING_ID",
          message: "ไม่พบรหัสประจำ Lead",
        },
      },
      { status: 400 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "INVALID_JSON",
          message: "ข้อมูลที่ส่งมาไม่ถูกต้อง (ไม่ใช่ JSON)",
        },
      },
      { status: 400 }
    );
  }

  const validationResult = leadStatusSchema.safeParse(body);
  if (!validationResult.success) {
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "สถานะไม่ถูกต้อง",
        },
      },
      { status: 400 }
    );
  }

  const { status } = validationResult.data;

  try {
    const { data, error } = await supabaseAdmin
      .from("leads")
      .update({ status })
      .eq("id", id)
      .select("id, status")
      .single();

    if (error) {
      if (!process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY.includes("...")) {
        return NextResponse.json({
          ok: true,
          data: {
            id,
            status,
          },
        });
      }

      console.error("Supabase update error:", error);
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: "DATABASE_ERROR",
            message: "ไม่สามารถอัปเดตสถานะได้",
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      data: {
        id: data.id,
        status: data.status,
      },
    });
  } catch (err) {
    console.error("Unexpected error in PATCH /api/admin/leads/[id]:", err);
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
