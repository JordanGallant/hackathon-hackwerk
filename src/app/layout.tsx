import type { Metadata } from "next";
import "./globals.css";
import "./fonts";

export const metadata: Metadata = {
  title: "NL Design System - Next.js",
  description: "Next.js project with NL Design System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="rhc-theme">
        {children}
      </body>
    </html>
  );
}