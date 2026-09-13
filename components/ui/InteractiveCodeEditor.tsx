"use client";

import React, { useState, useEffect, useCallback } from "react";

interface CodeLine {
  text: string;
  tokens: { content: string; color: string }[];
}

const TAB1_CODE: CodeLine[] = [
  {
    text: "// 🌟 AppInTouch: Transforming Your Vision into Reality",
    tokens: [
      { content: "// 🌟 AppInTouch: Transforming Your Vision into Reality", color: "text-neutral-500 italic" },
    ],
  },
  {
    text: "import { createSolution, deploy } from '@appintouch/core';",
    tokens: [
      { content: "import ", color: "text-purple-400 font-semibold" },
      { content: "{ ", color: "text-neutral-300" },
      { content: "createSolution", color: "text-yellow-300" },
      { content: ", ", color: "text-neutral-300" },
      { content: "deploy", color: "text-yellow-300" },
      { content: " } ", color: "text-neutral-300" },
      { content: "from ", color: "text-purple-400 font-semibold" },
      { content: "'@appintouch/core'", color: "text-emerald-400" },
      { content: ";", color: "text-neutral-400" },
    ],
  },
  {
    text: "",
    tokens: [{ content: "", color: "" }],
  },
  {
    text: "export async function launchProject(vision: ClientVision) {",
    tokens: [
      { content: "export async function ", color: "text-purple-400 font-semibold" },
      { content: "launchProject", color: "text-blue-400 font-bold" },
      { content: "(", color: "text-neutral-300" },
      { content: "vision", color: "text-orange-300" },
      { content: ": ", color: "text-neutral-400" },
      { content: "ClientVision", color: "text-cyan-300" },
      { content: ") {", color: "text-neutral-300" },
    ],
  },
  {
    text: "  const project = await createSolution({",
    tokens: [
      { content: "  const ", color: "text-purple-400 font-semibold" },
      { content: "project ", color: "text-neutral-200" },
      { content: "= ", color: "text-pink-400" },
      { content: "await ", color: "text-purple-400 font-semibold" },
      { content: "createSolution", color: "text-yellow-300" },
      { content: "({", color: "text-neutral-300" },
    ],
  },
  {
    text: "    client: vision.name || 'Your Business',",
    tokens: [
      { content: "    client: ", color: "text-sky-300" },
      { content: "vision.name || ", color: "text-neutral-300" },
      { content: "'Your Business'", color: "text-emerald-400" },
      { content: ",", color: "text-neutral-300" },
    ],
  },
  {
    text: "    services: ['Website', 'Web App', 'Mobile App'],",
    tokens: [
      { content: "    services: ", color: "text-sky-300" },
      { content: "[", color: "text-neutral-300" },
      { content: "'Website'", color: "text-emerald-400" },
      { content: ", ", color: "text-neutral-300" },
      { content: "'Web App'", color: "text-emerald-400" },
      { content: ", ", color: "text-neutral-300" },
      { content: "'Mobile App'", color: "text-emerald-400" },
      { content: "],", color: "text-neutral-300" },
    ],
  },
  {
    text: "    standards: { speed: 'Ultra-Fast', seo: true },",
    tokens: [
      { content: "    standards: ", color: "text-sky-300" },
      { content: "{ speed: ", color: "text-neutral-300" },
      { content: "'Ultra-Fast'", color: "text-emerald-400" },
      { content: ", seo: ", color: "text-neutral-300" },
      { content: "true", color: "text-amber-400 font-semibold" },
      { content: " },", color: "text-neutral-300" },
    ],
  },
  {
    text: "    mission: 'Helping businesses grow effortlessly',",
    tokens: [
      { content: "    mission: ", color: "text-sky-300" },
      { content: "'Helping businesses grow effortlessly'", color: "text-emerald-400" },
      { content: ",", color: "text-neutral-300" },
    ],
  },
  {
    text: "  });",
    tokens: [
      { content: "  });", color: "text-neutral-300" },
    ],
  },
  {
    text: "  return await deploy(project, { support: '24/7' });",
    tokens: [
      { content: "  return await ", color: "text-purple-400 font-semibold" },
      { content: "deploy", color: "text-yellow-300" },
      { content: "(project, { support: ", color: "text-neutral-300" },
      { content: "'24/7'", color: "text-emerald-400" },
      { content: " });", color: "text-neutral-300" },
    ],
  },
  {
    text: "}",
    tokens: [
      { content: "}", color: "text-neutral-300" },
    ],
  },
];

