import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <select
                className="bg-gray-800 border border-gray-700 rounded text-sm p-1"
                defaultValue="english"
              >
                <option value="english">English</option>
                <option value="spanish">Español</option>
                <option value="french">Français</option>
                <option value="chinese">中文</option>
                <option value="japanese">日本語</option>
              </select>
            </div>

            <div className="flex space-x-4 mb-4">
              <Link href="/about">
                <span className="text-sm text-gray-400 hover:text-white">About Us</span>
              </Link>
              <Link href="/agreement">
                <span className="text-sm text-gray-400 hover:text-white">User Agreement</span>
              </Link>
              <Link href="/privacy">
                <span className="text-sm text-gray-400 hover:text-white">Privacy Policy</span>
              </Link>
            </div>

            <div className="flex space-x-4 mb-4">
              <Link href="/disclosure">
                <span className="text-sm text-gray-400 hover:text-white">Risk Disclosure</span>
              </Link>
              <Link href="/partner">
                <span className="text-sm text-gray-400 hover:text-white">Partner Program Agreement</span>
              </Link>
            </div>

            <div className="flex space-x-4">
              <Link href="/guidelines">
                <span className="text-sm text-gray-400 hover:text-white">Community Guidelines</span>
              </Link>
              <Link href="/help">
                <span className="text-sm text-gray-400 hover:text-white">Help Center</span>
              </Link>
              <Link href="/feedback">
                <span className="text-sm text-gray-400 hover:text-white">Feedback</span>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              App Store
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
              Android
            </a>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-4" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-gray-500">
            © 2023 TradingLive Limited. All Rights Reserved.
          </p>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Trading.live shall make every effort to ensure that the website includes both data that we believe to be reliable and all of our investment advice. Any opinions, charts, messages, news, research, analyses, prices, or other information contained on this Website are provided as general market information for educational and entertainment purposes only, and do not constitute investment advice. Trading.live shall not be liable for any loss or damage which may arise directly or indirectly from use of or reliance on such information.
        </p>
      </div>
    </footer>
  );
}
