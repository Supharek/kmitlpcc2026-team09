"use client";

import React from "react";
import { useVisitorCount } from "@/components/analytics/VisitorContext";

export function HeroVisitorBadge() {
  const visitorCount = useVisitorCount();

  return (
    <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 bg-neutral-900/95 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-3.5 text-white shadow-2xl flex items-center space-x-3 max-w-[240px] sm:max-w-xs hover:border-[#C62828]/60 transition-all duration-300 hover:scale-105 cursor-pointer animate-assemble-bottom-right delay-300 z-30">
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C62828] flex items-center justify-center shrink-0 shadow-inner">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <div>
        <p className="text-[10px] sm:text-[11px] text-neutral-400 font-medium">ผู้เข้าชมเว็บไซต์</p>
        <p className="text-base sm:text-lg font-bold text-white tracking-wide">
          {visitorCount.toLocaleString()} คน
        </p>
        <p className="text-[9px] sm:text-[10px] text-neutral-400">(อัปเดตล่าสุด)</p>
      </div>
    </div>
  );
}
