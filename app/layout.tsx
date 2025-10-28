import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Enhanced SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://ai-agentlayrdui.vercel.app"),
  title: {
    default: "AI Agent - Landing Page Template | Built by LayrdUI",
    template: "%s | LayrdUI",
  },
  description:
    "AI Agent is a flexible open-source landing page template built with Next.js, Tailwind CSS, and TypeScript by LayrdUI. Ideal for building AI SaaS, tools, or startups quickly.",
  keywords: [
    "AI Agent template",
    "Next.js landing page",
    "LayrdUI",
    "Tailwind CSS",
    "TypeScript",
    "AI SaaS template",
    "open source",
    "landing page template",
  ],
  authors: [
    { name: "LayrdUI", url: "https://layrdui.vercel.app" },
    { name: "Dhruv Tripathi", url: "https://github.com/dhruv7tripathi" },
  ],
  creator: "LayrdUI",
  publisher: "LayrdUI",
  openGraph: {
    title: "AI Agent - Next.js Landing Page Template by LayrdUI",
    description:
      "A modern, open-source Next.js template for building AI platforms and landing pages. Built with Tailwind CSS, TypeScript, and LayrdUI components.",
    url: "https://layrdui.vercel.app/templates/ai-agent",
    siteName: "LayrdUI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Agent Template by LayrdUI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent - Landing Page Template | Built by LayrdUI",
    description:
      "Build stunning AI agent platforms fast with this open-source Next.js template by LayrdUI.",
    creator: "@LayrdUI",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://layrdui.vercel.app/templates/ai-agent",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-white dark:bg-black
 ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
