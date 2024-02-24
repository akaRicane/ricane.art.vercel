import { ThemeHandler } from "@/components/theme/ThemeHandler";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ricane.art website",
  description: "Next.js application for my projects",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="h-dvh">
          <ThemeHandler
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeHandler>
        </body>
      </html>
    </>
  );
}
