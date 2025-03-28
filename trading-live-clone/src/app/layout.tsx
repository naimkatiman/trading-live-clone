import "@/app/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/lib/auth";

export const metadata: Metadata = {
  title: "TradingLive - Financial Education via Community Live Streams",
  description: "Trading.live is the world's first international financial live learning community. Trading.live covers knowledge including Forex, stocks, cryptos live streams, video tutorials, and e-books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
