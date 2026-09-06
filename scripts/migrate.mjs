import pg from "pg";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postgresUrl = process.env.POSTGRES_URL;

if (!postgresUrl) {
  console.error("ข้อผิดพลาด: ไม่พบ POSTGRES_URL ใน environment variables (กรุณาตั้งค่าใน .env.local)");
  process.exit(1);
}

const client = new pg.Client({
  connectionString: postgresUrl,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function runMigrations() {
  try {
    await client.connect();
    console.log("เชื่อมต่อฐานข้อมูลสำเร็จ กำลังตรวจสอบตาราง _migrations...");

    // สร้างตาราง _migrations ถ้ายังไม่มี
    await client.query(`
      CREATE TABLE IF NOT EXISTS _migrations (
        name TEXT PRIMARY KEY,
        applied_at TIMESTAMPTZ DEFAULT now()
      );
    `);

    // อ่านประวัติ migrations ที่รันไปแล้ว
    const { rows: appliedRows } = await client.query("SELECT name FROM _migrations");
    const appliedSet = new Set(appliedRows.map((r) => r.name));

    // อ่านไฟล์ใน db/migrations/ เรียงตามชื่อ
    const migrationsDir = path.resolve(__dirname, "../db/migrations");
    if (!fs.existsSync(migrationsDir)) {
      console.log("ไม่พบโฟลเดอร์ db/migrations");
      return;
    }

    const files = fs
      .readdirSync(migrationsDir)
      .filter((file) => file.endsWith(".sql"))
      .sort();

    if (files.length === 0) {
      console.log("ไม่มีไฟล์ migration ใน db/migrations");
      return;
    }

    for (const file of files) {
      if (appliedSet.has(file)) {
        console.log(`ข้าม (รันไปแล้ว): ${file}`);
        continue;
      }

      const filePath = path.join(migrationsDir, file);
      const sql = fs.readFileSync(filePath, "utf-8");

      console.log(`กำลังรัน migration: ${file}...`);
      await client.query("BEGIN");
      try {
        await client.query(sql);
        await client.query("INSERT INTO _migrations (name) VALUES ($1)", [file]);
        await client.query("COMMIT");
        console.log(`รันแล้ว: ${file}`);
      } catch (err) {
        await client.query("ROLLBACK");
        console.error(`เกิดข้อผิดพลาดในการรันไฟล์ ${file}:`, err.message);
        process.exitCode = 1;
        break;
      }
    }

    console.log("กระบวนการ migration เสร็จสิ้น");
  } catch (err) {
    console.error("เกิดข้อผิดพลาดในการเชื่อมต่อหรือดำเนินการ:", err.message);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
}

runMigrations();
