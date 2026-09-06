# kmitlpcc2026-team09

---

## แผนที่ repo — มีแค่ 4 เอกสาร กับ 4 คำสั่ง

### 4 เอกสารที่ต้องรู้จัก

| ไฟล์ | คืออะไร | ใครเขียน |
|---|---|---|
| `docs/BRIEF.md` | โจทย์ + สีแบรนด์ + Vercel/Supabase ทำงานยังไง | Instructor สร้างให้ แก้ได้บางส่วน |
| `docs/SPEC.md` | **สเปก + wireframe ของทีม ← เริ่มที่นี่** | ✍️ ทีมเขียนเอง |
| `docs/DESIGN.md` | ฐานข้อมูล + ข้อตกลงเรื่อง API | 🤖 agent ร่าง → ทีมตรวจ |
| `docs/TASKS.md` | กระดานงาน + การทดสอบ | 🤖 agent ร่าง → ทีมตรวจ |

`docs/NOTES.md` = ที่จดคำถามค้าง การตัดสินใจ และจุดที่ agent ทำผิด

### 4 คำสั่ง

| คำสั่ง | ทำอะไร | ใช้ตอนไหน | ถ้าพิมพ์ `/` แล้วไม่ขึ้น ให้พิมพ์แทนว่า |
|---|---|---|---|
| `/spec-check` | ตรวจว่าสเปกครบพอเขียนโค้ดหรือยัง | หลังเขียน `SPEC.md` | `อ่าน .claude/commands/spec-check.md แล้วทำตามนั้น` |
| `/design` | SPEC → `DESIGN.md` + `TASKS.md` | สเปกครบแล้ว | `อ่าน .claude/commands/design.md แล้วทำตามนั้น` |
| `/bootstrap` | สร้างโครงโปรเจกต์ครั้งแรก | ครั้งเดียวต่อ repo | `อ่าน .claude/commands/bootstrap.md แล้วทำตามนั้น` |
| `/next <role>` | หยิบงานถัดไปมาทำ + ตรวจก่อน merge | ตลอดทั้งวัน | `อ่าน .claude/commands/next.md แล้วทำตามนั้น บทบาทคือ backend` |

> เปิดดู `.claude/commands/` ได้เลย ข้างในเป็นไฟล์ `.md` ที่เขียนบอก AI
> เป็นข้อ ๆ ว่าให้ทำอะไรบ้าง — เขียนเองเพิ่มได้ และควรเปิดอ่านก่อนใช้ครั้งแรกทุกคำสั่ง
>
> ตอนนี้มีแค่ Claude Code ที่พิมพ์ `/` แล้วขึ้นให้เลือก ตัวอื่นให้ใช้ประโยคในคอลัมน์ขวาแทน
> ได้ผลเหมือนกัน เพราะมันอ่านไฟล์เดียวกัน

### ไฟล์ที่เหลือ ตั้งไว้ให้แล้ว ไม่ต้องแก้

| ไฟล์ | คืออะไร |
|---|---|
| `AGENTS.md` | กติกาที่ AI ต้องทำตาม |
| `CLAUDE.md` / `GEMINI.md` | บอก AI ให้ไปอ่าน `AGENTS.md` |
| `.claude/` | ที่เก็บ 4 คำสั่งข้างบน |
| `vercel.json` | ตั้งให้ deploy เฉพาะ branch `main` |
| `.env.example` | รายชื่อค่าลับที่ต้องมี (ไม่มีค่าจริง) |
| `.gitignore` | รายชื่อไฟล์ที่ไม่เอาขึ้น git |

---

## Tech stack

**Next.js 15 + TypeScript + Tailwind v4** · หน้าเว็บและ API อยู่ใน repo เดียว Vercel project เดียว
Backend = Route Handlers ที่ `app/api/**` · DB = **Supabase** เรียกผ่าน `supabase-js` ฝั่ง server เท่านั้น

เหตุผลทั้งหมด → `docs/BRIEF.md` ส่วนที่ 3

---

## ลำดับการทำงาน — ห้ามสลับ

```
1. เติม docs/SPEC.md จนไม่เหลือ TODO      ← ยังไม่แตะโค้ด
2. /spec-check   → agent ชี้ว่าขาดอะไร → กลับไปเติม
3. /design       → ได้ DESIGN.md + TASKS.md → ทีมตรวจแก้ทุกบรรทัด
4. /bootstrap    → โครงโค้ดเกิดขึ้นครั้งแรก
5. /next backend | frontend | uiux | qa   → แยกกันทำพร้อมกัน
```

## Git flow — ไม่ใช้ PR ใช้ merge ธรรมดา

