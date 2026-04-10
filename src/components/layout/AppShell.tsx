import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type AppShellProps = {
  children: ReactNode;
  /** عرض عمود جانبي بجانب المحتوى الرئيسي (مثلاً في الصفحة الرئيسية أو المقال) */
  sidebar?: ReactNode;
};

export function AppShell({ children, sidebar }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {sidebar ? (
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8 lg:py-10">
            <div className="min-w-0">{children}</div>
            <aside className="min-w-0 space-y-6 lg:pt-1">{sidebar}</aside>
          </div>
        ) : (
          <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
            {children}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
