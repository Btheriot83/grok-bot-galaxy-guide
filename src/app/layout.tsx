import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Grok Bot Galaxy Guide",
    template: "%s · Galaxy Guide",
  },
  description:
    "Public skim pack for Grok Bot Galaxy (Sep 15–17, 2026): ship workflows, steals for one-person/AZMDR ops, Day 1–3 notes, sources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
