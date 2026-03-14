import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thilak Raj Murugan — Backend & Distributed Systems Engineer",
  description:
    "Backend engineer specializing in distributed systems, databases, and ML infrastructure. 5+ years building scalable systems at Vimeo, PropertyGuru, and more.",
  keywords: [
    "Backend Engineer",
    "Distributed Systems",
    "ML Infrastructure",
    "Data Engineering",
    "Systems Engineer",
  ],
  authors: [{ name: "Thilak Raj Murugan" }],
  openGraph: {
    title: "Thilak Raj Murugan — Backend & Distributed Systems Engineer",
    description: "Building scalable infrastructure and distributed systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
