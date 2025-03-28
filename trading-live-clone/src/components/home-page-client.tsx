"use client";

import React, { useState, useEffect } from "react";
import { OnboardingDialog } from "@/components/onboarding-dialog";

interface HomePageClientProps {
  children: React.ReactNode;
}

export default function HomePageClient({ children }: HomePageClientProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // Check if we have shown the dialog before
    const hasShownDialog = localStorage.getItem("tradingLiveDialogShown");

    if (!hasShownDialog) {
      setDialogOpen(true);
      // Mark that we've shown the dialog
      localStorage.setItem("tradingLiveDialogShown", "true");
    }
  }, []);

  return (
    <>
      {children}
      <OnboardingDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
