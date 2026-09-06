# TASKS.md — กระดานงาน + การทดสอบ

> 🤖 ส่วนที่ 1 ร่างตามโครงสร้างจริงของ AppInTouch จาก `SPEC.md`
> **กติกา:** 1 task = ทำเสร็จได้ใน 20–30 นาที และตรวจได้ว่าเสร็จจริง
> ติ๊ก checkbox ทันทีที่ merge เข้า `dev` แล้ว

สถานะ: `[ ]` ยังไม่เริ่ม · `[~]` กำลังทำ · `[x]` เสร็จ

---

# ส่วนที่ 1 · งาน

## รอบ 0 — ออกแบบและเขียนสเปก (ยังไม่แตะโค้ด)
- [x] T00 · ทุกคน · อ่าน `README.md` + `AGENTS.md` + `docs/BRIEF.md`
- [x] T01 · PM+ทีม · **ออกแบบ sitemap เอง** แล้วกรอกตาราง §2.2 ให้ครบ (5 หน้า: `/`, `/about`, `/services`, `/contact`, `/admin`)
- [x] T02 · PM+ทีม · เติม `docs/SPEC.md` §1, §3–6 จนไม่เหลือคำว่า `TODO`
- [x] T03a · UI/UX · ออกแบบ Wireframe/ASCII layout ครบทุกหน้า × mobile + desktop
- [x] T03b · UI/UX · กรอกตารางข้อความจริงใน `SPEC.md` ส่วนที่ 2 ให้ครบทุกหน้า
- [x] T04 · QA · ตรวจสอบข้อกำหนดและปิดช่องโหว่ตาม `BRIEF.md`

## รอบ 1 — ให้ agent ร่างแบบ แล้วสร้างโครง
- [x] T10 · BE · `/design` → ออกแบบ `DESIGN.md` และสร้าง `db/migrations/001_init.sql`
- [x] T11 · FE · อ่าน `DESIGN.md` แล้วเห็นชอบข้อตกลง API
- [x] T12 · BE · `/bootstrap` → โครงโปรเจกต์เกิดครั้งแรก, `npm run verify` ผ่าน
- [ ] T13 · BE · `npm run migrate` → ตารางถูกสร้างในฐานข้อมูล (ต้องมี POSTGRES_URL ใน .env.local)
- [ ] T14 · PM · merge เข้า `dev` แล้ว push → แจ้ง Instructor merge เข้า `main`

## รอบ 2 — แยกกันทำตาม Sitemap จริงของ AppInTouch

- [x] T20 · UI/UX · Design tokens ใน `app/globals.css` (สี CI แดง `--brand-primary: #C62828`, ฟอนต์ Prompt, line-height >= 1.7)
- [x] T21 · UI/UX · Component พื้นฐานที่ทุกหน้าใช้ร่วมกัน (`Button`, `Card`, `Input`, `Textarea`, `Select`, `Checkbox`, `LoadingState`, `ErrorMessage`, `EmptyState`)
- [x] T22 · FE · `Header` + `Footer` — เมนูตรงกับ sitemap (`หน้าแรก`, `เกี่ยวกับเรา`, `บริการ`, `ติดต่อเรา`, ปุ่ม `เริ่มต้นโปรเจกต์`)
- [x] T23a · FE · หน้าแรก `/` (Hero, About Preview, Services Preview, Technology & Expertise, Contact CTA) *(รอ T21, T22)*
- [x] T23b · FE · หน้าเกี่ยวกับเรา `/about` (Hero, Company Overview, Vision & Mission, Strengths, Tech Stack, CTA) *(รอ T21, T22)*
- [x] T23c · FE · หน้าบริการ `/services` (Hero, 5 Service cards, 5 Development Process steps, CTA เชื่อม `/contact?service=...`) *(รอ T21, T22)*
- [x] T23d · FE · หน้าติดต่อเรา `/contact` (Contact Info, ProjectBriefForm รองรับ 4 สถานะ และ query param) *(รอ T21, T22)*
- [x] T23e · FE · หน้าผู้ดูแลระบบ `/admin` (Admin Login, Statistics Cards, Lead Table, Lead Detail & Status Change) *(รอ T21)*
- [x] T24 · BE · Route Handler `POST /api/leads` + Zod validation + บันทึกลง Supabase `leads` (T2)
- [x] T25 · BE · Route Handler `POST /api/visits` (G7) + `GET /api/admin/leads` (T3, G6, G7) + `PATCH /api/admin/leads/[id]` (G6)
- [x] T26 · FE · เชื่อมต่อฟอร์มหน้า `/contact` เข้ากับ `POST /api/leads` และเชื่อมต่อ `/admin` เข้ากับ API หลังบ้าน *(รอ T24, T25)*
- [x] T27 · QA · Unit test ของ Zod schema ใน `tests/lead-validation.test.ts` (TC01–TC08)

