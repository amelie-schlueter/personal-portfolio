import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import { PT_Serif } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { CommandLine } from "@/components/CommandLine";
import { Toaster } from "@/components/ui/sonner";

const soehne = localFont({
  src: [
    {
      path: "./fonts/TestSöhne-Leicht.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TestSöhne-Buch.otf",
      weight: "500",
      style: "medium",
    },

    {
      path: "./fonts/TestSöhne-Kräftig.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/TestSöhne-Halbfett.otf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Amelie - Creative Developer",
  description: "Amelie Schlüter - Creative Developer & Designer ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/profile.png" />
      </Head>
      <body className={soehne.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {/* <Topbar /> */}
          <div className="">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
