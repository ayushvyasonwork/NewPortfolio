import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Kumar Vyas | Software Developer",
  description:
    "Portfolio of Ayush Kumar Vyas — Full-stack developer, SDE Intern at Delhivery, specializing in Node.js, Next.js, Golang, and real-time systems.",
  keywords: [
    "Ayush Kumar Vyas",
    "Software Developer",
    "Full Stack",
    "Next.js",
    "Node.js",
    "Golang",
    "Portfolio",
  ],
  openGraph: {
    title: "Ayush Kumar Vyas | Software Developer",
    description:
      "Full-stack developer specializing in real-time systems, microservices, and AI-powered applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
