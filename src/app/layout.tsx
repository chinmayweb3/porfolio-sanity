import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./_components/navbar";

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chinmay's Portfolio",
  description:
    "Experienced Front-End Developer skilled in HTML, CSS, JavaScript, and modern frameworks, delivering intuitive and responsive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("", inter.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
