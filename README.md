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

**Instructor จะส่งค่า 4 ตัวนี้ให้ทีมของคุณ** เอามาสร้างไฟล์เอง

1. สร้างไฟล์ชื่อ **`.env.local`** ไว้ที่โฟลเดอร์บนสุดของ repo (ระดับเดียวกับ `README.md`)
2. วางค่าที่ได้รับลงไป หน้าตาแบบนี้

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...
POSTGRES_URL=postgres://postgres.xxxx:...@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?sslmode=require
```

ชื่อตัวแปรทั้งหมดดูได้จาก `.env.example` (ไฟล์นั้นมีแต่ชื่อ ไม่มีค่าจริง)

### กฎ 3 ข้อ ห้ามละเมิด

1. **`.env.local` ห้าม commit เด็ดขาด** — `.gitignore` กันไว้ให้แล้ว **ห้ามไปแก้**
2. **`SUPABASE_SERVICE_ROLE_KEY` ห้ามโพสต์ที่ไหนทั้งสิ้น** ห้ามใส่ในโค้ด ห้ามส่งในกลุ่ม
   key ตัวนี้ข้ามระบบสิทธิ์ได้หมด ลบข้อมูลทั้งฐานได้
3. **ห้ามใช้ใน Client Component** — ใช้ได้เฉพาะใน `app/api/**` ฝั่ง server เท่านั้น

> ก่อน commit ทุกครั้งให้ `git status` ดูว่ามี `.env.local` โผล่มาไหม
> ถ้าโผล่ = `.gitignore` โดนแก้ ให้แจ้ง Instructor ทันที

## สร้างตารางในฐานข้อมูล

**ไม่ต้องติดตั้งโปรแกรมอะไรเพิ่ม ไม่ต้องเข้าหน้าเว็บ Supabase**

หลังรัน `/design` จะได้ไฟล์ SQL ใน `db/migrations/` แล้วสั่ง:

```bash
npm run migrate
```

script จะรันไฟล์ SQL ทุกไฟล์เรียงตามชื่อ และ **จำว่าไฟล์ไหนรันไปแล้ว** สั่งซ้ำได้ไม่พัง

| ผลที่เห็น | แปลว่า |
|---|---|
| `รันแล้ว: 001_init.sql` | สร้างตารางสำเร็จ |
| `ข้าม (รันไปแล้ว): 001_init.sql` | เคยรันแล้ว ไม่ทำซ้ำ |
| `ไม่พบ POSTGRES_URL` | ยังไม่ได้ใส่ค่าใน `.env.local` |

**แก้ schema ทีหลัง = เพิ่มไฟล์ใหม่** `002_xxx.sql`, `003_xxx.sql` แล้วรัน `npm run migrate` อีกครั้ง
**ห้ามแก้ไฟล์เดิมที่รันไปแล้ว** เพราะ script จะข้ามให้

### QA ตรวจข้อมูลยังไง

**ดูผ่านเว็บของตัวเอง** — เกณฑ์ T3 บังคับให้มีจุดที่อ่านข้อมูลจาก DB มาแสดงอยู่แล้ว
ส่งฟอร์ม → เปิดหน้านั้น → เห็นข้อมูลใหม่ = ผ่าน

การเทสผ่านหน้าเว็บจริงถูกต้องกว่าการไปส่องตารางตรง ๆ เพราะได้ทดสอบทั้งเส้นทาง

### ถ้าอยากเปิดดูตารางตรง ๆ (ไม่บังคับ)

ใช้ DBeaver ต่อด้วยค่าจาก `POSTGRES_URL` ได้ แต่ **ต้องเปลี่ยนพอร์ตเป็น `5432`**
พอร์ต `6543` เป็น transaction pooler สำหรับแอป ต่อ DBeaver แล้วจะเออเรอร์แปลก ๆ

**ห้ามเอา `POSTGRES_URL` ไปใช้ในโค้ดที่ deploy** — โค้ดในแอปต้องเรียกผ่าน `@supabase/supabase-js` เท่านั้น
ใช้ได้เฉพาะใน `scripts/migrate.mjs` เหตุผลอยู่ใน `docs/BRIEF.md` ส่วนที่ 3
