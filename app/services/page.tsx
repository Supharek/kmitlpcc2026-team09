"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const servicesList = [
  {
    id: "website",
    query: "website-development",
    badge: "WEB DEVELOPMENT",
    title: "Website Development",
    tagline: "พัฒนาเว็บไซต์องค์กร ธุรกิจ และระบบ E-Commerce ที่ตอบโจทย์การขาย",
    description:
      "บริการพัฒนาเว็บไซต์ที่ออกแบบเฉพาะสำหรับธุรกิจของคุณ โครงสร้างรองรับ SEO อย่างสมบูรณ์ โหลดไว ปลอดภัย และแสดงผลสวยงามบนทุกอุปกรณ์ (Mobile, Tablet, Desktop)",
    highlights: [
      "ออกแบบเฉพาะตามเอกลักษณ์องค์กร (Custom Design ไม่ใช้ Template สำเร็จรูป)",
      "โครงสร้าง Web Performance สูง โหลดรวดเร็วตามเกณฑ์ Google Core Web Vitals",
      "ระบบบริหารจัดการเนื้อหา (CMS) ที่ใช้งานง่ายและปลอดภัย",
      "รองรับการเชื่อมต่อระบบ Payment Gateway, CRM และ Social Media",
      "ติดตั้งระบบติดตามสถิติ Google Analytics 4 และระบบคุ้มครองข้อมูลส่วนบุคคล (PDPA)",
    ],
    deliverables: "Design Prototype, Source Code, ระบบ CMS, คู่มือการใช้งาน, การดูแลระบบ 1 ปี",
  },
  {
    id: "web-app",
    query: "web-application",
    badge: "WEB APPLICATION",
    title: "Web Application",
    tagline: "พัฒนาระบบเว็บแอปพลิเคชันสำหรับกระบวนการทำงานและข้อมูลธุรกิจ",
    description:
      "สร้างสรรค์เว็บแอปพลิเคชันที่รองรับ Workflow ที่ซับซ้อน เช่น ระบบ ERP, ระบบบริหารสต็อกและคลังสินค้า, ระบบจัดการสมาชิก และ Dashboard วิเคราะห์ข้อมูลระดับสูง",
    highlights: [
      "สถาปัตยกรรม Microservices / Modular รองรับผู้ใช้งานปริมาณมากพร้อมกัน",
      "ระบบความปลอดภัยขั้นสูง การกำหนดสิทธิ์ผู้ใช้งาน (Role-Based Access Control)",
      "เชื่อมต่อ API กับระบบเดิมขององค์กรได้อย่างไร้รอยต่อ",
      "ระบบสำรองข้อมูลอัตโนมัติ (Automated Backup) และฐานข้อมูลประสิทธิภาพสูง",
      "ออกแบบระบบรายงาน (Interactive Analytics Dashboard) แบบ Real-time",
    ],
    deliverables: "Architecture Design, Database Schema, REST API Docs, Production Deployment",
  },
  {
    id: "mobile-app",
    query: "mobile-application",
    badge: "MOBILE APPLICATION",
    title: "Mobile Application",
    tagline: "พัฒนาแอปพลิเคชันมือถือทั้งระบบ iOS และ Android ที่ลื่นไหลและเสถียร",
    description:
      "พัฒนาแอปพลิเคชันมือถือที่ตอบโจทย์ทั้งผู้บริโภค (B2C) และการทำงานในองค์กร (B2B) ด้วยเทคโนโลยี Cross-Platform และ Native เพื่อประสิทธิภาพสูงสุด",
    highlights: [
      "พัฒนาด้วย Flutter / React Native ให้ประสิทธิภาพเทียบเท่า Native App",
      "ออกแบบ UI/UX สอดคล้องตามเกณฑ์ Apple Human Interface และ Google Material Design",
      "ระบบแจ้งเตือน Push Notification ตรงถึงผู้ใช้งานแบบเฉพาะกลุ่ม",
      "รองรับการทำงานในโหมด Offline และซิงค์ข้อมูลอัตโนมัติเมื่อเชื่อมต่อเน็ต",
      "ดูแลและจัดการขั้นตอนการขึ้น Store ทั้ง App Store และ Google Play Store",
    ],
    deliverables: "iOS IPA & Android APK/AAB, App Store Deployment, Source Code, API Integration",
  },
  {
    id: "ux-ui",
    query: "ux-ui-design",
    badge: "DESIGN SYSTEM",
    title: "UX/UI Design",
    tagline: "ออกแบบประสบการณ์และส่วนติดต่อผู้ใช้ที่สวยงาม ทันสมัย และใช้งานง่าย",
    description:
      "ศึกษาพฤติกรรมกลุ่มเป้าหมาย ออกแบบ User Journey และ Interactive Prototype เพื่อให้ผู้ใช้งานได้รับประสบการณ์ที่ราบรื่นและเปลี่ยนผู้เข้าชมให้กลายเป็นลูกค้า",
    highlights: [
      "User Research & Journey Mapping วิเคราะห์พฤติกรรมและความต้องการผู้ใช้จริง",
      "สร้าง Wireframe และ Interactive Prototype ใน Figma ให้ทดสอบก่อนเขียนโค้ด",
      "จัดทำ Design System ครบถ้วน (Color Palette, Typography, Components)",
      "ออกแบบให้ผ่านเกณฑ์การเข้าถึงสำหรับทุกคน (Accessibility WCAG 2.1)",
      "ทดสอบ Usability Testing เพื่อลดจุดสะดุดในกระบวนการใช้งาน",
    ],
    deliverables: "Figma Master File, Interactive Prototype, Design System Library, Assets Export",
  },
  {
    id: "custom-software",
    query: "custom-software",
    badge: "ENTERPRISE SOLUTION",
    title: "Custom Software",
    tagline: "วิจัยและพัฒนาระบบซอฟต์แวร์เฉพาะทางที่ปรับตามความต้องการอย่างแท้จริง",
    description:
      "สำหรับองค์กรที่มีโจทย์ทางธุรกิจเฉพาะตัว เราช่วยวิเคราะห์ ออกแบบ และสร้างระบบซอฟต์แวร์ที่ตอบสนองกลยุทธ์ขององค์กรโดยไม่ต้องปรับตัวเข้าหาซอฟต์แวร์สำเร็จรูป",
    highlights: [
      "วิเคราะห์ Process และ Pain Point ขององค์กรร่วมกับทีมผู้บริหาร",
      "สถาปัตยกรรมแบบ Scalable รองรับการขยายตัวทางธุรกิจได้ในระยะยาว 5-10 ปี",
      "การถ่ายโอนและแปลงข้อมูลจากระบบเดิม (Legacy System Migration)",
      "ฝึกอบรมทีมงานผู้ใช้งาน (User Training) พร้อมเอกสารคู่มือการใช้งานครบชุด",
      "การันตี Service Level Agreement (SLA) และทีมวิศวกรซัพพอร์ตโดยตรง",
    ],
    deliverables: "Custom Architecture, Comprehensive Test Suite, SLA Support Agreement",
  },
];

