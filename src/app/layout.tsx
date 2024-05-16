import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./_components/navbar";
import Script from "next/script";
import Head from "next/head";

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
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JG0KDG7S75"
        ></Script>
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-JG0KDG7S75');
          `}
        </Script>
      </Head>
      <body className={cn("", inter.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
