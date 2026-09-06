# AGENTS.md — กติกาการทำงานของ AI Agent

> กติกาทั้งหมดอยู่ในไฟล์นี้ไฟล์เดียว `CLAUDE.md` กับ `GEMINI.md` แค่ชี้มาที่นี่
> แก้กติกา ให้แก้ที่นี่ที่เดียว

---

## 0. repo นี้ตั้งใจให้ว่าง ยังไม่มีโค้ด

โครงสร้างโค้ดทั้งหมดต้องเกิดจากการอ่าน `docs/SPEC.md` แล้วสร้างขึ้นมา
ไม่ใช่ copy จาก template สำเร็จรูป **ลำดับนี้ห้ามสลับ:**

```
เขียน SPEC.md ให้ครบ  →  /design  →  /bootstrap  →  /next <role>
   (คนทำ)            (ER + API)   (โค้ดเกิดตรงนี้)   (ลงเนื้องาน)
```

ถ้าผู้ใช้สั่งให้เขียนโค้ดทั้งที่ `docs/SPEC.md` ยังมีคำว่า `TODO` เหลืออยู่ → **ทักท้วงก่อน** อย่าเพิ่งลงมือ
ตาราง §4 อธิบายโครงสร้าง **ปลายทาง** ที่จะเกิดหลัง `/bootstrap` — ก่อนหน้านั้นไฟล์เหล่านั้นยังไม่มีจริง

---

## 1. โปรเจกต์นี้คืออะไร

เว็บไซต์บริษัทของทีม `team09` — วิชา Software Development with AI Agent

| หัวข้อ | ค่า |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 |
| Backend | Next.js Route Handlers ที่ `app/api/**` — ไม่มี server แยก |
| Database | Supabase Postgres ผ่าน `@supabase/supabase-js` **ฝั่ง server เท่านั้น** |
| Validation / Test | Zod / Vitest |
| Deploy | Vercel — build เฉพาะ branch `main` |

**อ่านก่อนเขียนโค้ดเสมอ:** `docs/BRIEF.md` (โจทย์+แบรนด์+ข้อจำกัด, 🔒 ห้ามแก้) →
`docs/SPEC.md` (สเปกของทีม) → `docs/DESIGN.md` (ER + API) → `docs/TASKS.md` (งาน)

---

## 2. ข้อห้าม

1. **ห้าม commit ความลับ** — key/password/connection string ต้องอยู่ใน `.env.local` เท่านั้น ประกาศแค่ชื่อไว้ใน `.env.example`
2. **`SUPABASE_SERVICE_ROLE_KEY` ห้ามถูกใช้ในไฟล์ที่มี `"use client"`** และ env ที่เป็นความลับห้ามขึ้นต้นด้วย `NEXT_PUBLIC_`
3. **ห้าม push เข้า `main` เด็ดขาด** — `main` คือ production ที่ Instructor เป็นคน merge เท่านั้น
   ทำงานบน `feature/<role>/<slug>` แล้ว merge เข้า `dev` เอง
   **agent ห้ามรัน `git merge`, `git push`, `git checkout` เอง** ให้บอกคำสั่งแล้วปล่อยให้คนทำ
4. **ห้ามแก้ไฟล์นอกขอบเขตบทบาทตัวเอง** (§4) — ถ้าจำเป็นให้บอกผู้ใช้ก่อน
5. **ห้ามเพิ่ม dependency โดยไม่ถาม** ทุกครั้งต้องขออนุญาตพร้อมเหตุผล
6. **ห้ามแก้ `docs/BRIEF.md`** — เป็นอินพุตจาก Instructor
7. **ห้าม `output: "export"` ใน `next.config.ts`** — จะทำให้ `app/api/**` ใช้ไม่ได้
8. **ห้ามใช้อะไรที่ต้องมี connection ค้าง ในโค้ดที่ deploy** — `pg.Pool`, `mysql2` pool, WebSocket server, cron ใน process
   Vercel เป็น serverless ทุก request อาจเกิด instance ใหม่ (เหตุผลเต็มอยู่ใน `docs/BRIEF.md` ส่วนที่ 3)

   > **ข้อยกเว้นเดียว:** `scripts/migrate.mjs` ใช้ `pg` ได้
   > เพราะเป็น CLI ที่รันในเครื่องแล้วจบ ไม่ได้ deploy ขึ้น Vercel
   > **ห้ามเอา `pg` ไปใช้ใน `app/**` หรือ `lib/**` เด็ดขาด** — ตรงนั้นใช้ `@supabase/supabase-js` เท่านั้น

---

## 3. Workflow ที่ต้องเดินตามทุกครั้ง

```
อ่าน SPEC.md + TASKS.md
      ↓
เสนอแผน (จะแก้ไฟล์ไหนบ้าง) → รอผู้ใช้อนุมัติ
      ↓
เขียนโค้ด — ทีละ task ไม่เกิน 3–5 ไฟล์ต่อรอบ
      ↓
รัน `npm run verify` ให้ผ่าน
      ↓
ติ๊ก checkbox ใน docs/TASKS.md  →  เสนอข้อความ commit
```

**อย่าทำหลาย task พร้อมกัน** งานเล็กที่ตรวจได้ ดีกว่างานใหญ่ที่ review ไม่ไหว

**เมื่อสเปกไม่ชัด: อย่าเดา** — ถามผู้ใช้ หรือจดลง `docs/NOTES.md` ส่วนที่ 1 แล้วทำส่วนที่ชัดเจนไปก่อน

