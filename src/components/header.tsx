import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="h-14 border-b flex items-center justify-between px-4 gap-4 bg-background">
      {/* Logo - Only visible on mobile */}
      <div className="md:hidden flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Icons.Logo className="h-8 w-8" />
        </Link>
      </div>

      {/* Search bar */}
      <div className="flex-1 max-w-md relative hidden sm:block">
        <Input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 h-9 rounded-full text-sm"
        />
        <Icons.SearchIcon className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>

      {/* Mobile search icon */}
      <Button variant="ghost" size="icon" className="sm:hidden h-9 w-9">
        <Icons.SearchIcon className="h-5 w-5" />
      </Button>

      <div className="flex items-center gap-1 sm:gap-3">
        <ThemeToggle />

        {/* Language selector - Hidden on mobile */}
        <div className="hidden sm:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1 text-sm h-9">
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
                  className="h-4 w-4"
                >
                  <path d="m5 8 6 6 6-6" />
                </svg>
                English
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
              <DropdownMenuItem>中文</DropdownMenuItem>
              <DropdownMenuItem>日本語</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Menu - Hidden on mobile */}
        <div className="hidden sm:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
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
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Help Center</DropdownMenuItem>
              <DropdownMenuItem>Feedback</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Creator Studio - Hidden on small screens */}
        <Button
          variant="outline"
          size="sm"
          className="border-primary text-primary hover:bg-primary/10 hover:text-primary h-9 px-4 text-sm hidden md:inline-flex"
        >
          Creator Studio
        </Button>

        {/* Login button */}
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 h-9 px-4 text-sm"
        >
          Log In
        </Button>
      </div>
    </header>
  );
}
