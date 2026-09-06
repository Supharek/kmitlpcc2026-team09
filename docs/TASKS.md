# TASKS.md — กระดานงาน + การทดสอบ

> 🤖 ส่วนที่ 1 ให้ agent ร่างด้วย `/design` แล้ว PM ตรวจแก้
> **กติกา:** 1 task = ทำเสร็จได้ใน 20–30 นาที และตรวจได้ว่าเสร็จจริง
> ติ๊ก checkbox ทันทีที่ merge เข้า `dev` แล้ว

สถานะ: `[ ]` ยังไม่เริ่ม · `[~]` กำลังทำ · `[x]` เสร็จ

---

# ส่วนที่ 1 · งาน

## รอบ 0 — ออกแบบและเขียนสเปก (ยังไม่แตะโค้ด)
- [ ] T00 · ทุกคน · อ่าน `README.md` + `AGENTS.md` + `docs/BRIEF.md`
- [ ] T01 · PM+ทีม · **ออกแบบ sitemap เอง** แล้วกรอกตาราง §2.2 ให้ครบ (หน้าไหนตอบ G ข้อไหน)
- [ ] T02 · PM+ทีม · เติม `docs/SPEC.md` §1, §3–6 จนไม่เหลือคำว่า `TODO`
- [ ] T03a · UI/UX · วาด Figma → export PNG ลง `docs/wireframes/` ครบ **ทุกหน้า × mobile + desktop**
- [ ] T03b · UI/UX · กรอกตารางข้อความจริงใน `SPEC.md` ส่วนที่ 2 ให้ครบทุกหน้า (สำคัญกว่ารูป)
- [ ] T04 · QA · รัน `/spec-check` แล้วทีมปิดช่องโหว่ที่ agent ชี้

## รอบ 1 — ให้ agent ร่างแบบ แล้วสร้างโครง
- [ ] T10 · BE · `/design` → ตรวจแก้ `DESIGN.md` ทั้งไฟล์
- [ ] T11 · FE · อ่าน `DESIGN.md` แล้วเซ็นรับข้อตกลงเรื่อง API (หรือขอแก้)
- [ ] T12 · BE · `/bootstrap` → โครงโปรเจกต์เกิดครั้งแรก, `npm run verify` ผ่าน
- [ ] T13 · BE · ต่อ DBeaver ตาม `README.md` แล้วรัน `db/migrations/001_init.sql`
- [ ] T14 · PM · merge เข้า `dev` แล้ว push → แจ้ง Instructor merge เข้า `main` → **เห็น URL จริง**

## รอบ 2 — แยกกันทำพร้อมกัน

> 🤖 **ส่วนนี้ให้ `/design` เขียนใหม่ทั้งหมด** ตาม sitemap ที่ทีมออกแบบเองใน `SPEC.md` §2.1
> รายการข้างล่างเป็นแค่ *โครงตัวอย่าง* — ทีมที่มี 3 หน้า กับทีมที่มี 6 หน้า จะได้ task ไม่เท่ากัน

- [ ] T20 · UI/UX · design token ใน `app/globals.css` ตาม BRIEF ส่วนที่ 2
- [ ] T21 · UI/UX · component พื้นฐานที่ทุกหน้าใช้ร่วมกัน (ตามตารางท้าย `SPEC.md`)
- [ ] T22 · FE · `Header` + `Footer` — เมนูต้องตรงกับ sitemap §2.1
- [ ] T23 · FE · **1 task ต่อ 1 หน้าใน §2.1** *(รอ T21, T22)*
- [ ] T24 · BE · Route Handler ของฟอร์ม + Zod + เขียนลง Supabase (T2) *(รอ T13)*
- [ ] T25 · BE · Route Handler / query ที่อ่านข้อมูลจาก DB มาแสดง (T3)
- [ ] T26 · FE · ต่อฟอร์มเข้ากับ API ให้ครบ 4 สถานะ *(รอ T24)*
- [ ] T27 · QA · unit test ของ Zod schema ใน `tests/`

## รอบ 3 — เก็บงาน
- [ ] T30 · FE · metadata / SEO ครบทุกหน้า (N1)
- [ ] T31 · QA · ไล่ checklist §2 ให้ครบทุกหน้าที่ทีมมี
- [ ] T32 · PM · ตรวจว่า **G1–G4 และ T1–T6 ครบจริง** ตาม `BRIEF.md`
- [ ] T33 · PM · `/next` ตรวจให้ครบ → merge เข้า `dev` → push → แจ้ง Instructor
- [ ] T34 · QA · smoke test บน production URL หลัง deploy

---

# ส่วนที่ 2 · การทดสอบ (QA)

## Test case ของ endpoint ที่รับฟอร์ม (T2)

> ตัวอย่างข้างล่างใช้ `POST /api/contact` — **เปลี่ยนเป็น path จริงของทีม** ตาม `DESIGN.md`

| # | Input | คาดหวัง | ผล |
|---|---|---|---|
| TC01 | ข้อมูลถูกต้องครบทุกฟิลด์ | 201 และมีแถวใหม่ใน Supabase | ⬜ |
| TC02 | `email` = `abcd` | 400 และ `fields.email` เป็นข้อความไทย | ⬜ |
| TC03 | ไม่ส่ง `name` | 400 | ⬜ |
| TC04 | `message` ยาว 5 ตัวอักษร | 400 | ⬜ |
| TC05 | ไม่ส่ง `phone` (optional) | 201 | ⬜ |
| TC06 | `message` ยาว 3000 ตัวอักษร | 400 | ⬜ |
| TC07 | ส่ง `<script>alert(1)</script>` ทุกฟิลด์ | ไม่ execute ตอนแสดงผล | ⬜ |
| TC08 | ส่ง body ที่ไม่ใช่ JSON | 400 **ไม่ใช่** 500 | ⬜ |

```bash
curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" \
  -d '{"name":"สมชาย ใจดี","email":"somchai@example.com","message":"สนใจบริการครับ ขอรายละเอียด"}'
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
