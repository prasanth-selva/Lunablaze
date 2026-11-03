import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { LUNABLAZE_DATA } from "@/data/lunablazeData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteDescription = LUNABLAZE_DATA.studio.description;

export const metadata: Metadata = {
  title: {
    default: `${LUNABLAZE_DATA.studio.name} — ${LUNABLAZE_DATA.studio.tagline}`,
    template: `%s · ${LUNABLAZE_DATA.studio.name}`,
  },
  description: siteDescription,
  applicationName: LUNABLAZE_DATA.studio.name,
  keywords: [
    "Lunablaze",
    "innovation studio",
    "AI",
    "web platforms",
    "student-powered",
    "cybersecurity",
    "robotics",
  ],
  authors: [{ name: LUNABLAZE_DATA.studio.name }],
  creator: LUNABLAZE_DATA.studio.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: LUNABLAZE_DATA.studio.name,
    title: `${LUNABLAZE_DATA.studio.name} — ${LUNABLAZE_DATA.studio.tagline}`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${LUNABLAZE_DATA.studio.name} — ${LUNABLAZE_DATA.studio.tagline}`,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#090909] text-[#F5F5F5] font-sans">
        {children}
      </body>
    </html>
  );
}
