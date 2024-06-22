import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./_components/navbar";
import Script from "next/script";

const inter = Inter({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://berserksaga.xyz"),
  alternates: {
    canonical: "https://berserksaga.xyz",
  },
  title: "Chinmay's Portfolio",
  description:
    "Experienced Front-End Developer skilled in HTML, CSS, JavaScript, and modern frameworks, delivering intuitive and responsive web experiences.",

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
      <Script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TKDVMH58');
          `}
      </Script>

      <body className={cn("", inter.className)}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TKDVMH58"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