const TAB2_CODE: CodeLine[] = [
  {
    text: "// 🚀 AppInTouch Deployment Configuration",
    tokens: [
      { content: "// 🚀 AppInTouch Deployment Configuration", color: "text-neutral-500 italic" },
    ],
  },
  {
    text: "export default defineConfig({",
    tokens: [
      { content: "export default ", color: "text-purple-400 font-semibold" },
      { content: "defineConfig", color: "text-yellow-300" },
      { content: "({", color: "text-neutral-300" },
    ],
  },
  {
    text: "  company: 'App InTouch Company Limited',",
    tokens: [
      { content: "  company: ", color: "text-sky-300" },
      { content: "'App InTouch Company Limited'", color: "text-emerald-400" },
      { content: ",", color: "text-neutral-300" },
    ],
  },
  {
    text: "  completedProjects: 250,",
    tokens: [
      { content: "  completedProjects: ", color: "text-sky-300" },
      { content: "250", color: "text-amber-400 font-bold" },
      { content: ",", color: "text-neutral-300" },
    ],
  },
  {
    text: "  experienceYears: 5,",
    tokens: [
      { content: "  experienceYears: ", color: "text-sky-300" },
      { content: "5", color: "text-amber-400 font-bold" },
      { content: ",", color: "text-neutral-300" },
    ],
  },
  {
    text: "  satisfactionRate: '100%',",
    tokens: [
      { content: "  satisfactionRate: ", color: "text-sky-300" },
      { content: "'100%'", color: "text-emerald-400 font-semibold" },
      { content: ",", color: "text-neutral-300" },
    ],
  },
  {
    text: "  stack: ['Next.js', 'React', 'Tailwind', 'Supabase'],",
    tokens: [
      { content: "  stack: ", color: "text-sky-300" },
      { content: "['Next.js', 'React', 'Tailwind', 'Supabase']", color: "text-emerald-400" },
      { content: ",", color: "text-neutral-300" },
    ],
  },
  {
    text: "  status: 'Ready for your next big project 🚀',",
    tokens: [
      { content: "  status: ", color: "text-sky-300" },
      { content: "'Ready for your next big project 🚀'", color: "text-yellow-300" },
    ],
  },
  {
    text: "});",
    tokens: [
      { content: "});", color: "text-neutral-300" },
    ],
  },
];

