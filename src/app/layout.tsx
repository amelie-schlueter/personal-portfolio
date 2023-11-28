import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import { PT_Serif } from "next/font/google";

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

// user pt serif from google
const pt_serif = PT_Serif({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amelie - Software Engineer",
  description: "Amelie Schlüter - Software Engineer & Designer ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={soehne.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="z-[100]">
            <Topbar />

            <Navbar />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
