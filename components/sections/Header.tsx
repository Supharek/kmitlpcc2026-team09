"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "หน้าแรก", href: "/" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "บริการของเรา", href: "/services" },
  { label: "ติดต่อเรา", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visitorCount, setVisitorCount] = useState<number>(1284);
  const pathname = usePathname();

  useEffect(() => {
    // Fetch live visit count from API
    fetch("/api/visits")
      .then((res) => res.json())
      .then((res) => {
        if (res && res.data && typeof res.data.count === "number" && res.data.count > 0) {
          setVisitorCount(1284 + res.data.count);
        }
      })
      .catch(() => {
        setVisitorCount(1284);
      });
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-neutral-800 shadow-md">
      <div className="container-custom h-[72px] flex items-center justify-between">
        {/* Logo - Authentic App InTouch Corporate Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/brand/logo-white.svg"
            alt="App InTouch Company Limited"
            width={180}
            height={38}
            className="h-8 md:h-9 w-auto object-contain transition-opacity hover:opacity-90"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="เมนูหลัก">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-150 py-1.5 relative ${
                  isActive
                    ? "text-[#E53935] font-semibold"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E53935] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Visitor Counter & CTA Button Desktop */}
        <div className="hidden lg:flex items-center space-x-5">
          {/* Visitor Counter Badge */}
          <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">
            <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>ผู้เข้าชมเว็บไซต์</span>
            <span className="font-semibold text-white tracking-wide">
              {visitorCount.toLocaleString()}
            </span>
          </div>

          {/* Red Pill Contact Button */}
          <Link href="/contact">
            <button
              type="button"
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-[#C62828] hover:bg-[#B71C1C] text-white text-sm font-medium transition-all shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>ติดต่อเรา</span>
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center space-x-3">
          <Link href="/contact">
            <button
              type="button"
              className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#C62828] text-white text-xs font-medium cursor-pointer"
            >
              ติดต่อเรา
            </button>
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none cursor-pointer"
            aria-label="สลับเมนูหลัก"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-[#111111] px-5 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "text-[#E53935] bg-red-950/40 font-semibold"
                      : "text-neutral-300 hover:text-white hover:bg-neutral-800/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 px-3">
              <span>ผู้เข้าชมเว็บไซต์</span>
              <span className="text-white font-semibold">{visitorCount.toLocaleString()} คน</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