```
feature/<role>/<slug> ──merge──▶ dev ──Instructor merge──▶ main ──▶ 🚀 Production
        (ทีมทำเอง)                       (ห้ามแตะ)
```

**รอบการทำงานหนึ่งรอบ**

```bash
git checkout dev && git pull            # เริ่มจากงานล่าสุดของทีมเสมอ
git checkout -b feature/backend/contact-api
# ...ทำงาน...
git add -A && git commit -m "feat(api): ..."

git checkout dev && git pull            # ดึงงานเพื่อนที่เข้ามาระหว่างนี้
git merge feature/backend/contact-api
git push
```

**`main` ห้ามแตะ** เป็นของ Instructor คนเดียว · Vercel build เฉพาะ `main`

### เจอ conflict ทำยังไง

เรื่องปกติ ไม่ใช่ความผิดใคร แก้ไฟล์ให้เรียบร้อย แล้ว `git add` ไฟล์นั้น แล้ว `git commit` จบ

กันไว้ก่อนได้ 3 ข้อ:

1. **`git pull` ทุกครั้งก่อน merge** — conflict ครึ่งหนึ่งมาจากการไม่ pull
2. **`docs/TASKS.md` ให้ PM ติ๊ก checkbox คนเดียว** อีก 4 คนบอก PM ว่าเสร็จแล้ว
   ถ้าทุกคนติ๊กเอง ไฟล์นี้จะชนกันทุกรอบ
3. **แก้เฉพาะไฟล์ของบทบาทตัวเอง** (ตาราง §4 ใน `AGENTS.md`) — ตารางนั้นมีไว้เพื่อข้อนี้โดยเฉพาะ

## Environment variables

> ❌ **อย่ารัน `npx vercel link` หรือ `npx vercel env pull`** — ใช้ไม่ได้
> Vercel project อยู่ใต้บัญชีของ Instructor พวกคุณไม่มีสิทธิ์เข้าถึง

**Instructor จะส่งค่า 3 ตัวนี้ให้ทีมของคุณ** เอามาสร้างไฟล์เอง

1. สร้างไฟล์ชื่อ **`.env.local`** ไว้ที่โฟลเดอร์บนสุดของ repo (ระดับเดียวกับ `README.md`)
2. วางค่าที่ได้รับลงไป หน้าตาแบบนี้

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
```

ชื่อตัวแปรทั้งหมดดูได้จาก `.env.example` (ไฟล์นั้นมีแต่ชื่อ ไม่มีค่าจริง)

### กฎ 3 ข้อ ห้ามละเมิด

1. **`.env.local` ห้าม commit เด็ดขาด** — `.gitignore` กันไว้ให้แล้ว **ห้ามไปแก้**
2. **`SUPABASE_SERVICE_ROLE_KEY` ห้ามโพสต์ที่ไหนทั้งสิ้น** ห้ามใส่ในโค้ด ห้ามส่งในกลุ่ม
   key ตัวนี้ข้ามระบบสิทธิ์ได้หมด ลบข้อมูลทั้งฐานได้
3. **ห้ามใช้ใน Client Component** — ใช้ได้เฉพาะใน `app/api/**` ฝั่ง server เท่านั้น

> ก่อน commit ทุกครั้งให้ `git status` ดูว่ามี `.env.local` โผล่มาไหม
> ถ้าโผล่ = `.gitignore` โดนแก้ ให้แจ้ง Instructor ทันที

## ต่อฐานข้อมูลด้วย DBeaver

Backend ใช้รัน migration · QA ใช้ส่องข้อมูลที่ฟอร์มส่งเข้ามา
**Instructor จะส่ง host / user / password ให้แยกต่างหาก**

| ช่อง | ค่า |
|---|---|
| Host | `aws-0-ap-southeast-1.pooler.supabase.com` |
| Port | **`5432`** |
| Database | `postgres` |
| Username | `postgres.<project-ref>` (Instructor ส่งให้) |
| Password | Instructor ส่งให้ |
| SSL | require |

**ห้ามใช้พอร์ต `6543` กับ DBeaver** — พอร์ตนั้นเป็น transaction pooler ไว้ให้แอปใช้ ต่อ DBeaver แล้วจะเออเรอร์แปลก ๆ

**ห้ามใช้ host `db.xxxx.supabase.co`** — เป็น IPv6 อย่างเดียว เน็ตส่วนใหญ่ต่อไม่ติด

**และห้ามเอา connection string นี้ไปใช้ในโค้ด** — โค้ดต้องเรียกผ่าน `@supabase/supabase-js` เท่านั้น
เหตุผลอยู่ใน `docs/BRIEF.md` ส่วนที่ 3
