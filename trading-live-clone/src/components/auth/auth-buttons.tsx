"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { LoginModal } from "@/components/auth/login-modal";
import { SignupModal } from "@/components/auth/signup-modal";
import { UserDropdown } from "@/components/auth/user-dropdown";
import { useAuth } from "@/lib/auth";

export function AuthButtons() {
  const { user } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleSignupClick = () => {
    setIsSignupOpen(true);
  };

  if (user) {
    return <UserDropdown />;
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="hidden md:inline-flex border-primary text-primary hover:bg-primary/10 hover:text-primary h-9 px-4 text-sm"
          onClick={handleSignupClick}
        >
          Sign Up
        </Button>
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 h-9 px-4 text-sm"
          onClick={handleLoginClick}
        >
          Log In
        </Button>
      </div>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSignupClick={handleSignupClick}
      />
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        onLoginClick={handleLoginClick}
      />
    </>
  );
}