### กติกาการใช้ wireframe

ก่อนสร้างหรือแก้หน้าเว็บใด ๆ **ต้องเปิดดูรูป wireframe ของหน้านั้นใน `docs/wireframes/`**
(ชื่อไฟล์อยู่ในตารางของหน้านั้นใน `docs/SPEC.md` ส่วนที่ 2 — ใช้ Read เปิดไฟล์ `.png` ได้ตรง ๆ)

| แหล่ง | ใช้เอาอะไร |
|---|---|
| รูป `.png` | สัดส่วน, ลำดับ section, ระยะห่าง, อะไรเด่นกว่ากัน |
| ตารางใน `SPEC.md` | **ข้อความจริงทุกตัวอักษร**, ชื่อ component, พฤติกรรมแต่ละ breakpoint |

- ❌ **ห้ามอ่านข้อความจากรูปมาใช้** — ตัวอักษรไทยเล็ก ๆ ในรูปอ่านผิดง่าย ให้ใช้จากตารางเสมอ
- ❌ ห้ามแต่งข้อความเพิ่มเอง ถ้าตารางไม่มี ให้ถามหรือจดลง `NOTES.md`
- ถ้ารูปกับตารางขัดแย้งกัน → **ตารางถูก** แล้วแจ้งผู้ใช้ว่าเจอความขัดแย้งตรงไหน
- ถ้าไม่มีรูปของหน้านั้น → ทำตามตารางไปก่อน แล้วบอกผู้ใช้ว่ายังขาดรูป

---

## 4. ใครดูแลไฟล์ไหน

| บทบาท | ดูแลไฟล์พวกนี้ |
|---|---|
| **PM** | `docs/SPEC.md` §1–6, `docs/TASKS.md` ส่วนที่ 1, `docs/NOTES.md`, `README.md` |
| **UI/UX** | `docs/SPEC.md` ส่วน Wireframe, `docs/wireframes/**`, `app/globals.css`, `components/ui/**`, `public/brand/**` |
| **Frontend** | `app/(site)/**`, `components/sections/**` |
| **Backend** | `app/api/**`, `lib/**`, `db/migrations/**`, `docs/DESIGN.md` |
| **QA** | `tests/**`, `docs/TASKS.md` ส่วนที่ 2 |
| ต้องคุยทั้งทีมก่อนแก้ | `package.json`, `next.config.ts`, `vercel.json`, `AGENTS.md`, `.env.example` |

---

## 5. Convention

**Git** — branch `feature/<role>/<slug>` · commit แบบ Conventional Commits ภาษาอังกฤษ
`feat|fix|docs|refactor|test|chore(scope): สรุปสั้น` เช่น `feat(api): add POST /api/contact with zod validation`

รอบการทำงานหนึ่งรอบ:

```bash
git checkout dev && git pull            # เริ่มจากงานล่าสุดของทีมเสมอ
git checkout -b feature/backend/contact-api
# ...ทำงาน แล้ว commit...
git checkout dev && git pull            # ดึงงานเพื่อนที่เข้ามาระหว่างนี้
git merge feature/backend/contact-api   # conflict ตรงนี้ = เรื่องปกติ แก้แล้ว commit
git push
```

**`docs/TASKS.md` ให้ PM เป็นคนติ๊ก checkbox คนเดียว** อีก 4 คนบอก PM ว่าเสร็จแล้ว
ถ้าทุกคนติ๊กเอง ไฟล์นี้จะ conflict ทุกครั้งที่ merge

**โค้ด**
- TypeScript `strict` — เลี่ยง `any`, ห้าม `@ts-ignore` โดยไม่มีคอมเมนต์อธิบาย
- Server Component เป็นค่าเริ่มต้น ใส่ `"use client"` เฉพาะที่ต้องใช้ state/event จริง ๆ
- ทุก Route Handler ต้อง validate ด้วย Zod และตอบตามรูปแบบใน `docs/DESIGN.md`
- ไฟล์ component `PascalCase.tsx` · ไฟล์ util `kebab-case.ts`
- ข้อความบนหน้าเว็บเป็นไทย · ชื่อตัวแปรและคอมเมนต์ในโค้ดเป็นอังกฤษ

**Database** — เปลี่ยน schema = ไฟล์ใหม่ใน `db/migrations/` ชื่อ `NNN_ชื่อสั้น.sql`
**ห้ามแก้ไฟล์เดิมที่รันไปแล้ว** · ทุกตารางเปิด RLS และมี `id`, `created_at`

---

## 6. คำสั่ง และงานแบบไหนถึงเรียกว่าเสร็จ

```bash
npm run dev       # dev server
npm run verify    # typecheck + lint + test + build ← ต้องผ่านก่อน commit
```

งานเสร็จเมื่อครบทุกข้อ:

- [ ] `npm run verify` ผ่าน
- [ ] ตรงกับ `docs/SPEC.md`
- [ ] แตะ API แล้วอัปเดต `docs/DESIGN.md` · แตะ schema แล้วมี migration ใหม่
- [ ] แจ้ง PM ให้ติ๊ก checkbox ใน `docs/TASKS.md`
- [ ] ตรวจ `git diff` แล้วไม่มีค่าลับหลุด
- [ ] ถ้า agent ทำอะไรพลาดในรอบนี้ → บันทึกลง `docs/NOTES.md` ส่วนที่ 3 แล้ว
