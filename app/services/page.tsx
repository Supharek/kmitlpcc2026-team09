import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "บริการของเรา — AppInTouch",
  description:
    "บริการพัฒนาและออกแบบซอฟต์แวร์ที่ตอบโจทย์ความต้องการของแต่ละธุรกิจ Website, Web Application, Mobile Application, UX/UI Design และ Custom Software",
};

const services = [
  {
    title: "Website Development",
    description: "พัฒนาเว็บไซต์สำหรับธุรกิจ พร้อมโครงสร้างที่รองรับการใช้งานจริง",
    slug: "website",
    features: [
      "รองรับ Responsive ทุกขนาดหน้าจอ (Mobile, Tablet, Desktop)",
      "โครงสร้างเว็บไซต์ที่ถูกต้องตามหลัก SEO สากล",
      "ระบบบริหารจัดการเนื้อหาที่ใช้งานง่ายและปลอดภัย",
    ],
    icon: (
      <svg className="w-7 h-7 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Web Application",
    description: "พัฒนา Web Application เพื่อสนับสนุนกระบวนการทำงานขององค์กร",
    slug: "web-application",
    features: [
      "ระบบบริหารจัดการงาน ระบบสต็อก และ ERP เฉพาะทาง",
      "รองรับการเชื่อมต่อ API และฐานข้อมูลขนาดใหญ่",
      "ระบบรักษาความปลอดภัยและการกำหนดสิทธิ์ผู้ใช้งาน",
    ],
    icon: (
      <svg className="w-7 h-7 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Mobile Application",
    description: "พัฒนา Mobile Application สำหรับ Android และ iOS",
    slug: "mobile-application",
    features: [
      "พัฒนาแอปพลิเคชันด้วย Flutter / Native เพื่อประสิทธิภาพสูงสุด",
      "ประสบการณ์ใช้งานลื่นไหลและออกแบบตาม Material & iOS Guidelines",
      "ระบบแจ้งเตือน Push Notification และการทำงานแบบออฟไลน์",
    ],
    icon: (
      <svg className="w-7 h-7 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "UX/UI Design",
    description: "ออกแบบ User Experience และ User Interface ให้เหมาะกับผู้ใช้งาน",
    slug: "ux-ui",
    features: [
      "การทำ User Journey และ Information Architecture",
      "Wireframe และ Interactive Prototype ความละเอียดสูง",
      "Design System ที่เป็นมาตรฐานสำหรับทีมพัฒนา",
    ],
    icon: (
      <svg className="w-7 h-7 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Custom Software",
    description: "พัฒนาซอฟต์แวร์เฉพาะตาม Requirement ของลูกค้า",
    slug: "customize-program",
    features: [
      "วิเคราะห์กระบวนการทำงานและออกแบบสถาปัตยกรรมเฉพาะองค์กร",
      "ปรับแต่งฟังก์ชันตามความต้องการทางธุรกิจอย่างแท้จริง",
      "รองรับการต่อยอดและขยายขนาดของระบบในอนาคต (Scalable)",
    ],
    icon: (
      <svg className="w-7 h-7 text-[var(--brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

const developmentSteps = [
  { step: "01", title: "เก็บ Requirement", desc: "รับฟังเป้าหมายทางธุรกิจและรวบรวมฟังก์ชันที่จำเป็น" },
  { step: "02", title: "ออกแบบระบบ", desc: "วางโครงสร้างฐานข้อมูล Architecture และ UX/UI Wireframe" },
  { step: "03", title: "พัฒนา", desc: "ลงมือเขียนโค้ดตามมาตรฐานความปลอดภัยและ Clean Code" },
  { step: "04", title: "ทดสอบ", desc: "ทดสอบการทำงาน Unit Test, Integration Test และ Bug Fixing" },
  { step: "05", title: "ส่งมอบและดูแลระบบ", desc: "ติดตั้งระบบขึ้น Production และให้การดูแลหลังส่งมอบ" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-bg)]">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="py-14 md:py-20 bg-gradient-to-b from-white to-[var(--brand-bg)] border-b border-gray-200/60">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] bg-[var(--brand-primary)]/10 px-3 py-1 rounded-full mb-3">
                OUR SERVICES
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--brand-ink)] tracking-tight">
                บริการของเรา
              </h1>
              <p className="mt-4 text-base md:text-lg text-[var(--brand-muted)] leading-relaxed">
                บริการพัฒนาและออกแบบซอฟต์แวร์ที่ตอบโจทย์ความต้องการของแต่ละธุรกิจ พร้อมโครงสร้างที่มีเสถียรภาพและขยายต่อได้
              </p>
            </div>
          </div>
        </section>

        {/* Section: Solution List */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <SectionHeading
              tag="SOLUTIONS"
              title="โซลูชันที่เราพัฒนา"
              description="เรามุ่งเน้นการส่งมอบผลงานคุณภาพสูงด้วยเทคโนโลยีที่ทันสมัยและกระบวนการทำงานที่เป็นมาตรฐาน"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-red-50/80 flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--brand-ink)] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--brand-muted)] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8 text-xs text-neutral-600">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-[var(--brand-primary)] font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/contact?service=${service.slug}`}>
                    <Button variant="outline" size="md" fullWidth>
                      สนใจบริการนี้
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Development Process */}
        <section className="py-16 md:py-20 bg-white border-y border-gray-200/70">
          <div className="container-custom">
            <SectionHeading
              tag="WORKFLOW"
              title="กระบวนการทำงาน"
              description="ขั้นตอนการทำงานที่โปร่งใส ชัดเจน และวัดผลได้ในทุกขั้นตอนของการพัฒนาโครงการ"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
              {developmentSteps.map((step) => (
                <div
                  key={step.step}
                  className="relative bg-[var(--brand-bg)] p-6 rounded-xl border border-gray-100 flex flex-col items-start"
                >
                  <span className="text-3xl font-extrabold text-[var(--brand-primary)]/40 font-mono mb-2">
                    {step.step}
                  </span>
                  <h4 className="text-base font-bold text-[var(--brand-ink)] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[var(--brand-muted)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: CTA */}
        <section className="py-16 md:py-24 bg-[var(--brand-bg)]">
          <div className="container-custom">
            <div className="bg-neutral-900 rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[var(--brand-accent)] bg-white/10 px-3 py-1 rounded-full">
                  LET&apos;S TALK
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  มีความต้องการด้านซอฟต์แวร์หรือไม่?
                </h2>
                <p className="text-neutral-300 text-base leading-relaxed">
                  ส่งรายละเอียดโครงการให้เรา แล้วทีมงานจะติดต่อกลับเพื่อพูดคุยเพิ่มเติมและให้คำปรึกษาเบื้องต้นโดยไม่มีค่าใช้จ่าย
                </p>
                <div className="pt-2 flex justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      เริ่มต้นโปรเจกต์
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
