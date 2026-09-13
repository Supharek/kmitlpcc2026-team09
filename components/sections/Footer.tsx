import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 pb-12 border-b border-neutral-800">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/brand/logo-white.svg"
                alt="App InTouch Company Limited"
                width={180}
                height={38}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-xs text-red-500 font-medium tracking-wide">
              พัฒนาเว็บไซต์ | แอปพลิเคชัน | ที่ปรึกษาด้านเทคโนโลยี
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              เราพัฒนาเว็บไซต์ Web Application และ Mobile Application ที่ออกแบบให้เหมาะกับความต้องการของแต่ละธุรกิจเพื่อขับเคลื่อนการเติบโตอย่างยั่งยืน
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wider uppercase">
              เมนูหลัก
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-[var(--brand-accent)] transition-colors">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--brand-accent)] transition-colors">
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[var(--brand-accent)] transition-colors">
                  บริการของเรา
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--brand-accent)] transition-colors">
                  ติดต่อเรา
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[var(--brand-accent)] transition-colors text-xs text-neutral-500">
                  สำหรับผู้ดูแลระบบ (Admin)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Real Address with Google Maps */}
          <div className="space-y-3.5">
            <h4 className="text-base font-semibold text-white tracking-wider uppercase">
              ข้อมูลติดต่อและที่อยู่บริษัท
            </h4>
            
            {/* Address with Google Maps Hyperlink */}
            <div className="space-y-1 text-xs text-neutral-300">
              <p className="text-neutral-400 font-medium">ที่ตั้งสำนักงาน:</p>
              <a
                href="https://maps.google.com/?q=315+ถนนหมู่บ้านเศรษฐกิจ+แขวงบางแคเหนือ+เขตบางแค+กรุงเทพมหานคร+10160"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start space-x-2 text-neutral-300 hover:text-white transition-colors"
                title="คลิกเพื่อเปิด Google Maps นำทาง"
              >
                <svg className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed underline underline-offset-4 decoration-neutral-600 group-hover:decoration-[#E53935]">
                  315 ถนนหมู่บ้านเศรษฐกิจ แขวงบางแคเหนือ เขตบางแค กรุงเทพมหานคร 10160
                  <span className="block text-[11px] text-[#E53935] mt-0.5 font-medium">📍 เปิดแผนที่ Google Maps →</span>
                </span>
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-1.5 text-xs text-neutral-300 pt-1 border-t border-neutral-800/80">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#E53935] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales@appintouch.net" className="hover:text-[#E53935] transition-colors">
                  sales@appintouch.net
                </a>
              </div>

              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="space-y-0.5">
                  <p><a href="tel:0622244897" className="hover:text-[#E53935] transition-colors">062-224-4897</a> (คุณส้ม)</p>
                  <p><a href="tel:0622244795" className="hover:text-[#E53935] transition-colors">062-224-4795</a> (คุณเล็ก)</p>
                </div>
              </div>

              <div className="pt-1 text-[11px] text-neutral-400">
                <p>เวลาทำการ: วันจันทร์ - ศุกร์ เวลา 8:30 - 18:00 น.</p>
                <p className="text-neutral-500">(หยุดวันเสาร์ - อาทิตย์ และวันหยุดนักขัตฤกษ์)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} AppInTouch Co., Ltd. สงวนลิขสิทธิ์ทุกประการ</p>
          <div className="flex space-x-6">
            <span className="hover:text-neutral-300">Privacy Policy (PDPA)</span>
            <span className="hover:text-neutral-300">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
