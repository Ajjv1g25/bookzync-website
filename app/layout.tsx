import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BookZync",
    template: "%s · BookZync",
  },
  description:
    "BookZync gives service businesses an AI that answers every chat, captures every lead, and books appointments 24/7 — across your website, social DMs, and SMS. Built for dental clinics, medical practices, salons, and gyms.",
  keywords: [
    "AI chat assistant",
    "AI lead capture",
    "appointment booking AI",
    "dental booking chatbot",
    "salon booking AI",
    "gym lead capture",
    "medical chat AI",
    "website chatbot for clinics",
  ],
  authors: [{ name: "BookZync" }],
  metadataBase: new URL("https://bookzync.com"),
  openGraph: {
    title: "BookZync — Smarter front desk. Fuller calendar.",
    description:
      "An AI that answers every chat, captures every lead, and books appointments 24/7.",
    url: "https://bookzync.com",
    siteName: "BookZync",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BookZync — Smarter front desk. Fuller calendar.",
    description:
      "An AI that answers every chat, captures every lead, and books appointments 24/7.",
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1e" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-bg text-text antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
