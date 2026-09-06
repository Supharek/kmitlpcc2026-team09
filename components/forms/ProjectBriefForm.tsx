"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";

const serviceOptions = [
  { value: "Website Development", label: "Website Development — พัฒนาเว็บไซต์ธุรกิจ" },
  { value: "Web Application", label: "Web Application — พัฒนาเว็บแอปพลิเคชันองค์กร" },
  { value: "Mobile Application", label: "Mobile Application — พัฒนาแอปพลิเคชันมือถือ iOS / Android" },
  { value: "UX/UI Design", label: "UX/UI Design — ออกแบบประสบการณ์และส่วนติดต่อผู้ใช้งาน" },
  { value: "Custom Software", label: "Custom Software — พัฒนาซอฟต์แวร์เฉพาะทาง" },
];

const budgetOptions = [
  { value: "ต่ำกว่า 100,000 บาท", label: "ต่ำกว่า 100,000 บาท" },
  { value: "100,000 - 300,000 บาท", label: "100,000 - 300,000 บาท" },
  { value: "300,000 - 500,000 บาท", label: "300,000 - 500,000 บาท" },
  { value: "500,000 - 1,000,000 บาท", label: "500,000 - 1,000,000 บาท" },
  { value: "มากกว่า 1,000,000 บาท", label: "มากกว่า 1,000,000 บาท" },
];

const serviceQueryMap: Record<string, string> = {
  website: "Website Development",
  "web-application": "Web Application",
  "mobile-application": "Mobile Application",
  "ux-ui": "UX/UI Design",
  "customize-program": "Custom Software",
};

export function ProjectBriefForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    budget: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverErrorMessage, setServerErrorMessage] = useState("");

  // BR15: Auto-select service from URL query parameter
  useEffect(() => {
    if (serviceParam && serviceQueryMap[serviceParam]) {
      setFormData((prev) => ({ ...prev, service: serviceQueryMap[serviceParam] }));
    }
  }, [serviceParam]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrors({});
    setServerErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setFormStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          budget: "",
          consent: false,
        });
      } else {
        setFormStatus("error");
        if (result.error?.fields) {
          setErrors(result.error.fields);
        }
        setServerErrorMessage(
          result.error?.message || "ไม่สามารถส่งข้อมูลได้ กรุณาตรวจสอบข้อมูลและลองใหม่อีกครั้ง"
        );
      }
    } catch {
      setFormStatus("error");
      setServerErrorMessage("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-200/80 shadow-md">
      {/* 4 Form States Display */}
      {formStatus === "success" && (
        <div
          role="status"
          className="mb-8 p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 animate-in fade-in duration-300"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-bold">ส่งข้อมูลเรียบร้อยแล้ว</h4>
              <p className="text-sm mt-0.5 text-emerald-700">
                เราจะนำรายละเอียดของคุณไปศึกษาและติดต่อกลับโดยเร็วที่สุด
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setFormStatus("idle")}
            className="mt-4 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950 cursor-pointer"
          >
            ส่งข้อมูลโครงการเพิ่มเติม
          </button>
        </div>
      )}

      {formStatus === "error" && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 animate-in fade-in duration-200 flex items-start space-x-3"
        >
          <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-sm">
            <p className="font-semibold">{serverErrorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <Input
            label="ชื่อ-นามสกุล"
            name="name"
            id="name"
            required
            placeholder="เช่น สมชาย ใจดี"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            disabled={formStatus === "submitting"}
          />

          {/* Company */}
          <Input
            label="บริษัท / องค์กร"
            name="company"
            id="company"
            placeholder="เช่น บริษัท สยามเทค จำกัด (ถ้ามี)"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
            disabled={formStatus === "submitting"}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email */}
          <Input
            label="อีเมล"
            name="email"
            id="email"
            type="email"
            required
            placeholder="example@company.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            disabled={formStatus === "submitting"}
          />

          {/* Phone */}
          <Input
            label="เบอร์โทรศัพท์"
            name="phone"
            id="phone"
            type="tel"
            required
            placeholder="0812345678"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            disabled={formStatus === "submitting"}
          />
        </div>

        {/* Service */}
        <Select
          label="บริการที่สนใจ"
          name="service"
          id="service"
          required
          options={serviceOptions}
          value={formData.service}
          onChange={handleChange}
          error={errors.service}
          disabled={formStatus === "submitting"}
        />

        {/* Message */}
        <Textarea
          label="รายละเอียดโครงการ"
          name="message"
          id="message"
          required
          rows={4}
          placeholder="อธิบายความต้องการ ขอบเขตของงาน หรือฟีเจอร์หลักที่ต้องการพัฒนา (อย่างน้อย 10 ตัวอักษร)"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          disabled={formStatus === "submitting"}
        />

        {/* Budget */}
        <Select
          label="งบประมาณโดยประมาณ"
          name="budget"
          id="budget"
          placeholder="-- เลือกช่วงงบประมาณ (ระบุหรือไม่ก็ได้) --"
          options={budgetOptions}
          value={formData.budget}
          onChange={handleChange}
          error={errors.budget}
          disabled={formStatus === "submitting"}
        />

        {/* PDPA Consent */}
        <div className="pt-2">
          <Checkbox
            label={
              <span>
                ฉันยินยอมให้ App Intouch เก็บและใช้ข้อมูลที่ส่งผ่านแบบฟอร์มเพื่อการติดต่อกลับตามนโยบายความเป็นส่วนตัว (PDPA)
              </span>
            }
            name="consent"
            id="consent"
            checked={formData.consent}
            onChange={handleChange}
            error={errors.consent}
            disabled={formStatus === "submitting"}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={formStatus === "submitting"}
          >
            {formStatus === "submitting" ? (
              <span className="inline-flex items-center space-x-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>กำลังส่งข้อมูล...</span>
              </span>
            ) : (
              "ส่งข้อมูล"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
