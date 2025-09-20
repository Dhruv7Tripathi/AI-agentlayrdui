import LandingPage from "@/components/landing-page";
export const metadata = {
  title: "AI Agents for Businesses | Intelligent Automation",
  description:
    "Empower your business with AI agents designed for automation, growth, and efficiency. Trusted by leaders. No credit card required.",
  keywords: ["AI agents", "business automation", "intelligent software", "SaaS AI", "enterprise AI"],
  openGraph: {
    title: "AI Agents for Business | Empower with Intelligence",
    description:
      "Scale your business using cutting-edge AI agents built for real-world automation.",
    url: "https://layrdui.dhruvtripathi.in",
    siteName: "AI Empower",
    images: [
      {
        url: "https://layrdui.dhruvtripathi.in/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Empower | Intelligent Agents for Businesses",
    description:
      "Join top companies using our AI solutions for business automation and growth.",
    images: ["https://layrdui.dhruvtripathi.in/og-image.png"],
  },
};
export default function Home() {

  return (
    <LandingPage />
  )
}