## รอบ 3 — เก็บงาน
- [x] T30 · FE · Metadata / SEO ครบทั้ง 5 หน้า (N1)
- [x] T31 · QA · ไล่ checklist §2 ให้ครบทุกหน้า (Responsive 375px/1440px, A11y, Contrast)
- [x] T32 · PM · ตรวจว่า **G1–G4, G6, G7 และ T1–T6 ครบจริง** ตาม `BRIEF.md`
- [ ] T33 · PM · `/next` ตรวจให้ครบ → merge เข้า `dev` → push → แจ้ง Instructor
- [ ] T34 · QA · Smoke test บน production URL หลัง deploy

---

# ส่วนที่ 2 · การทดสอบ (QA)

## Test case ของ endpoint ที่รับฟอร์ม (T2: `POST /api/leads`)

| # | Input | คาดหวัง | ผล |
|---|---|---|---|
| TC01 | ข้อมูลถูกต้องครบทุกฟิลด์ | 201 และมีแถวใหม่ในตาราง leads | ⬜ |
| TC02 | `email` = `abcd` | 400 และ `fields.email` เป็นข้อความไทย | ⬜ |
| TC03 | ไม่ส่ง `name` | 400 และแจ้ง `กรุณากรอกชื่อ-นามสกุล` | ⬜ |
| TC04 | `message` ยาว 5 ตัวอักษร | 400 และแจ้ง `กรุณาระบุรายละเอียดโครงการอย่างน้อย 10 ตัวอักษร` | ⬜ |
| TC05 | ไม่ส่ง `company` / `budget` (optional) | 201 สำเร็จ | ⬜ |
| TC06 | `message` ยาว 3000 ตัวอักษร | 400 | ⬜ |
| TC07 | ส่ง `<script>alert(1)</script>` ทุกฟิลด์ | ไม่ execute และ sanitize ข้อมูล | ⬜ |
| TC08 | ส่ง body ที่ไม่ใช่ JSON | 400 ไม่ใช่ 500 | ⬜ |

```bash
curl -X POST http://localhost:3000/api/leads -H "Content-Type: application/json" \
  -d '{"name":"สมชาย ใจดี","company":"สยามเทค","email":"somchai@example.com","phone":"0812345678","service":"Web Application","message":"ต้องการพัฒนาเว็บแอปสำหรับจัดการระบบคลังสินค้า","consent":true}'
```

## Checklist หน้าเว็บ (ทำทุกหน้า)

- ⬜ แสดงผลถูกต้องที่ 375px และ 1440px ไม่มี scroll แนวนอน
- ⬜ ทุกลิงก์บนเมนูกดแล้วไปถูกหน้า ไม่มี 404
- ⬜ ทุกรูปมี `alt` ที่สื่อความหมาย · ทุก input มี `<label>`
- ⬜ กด Tab ไล่ได้ครบและเห็น focus ring
- ⬜ มี `<title>` + meta description ไม่ซ้ำกันแต่ละหน้า
- ⬜ contrast ตัวอักษรกับพื้นหลัง ≥ 4.5:1
- ⬜ DevTools Console ไม่มี error สีแดง
- ⬜ ตัดเน็ตแล้วส่งฟอร์ม → ขึ้น error ที่ผู้ใช้อ่านรู้เรื่อง ไม่ใช่หน้าขาว

## Smoke test หลัง deploy (บน production URL)

- ⬜ `GET /api/health` ตอบ 200 · ทุกหน้าเปิดได้
- ⬜ ส่งฟอร์มจริง 1 ครั้ง แล้วเห็นข้อมูลใน Supabase
- ⬜ ทดสอบบนมือถือจริง 1 เครื่อง

## Bug ที่พบ

| # | หน้า/endpoint | อาการ | ทำซ้ำยังไง | ความรุนแรง | สถานะ |
|---|---|---|---|---|---|
| | | | | | |
