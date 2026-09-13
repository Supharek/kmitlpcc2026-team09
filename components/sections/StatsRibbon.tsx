"use client";

import React from "react";
import { useVisitorCount } from "@/components/analytics/VisitorContext";

export function StatsRibbon() {
  const visitorCount = useVisitorCount();

  const stats = [
    {
      number: `${visitorCount.toLocaleString()}+`,
      label: "ผู้เข้าชมเว็บไซต์",
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

  return (
    <section className="bg-gradient-to-r from-[#A81C24] via-[#8C141C] to-[#6E0E14] text-white py-12 md:py-14 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-1 text-center lg:text-left animate-assemble-left delay-200">
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
            {stats.map((stat, idx) => {
              const statDelays = ["delay-200", "delay-250", "delay-300", "delay-350"];
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center space-y-2 animate-assemble-bottom ${
                    statDelays[idx % statDelays.length]
                  }`}
                >
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
