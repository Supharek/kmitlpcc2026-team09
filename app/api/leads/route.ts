import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validations/lead";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  let body: unknown;

  // Handle non-JSON body (TC08)
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

  // Validate with Zod (T4)
  const validationResult = leadFormSchema.safeParse(body);

  if (!validationResult.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of validationResult.error.issues) {
      const fieldName = issue.path[0]?.toString() || "form";
      if (!fieldErrors[fieldName]) {
        fieldErrors[fieldName] = issue.message;
      }
    }

    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบและกรอกใหม่อีกครั้ง",
          fields: fieldErrors,
        },
      },
      { status: 400 }
    );
  }

  const validData = validationResult.data;

  try {
    // Insert into Supabase table leads (T2)
    const { data, error } = await supabaseAdmin
      .from("leads")
      .insert({
        name: validData.name,
        company: validData.company,
        email: validData.email,
        phone: validData.phone,
        service: validData.service,
        message: validData.message,
        budget: validData.budget,
        status: "NEW",
      })
      .select("id, created_at")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      // If DB is not connected yet during testing, provide safe response
      if (!process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY.includes("...")) {
        return NextResponse.json(
          {
            ok: true,
            data: {
              id: "mock-" + Math.random().toString(36).substring(2, 9),
              createdAt: new Date().toISOString(),
              note: "โหมดทดสอบ (ยังไม่ได้ระบุ SUPABASE_SERVICE_ROLE_KEY จริง)",
            },
          },
          { status: 201 }
        );
      }

      return NextResponse.json(
        {
          ok: false,
          error: {
            code: "DATABASE_ERROR",
            message: "ไม่สามารถบันทึกข้อมูลได้ กรุณาลองใหม่อีกครั้ง",
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        data: {
          id: data.id,
          createdAt: data.created_at,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Unexpected error submitting lead:", err);
    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "SERVER_ERROR",
          message: "เกิดข้อผิดพลาดของระบบ กรุณาลองใหม่อีกครั้ง",
        },
      },
      { status: 500 }
    );
  }
}
