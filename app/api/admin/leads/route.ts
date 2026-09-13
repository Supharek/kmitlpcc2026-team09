import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { calculateTotalVisits, BASE_VISITOR_COUNT } from "@/lib/constants/stats";

export async function GET() {
  try {
    // 1. Fetch leads from database (T3)
    const { data: leads, error: leadsError } = await supabaseAdmin
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    // 2. Count total visits from site_visits (G7)
    const { count: visitsCount, error: visitsError } = await supabaseAdmin
      .from("site_visits")
      .select("*", { count: "exact", head: true });

    if (leadsError || visitsError) {
      console.warn("Supabase admin query error, fallback to mock if unconfigured:", leadsError || visitsError);

      if (!process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY.includes("...")) {
        // Mock data when env is not set yet
        const mockLeads = [
          {
            id: "lead-001",
            name: "คุณกิตติศักดิ์ เจริญกิจ",
            company: "สยามเทคโนโลยีดิจิทัล จำกัด",
            email: "kittisak@siamtech.co.th",
            phone: "0891234567",
            service: "Web Application",
            message: "ต้องการพัฒนาเว็บแอปพลิเคชันสำหรับจัดการระบบสต็อกสินค้าและระบบคำนวณภาษีภายในองค์กร",
            budget: "300,000 - 500,000 บาท",
            status: "NEW",
            created_at: new Date(Date.now() - 3600000).toISOString(),
          },
          {
            id: "lead-002",
            name: "คุณพิมพ์ชนก สุขสวัสดิ์",
            company: "บิสซิเนส โกรท พลัส",
            email: "pimchanok@growthplus.com",
            phone: "0819876543",
            service: "Website Development",
            message: "สนใจพัฒนาเว็บไซต์บริษัทแบบ Responsive สไตล์ทันสมัย พร้อมระบบบริหารจัดการข้อมูล",
            budget: "100,000 - 300,000 บาท",
            status: "CONTACTED",
            created_at: new Date(Date.now() - 86400000).toISOString(),
          },
        ];

        return NextResponse.json({
          ok: true,
          data: {
            stats: {
              totalVisits: calculateTotalVisits(19),
              rawVisits: 19,
              baseVisits: BASE_VISITOR_COUNT,
              totalLeads: mockLeads.length,
              newLeads: mockLeads.filter((l) => l.status === "NEW").length,
              inProgressLeads: mockLeads.filter(
                (l) => l.status === "CONTACTED" || l.status === "DISCUSSING"
              ).length,
            },
            leads: mockLeads,
          },
        });
      }

      return NextResponse.json(
        {
          ok: false,
          error: {
            code: "DATABASE_ERROR",
            message: "ไม่สามารถดึงข้อมูลสำหรับผู้ดูแลระบบได้",
          },
        },
        { status: 500 }
      );
    }

    const leadList = leads || [];
    const totalLeads = leadList.length;
    const newLeads = leadList.filter((l) => l.status === "NEW").length;
    const inProgressLeads = leadList.filter(
      (l) => l.status === "CONTACTED" || l.status === "DISCUSSING" || l.status === "QUOTATION"
    ).length;

    const rawVisits = visitsCount ?? 0;
    const totalVisits = calculateTotalVisits(rawVisits);

    return NextResponse.json({
      ok: true,
      data: {
        stats: {
          totalVisits,
          rawVisits,
          baseVisits: BASE_VISITOR_COUNT,
          totalLeads,
          newLeads,
          inProgressLeads,
        },
        leads: leadList,
      },
    });
  } catch (err) {
    console.error("Unexpected error in GET /api/admin/leads:", err);
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