const developmentSteps = [
  {
    step: "01",
    title: "Requirement & Discovery",
    desc: "รับฟังเป้าหมายทางธุรกิจ วิเคราะห์ Pain Points และกำหนดฟังก์ชันการทำงานพร้อมขอบเขตโครงการที่ชัดเจน",
  },
  {
    step: "02",
    title: "Architecture & UX/UI",
    desc: "วางโครงสร้างระบบ ฐานข้อมูล และออกแบบ Interactive Prototype ใน Figma เพื่อให้เห็นภาพจริงก่อนลงมือพัฒนา",
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "ลงมือพัฒนาด้วย Clean Code และมาตรฐานความปลอดภัย พร้อมอัปเดตความคืบหน้าให้ลูกค้าทราบเป็นระยะ",
  },
  {
    step: "04",
    title: "Quality Assurance (QA)",
    desc: "ทดสอบการทำงานทุกมิติ ทั้ง Unit Test, Security Test, Performance Test และ User Acceptance Testing (UAT)",
  },
  {
    step: "05",
    title: "Deployment & Maintenance",
    desc: "ติดตั้งระบบขึ้น Production Server อย่างราบรื่น พร้อมบริการดูแลและซัพพอร์ตอย่างต่อเนื่องหลังส่งมอบ",
  },
];

