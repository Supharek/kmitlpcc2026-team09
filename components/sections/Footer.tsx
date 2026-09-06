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

          {/* Column 3: Contact & Trust */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wider uppercase">
              การติดต่อและข้อกำหนด
            </h4>
            <p className="text-sm text-neutral-400 leading-relaxed">
              พร้อมให้คำปรึกษาและออกแบบระบบซอฟต์แวร์ที่ตอบโจทย์ธุรกิจของคุณในทุกมิติ
            </p>
            <div className="text-xs text-neutral-400 space-y-1">
              <p>เวลาทำการ: วันจันทร์ - วันศุกร์ (09:00 - 18:00 น.)</p>
              <p className="text-neutral-500">
                การเก็บรวบรวมข้อมูลเป็นไปตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล (PDPA)
              </p>
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
