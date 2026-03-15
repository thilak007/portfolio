import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
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
    images: ['/logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialTheme = 'dark';

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased text-zinc-900 dark:text-zinc-100`}>
        <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
