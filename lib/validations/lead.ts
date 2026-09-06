import { z } from "zod";

export const validServices = [
  "Website Development",
  "Web Application",
  "Mobile Application",
  "UX/UI Design",
  "Custom Software",
] as const;

export const validStatuses = [
  "NEW",
  "CONTACTED",
  "DISCUSSING",
  "QUOTATION",
  "CLOSED",
] as const;

// Phone number regex: 9-10 digits (allowing optional dashes/spaces)
const phoneRegex = /^0[0-9]{1,2}-?[0-9]{3}-?[0-9]{4}$|^0[0-9]{8,9}$/;

export const leadFormSchema = z.object({
  name: z
    .string({ required_error: "กรุณากรอกชื่อ-นามสกุล" })
    .trim()
    .min(2, { message: "กรุณากรอกชื่อ-นามสกุล" })
    .max(100, { message: "ชื่อ-นามสกุลต้องไม่เกิน 100 ตัวอักษร" }),
  company: z
    .string()
    .trim()
    .max(150, { message: "ชื่อบริษัทต้องไม่เกิน 150 ตัวอักษร" })
    .optional()
    .nullable()
    .transform((val) => (val === "" || val === undefined ? null : val)),
  email: z
    .string({ required_error: "กรุณากรอกอีเมลให้ถูกต้อง" })
    .trim()
    .email({ message: "กรุณากรอกอีเมลให้ถูกต้อง" })
    .max(255, { message: "อีเมลต้องไม่เกิน 255 ตัวอักษร" }),
  phone: z
    .string({ required_error: "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง" })
    .trim()
    .refine((val) => phoneRegex.test(val.replace(/[\s-]/g, "")), {
      message: "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง",
    })
    .transform((val) => val.replace(/[\s-]/g, "")),
  service: z.enum(validServices, {
    errorMap: () => ({ message: "กรุณาเลือกบริการที่สนใจ" }),
  }),
  message: z
    .string({ required_error: "กรุณาระบุรายละเอียดโครงการอย่างน้อย 10 ตัวอักษร" })
    .trim()
    .min(10, { message: "กรุณาระบุรายละเอียดโครงการอย่างน้อย 10 ตัวอักษร" })
    .max(2000, { message: "รายละเอียดโครงการต้องไม่เกิน 2000 ตัวอักษร" }),
  budget: z
    .string()
    .trim()
    .optional()
    .nullable()
    .transform((val) => (val === "" || val === undefined ? null : val)),
  consent: z
    .boolean({ required_error: "กรุณายอมรับนโยบายความเป็นส่วนตัวก่อนส่งข้อมูล" })
    .refine((val) => val === true, {
      message: "กรุณายอมรับนโยบายความเป็นส่วนตัวก่อนส่งข้อมูล",
    }),
});

export type LeadFormInput = z.infer<typeof leadFormSchema>;

export const leadStatusSchema = z.object({
  status: z.enum(validStatuses, {
    errorMap: () => ({ message: "สถานะไม่ถูกต้อง" }),
  }),
});

export type LeadStatusInput = z.infer<typeof leadStatusSchema>;
