"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface MobileNavItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  tag?: React.ReactNode;
  onClick?: () => void;
}

const MobileNavItem = ({ href, icon, text, isActive, tag, onClick }: MobileNavItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-foreground/70 hover:bg-muted hover:text-primary"
      )}
      onClick={onClick}
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

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 sm:max-w-xs">
        <div className="px-7">
          <Link href="/" className="flex items-center gap-2 mt-4 mb-8">
            <Icons.Logo />
            <span className="font-medium text-lg">trading.live</span>
          </Link>
        </div>

        <nav className="grid gap-1 px-2">
          <MobileNavItem
            href="/"
            icon={<Icons.HomeIcon className="h-5 w-5" />}
            text="Home"
            isActive
            onClick={() => setOpen(false)}
          />
          <MobileNavItem
            href="/live"
            icon={<Icons.VideoIcon className="h-5 w-5" />}
            text="Live"
            onClick={() => setOpen(false)}
          />
          <MobileNavItem
            href="/videos"
            icon={<Icons.VideoIcon className="h-5 w-5" />}
            text="Videos"
            onClick={() => setOpen(false)}
          />
          <MobileNavItem
            href="/ebooks"
            icon={<Icons.BookIcon className="h-5 w-5" />}
            text="E-books"
            onClick={() => setOpen(false)}
          />
          <MobileNavItem
            href="/lecturers"
            icon={<Icons.GraduationCapIcon className="h-5 w-5" />}
            text="Lecturers"
            onClick={() => setOpen(false)}
          />
          <MobileNavItem
            href="/awards"
            icon={<Icons.AwardIcon className="h-5 w-5" />}
            text="Awards"
            tag={<Icons.HotTag />}
            onClick={() => setOpen(false)}
          />
          <MobileNavItem
            href="/event"
            icon={<Icons.CalendarIcon className="h-5 w-5" />}
            text="Event"
            onClick={() => setOpen(false)}
          />
          <MobileNavItem
            href="/community"
            icon={<Icons.UsersIcon className="h-5 w-5" />}
            text="Community"
            tag={<Icons.NewTag />}
            onClick={() => setOpen(false)}
          />
        </nav>

        <div className="mt-6 pt-6 border-t border-border mx-2">
          <div className="grid gap-1 px-2">
            <Link
              href="/about"
              className="block px-3 py-2 text-sm text-foreground/60 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/agreement"
              className="block px-3 py-2 text-sm text-foreground/60 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              User Agreement
            </Link>
            <Link
              href="/privacy"
              className="block px-3 py-2 text-sm text-foreground/60 hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
