import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { VisitTracker } from "@/components/analytics/VisitTracker";

export const metadata: Metadata = {
  title: "AppInTouch — พัฒนาไอเดียของคุณ ให้กลายเป็นเว็บไซต์ที่ใช้งานได้จริง",
  description:
    "เราคือบริษัทพัฒนาเว็บไซต์และแอปพลิเคชัน ด้วยทีมงานมืออาชีพที่พร้อมดูแลคุณในทุกขั้นตอน ตั้งแต่เริ่มต้นจนถึงการใช้งานจริง",
};

const services = [
  {
    title: "Website Development",
    description: "พัฒนาเว็บไซต์องค์กร, เว็บไซต์ธุรกิจ และ E-Commerce",
    icon: (
      <svg className="w-5 h-5 text-[#C62828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Web Application",
    description: "พัฒนาระบบเว็บแอปพลิเคชันที่ตอบโจทย์ธุรกิจของคุณ",
    icon: (
      <svg className="w-5 h-5 text-[#C62828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Mobile Application",
    description: "พัฒนาแอปพลิเคชันบนมือถือทั้ง Android และ iOS",
    icon: (
      <svg className="w-5 h-5 text-[#C62828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "UX/UI Design",
    description: "ออกแบบประสบการณ์ผู้ใช้ ให้ใช้งานง่ายและสวยงาม",
    icon: (
      <svg className="w-5 h-5 text-[#C62828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "Customize Program",
    description: "พัฒนาระบบเฉพาะทาง ตามความต้องการของคุณ",
    icon: (
      <svg className="w-5 h-5 text-[#C62828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const stats = [
  {
    number: "1,284+",
    label: "ผู้ใช้งานเว็บไซต์",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    number: "250+",
    label: "โปรเจกต์ที่สำเร็จ",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "5 ปี+",
    label: "ประสบการณ์ในวงการ",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    number: "15+",
    label: "ทีมงานมืออาชีพ",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const articles = [
  {
    title: "5 แนวทางพัฒนาเว็บไซต์ให้โหลดไว และรองรับ SEO",
    category: "บทความ",
    date: "12 พ.ค. 2568",
    image: "/images/news_seo.jpg",
  },
  {
    title: "ทำไมธุรกิจควรมีแอปพลิเคชันมือถือ ในปี 2025?",
    category: "บทความ",
    date: "5 พ.ค. 2568",
    image: "/images/news_mobile.jpg",
  },
  {
    title: "เบื้องหลังการพัฒนาเว็บไซต์บริษัทกว่า 250+ โครงการ",
    category: "ผลงาน",
    date: "28 เม.ย. 2568",
    image: "/images/news_team.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <VisitTracker />
      <Header />

      <main className="flex-grow">
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px] lg:min-h-[620px]">
            {/* Left Side: Dark Red Gradient with Typography */}
            <div className="lg:col-span-6 xl:col-span-5 bg-gradient-to-br from-[#1F0508] via-[#4D0D14] to-[#7A151E] p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10">
              <div className="space-y-6 max-w-xl">
                {/* Brand Badge */}
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#C62828] text-white text-xs font-semibold tracking-wider uppercase">
                  <span>APP INTOUCH COMPANY LIMITED</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  พัฒนาไอเดียของคุณ{" "}
                  <span className="text-[#FF5252] block sm:inline">
                    ให้กลายเป็นเว็บไซต์ที่ใช้งานได้จริง
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  เราคือบริษัทพัฒนาเว็บไซต์และแอปพลิเคชัน ด้วยทีมงานมืออาชีพที่พร้อมดูแลคุณในทุกขั้นตอน ตั้งแต่เริ่มต้นจนถึงการใช้งานจริง
                </p>

                {/* CTA Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link href="/services">
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full bg-[#C62828] hover:bg-[#B71C1C] text-white text-sm font-semibold transition-all shadow-md flex items-center space-x-2 cursor-pointer"
                    >
                      <span>ดูบริการของเรา</span>
                      <span>→</span>
                    </button>
                  </Link>

                  <Link href="/contact">
                    <button
                      type="button"
                      className="px-6 py-3 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white text-sm font-medium transition-all backdrop-blur-sm cursor-pointer"
                    >
                      ติดต่อเรา
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side: Hero Coding Laptop Image & Floating Stats Widget */}
            <div className="lg:col-span-6 xl:col-span-7 relative min-h-[380px] lg:min-h-full">
              <Image
                src="/images/hero_laptop.jpg"
                alt="การพัฒนาเว็บไซต์และระบบซอฟต์แวร์ App InTouch"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 lg:bg-gradient-to-r lg:from-[#7A151E]/40 lg:via-transparent lg:to-black/30 pointer-events-none" />

              {/* Floating Dark Glass Widget */}
              <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 text-white shadow-2xl flex items-center space-x-4 max-w-xs">
                <div className="w-12 h-12 rounded-full bg-[#C62828] flex items-center justify-center shrink-0 shadow-inner">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 font-medium">ผู้ใช้งานเว็บไซต์</p>
                  <p className="text-xl sm:text-2xl font-bold text-white tracking-wide">1,284 คน</p>
                  <p className="text-[10px] text-neutral-400">(อัปเดตล่าสุด)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES SECTION ================= */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-[#C62828] font-bold text-xs uppercase tracking-wider block mb-1">
                  บริการของเรา
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900">
                  บริการพัฒนาระบบครบวงจร
                </h2>
                <p className="text-neutral-500 text-sm sm:text-base mt-2">
                  ตอบโจทย์ทุกความต้องการของธุรกิจ ด้วยเทคโนโลยีที่ทันสมัย
                </p>
              </div>
              <div>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm font-semibold text-neutral-700 hover:text-[#C62828] transition-colors inline-flex items-center space-x-1"
                >
                  <span>ดูบริการทั้งหมด</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* 5-Card Horizontal Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Circular Icon Container */}
                    <div className="w-12 h-12 rounded-full border border-red-100 bg-red-50/50 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-[#C62828] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-[#C62828] group-hover:translate-x-1 transition-transform inline-flex items-center"
                    >
                      →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= STATS RIBBON ================= */}
        <section className="bg-gradient-to-r from-[#A81C24] via-[#8C141C] to-[#6E0E14] text-white py-12 md:py-14">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 space-y-1 text-center lg:text-left">
                <p className="text-red-200 text-xs font-medium tracking-wide">
                  ตัวเลขที่สะท้อนความไว้วางใจ
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  เราพร้อมเติบโตไปกับคุณ
                </h3>
                <p className="text-red-200 text-xs sm:text-sm">
                  ด้วยประสบการณ์และผลงานที่พิสูจน์ได้
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-xs">
                      {stat.icon}
                    </div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {stat.number}
                    </p>
                    <p className="text-xs text-red-100 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Office Meeting Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
                  <Image
                    src="/images/about_office.jpg"
                    alt="บริษัท แอพ อินทัช จำกัด"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Decorative Red Accent Shape */}
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-[#C62828]/10 rounded-2xl -z-10" />
              </div>

              {/* Right Column: About Company & Features */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[#C62828] font-bold text-xs uppercase tracking-wider block mb-1">
                    เกี่ยวกับเรา
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900">
                    บริษัท แอพ อินทัช จำกัด
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  เราคือทีมพัฒนาระบบเว็บไซต์และแอปพลิเคชัน ที่มุ่งมั่นสร้างสรรค์เทคโนโลยี เพื่อช่วยให้ธุรกิจของคุณเติบโตอย่างยั่งยืน ด้วยประสบการณ์กว่า 5 ปี และทีมงานผู้เชี่ยวชาญในหลากหลายด้าน
                </p>

                <div className="pt-1">
                  <Link href="/about">
                    <button
                      type="button"
                      className="px-5 py-2.5 rounded-full bg-[#C62828] hover:bg-[#B71C1C] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
                    >
                      เรียนรู้เพิ่มเติม →
                    </button>
                  </Link>
                </div>

                {/* 4 Feature Items */}
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-neutral-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-red-50 text-[#C62828] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900">วิสัยทัศน์ / พันธกิจ</h4>
                      <p className="text-[11px] text-neutral-500">มุ่งสู่การเป็นพาร์ทเนอร์ด้านเทคโนโลยี</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-red-50 text-[#C62828] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900">ประสบการณ์</h4>
                      <p className="text-[11px] text-neutral-500">ผลงานกว่า 250+ โครงการ</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-red-50 text-[#C62828] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900">ทีมงาน</h4>
                      <p className="text-[11px] text-neutral-500">นักพัฒนามืออาชีพ และนักออกแบบ UX/UI</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-red-50 text-[#C62828] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900">เทคโนโลยี</h4>
                      <p className="text-[11px] text-neutral-500">ใช้เทคโนโลยีที่ทันสมัยและเหมาะสมกับธุรกิจ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= NEWS & ARTICLES SECTION ================= */}
        <section className="py-16 md:py-24 bg-[#F9FAFB]">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-[#C62828] font-bold text-xs uppercase tracking-wider block mb-1">
                  ข่าวสารและบทความ
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900">
                  อัปเดตความเคลื่อนไหวของเรา
                </h2>
                <p className="text-neutral-500 text-sm sm:text-base mt-2">
                  ติดตามข่าวสาร บทความ และผลงานใหม่ ๆ จาก อินทัช
                </p>
              </div>
              <div>
                <Link
                  href="/about"
                  className="text-xs sm:text-sm font-semibold text-neutral-700 hover:text-[#C62828] transition-colors inline-flex items-center space-x-1"
                >
                  <span>ดูทั้งหมด</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* 3 Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-neutral-400">
                        <span>{item.date}</span>
                        <span className="px-2 py-0.5 rounded-full bg-red-50 text-[#C62828] font-semibold text-[10px]">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug group-hover:text-[#C62828] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PRE-FOOTER CTA RIBBON ================= */}
        <section className="bg-gradient-to-r from-[#C62828] via-[#B71C1C] to-[#8E1B1B] text-white py-10 md:py-12">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left space-y-1">
                <p className="text-red-200 text-xs font-semibold uppercase tracking-wider">
                  พร้อมเริ่มต้นโปรเจกต์ของคุณ?
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  ติดต่อเราได้เลย
                </h3>
                <p className="text-red-100 text-xs sm:text-sm">
                  พูดคุยกับทีมงานของเรา เพื่อรับคำปรึกษาและใบเสนอราคาฟรี
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href="/contact">
                  <button
                    type="button"
                    className="px-6 py-3 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs sm:text-sm font-semibold transition-all shadow-md flex items-center space-x-2 cursor-pointer"
                  >
                    <span>ส่งข้อความติดต่อ</span>
                    <span>→</span>
                  </button>
                </Link>

                <a
                  href="tel:0812345678"
                  className="px-6 py-3 rounded-full bg-black/30 hover:bg-black/50 border border-white/20 text-white text-xs sm:text-sm font-medium transition-all backdrop-blur-sm flex items-center space-x-2 cursor-pointer"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>081-234-5678</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
