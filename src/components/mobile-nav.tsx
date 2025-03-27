"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  className?: string;
}

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  tag?: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ href, icon, text, isActive, tag, onClick }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 p-3 rounded-lg text-sm font-medium transition-colors",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-muted hover:text-primary"
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          "shrink-0",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
      >
        {icon}
      </span>
      <span>{text}</span>
      {tag && <span className="ml-auto">{tag}</span>}
    </Link>
  );
};

export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("md:hidden", className)}
          aria-label="Open menu"
        >
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
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 pt-10 w-64">
        <div className="px-3 mb-6">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Icons.Logo />
            <span className="font-medium text-lg">trading.live</span>
          </Link>
        </div>

        <nav className="space-y-0.5 px-2">
          <NavItem
            href="/"
            icon={<Icons.HomeIcon className="h-5 w-5" />}
            text="Home"
            isActive
            onClick={() => setOpen(false)}
          />
          <NavItem
            href="/live"
            icon={<Icons.VideoIcon className="h-5 w-5" />}
            text="Live"
            onClick={() => setOpen(false)}
          />
          <NavItem
            href="/videos"
            icon={<Icons.VideoIcon className="h-5 w-5" />}
            text="Videos"
            onClick={() => setOpen(false)}
          />
          <NavItem
            href="/ebooks"
            icon={<Icons.BookIcon className="h-5 w-5" />}
            text="E-books"
            onClick={() => setOpen(false)}
          />
          <NavItem
            href="/lecturers"
            icon={<Icons.GraduationCapIcon className="h-5 w-5" />}
            text="Lecturers"
            onClick={() => setOpen(false)}
          />
          <NavItem
            href="/awards"
            icon={<Icons.AwardIcon className="h-5 w-5" />}
            text="Awards"
            tag={<Icons.HotTag />}
            onClick={() => setOpen(false)}
          />
          <NavItem
            href="/event"
            icon={<Icons.CalendarIcon className="h-5 w-5" />}
            text="Event"
            onClick={() => setOpen(false)}
          />
          <NavItem
            href="/community"
            icon={<Icons.UsersIcon className="h-5 w-5" />}
            text="Community"
            tag={<Icons.NewTag />}
            onClick={() => setOpen(false)}
          />
        </nav>

        <div className="mt-8 pt-4 border-t px-2">
          <div className="flex gap-2 mb-4">
            <Button className="flex-1 h-9" size="sm">Log In</Button>
            <Button className="flex-1 h-9" variant="outline" size="sm">Sign Up</Button>
          </div>
          <nav className="space-y-0.5 text-sm">
            <Link
              href="/about"
              className="block px-3 py-2 text-muted-foreground hover:text-primary"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/agreement"
              className="block px-3 py-2 text-muted-foreground hover:text-primary"
              onClick={() => setOpen(false)}
            >
              User Agreement
            </Link>
            <Link
              href="/privacy"
              className="block px-3 py-2 text-muted-foreground hover:text-primary"
              onClick={() => setOpen(false)}
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
