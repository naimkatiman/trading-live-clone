"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  tag?: React.ReactNode;
}

const NavItem = ({ href, icon, text, isActive, tag }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-foreground/70 hover:bg-muted hover:text-primary"
      )}
    >
      <span
        className={cn(
          "shrink-0",
          isActive ? "text-primary" : "text-foreground/50"
        )}
      >
        {icon}
      </span>
      <span>{text}</span>
      {tag && <span className="ml-auto">{tag}</span>}
    </Link>
  );
};

export function Sidebar() {
  return (
    <div className="w-56 border-r bg-background h-full">
      <div className="py-4 px-2 flex flex-col gap-1 h-full">
        <div className="px-3 pb-4">
          <Link href="/" className="flex items-center gap-2">
            <Icons.Logo />
            <span className="font-medium text-lg">trading.live</span>
          </Link>
        </div>

        <nav className="space-y-0.5">
          <NavItem
            href="/"
            icon={<Icons.HomeIcon className="h-5 w-5" />}
            text="Home"
            isActive
          />
          <NavItem
            href="/live"
            icon={<Icons.VideoIcon className="h-5 w-5" />}
            text="Live"
          />
          <NavItem
            href="/videos"
            icon={<Icons.VideoIcon className="h-5 w-5" />}
            text="Videos"
          />
          <NavItem
            href="/ebooks"
            icon={<Icons.BookIcon className="h-5 w-5" />}
            text="E-books"
          />
          <NavItem
            href="/lecturers"
            icon={<Icons.GraduationCapIcon className="h-5 w-5" />}
            text="Lecturers"
          />
          <NavItem
            href="/awards"
            icon={<Icons.AwardIcon className="h-5 w-5" />}
            text="Awards"
            tag={<Icons.HotTag />}
          />
          <NavItem
            href="/event"
            icon={<Icons.CalendarIcon className="h-5 w-5" />}
            text="Event"
          />
          <NavItem
            href="/community"
            icon={<Icons.UsersIcon className="h-5 w-5" />}
            text="Community"
            tag={<Icons.NewTag />}
          />
        </nav>

        <div className="mt-auto pt-4 border-t border-border">
          <nav className="space-y-0.5 text-sm">
            <Link href="/about" className="block px-3 py-2 text-foreground/60 hover:text-primary">
              About Us
            </Link>
            <Link href="/agreement" className="block px-3 py-2 text-foreground/60 hover:text-primary">
              User Agreement
            </Link>
            <Link href="/privacy" className="block px-3 py-2 text-foreground/60 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/disclosure" className="block px-3 py-2 text-foreground/60 hover:text-primary">
              Risk Disclosure
            </Link>
            <Link href="/partner" className="block px-3 py-2 text-foreground/60 hover:text-primary">
              Partner Program Agreement
            </Link>
            <Link href="/guidelines" className="block px-3 py-2 text-foreground/60 hover:text-primary">
              Community Guidelines
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
