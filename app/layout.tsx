import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeHandler } from "@/src/theme/ThemeHandler";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ricane.art/projects",
  description: "Next.js application for my projects",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black min-h-[100dvh]">
        <ThemeHandler attribute="class">{children}</ThemeHandler>
      </body>
    </html>
  );
}
