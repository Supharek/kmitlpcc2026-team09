import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import { PDPAConsentModal } from "@/components/common/PDPAConsentModal";
import { VisitorProvider } from "@/components/analytics/VisitorContext";

const promptFont = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AppInTouch — พัฒนาโซลูชันดิจิทัลที่ตอบโจทย์ธุรกิจของคุณ",
  description: "เราพัฒนาเว็บไซต์ Web Application และ Mobile Application ที่ออกแบบให้เหมาะกับความต้องการของแต่ละธุรกิจ",
  icons: {
    icon: "/brand/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={promptFont.variable}>
      <body className="min-h-screen bg-[var(--brand-bg)] text-[var(--brand-ink)] antialiased">
        <VisitorProvider>
          {children}
          <PDPAConsentModal />
        </VisitorProvider>
      </body>
    </html>
  );
}
