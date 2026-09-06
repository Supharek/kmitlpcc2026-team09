import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา — AppInTouch",
  description:
    "รู้จัก AppInTouch เราให้บริการด้านการพัฒนาซอฟต์แวร์และโซลูชันดิจิทัลสำหรับธุรกิจ วิสัยทัศน์ จุดเด่น และเทคโนโลยีที่เราใช้",
};

const strengths = [
  {
    title: "เข้าใจความต้องการของลูกค้า",
    desc: "เรารับฟังและวิเคราะห์โจทย์ทางธุรกิจอย่างลึกซึ้งเพื่อให้ได้โซลูชันที่ตรงประเด็นที่สุด",
  },
  {
    title: "ออกแบบระบบตามลักษณะของธุรกิจ",
    desc: "ปรับโครงสร้างระบบให้สอดคล้องกับขนาดและกระบวนการทำงานของแต่ละองค์กร",
  },
  {
    title: "พัฒนาโดยคำนึงถึงการใช้งานจริง",
    desc: "เน้นความง่ายในการใช้งาน (Usability) ของผู้ใช้งานจริงและความเสถียรของระบบ",
  },
  {
    title: "สามารถต่อยอดและปรับปรุงระบบได้",
    desc: "วางสถาปัตยกรรมแบบ Modular ที่รองรับการขยายขอบเขตและฟังก์ชันใหม่ในอนาคต",
  },
];

const techStack = [
  { name: ".NET", category: "Backend / Enterprise" },
  { name: "PHP", category: "Backend / Web" },
  { name: "MySQL", category: "Database" },
  { name: "MS SQL Server", category: "Database" },
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Flutter", category: "Mobile App" },
  { name: "Docker", category: "DevOps & Deployment" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--brand-bg)]">
      <Header />

      <main className="flex-1">
        {/* Page Hero */}
        <section className="py-14 md:py-20 bg-gradient-to-b from-white to-[var(--brand-bg)] border-b border-gray-200/60">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)] bg-[var(--brand-primary)]/10 px-3 py-1 rounded-full mb-3">
                ABOUT US
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--brand-ink)] tracking-tight">
                เกี่ยวกับ App Intouch
              </h1>
              <p className="mt-4 text-base md:text-lg text-[var(--brand-muted)] leading-relaxed">
                เรามุ่งมั่นพัฒนาโซลูชันซอฟต์แวร์ที่ตอบโจทย์การทำงานและความต้องการของธุรกิจ
              </p>
            </div>
          </div>
        </section>

        {/* Section: Company Overview */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <SectionHeading
                  tag="WHO WE ARE"
                  title="เราเป็นใคร"
                  className="mb-4"
                />
                <p className="text-base text-[var(--brand-muted)] leading-relaxed">
                  App Intouch ให้บริการด้านการพัฒนาซอฟต์แวร์และโซลูชันดิจิทัลสำหรับธุรกิจ โดยให้ความสำคัญกับความต้องการของลูกค้าและการพัฒนาระบบที่สามารถนำไปใช้งานได้จริง
                </p>
                <p className="text-base text-[var(--brand-muted)] leading-relaxed">
                  ทีมงานของเราประกอบด้วยนักพัฒนาซอฟต์แวร์และนักออกแบบประสบการณ์ผู้ใช้งานที่มีความเชี่ยวชาญ เราทำงานร่วมกับลูกค้าในฐานะพันธมิตรทางเทคโนโลยี เพื่อเปลี่ยนไอเดียและความท้าทายให้กลายเป็นซอฟต์แวร์ที่สร้างมูลค่าได้จริง
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-0"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)] text-white flex items-center justify-center font-bold text-xl">
                      9+
                    </div>
                    <h3 className="text-xl font-bold text-[var(--brand-ink)]">
                      ความเชี่ยวชาญรอบด้าน
                    </h3>
                    <p className="text-sm text-[var(--brand-muted)] leading-relaxed">
                      มุ่งเน้นการส่งมอบงานคุณภาพที่ตรงตามมาตรฐานสากล ทั้งด้านความปลอดภัย ประสิทธิภาพ และการดูแลรักษา
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Vision & Mission */}
        <section className="py-16 md:py-20 bg-white border-y border-gray-200/70">
          <div className="container-custom">
            <SectionHeading
              tag="CORE PURPOSE"
              title="วิสัยทัศน์และแนวทางการทำงาน"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-[var(--brand-bg)] rounded-2xl p-8 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-[var(--brand-primary)] flex items-center justify-center font-bold mb-4">
                    👁
                  </div>
                  <h3 className="text-xl font-bold text-[var(--brand-ink)] mb-3">
                    วิสัยทัศน์
                  </h3>
                  <p className="text-base text-[var(--brand-muted)] leading-relaxed">
                    สร้างโซลูชันดิจิทัลที่ช่วยให้ธุรกิจสามารถทำงานได้อย่างมีประสิทธิภาพ
                  </p>
                </div>
              </div>

              <div className="bg-[var(--brand-bg)] rounded-2xl p-8 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-[var(--brand-primary)] flex items-center justify-center font-bold mb-4">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold text-[var(--brand-ink)] mb-3">
                    แนวทางการทำงาน
                  </h3>
                  <p className="text-base text-[var(--brand-muted)] leading-relaxed">
                    ทำความเข้าใจปัญหา ออกแบบโซลูชัน และพัฒนาระบบให้เหมาะกับผู้ใช้งานและธุรกิจ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Strengths */}
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <SectionHeading
              tag="OUR VALUE"
              title="จุดเด่นของเรา"
              description="สิ่งที่เรายึดมั่นและส่งมอบให้กับทุกโครงการของลูกค้า"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 shadow-xs flex items-start space-x-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-red-50 text-[var(--brand-primary)] font-bold flex items-center justify-center shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[var(--brand-ink)] mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[var(--brand-muted)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Technology */}
        <section className="py-16 md:py-20 bg-white border-t border-gray-200/70">
          <div className="container-custom">
            <SectionHeading
              tag="TECH STACK"
              title="เทคโนโลยีที่เราใช้"
              description="เราเลือกใช้เทคโนโลยีให้เหมาะสมกับลักษณะและข้อกำหนดของแต่ละโครงการ"
              centered
            />

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-[var(--brand-bg)] p-5 rounded-xl border border-gray-100 text-center hover:border-gray-300 transition-colors"
                >
                  <p className="text-lg font-bold text-[var(--brand-ink)]">
                    {tech.name}
                  </p>
                  <p className="text-xs text-[var(--brand-muted)] mt-1">
                    {tech.category}
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  กำลังมองหาทีมพัฒนาซอฟต์แวร์อยู่หรือไม่?
                </h2>
                <p className="text-neutral-300 text-base leading-relaxed">
                  เราพร้อมรับฟังโจทย์ของคุณและร่วมวางแผนพัฒนาซอฟต์แวร์ที่ตอบโจทย์ความต้องการของธุรกิจ
                </p>
                <div className="pt-2 flex justify-center">
                  <Link href="/contact">
                    <Button variant="primary" size="lg">
                      พูดคุยกับเรา
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
