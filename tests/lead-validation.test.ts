import { describe, it, expect } from "vitest";
import { leadFormSchema, leadStatusSchema } from "@/lib/validations/lead";

describe("T2 Lead Form Validation (Zod Schema)", () => {
  const validPayload = {
    name: "สมชาย ใจดี",
    company: "บริษัท สยามนวัตกรรม จำกัด",
    email: "somchai@example.com",
    phone: "0812345678",
    service: "Web Application",
    message: "ต้องการพัฒนาระบบจัดการสต็อกสินค้าและเชื่อมต่อ API กับระบบเดิม",
    budget: "100,000 - 300,000 บาท",
    consent: true,
  };

  it("TC01: ข้อมูลถูกต้องครบทุกฟิลด์ ต้องผ่าน validation", () => {
    const result = leadFormSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("สมชาย ใจดี");
      expect(result.data.email).toBe("somchai@example.com");
      expect(result.data.service).toBe("Web Application");
    }
  });

  it("TC02: email ผิดรูปแบบ ต้องไม่ผ่านและแจ้งเตือนภาษาไทย", () => {
    const result = leadFormSchema.safeParse({
      ...validPayload,
      email: "abcd",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const emailIssue = result.error.issues.find((i) => i.path.includes("email"));
      expect(emailIssue).toBeDefined();
      expect(emailIssue?.message).toBe("กรุณากรอกอีเมลให้ถูกต้อง");
    }
  });

  it("TC03: ไม่ส่ง name ต้องไม่ผ่านและแจ้งเตือนภาษาไทย", () => {
    const payloadWithoutName = { ...validPayload };
    delete (payloadWithoutName as Partial<typeof validPayload>).name;

    const result = leadFormSchema.safeParse(payloadWithoutName);
    expect(result.success).toBe(false);
    if (!result.success) {
      const nameIssue = result.error.issues.find((i) => i.path.includes("name"));
      expect(nameIssue).toBeDefined();
      expect(nameIssue?.message).toBe("กรุณากรอกชื่อ-นามสกุล");
    }
  });

  it("TC04: message สั้นเกินไป (ต่ำกว่า 10 ตัวอักษร) ต้องไม่ผ่าน", () => {
    const result = leadFormSchema.safeParse({
      ...validPayload,
      message: "สั้นไป",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const msgIssue = result.error.issues.find((i) => i.path.includes("message"));
      expect(msgIssue).toBeDefined();
      expect(msgIssue?.message).toBe("กรุณาระบุรายละเอียดโครงการอย่างน้อย 10 ตัวอักษร");
    }
  });

  it("TC05: ไม่ส่ง company และ budget (optional) ต้องผ่าน", () => {
    const result = leadFormSchema.safeParse({
      ...validPayload,
      company: "",
      budget: undefined,
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.company).toBeNull();
      expect(result.data.budget).toBeNull();
    }
  });

  it("TC06: message ยาวเกิน 2000 ตัวอักษร ต้องไม่ผ่าน", () => {
    const result = leadFormSchema.safeParse({
      ...validPayload,
      message: "ก".repeat(2001),
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const msgIssue = result.error.issues.find((i) => i.path.includes("message"));
      expect(msgIssue).toBeDefined();
      expect(msgIssue?.message).toBe("รายละเอียดโครงการต้องไม่เกิน 2000 ตัวอักษร");
    }
  });

  it("TC07: เบอร์โทรศัพท์ผิดรูปแบบ ต้องไม่ผ่าน", () => {
    const result = leadFormSchema.safeParse({
      ...validPayload,
      phone: "1234",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const phoneIssue = result.error.issues.find((i) => i.path.includes("phone"));
      expect(phoneIssue).toBeDefined();
      expect(phoneIssue?.message).toBe("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง");
    }
  });

  it("TC08: ไม่ยอมรับ PDPA (consent = false) ต้องไม่ผ่าน", () => {
    const result = leadFormSchema.safeParse({
      ...validPayload,
      consent: false,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const consentIssue = result.error.issues.find((i) => i.path.includes("consent"));
      expect(consentIssue).toBeDefined();
      expect(consentIssue?.message).toBe("กรุณายอมรับนโยบายความเป็นส่วนตัวก่อนส่งข้อมูล");
    }
  });

  it("Admin Status Update: สถานะถูกต้องต้องผ่าน / สถานะมั่วต้องไม่ผ่าน", () => {
    expect(leadStatusSchema.safeParse({ status: "CONTACTED" }).success).toBe(true);
    expect(leadStatusSchema.safeParse({ status: "CLOSED" }).success).toBe(true);
    expect(leadStatusSchema.safeParse({ status: "INVALID_STATUS" }).success).toBe(false);
  });
});
