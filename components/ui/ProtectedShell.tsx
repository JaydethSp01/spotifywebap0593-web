"use client";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/components/ui/Sidebar";
import { AppShell } from "@/components/ui/AppShell";
import { AuthGate } from "@/components/ui/AuthGate";

export function ProtectedShell({
  items,
  title = "Panel",
  children,
}: {
  items: NavItem[];
  title?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  if (pathname === "/login") return <AuthGate>{children}</AuthGate>;
  return (
    <AuthGate>
      <AppShell items={items} title={title}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <div className="w-full max-w-7xl p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </div>
      </AppShell>
    </AuthGate>
  );
}

export default ProtectedShell;