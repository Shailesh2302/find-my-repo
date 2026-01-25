import Navbar from "@/components/dashboard/Navbar";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col bg-background text-foreground-50">
      {/* Header */}
      <header className="h-14 border-b border-white/10 flex items-center px-6 shrink-0">
        Header
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-foreground-950 p-4 shrink-0">
          <Navbar />
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
