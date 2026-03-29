import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Italiano A1 - Master Basic Italian",
  description: "Learn Italian A1 with 10 structured lessons, interactive quizzes, and vocabulary review.",
  metadataBase: new URL("https://italian-a1.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Italiano A1 - Master Basic Italian",
    description: "Learn Italian A1 with 10 structured lessons, interactive quizzes, and vocabulary review.",
    url: "/",
    siteName: "Italiano A1",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Learning Italiano A1",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Italiano A1 - Master Basic Italian",
    description: "Learn Italian A1 with 10 structured lessons, interactive quizzes, and vocabulary review.",
    site: "@italiano_a1",
    creator: "@naijawebmaster",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
