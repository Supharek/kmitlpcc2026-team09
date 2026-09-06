import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ProjectBriefForm } from "@/components/forms/ProjectBriefForm";
import { LoadingState } from "@/components/ui/LoadingState";

export const metadata: Metadata = {
  title: "ติดต่อเรา — AppInTouch",
  description:
    "เล่าความต้องการของคุณให้เราทราบ แล้วทีมงาน App Intouch จะติดต่อกลับเพื่อพูดคุยรายละเอียดและประเมินโครงการ",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-bg)]">
      <Header />

      <main className="flex-1 py-12 md:py-16">
        <div className="container-custom">
          {/* Page Hero */}
          <div className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] bg-[var(--brand-primary)]/10 px-3 py-1 rounded-full mb-3">
              START A PROJECT
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--brand-ink)] tracking-tight">
              ติดต่อเรา
            </h1>
            <p className="mt-4 text-base md:text-lg text-[var(--brand-muted)] leading-relaxed">
              เล่าความต้องการของคุณให้เราทราบ แล้วทีมงาน App Intouch จะติดต่อกลับเพื่อพูดคุยรายละเอียด
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs">
                <h2 className="text-xl font-bold text-[var(--brand-ink)] mb-6 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-primary)] inline-block"></span>
                  <span>ข้อมูลการติดต่อ</span>
                </h2>

                <div className="space-y-6 text-sm">
                  {/* Address */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-[var(--brand-primary)] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--brand-ink)]">ที่ตั้งสำนักงาน</p>
                      <a
                        href="https://maps.google.com/?q=315+ถนนหมู่บ้านเศรษฐกิจ+แขวงบางแคเหนือ+เขตบางแค+กรุงเทพมหานคร+10160"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--brand-muted)] hover:text-[#C62828] transition-colors mt-0.5 block leading-relaxed group"
                      >
                        315 ถนนหมู่บ้านเศรษฐกิจ แขวงบางแคเหนือ เขตบางแค กรุงเทพมหานคร 10160
                        <span className="block text-xs text-[#C62828] font-medium mt-1 group-hover:underline">
                          📍 ดูบน Google Maps นำทาง →
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-[var(--brand-primary)] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--brand-ink)]">อีเมลฝ่ายขาย & โครงการ</p>
                      <a
                        href="mailto:sales@appintouch.net"
                        className="text-[#C62828] font-medium hover:underline mt-0.5 block"
                      >
                        sales@appintouch.net
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-[var(--brand-primary)] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-[var(--brand-ink)]">เบอร์โทรศัพท์ติดต่อ</p>
                      <p className="text-[var(--brand-muted)]">
                        <a href="tel:0622244897" className="text-[#C62828] font-medium hover:underline">062-224-4897</a> (คุณส้ม)
                      </p>
                      <p className="text-[var(--brand-muted)]">
                        <a href="tel:0622244795" className="text-[#C62828] font-medium hover:underline">062-224-4795</a> (คุณเล็ก)
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-50 text-[var(--brand-primary)] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--brand-ink)]">เวลาทำการ</p>
                      <p className="text-[var(--brand-muted)] mt-0.5">
                        วันจันทร์ - ศุกร์ เวลา 8:30 - 18:00 น.
                      </p>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        (หยุดวันเสาร์ - อาทิตย์ และวันหยุดนักขัตฤกษ์)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service commitment card */}
              <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-white mb-2">
                  ทำไมต้องร่วมงานกับเรา?
                </h3>
                <ul className="space-y-2.5 text-sm text-neutral-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>วิเคราะห์โจทย์ธุรกิจอย่างรอบด้านก่อนเริ่มพัฒนา</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>ส่งมอบงานตรงตามกำหนด พร้อมการทดสอบระบบ</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[var(--brand-accent)] font-bold">✓</span>
                    <span>ดูแลและสนับสนุนระบบอย่างต่อเนื่องหลังส่งมอบ</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Project Brief Form */}
            <div className="lg:col-span-7">
              <Suspense fallback={<LoadingState message="กำลังเตรียมแบบฟอร์ม..." />}>
                <ProjectBriefForm />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