export function InteractiveCodeEditor() {
  const [activeTab, setActiveTab] = useState<"code" | "config">("code");
  const [visibleLineCount, setVisibleLineCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeLineIdx, setActiveLineIdx] = useState<number>(0);

  const currentCode = activeTab === "code" ? TAB1_CODE : TAB2_CODE;

  const restartAnimation = useCallback(() => {
    setVisibleLineCount(0);
    setActiveLineIdx(0);
    setIsRunning(true);
  }, []);

  useEffect(() => {
    restartAnimation();
  }, [activeTab, restartAnimation]);

  useEffect(() => {
    if (!isRunning) return;

    if (visibleLineCount < currentCode.length) {
      const timer = setTimeout(() => {
        setVisibleLineCount((prev) => prev + 1);
        setActiveLineIdx(visibleLineCount);
      }, 130);
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [visibleLineCount, isRunning, currentCode.length]);

  const handleCopy = () => {
    const fullText = currentCode.map((line) => line.text).join("\n");
    navigator.clipboard?.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-[620px] mx-auto select-none relative group drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
      {/* MacBook Top Display Enclosure */}
      <div className="relative rounded-t-2xl sm:rounded-t-3xl bg-[#1c1f26] p-2 sm:p-2.5 border-[2px] border-[#313642] shadow-2xl">
        {/* FaceTime Camera Notch at Top Bezel */}
        <div className="w-20 sm:w-24 h-3 bg-[#0d0e12] mx-auto rounded-b-md flex items-center justify-center -mt-2 sm:-mt-2.5 mb-1.5 shadow-inner">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0a1b2a] border border-[#2a303c] flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-[#00ff88]/80 animate-pulse" />
          </div>
        </div>

        {/* MacBook Screen Display (100% Full Edge-to-Edge inside Bezel, Zero Scrollbar) */}
        <div className="relative rounded-lg sm:rounded-xl overflow-hidden bg-[#0A0D14] border border-white/5 flex flex-col h-[320px] sm:h-[370px]">
          {/* Glossy screen glass reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-white/[0.04] pointer-events-none z-20" />

          {/* macOS Window Title Bar */}
          <div className="bg-[#121620] border-b border-neutral-800/80 px-3 py-2 flex items-center justify-between shrink-0 z-10">
            {/* Window Dots */}
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-sm" />

              {/* Tabs */}
              <div className="ml-3 flex items-center space-x-1">
                <button
                  type="button"
                  onClick={() => setActiveTab("code")}
                  className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center space-x-1.5 cursor-pointer ${
                    activeTab === "code"
                      ? "bg-[#0A0D14] text-white border-t border-neutral-700 font-semibold"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  <span className="text-blue-400 font-bold text-[10px]">TS</span>
                  <span>AppInTouch.ts</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("config")}
                  className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center space-x-1.5 cursor-pointer ${
                    activeTab === "config"
                      ? "bg-[#0A0D14] text-white border-t border-neutral-700 font-semibold"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  <span className="text-yellow-400 font-bold text-[10px]">⚡</span>
                  <span>solutions.config.ts</span>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-1.5">
              <div className="hidden sm:flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live IDE</span>
              </div>

              {/* Replay Run Button */}
              <button
                type="button"
                onClick={restartAnimation}
                title="รันแอนิเมชันใหม่อีกครั้ง"
                className="px-2 py-1 rounded hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer flex items-center space-x-1 text-[11px]"
              >
                <svg className="w-3 h-3 text-[#E53935]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>Run</span>
              </button>

              {/* Copy Button */}
              <button
                type="button"
                onClick={handleCopy}
                title="คัดลอกโค้ด"
                className="px-2 py-1 rounded hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer text-[11px]"
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Full Screen Code Content (No scrollbars, clean edge-to-edge flow) */}
          <div className="p-3 sm:p-4 overflow-hidden flex-grow flex flex-col justify-start text-[10px] sm:text-[11.5px] leading-relaxed font-mono">
            <table className="w-full border-collapse">
              <tbody>
                {currentCode.slice(0, visibleLineCount).map((line, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors duration-150 ${
                      idx === activeLineIdx ? "bg-white/[0.04]" : ""
                    }`}
                  >
                    {/* Line Number */}
                    <td className="w-6 sm:w-8 pr-2.5 text-right text-neutral-600 select-none align-top text-[10px] sm:text-[11px]">
                      {idx + 1}
                    </td>

                    {/* Code Tokens */}
                    <td className="whitespace-pre font-mono">
                      {line.tokens.map((token, tIdx) => (
                        <span key={tIdx} className={token.color}>
                          {token.content}
                        </span>
                      ))}
                      {idx === visibleLineCount - 1 && isRunning && (
                        <span className="inline-block w-1.5 h-3.5 bg-[#FF5252] ml-0.5 align-middle animate-pulse" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Finished status message */}
            {!isRunning && visibleLineCount > 0 && (
              <div className="mt-2 flex items-center space-x-2 text-emerald-400 text-[10px] sm:text-[11px] pl-6 sm:pl-8">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-neutral-400">
                  {"// ✨ Build completed: Ready to transform your business."}
                </span>
              </div>
            )}
          </div>

          {/* Bottom Simulated Interactive Terminal Status Bar */}
          <div className="bg-[#0B0D13] border-t border-neutral-800/80 px-3 py-1.5 flex items-center justify-between text-[10px] text-neutral-400 shrink-0">
            <div className="flex items-center space-x-1.5 truncate">
              <span className="text-[#E53935] font-bold">➜</span>
              <span className="text-neutral-300 font-medium truncate">
                {isRunning ? "Compiling solution in real-time..." : "AppInTouch system deployed & live 🚀"}
              </span>
            </div>
            <div className="flex items-center space-x-2 shrink-0 text-[10px] text-neutral-500">
              <span>TypeScript 5.7</span>
              <span className="text-emerald-400 font-semibold hidden sm:inline">100% Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* MacBook Hinge & Keyboard Deck (Base) */}
      <div className="relative">
        {/* Aluminum Base Top Case */}
        <div className="h-3.5 sm:h-5 bg-gradient-to-b from-[#2d323e] via-[#20232c] to-[#121419] rounded-b-xl sm:rounded-b-2xl border-t border-[#464c5d]/60 shadow-2xl flex justify-center items-start">
          {/* Notch Opening Lip */}
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#0f1115] rounded-b-md mx-auto" />
        </div>

        {/* Realistic Shadow Cast on the Desk */}
        <div className="w-[94%] mx-auto h-3.5 bg-black/80 blur-md rounded-full mt-0.5" />
      </div>
    </div>
  );
}