const faqs = [
  {
    q: "ระยะเวลาในการพัฒนาเว็บไซต์หรือแอปพลิเคชันใช้เวลานานเท่าไหร่?",
    a: "ระยะเวลาขึ้นอยู่กับขอบเขตและความซับซ้อนของโครงการ โดยเว็บไซต์องค์กรทั่วไปใช้เวลาประมาณ 3–6 สัปดาห์ ส่วน Web Application หรือ Mobile Application ที่มีระบบฐานข้อมูลซับซ้อนจะใช้เวลาประมาณ 2–4 เดือน โดยเราจะมีการวาง Timeline ที่ชัดเจนให้เห็นก่อนเริ่มงาน",
  },
  {
    q: "ลูกค้าเป็นเจ้าของกรรมสิทธิ์ซอร์สโค้ด (Source Code) หรือไม่?",
    a: "ใช่ครับ เมื่อการส่งมอบงานและชำระเงินเสร็จสิ้นตามสัญญา กรรมสิทธิ์ในซอร์สโค้ด ฐานข้อมูล และชิ้นงานดีไซน์ทั้งหมดจะเป็นของลูกค้า 100% โดยทางเราจะส่งมอบ Repository และเอกสารประกอบให้อย่างครบถ้วน",
  },
  {
    q: "มีการรับประกันและดูแลระบบหลังส่งมอบหรือไม่?",
    a: "เรามีระยะเวลารับประกันข้อผิดพลาดของระบบ (Warranty & Bug Fixing) ฟรีตามข้อตกลง พร้อมบริการ Maintenance Service Agreement (MA) เพื่อดูแลความปลอดภัย สำรองข้อมูล และอัปเดตระบบในระยะยาว",
  },
  {
    q: "ขั้นตอนการเริ่มต้นโปรเจกต์ต้องทำอย่างไรบ้าง?",
    a: "คุณสามารถส่งสรุปความต้องการเบื้องต้นผ่านแบบฟอร์ม 'ติดต่อเรา' บนเว็บไซต์ หรือโทรหาทีมงานของเราเพื่อพูดคุยรายละเอียด จากนั้นทีมงานจะจัดทำ Proposal และใบเสนอราคาให้พิจารณาโดยไม่มีค่าใช้จ่าย",
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <Header />

      <main className="flex-grow">
        {/* ================= HERO HEADER ================= */}
        <section className="bg-neutral-950 text-white py-14 sm:py-18 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#C62828_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/50 px-3.5 py-1 rounded-full">
                <span>OUR SERVICES</span>
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                บริการพัฒนาระบบ <span className="text-[#FF5252]">ครบวงจร</span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed pt-2">
                ตอบโจทย์ทุกความต้องการของธุรกิจยุคดิจิทัล ด้วยเทคโนโลยีที่ทันสมัย ออกแบบเฉพาะตัว และมุ่งเน้นความสำเร็จของโครงการในระยะยาว
              </p>
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE SERVICE SELECTOR ================= */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#C62828] font-bold text-xs uppercase tracking-wider block mb-1">
                โซลูชันที่เชี่ยวชาญ
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900">
                เลือกบริการที่คุณสนใจเพื่อดูรายละเอียด
              </h2>
            </div>

            {/* Service Nav Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
              {servicesList.map((srv, idx) => (
                <button
                  key={srv.id}
                  onClick={() => setSelectedService(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    selectedService === idx
                      ? "bg-[#C62828] text-white shadow-md scale-105"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
                  }`}
                >
                  {srv.title}
                </button>
              ))}
            </div>

            {/* Active Service Showcase Card */}
            {(() => {
              const current = servicesList[selectedService];
              return (
                <div className="bg-neutral-50 rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-xs font-bold text-[#C62828] tracking-wider uppercase px-3 py-1 rounded-full bg-red-50 inline-block border border-red-100">
                      {current.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                      {current.title}
                    </h3>
                    <p className="text-base text-neutral-700 font-medium leading-relaxed">
                      {current.tagline}
                    </p>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {current.description}
                    </p>

                    <div className="pt-2">
                      <Link href={`/contact?service=${current.query}`}>
                        <button
                          type="button"
                          className="px-6 py-3 rounded-full bg-[#C62828] hover:bg-[#B71C1C] text-white text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center space-x-2 cursor-pointer"
                        >
                          <span>ปรึกษาโครงการ {current.title}</span>
                          <span>→</span>
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-5">
                    <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider border-b border-neutral-100 pb-3 flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#C62828]" />
                      <span>จุดเด่นของบริการนี้</span>
                    </h4>

                    <ul className="space-y-3">
                      {current.highlights.map((h, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-neutral-600">
                          <span className="text-[#C62828] font-bold mt-0.5">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-t border-neutral-100">
                      <p className="text-[11px] text-neutral-400 font-semibold uppercase">สิ่งที่จะได้รับส่งมอบ</p>
                      <p className="text-xs text-neutral-700 font-medium mt-1">{current.deliverables}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ================= DEVELOPMENT PROCESS ================= */}
        <section className="py-16 md:py-24 bg-neutral-950 text-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-red-400 font-bold text-xs uppercase tracking-wider block mb-1">
                OUR PROCESS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                5 ขั้นตอนการทำงานที่โปร่งใสและเป็นระบบ
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base mt-2">
                ส่งมอบงานคุณภาพตรงตามกำหนดการ ด้วยมาตรฐานการทำงานระดับสากล
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {developmentSteps.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-900/80 rounded-2xl p-6 border border-neutral-800 hover:border-red-900/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <span className="text-3xl font-black text-[#C62828] tracking-tight block">
                      {item.step}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE FAQ ACCORDION ================= */}
        <section className="py-16 md:py-24 bg-neutral-50">
          <div className="container-custom max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-[#C62828] font-bold text-xs uppercase tracking-wider block mb-1">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900">
                คำถามที่พบบ่อยในการทำงาน
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-neutral-200 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between font-bold text-sm sm:text-base text-neutral-900 hover:text-[#C62828] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#C62828] text-lg font-bold ml-4">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>

                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA BANNER ================= */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#C62828] via-[#B71C1C] to-[#8E1B1B] text-white">
          <div className="container-custom text-center max-w-3xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              พร้อมเริ่มต้นสร้างซอฟต์แวร์ที่ตอบโจทย์ธุรกิจของคุณ?
            </h2>
            <p className="text-red-100 text-sm sm:text-base leading-relaxed">
              บอกเป้าหมายโครงการของคุณให้เราทราบ ทีมงานพร้อมให้คำปรึกษาและประเมินราคาเบื้องต้นฟรี
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <button
                  type="button"
                  className="px-8 py-3.5 rounded-full bg-white text-[#C62828] hover:bg-neutral-100 text-sm font-bold transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                >
                  ส่งข้อมูลเพื่อรับคำปรึกษาฟรี →
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
