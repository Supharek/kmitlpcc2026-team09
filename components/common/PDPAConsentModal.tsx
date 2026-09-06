"use client";

import React, { useState, useEffect } from "react";

export function PDPAConsentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a PDPA consent decision
    try {
      const consent = localStorage.getItem("appintouch_pdpa_consent");
      if (!consent) {
        // Show after a brief delay for smooth appearance
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 600);
        return () => clearTimeout(timer);
      }
    } catch {
      // If localStorage is unavailable, do nothing
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(
        "appintouch_pdpa_consent",
        JSON.stringify({
          essential: true,
          analytics: true,
          marketing: true,
          acceptedAt: new Date().toISOString(),
        })
      );
    } catch {
      // Ignore localStorage error
    }
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    try {
      localStorage.setItem(
        "appintouch_pdpa_consent",
        JSON.stringify({
          essential: true,
          analytics: false,
          marketing: false,
          acceptedAt: new Date().toISOString(),
        })
      );
    } catch {
      // Ignore localStorage error
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdpa-title"
      aria-describedby="pdpa-desc"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-xl z-50 bg-[#111111]/95 backdrop-blur-md border border-neutral-800 text-white rounded-2xl shadow-2xl p-5 md:p-6 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="space-y-4">
        {/* Header Icon + Title */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#C62828]/20 border border-[#C62828]/40 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#E53935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 id="pdpa-title" className="text-sm md:text-base font-bold text-white">
                นโยบายคุ้มครองข้อมูลส่วนบุคคล (PDPA) และคุกกี้
              </h3>
              <p className="text-[11px] text-neutral-400">
                บริษัท แอพ อินทัช จำกัด (App InTouch Co., Ltd.)
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p id="pdpa-desc" className="text-xs md:text-sm text-neutral-300 leading-relaxed">
          เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพและประสบการณ์ที่ดีในการใช้งานเว็บไซต์ พร้อมทั้งประมวลผลข้อมูลตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) เพื่อนำเสนอบริการและวิเคราะห์การใช้งานอย่างปลอดภัย
        </p>

        {/* Detailed Options (Expandable) */}
        {showDetails && (
          <div className="pt-2 border-t border-neutral-800 space-y-2.5 text-xs text-neutral-300 animate-in fade-in duration-200">
            <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/80">
              <div>
                <p className="font-semibold text-white">คุกกี้ที่จำเป็น (Strictly Necessary)</p>
                <p className="text-[11px] text-neutral-400">จำเป็นสำหรับการทำงานพื้นฐานและความปลอดภัยของเว็บไซต์</p>
              </div>
              <span className="text-[10px] bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded font-medium">
                เปิดตลอด
              </span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/80">
              <div>
                <p className="font-semibold text-white">คุกกี้เพื่อการวิเคราะห์ (Analytics)</p>
                <p className="text-[11px] text-neutral-400">ช่วยให้เราเข้าใจการใช้งานเพื่อพัฒนาประสิทธิภาพของระบบ</p>
              </div>
              <span className="text-[10px] bg-red-950/60 text-[#E53935] px-2 py-0.5 rounded font-medium border border-red-800/40">
                แนะนำ
              </span>
            </div>
          </div>
        )}

        {/* Buttons & Toggle */}
        <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 transition-colors cursor-pointer self-start sm:self-center"
          >
            {showDetails ? "ซ่อนรายละเอียด" : "ดูรายละเอียดนโยบาย"}
          </button>

          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleAcceptEssential}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-medium transition-colors border border-neutral-700 cursor-pointer"
            >
              เฉพาะที่จำเป็น
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 sm:flex-initial px-5 py-2 rounded-full bg-[#C62828] hover:bg-[#B71C1C] text-white text-xs font-semibold transition-all shadow-md cursor-pointer"
            >
              ยอมรับทั้งหมด
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
