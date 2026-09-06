---
description: สร้างโครงโปรเจกต์ Next.js ครั้งแรกจาก SPEC.md (รันครั้งเดียวต่อ repo)
---

repo นี้ยังไม่มีโค้ด งานของคุณคือสร้างโครงตั้งต้นให้ **น้อยที่สุดเท่าที่จำเป็น**

## ก่อนเริ่ม
อ่าน `AGENTS.md`, `docs/BRIEF.md`, `docs/SPEC.md`, `docs/DESIGN.md`
ถ้า `docs/SPEC.md` ยังมี `TODO` เหลือ หรือยังไม่มี `docs/DESIGN.md` → **หยุด** แล้วบอกผู้ใช้

## สิ่งที่ต้องสร้าง

1. `package.json` — Next.js 15 (App Router) + React 19 + TypeScript + Tailwind v4 + Zod + `@supabase/supabase-js` + Vitest
   devDependency เพิ่ม `pg` (ใช้เฉพาะ script migrate ข้อ 8)
   scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `test`
   `verify` = `typecheck && lint && test && build`
   `migrate` = `node --env-file=.env.local scripts/migrate.mjs`
2. `tsconfig.json` (strict, alias `@/*`) · `next.config.ts` (**ห้ามใส่ `output: "export"`**) · `postcss.config.mjs`
3. `app/layout.tsx` + `app/globals.css` — ใส่ design token จาก `docs/BRIEF.md` ส่วนที่ 2 เป็น CSS variable
   อย่าลืม `line-height` ภาษาไทยขั้นต่ำ 1.7
4. `app/page.tsx` — หน้าแรกโครงเปล่า พอให้ `npm run dev` ขึ้นได้
5. `app/api/health/route.ts` — ตอบตามรูปแบบใน `docs/DESIGN.md` ส่วนที่ 2
6. `lib/supabase.ts` — server client ด้วย `SUPABASE_SERVICE_ROLE_KEY`
   บรรทัดแรกต้องเป็น `import "server-only";`
7. โฟลเดอร์เปล่าพร้อม `.gitkeep`: `components/ui/` · `components/sections/` · `db/migrations/` · `tests/` · `public/brand/`
8. `scripts/migrate.mjs` — CLI รันไฟล์ SQL ใน `db/migrations/` เข้าฐานข้อมูล
   - อ่าน `process.env.POSTGRES_URL` (มาจาก `--env-file=.env.local`) ถ้าไม่มีให้แจ้งเป็นภาษาไทยแล้วออกด้วย exit code 1
   - ใช้ `pg` (`new Client`, ไม่ใช่ `Pool`) เชื่อมด้วย `ssl: { rejectUnauthorized: false }`
   - สร้างตาราง `_migrations (name text primary key, applied_at timestamptz default now())` ถ้ายังไม่มี
   - อ่านไฟล์ `db/migrations/*.sql` **เรียงตามชื่อ** แล้วรันเฉพาะไฟล์ที่ยังไม่เคยรัน
   - แต่ละไฟล์รันใน transaction เดียว ถ้าพังให้ rollback แล้วบอกชื่อไฟล์กับ error
   - พิมพ์ผลเป็นภาษาไทย เช่น `รันแล้ว: 001_init.sql` / `ข้าม (รันไปแล้ว): 001_init.sql`
   - ปิด connection ทุกกรณี

## ห้ามทำในขั้นนี้
- **ห้ามสร้างหน้าอื่นนอกจาก `/`** — หน้าที่เหลือตาม `SPEC.md` §2.1 เป็นงานของ Frontend รอบถัดไป
- **ห้ามสร้าง Route Handler อื่นนอกจาก `/api/health`** — เป็นงานของ Backend
- ห้ามเพิ่ม dependency นอกรายการข้างบนโดยไม่ถาม
- ห้ามใส่ค่า secret ลงในไฟล์ใด ๆ

## เสร็จแล้ว
1. `npm install` แล้ว `npm run verify` ให้ผ่าน
2. ติ๊ก T12 ใน `docs/TASKS.md`
3. เสนอ commit: `chore: bootstrap next.js project from SPEC`

**ก่อนลงมือ สรุปรายการไฟล์ที่จะสร้างมาให้ดูก่อน แล้วรอยืนยัน**
