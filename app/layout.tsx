import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import dynamic from "next/dynamic";
import "./globals.css";

const SmartsuppChat = dynamic(() => import("@/components/SmartsuppChat"));

/* ── Fonts ────────────────────────────────────────────────── */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ── Metadata ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "First Region Bank — Premium Digital Banking",
    template: "%s | First Region Bank",
  },
  description:
    "Experience premium digital banking with First Region Bank. Secure accounts, intelligent transfers, multi-currency support, and 24/7 dedicated support.",
  keywords: [
    "First Region Bank",
    "digital banking",
    "online banking",
    "premium banking",
    "multi-currency",
    "secure banking",
  ],
  authors: [{ name: "First Region Bank" }],
  creator: "First Region Bank",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "First Region Bank",
    title: "First Region Bank — Premium Digital Banking",
    description:
      "Experience premium digital banking with First Region Bank. Secure accounts, intelligent transfers, multi-currency support, and 24/7 dedicated support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "First Region Bank — Premium Digital Banking",
    description:
      "Experience premium digital banking with First Region Bank. Secure accounts, intelligent transfers, multi-currency support, and 24/7 dedicated support.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

/* ── Root Layout ──────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-bg-base text-text-primary font-sans antialiased">
        {children}
        <SmartsuppChat />
        <Toaster
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            style: {
              background: "var(--color-bg-elevated)",
              color: "var(--color-text-primary)",
              border: "1px solid var(--color-border-muted)",
            },
          }}
        />
      </body>
    </html>
  );
}
