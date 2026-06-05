import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HybridMonks — Premium Solutions for Modern Businesses",
  description:
    "HybridMonks delivers innovative technology, creative design, and strategic consulting to help your business thrive. Get in touch today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
