import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Long Property Management — Owner-First Property Management + Maintenance | Erie, PA",
  description: "Owner-first property management with built-in maintenance for Erie, PA rentals. Snow removal, lawn care, and repairs handled with clear approval rules.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} ${inter.variable} antialiased`}>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
