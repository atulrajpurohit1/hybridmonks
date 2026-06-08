import type { Metadata } from "next";
import { Yuji_Boku } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const brush = Yuji_Boku({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-brush",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "HybridMonks | Ink-Wash Digital Monastery",
  description: "A quiet studio for deliberate digital craft.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${brush.variable} scroll-smooth`}>
      <body className="bg-paper text-ink relative font-body">
        <div className="fixed inset-0 scroll-atmosphere pointer-events-none z-0" />
        <div className="fixed inset-0 paper-grain pointer-events-none z-0" />
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
