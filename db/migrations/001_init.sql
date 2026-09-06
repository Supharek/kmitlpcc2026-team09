-- 001_init.sql
-- สร้างตาราง leads และ site_visits สำหรับ AppInTouch

-- 1. ตาราง leads สำหรับเก็บข้อมูลผู้สนใจจากแบบฟอร์ม Contact
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT NOT NULL,
    message TEXT NOT NULL,
    budget TEXT,
    status TEXT NOT NULL DEFAULT 'NEW' CHECK (status IN ('NEW', 'CONTACTED', 'DISCUSSING', 'QUOTATION', 'CLOSED')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index สำหรับค้นหาและจัดเรียงข้อมูล leads
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);

-- 2. ตาราง site_visits สำหรับนับสถิติการเข้าใช้งานเว็บไซต์
CREATE TABLE IF NOT EXISTS site_visits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index สำหรับ site_visits
CREATE INDEX IF NOT EXISTS idx_site_visits_created_at ON site_visits(created_at DESC);

-- 3. เปิดใช้งาน Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_visits ENABLE ROW LEVEL SECURITY;

-- ปิดการเข้าถึงตรงจาก anon key (สาธารณะ) โดยเข้าถึงผ่าน Next.js Route Handlers
-- ด้วย SUPABASE_SERVICE_ROLE_KEY จากฝั่ง Server เท่านั้น
