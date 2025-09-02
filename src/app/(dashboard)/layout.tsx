import DashboardHeader from "@/components/shared/dashboard-header/DashboardHeader";
import DashboardSidebar from "@/components/shared/dashboard-sidebar/DashboardSidebar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex ">
      <aside>
        <DashboardSidebar />
      </aside>
      <section className="bg-[#F1F4F9] flex-1 h-screen overflow-auto pl-2">
        <nav className="sticky top-0">
          <DashboardHeader />
        </nav>
        <section className="pt-4 min-h-[calc(100vh-84px)] overflow-auto pl-2">
          {" "}
          {children}
        </section>
      </section>
    </main>
  );
}
