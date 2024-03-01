import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Header from "@/components/main-page/header";
import "@/styles/globals.css";
import ActiveSectionContextProvider from "@/components/providers/active-section-context";
import Footer from "@/components/main-page/footer";
import ThemeToogle from "@/components/theme-toggle";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Verzynx | Personal Portofolio",
  description: "Verrill is a fullstack developer that focused in react",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={cn(
          "relative bg-background bg-gray-50 pt-28 font-sans text-gray-950 antialiased dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36",
          fontSans.variable,
        )}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Analytics />
            <Footer />
            <Toaster />
            <ThemeToogle />
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
