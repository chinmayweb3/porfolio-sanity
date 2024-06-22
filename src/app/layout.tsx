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
  metadataBase: new URL("https://berserksaga.xyz"),
  title: "Chinmay's Portfolio",
  description:
    "Experienced Front-End Developer skilled in HTML, CSS, JavaScript, and modern frameworks, delivering intuitive and responsive web experiences.",
  verification: {
    google: "_LcopblLE43Q7imQS6LpaPPNvetIF0Bgh92uJr0yqLU",
  },
  keywords: ["portfolio", "chinmay suryavanshi"],
  authors: { name: "chinmay suryavanshi", url: "https://berserksaga.xyz" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-682E63X3P2"
      ></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-682E63X3P2');
          `}
      </Script>
      <head>
        <meta
          name="google-site-verification"
          content="_LcopblLE43Q7imQS6LpaPPNvetIF0Bgh92uJr0yqLU"
        />
      </head>
      <body className={cn("", inter.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
