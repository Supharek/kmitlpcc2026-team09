"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Card } from "@/components/ui/Card";
import { LoadingState } from "@/components/ui/LoadingState";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { EmptyState } from "@/components/ui/EmptyState";

interface Lead {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  service: string;
  message: string;
  budget: string | null;
  status: "NEW" | "CONTACTED" | "DISCUSSING" | "QUOTATION" | "CLOSED";
  created_at: string;
}

interface AdminStats {
  totalVisits: number;
  rawVisits?: number;
  baseVisits?: number;
  totalLeads: number;
  newLeads: number;
  inProgressLeads: number;
}

const statusOptions = [
  { value: "NEW", label: "ใหม่" },
  { value: "CONTACTED", label: "ติดต่อแล้ว" },
  { value: "DISCUSSING", label: "กำลังพูดคุย" },
  { value: "QUOTATION", label: "เสนอราคา" },
  { value: "CLOSED", label: "ปิดงาน" },
];

const statusBadgeColors: Record<string, string> = {
  NEW: "bg-blue-100 text-blue-800 border-blue-200",
  CONTACTED: "bg-yellow-100 text-yellow-800 border-yellow-200",
  DISCUSSING: "bg-purple-100 text-purple-800 border-purple-200",
  QUOTATION: "bg-orange-100 text-orange-800 border-orange-200",
  CLOSED: "bg-emerald-100 text-emerald-800 border-emerald-200",
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginEmail, setLoginEmail] = useState("admin@appintouch.com");
  const [loginPassword, setLoginPassword] = useState("admin1234");
  const [loginError, setLoginError] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<AdminStats>({
    totalVisits: 0,
    totalLeads: 0,
    newLeads: 0,
    inProgressLeads: 0,
  });
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editStatus, setEditStatus] = useState<string>("");
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");

  // Check login state from sessionStorage
  useEffect(() => {
    const authSession = sessionStorage.getItem("admin_auth");
    if (authSession === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const fetchAdminData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/leads");
      const result = await res.json();
      if (res.ok && result.ok) {
        setStats(result.data.stats);
        setLeads(result.data.leads);
      } else {
        setError(result.error?.message || "ไม่สามารถดึงข้อมูลได้");
      }
    } catch {
      setError("เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchAdminData();
    }
  }, [isAuthenticated, fetchAdminData]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setLoginError("กรุณากรอกอีเมลและรหัสผ่าน");
      return;
    }
    // Simple admin credential gate for demonstration & evaluation
    if (loginPassword.length >= 4) {
      sessionStorage.setItem("admin_auth", "true");
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("รหัสผ่านไม่ถูกต้อง (ต้องมีอย่างน้อย 4 ตัวอักษร)");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_auth");
    setIsAuthenticated(false);
    setSelectedLead(null);
  };

  const handleOpenLead = (lead: Lead) => {
    setSelectedLead(lead);
    setEditStatus(lead.status);
    setUpdateMessage("");
  };

  const handleSaveStatus = async () => {
    if (!selectedLead) return;
    setUpdatingStatus(true);
    setUpdateMessage("");

    try {
      const res = await fetch(`/api/admin/leads/${selectedLead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: editStatus }),
      });
      const result = await res.json();

      if (res.ok && result.ok) {
        setUpdateMessage("อัปเดตสถานะสำเร็จ");
        // Update local state
        setLeads((prev) =>
          prev.map((l) =>
            l.id === selectedLead.id
              ? { ...l, status: editStatus as Lead["status"] }
              : l
          )
        );
        setSelectedLead((prev) =>
          prev ? { ...prev, status: editStatus as Lead["status"] } : null
        );
      } else {
        setUpdateMessage(result.error?.message || "ไม่สามารถอัปเดตสถานะได้");
      }
    } catch {
      setUpdateMessage("เกิดข้อผิดพลาดในการเชื่อมต่อ");
    } finally {
      setUpdatingStatus(false);
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleString("th-TH", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  // Login View
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--brand-bg)] flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md border border-gray-200/80 p-8 sm:p-10">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/brand/logo.svg"
                alt="AppInTouch โลโก้"
                width={180}
                height={40}
                className="h-8 w-auto mx-auto"
              />
            </Link>
            <h1 className="text-2xl font-bold text-[var(--brand-ink)]">
              เข้าสู่ระบบผู้ดูแล
            </h1>
            <p className="text-sm text-[var(--brand-muted)] mt-1.5">
              ระบบจัดการข้อมูลสำหรับทีมงาน App InTouch
            </p>
          </div>

          {loginError && (
            <div className="mb-5 p-3 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-200">
              {loginError}
            </div>
          )}

          <div className="mb-5 p-3.5 rounded-xl bg-red-50/50 border border-red-100 text-xs text-neutral-700">
            <p className="font-bold text-[var(--brand-ink)] mb-1.5 flex items-center gap-1.5">
              <span>🔑</span>
              <span>ข้อมูลสำหรับทดสอบระบบ (Demo Account)</span>
            </p>
            <p><span className="text-neutral-500">อีเมล:</span> <strong className="text-[var(--brand-primary)] font-mono font-semibold ml-1">admin@appintouch.com</strong></p>
            <p className="mt-0.5"><span className="text-neutral-500">รหัสผ่าน:</span> <strong className="text-[var(--brand-primary)] font-mono font-semibold ml-1">admin1234</strong> <span className="text-neutral-400 text-[11px]">(หรือรหัสผ่านใดก็ได้ 4 ตัวขึ้นไป)</span></p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="อีเมล"
              type="email"
              placeholder="admin@appintouch.com"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
            <Input
              label="รหัสผ่าน"
              type="password"
              placeholder="••••••••"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <div className="pt-2">
              <Button type="submit" variant="primary" size="lg" fullWidth>
                เข้าสู่ระบบ
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-xs text-neutral-400">
            <Link href="/" className="text-[var(--brand-primary)] hover:underline">
              ← กลับสู่หน้าหลัก
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard View
  return (
    <div className="min-h-screen bg-[var(--brand-bg)] flex flex-col">
      {/* Dashboard Top Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container-custom h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/brand/logo.svg"
                alt="AppInTouch"
                width={140}
                height={32}
                className="h-7 w-auto"
              />
            </Link>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-red-50 text-[var(--brand-primary)] text-xs font-semibold">
              Admin Dashboard
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={fetchAdminData}>
              รีเฟรชข้อมูล
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              ออกจากระบบ
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 md:py-10">
        <div className="container-custom space-y-8">
          {/* Dashboard Header Text */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--brand-ink)]">
              Admin Dashboard
            </h1>
            <p className="text-sm text-[var(--brand-muted)] mt-1">
              จัดการข้อมูลผู้ติดต่อและติดตามสถานะการติดต่อ
            </p>
          </div>

          {/* Statistics Grid (G7, T3) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <Card className="p-5">
              <p className="text-xs font-medium text-[var(--brand-muted)]">
                ผู้เข้าชมเว็บไซต์ทั้งหมด (Visits)
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[var(--brand-ink)] mt-2">
                {stats.totalVisits.toLocaleString()}
              </p>
              <p className="text-xs text-emerald-600 mt-1">
                {stats.rawVisits !== undefined
                  ? `บันทึกผ่าน site_visits ${stats.rawVisits} ครั้ง (+ฐานเดิม ${stats.baseVisits ?? 1284})`
                  : "บันทึกผ่าน site_visits"}
              </p>
            </Card>

            <Card className="p-5">
              <p className="text-xs font-medium text-[var(--brand-muted)]">
                ข้อมูลติดต่อทั้งหมด (Leads)
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[var(--brand-primary)] mt-2">
                {stats.totalLeads}
              </p>
              <p className="text-xs text-neutral-500 mt-1">จากแบบฟอร์ม Contact</p>
            </Card>

            <Card className="p-5">
              <p className="text-xs font-medium text-[var(--brand-muted)]">
                ข้อมูลใหม่ (New)
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-600 mt-2">
                {stats.newLeads}
              </p>
              <p className="text-xs text-blue-500 mt-1">รอการติดต่อกลับ</p>
            </Card>

            <Card className="p-5">
              <p className="text-xs font-medium text-[var(--brand-muted)]">
                กำลังดำเนินการ
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-purple-600 mt-2">
                {stats.inProgressLeads}
              </p>
              <p className="text-xs text-purple-500 mt-1">ติดต่อ / เสนอราคา</p>
            </Card>
          </div>

          {error && <ErrorMessage message={error} onRetry={fetchAdminData} />}

          {loading ? (
            <LoadingState message="กำลังดึงข้อมูล Leads จากฐานข้อมูล..." />
          ) : (
            /* Lead List & Detail Layout */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Lead Table */}
              <div className={`${selectedLead ? "lg:col-span-7" : "lg:col-span-12"} space-y-4`}>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-[var(--brand-ink)]">
                    รายการข้อมูลผู้ติดต่อ
                  </h2>
                  <span className="text-xs text-[var(--brand-muted)]">
                    ทั้งหมด {leads.length} รายการ
                  </span>
                </div>

                {leads.length === 0 ? (
                  <EmptyState
                    title="ยังไม่มีข้อมูลลูกค้าที่ติดต่อเข้ามา"
                    description="เมื่อมีผู้กรอกแบบฟอร์มจากหน้า Contact ข้อมูลจะแสดงที่นี่โดยอัตโนมัติ"
                  />
                ) : (
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm text-[var(--brand-ink)]">
                        <thead className="bg-gray-50/80 text-xs text-neutral-600 uppercase border-b border-gray-200">
                          <tr>
                            <th className="px-4 py-3 font-semibold">ชื่อ</th>
                            <th className="px-4 py-3 font-semibold">บริการ</th>
                            <th className="px-4 py-3 font-semibold hidden sm:table-cell">วันที่ส่ง</th>
                            <th className="px-4 py-3 font-semibold">สถานะ</th>
                            <th className="px-4 py-3 font-semibold text-right">การจัดการ</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {leads.map((lead) => (
                            <tr
                              key={lead.id}
                              className={`hover:bg-gray-50/80 transition-colors ${
                                selectedLead?.id === lead.id ? "bg-red-50/40" : ""
                              }`}
                            >
                              <td className="px-4 py-3.5">
                                <p className="font-semibold text-[var(--brand-ink)]">{lead.name}</p>
                                {lead.company && (
                                  <p className="text-xs text-[var(--brand-muted)]">{lead.company}</p>
                                )}
                              </td>
                              <td className="px-4 py-3.5">
                                <span className="text-xs bg-gray-100 px-2 py-1 rounded-md text-neutral-700">
                                  {lead.service}
                                </span>
                              </td>
                              <td className="px-4 py-3.5 text-xs text-neutral-500 hidden sm:table-cell">
                                {formatDate(lead.created_at)}
                              </td>
                              <td className="px-4 py-3.5">
                                <span
                                  className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                                    statusBadgeColors[lead.status] || "bg-gray-100 text-gray-800"
                                  }`}
                                >
                                  {statusOptions.find((s) => s.value === lead.status)?.label || lead.status}
                                </span>
                              </td>
                              <td className="px-4 py-3.5 text-right">
                                <button
                                  type="button"
                                  onClick={() => handleOpenLead(lead)}
                                  className="text-xs font-semibold text-[var(--brand-primary)] hover:underline cursor-pointer"
                                >
                                  ดูรายละเอียด
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Lead Detail View */}
              {selectedLead && (
                <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200/90 shadow-md p-6 sticky top-24">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                    <h2 className="text-lg font-bold text-[var(--brand-ink)]">
                      รายละเอียดผู้ติดต่อ
                    </h2>
                    <button
                      type="button"
                      onClick={() => setSelectedLead(null)}
                      className="text-gray-400 hover:text-gray-600 p-1 rounded-md cursor-pointer"
                      aria-label="ปิดหน้ารายละเอียด"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-xs font-medium text-neutral-500">ชื่อ-นามสกุล</p>
                      <p className="font-semibold text-base text-[var(--brand-ink)] mt-0.5">
                        {selectedLead.name}
                      </p>
                    </div>

                    {selectedLead.company && (
                      <div>
                        <p className="text-xs font-medium text-neutral-500">บริษัท / องค์กร</p>
                        <p className="text-[var(--brand-ink)] mt-0.5">{selectedLead.company}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-medium text-neutral-500">อีเมล</p>
                        <a
                          href={`mailto:${selectedLead.email}`}
                          className="text-[var(--brand-primary)] underline mt-0.5 block break-all text-xs sm:text-sm"
                        >
                          {selectedLead.email}
                        </a>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-neutral-500">เบอร์โทรศัพท์</p>
                        <a
                          href={`tel:${selectedLead.phone}`}
                          className="text-[var(--brand-ink)] font-mono mt-0.5 block"
                        >
                          {selectedLead.phone}
                        </a>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-neutral-500">บริการที่สนใจ</p>
                      <p className="text-[var(--brand-ink)] font-medium mt-0.5">
                        {selectedLead.service}
                      </p>
                    </div>

                    {selectedLead.budget && (
                      <div>
                        <p className="text-xs font-medium text-neutral-500">งบประมาณโดยประมาณ</p>
                        <p className="text-[var(--brand-ink)] mt-0.5">{selectedLead.budget}</p>
                      </div>
                    )}

                    <div>
                      <p className="text-xs font-medium text-neutral-500">วันที่ส่งข้อมูล</p>
                      <p className="text-neutral-600 mt-0.5 text-xs">
                        {formatDate(selectedLead.created_at)}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-medium text-neutral-500">รายละเอียดโครงการ</p>
                      <div className="mt-1 p-3.5 rounded-xl bg-gray-50 border border-gray-100 text-neutral-700 leading-relaxed text-xs sm:text-sm max-h-48 overflow-y-auto">
                        {selectedLead.message}
                      </div>
                    </div>

                    {/* Change Status Form */}
                    <div className="pt-4 border-t border-gray-100">
                      <Select
                        label="สถานะ"
                        name="editStatus"
                        options={statusOptions}
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value)}
                      />

                      {updateMessage && (
                        <p
                          className={`mt-2 text-xs font-medium ${
                            updateMessage.includes("สำเร็จ")
                              ? "text-emerald-600"
                              : "text-red-600"
                          }`}
                        >
                          {updateMessage}
                        </p>
                      )}

                      <div className="mt-4">
                        <Button
                          variant="primary"
                          size="md"
                          fullWidth
                          disabled={updatingStatus || editStatus === selectedLead.status}
                          onClick={handleSaveStatus}
                        >
                          {updatingStatus ? "กำลังบันทึก..." : "บันทึกการเปลี่ยนแปลง"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Admin Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-xs text-neutral-400">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-semibold text-neutral-600">App Intouch Admin</p>
          <p>ระบบจัดการข้อมูลสำหรับทีมงาน App Intouch</p>
        </div>
      </footer>
    </div>
  );
}
