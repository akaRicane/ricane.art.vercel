import { Footer } from "@/components/features/Footer";
import { Header } from "@/components/features/Header";
import { ThemeHandler } from "@/components/theme/ThemeHandler";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricane.art/projects",
  description: "Next.js application for my projects",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeHandler
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header></Header>
            {children}
            <Footer></Footer>
          </ThemeHandler>
        </body>
      </html>
    </>
  );
}
