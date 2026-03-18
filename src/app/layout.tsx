import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Computer Science",
  description: "12th Computer Science Learning Portal - Tamil Nadu State Board. Interactive learning with gamification, quizzes, and flashcards.",
  keywords: ["Computer Science", "12th Standard", "Tamil Nadu State Board", "Learning", "Education", "Programming"],
  authors: [{ name: "Computer Science Portal" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Computer Science",
    description: "12th Computer Science Learning Portal - Tamil Nadu State Board",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Computer Science",
    description: "12th Computer Science Learning Portal - Tamil Nadu State Board",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
