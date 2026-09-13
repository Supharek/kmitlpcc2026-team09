"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const milestones = [
  {
    year: "2021",
    title: "ก่อตั้งบริษัท แอพ อินทัช จำกัด",
    desc: "เริ่มต้นจากกลุ่มนักพัฒนามืออาชีพที่มีความมุ่งมั่นในการสร้างซอฟต์แวร์สำหรับธุรกิจ SMEs และองค์กรในประเทศไทย",
  },
  {
    year: "2023",
    title: "ขยายสายบริการ Mobile & Cloud Application",
    desc: "ยกระดับการพัฒนาแอปพลิเคชันมือถือทั้ง iOS/Android และระบบคลาวด์ รองรับฐานผู้ใช้งานที่เติบโตอย่างรวดเร็ว",
  },
  {
    year: "2025",
    title: "ความสำเร็จกว่า 250+ โปรเจกต์",
    desc: "ส่งมอบโซลูชันดิจิทัลสำเร็จมากกว่า 250 โครงการในหลากหลายอุตสาหกรรม พร้อมบริการดูแลระบบหลังส่งมอบอย่างต่อเนื่อง",
  },
];

const coreValues = [
  {
    title: "สร้างงานที่ใช้งานได้จริง (Practical Solution)",
    desc: "เราไม่เพียงแต่ส่งมอบโค้ด แต่เราให้ความสำคัญกับระบบที่ตอบโจทย์การทำงานจริงของธุรกิจและผู้ใช้งาน",
    icon: (
      <svg className="w-6 h-6 text-[#C62828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "ยึดผู้ใช้งานเป็นศูนย์กลาง (User-Centric)",
    desc: "การออกแบบ UI/UX ผ่านกระบวนการวิจัยและทดสอบ เพื่อให้ระบบใช้งานง่าย รวดเร็ว และเป็นมิตรกับผู้ใช้ทุกระดับ",
    icon: (
      <svg className="w-6 h-6 text-[#C62828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "มาตรฐานความปลอดภัยระดับสากล (Security & Quality)",
    desc: "เขียนโปรแกรมตามมาตรฐานความปลอดภัย ซอฟต์แวร์ผ่านการทำ Automated Testing และปกป้องข้อมูลตามมาตรฐาน PDPA",
    icon: (
      <svg className="w-6 h-6 text-[#C62828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "พาร์ทเนอร์ระยะยาว (Long-Term Partner)",
    desc: "เราทำงานเคียงข้างลูกค้าตั้งแต่เริ่มต้น ให้คำปรึกษา พร้อมทีม Support ที่คอยดูแลแก้ไขปัญหาอย่างรวดเร็ว",
    icon: (
      <svg className="w-6 h-6 text-[#C62828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const teamDisciplines = [
  {
    role: "Project Management",
    desc: "วิเคราะห์ Requirement วางแผน Timeline และควบคุมคุณภาพงานส่งมอบตรงเวลา",
  },
  {
    role: "UX/UI Design",
    desc: "ออกแบบ Wireframe, Prototype และ Design System ที่สวยงามและตอบโจทย์แบรนด์",
  },
  {
    role: "Full-Stack Development",
    desc: "เชี่ยวชาญ Next.js, TypeScript, Node.js และ RESTful API Architecture",
  },
  {
    role: "Mobile App Engineering",
    desc: "พัฒนาแอปพลิเคชันบน iOS และ Android ด้วยมาตรฐานการทำงานระดับสูง",
  },
  {
    role: "Quality Assurance (QA)",
    desc: "ทดสอบการทำงาน ฟังก์ชัน ความปลอดภัย และประสิทธิภาพก่อนปล่อยระบบจริง",
  },
];

const techStack = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Flutter",
  "Docker",
  "Figma",
  "REST API",
  "Git CI/CD",
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<number>(0);

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
                <span>ABOUT APPINTOUCH</span>
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                รู้จักกับ <span className="text-[#FF5252]">บริษัท แอพ อินทัช จำกัด</span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed pt-2">
                เราคือทีมพัฒนาซอฟต์แวร์ เว็บไซต์ และแอปพลิเคชัน ที่มุ่งมั่นเปลี่ยนเป้าหมายทางธุรกิจของคุณให้กลายเป็นระบบดิจิทัลที่มีประสิทธิภาพและเติบโตได้อย่างยั่งยืน
              </p>
            </div>
          </div>
        </section>

        {/* ================= COMPANY STORY & STATS ================= */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Image with Red Accent */}
              <div className="lg:col-span-5 relative group">
                <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-100">
                  <Image
                    src="/images/about_office.jpg"
                    alt="สำนักงาน บริษัท แอพ อินทัช จำกัด"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-red-400">สำนักงานของเรา</p>
                    <p className="text-sm font-medium text-neutral-200 mt-1">315 ถนนหมู่บ้านเศรษฐกิจ แขวงบางแคเหนือ เขตบางแค กรุงเทพฯ</p>
                  </div>
                </div>
                {/* Decorative Red Accent */}
                <div className="absolute -top-4 -left-4 w-28 h-28 bg-[#C62828]/10 rounded-3xl -z-10" />
              </div>

              {/* Right Column: Story & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[#C62828] font-bold text-xs uppercase tracking-wider block mb-1">
                    เรื่องราวและความมุ่งมั่น
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
                    พันธมิตรด้านเทคโนโลยี ที่เข้าใจธุรกิจจริง
                  </h2>
                </div>

                <p className="text-base text-neutral-600 leading-relaxed">
                  <strong>App InTouch Co., Ltd.</strong> ก่อตั้งขึ้นจากความเชี่ยวชาญด้านวิศวกรรมซอฟต์แวร์และการออกแบบประสบการณ์ผู้ใช้ เราให้ความสำคัญกับการรับฟังความต้องการเชิงลึกในแต่ละธุรกิจ เพื่อนำเสนอเทคโนโลยีที่ตรงจุดและคุ้มค่าที่สุด
                </p>

                <p className="text-base text-neutral-600 leading-relaxed">
                  เราเชื่อมั่นว่า ซอฟต์แวร์ที่ดีต้องไม่ใช่แค่ทำงานได้ แต่ต้องใช้งานง่าย เสถียร ปลอดภัย และพร้อมปรับขยายตามขนาดของธุรกิจในอนาคต
                </p>

                {/* 3 Metric Badges */}
                <div className="pt-4 grid grid-cols-3 gap-4 border-t border-neutral-100">
                  <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 hover:border-red-200 transition-colors">
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#C62828]">250+</p>
                    <p className="text-xs text-neutral-500 font-medium mt-1">โปรเจกต์ที่สำเร็จ</p>
                  </div>
                  <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 hover:border-red-200 transition-colors">
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#C62828]">5 ปี+</p>
                    <p className="text-xs text-neutral-500 font-medium mt-1">ประสบการณ์ในวงการ</p>
                  </div>
                  <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 hover:border-red-200 transition-colors">
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#C62828]">100%</p>
                    <p className="text-xs text-neutral-500 font-medium mt-1">ความพึงพอใจลูกค้า</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CORE VALUES (4 เสาหลัก) ================= */}
        <section className="py-16 md:py-20 bg-neutral-50 border-y border-neutral-200/70">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#C62828] font-bold text-xs uppercase tracking-wider block mb-1">
                แนวทางการทำงาน
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900">
                4 เสาหลักในการพัฒนาซอฟต์แวร์
              </h2>
              <p className="text-neutral-500 text-sm sm:text-base mt-2">
                มาตรฐานที่เรายึดถือในทุกขั้นตอนการทำงานเพื่อส่งมอบสิ่งที่ดีที่สุดแก่ลูกค้า
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs hover:shadow-xl hover:border-red-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                      {val.icon}
                    </div>
                    <h3 className="text-base font-bold text-neutral-900">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= INTERACTIVE TIMELINE & MILESTONES ================= */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mb-12">
              <span className="text-[#C62828] font-bold text-xs uppercase tracking-wider block mb-1">
                การเติบโตของเรา
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900">
                เส้นทางการพัฒนาของ App InTouch
              </h2>
              <p className="text-neutral-500 text-sm sm:text-base mt-2">
                ก้าวสำคัญที่สะท้อนถึงประสบการณ์และความไว้วางใจจากลูกค้า
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {milestones.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    activeTab === idx
                      ? "bg-neutral-900 text-white border-neutral-800 shadow-xl scale-[1.02]"
                      : "bg-white text-neutral-800 border-neutral-200 hover:border-red-300 hover:bg-neutral-50/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl sm:text-3xl font-black ${
                      activeTab === idx ? "text-[#FF5252]" : "text-[#C62828]"
                    }`}>
                      {item.year}
                    </span>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                      activeTab === idx ? "bg-white/10 text-neutral-300" : "bg-red-50 text-[#C62828]"
                    }`}>
                      Milestone {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    activeTab === idx ? "text-neutral-300" : "text-neutral-500"
                  }`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TEAM DISCIPLINES & EXPERTISE ================= */}
        <section className="py-16 md:py-20 bg-neutral-950 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-red-400 font-bold text-xs uppercase tracking-wider block mb-1">
                    OUR EXPERTISE
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                    ทีมงานมืออาชีพในทุกมิติ
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  เราทำงานร่วมกันเป็นทีมแบบ Agile เพื่อให้การพัฒนาเป็นไปอย่างราบรื่น สื่อสารโปร่งใส และส่งมอบระบบที่มีเสถียรภาพสูงสุด
                </p>
                <div className="pt-2">
                  <Link href="/contact">
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full bg-[#C62828] hover:bg-[#B71C1C] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer flex items-center space-x-2"
                    >
                      <span>พูดคุยกับทีมงานของเรา</span>
                      <span>→</span>
                    </button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {teamDisciplines.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-900/60 transition-all flex items-start space-x-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#C62828]/20 border border-[#C62828]/40 flex items-center justify-center text-red-400 font-bold text-xs shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {item.role}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= TECH STACK BADGES ================= */}
        <section className="py-14 bg-white border-b border-neutral-100">
          <div className="container-custom text-center">
            <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-6">
              เทคโนโลยีและเครื่องมือทันสมัยที่เราใช้ในการพัฒนาระบบ
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-neutral-50 text-neutral-700 text-xs sm:text-sm font-medium border border-neutral-200/80 hover:bg-red-50 hover:text-[#C62828] hover:border-red-200 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA BANNER ================= */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#C62828] via-[#B71C1C] to-[#8E1B1B] text-white">
          <div className="container-custom text-center max-w-3xl space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              พร้อมเริ่มต้นพัฒนาโปรเจกต์ของคุณแล้วหรือยัง?
            </h2>
            <p className="text-red-100 text-sm sm:text-base leading-relaxed">
              พูดคุยกับทีมงาน App InTouch เพื่อวิเคราะห์และประเมินโครงการเบื้องต้นฟรี ไม่มีค่าใช้จ่าย
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <button
                  type="button"
                  className="px-8 py-3.5 rounded-full bg-white text-[#C62828] hover:bg-neutral-100 text-sm font-bold transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                >
                  ติดต่อเพื่อรับคำปรึกษาฟรี →
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
