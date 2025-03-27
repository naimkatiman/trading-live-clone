import React from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto px-4 py-4">
          {/* Mobile nav - visible only on mobile */}
          <div className="md:hidden fixed bottom-4 left-4 z-50">
            <MobileNav />
          </div>

          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
