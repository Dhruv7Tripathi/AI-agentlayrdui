"use client"
import Image from "next/image"
import Link from "next/link"
import { LogoCarouselDemo } from "@/components/icons"
import { WorldMapDemo } from "@/components/map"
import Testimonials from "@/components/testimonials"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { RadialOrbitalTimelineDemo } from "@/components/orbital"
import ChatMessageListDemo from "@/components/chat"
import Faq from "./faq"
import { Cta } from "./cta"
import VaultLock from "./ui/vault-lock"
import { Pricing } from "./ui/pricing"

export default function LandingPage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="bg-white dark:bg-black text-neutral-900 dark:text-white">
      {/* Hero Section */}
      <section className="min-h-[80vh] sm:min-h-[85vh] lg:min-h-screen flex flex-col justify-center text-center px-4 sm:px-6 md:px-10 lg:px-0 pt-16 sm:pt-20 md:pt-24">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 py-6 sm:py-8 md:py-10 lg:py-12 mt-6 sm:mt-8 md:mt-10 lg:mt-12">

          <h1 className="bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 dark:to-neutral-100/30 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-6xl mx-auto px-4">
            Automate Smarter Scale Faster
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[750px] mx-auto px-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro eveniet dolore earum nesciunt fuga,
            repudiandae, inventore nisi labore, aperiam error itaque.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap mt-5 sm:mt-6 gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 md:mb-12 px-4">
            <Link href="/#">
              <Button className="bg-blue-700 text-white text-sm sm:text-base md:text-lg px-5 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
                Get Started
              </Button>
            </Link>
            <motion.div className="w-full sm:w-auto">
              <Button
                size="lg"
                className="text-sm sm:text-base hover:bg-white hover:dark:bg-black bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 group w-full sm:w-auto"
              >
                Learn More
                <motion.span whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <ChevronRight className="size-4 sm:size-5 mt-0.5 text-blue-500 transition-transform group-hover:translate-x-2" />
                </motion.span>
              </Button>
            </motion.div>
          </div>

          {/* Subtext */}
          <motion.div
            className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 px-4"
            variants={itemVariants}
          >
            <p className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <span className="text-blue-400">✓</span> No credit card
              <span className="text-blue-400">✓</span> 14-day trial
              <span className="text-blue-400">✓</span> Cancel anytime
            </p>
          </motion.div>

        </div>
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative py-4 sm:py-6 md:py-8 mx-auto max-w-7xl w-full px-2 sm:px-4"
        >
          <div className="relative z-10 w-full h-[200px] sm:h-[300px] md:h-[500px] lg:h-[800px] rounded-xl sm:rounded-2xl bg-white dark:bg-black backdrop-blur-md overflow-hidden">
            <Image src="/dashboard1.png" alt="AI-powered SaaS Dashboard" fill
              className="rounded-2xl sm:rounded-3xl p-1 sm:p-2 object-cover"
              priority />
            <div className="absolute bottom-0 left-0 h-[100px] sm:h-[150px] md:h-[250px] lg:h-[300px] w-full bg-gradient-to-t dark:from-neutral-950 from-white via-transparent to-transparent z-20" />
          </div>
        </motion.div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-2 sm:px-4 md:px-6 flex flex-col justify-center text-center">
        <h2 className="bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 dark:to-neutral-100/30 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-neutral-500 text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-[800px] mx-auto mt-3 sm:mt-4 px-4">
          Join the ranks of forward-thinking companies already <br className="hidden sm:block" /> leveraging our AI technology
        </p>
        <div className="mt-6 sm:mt-8 flex justify-center px-2">
          <LogoCarouselDemo />
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-2 sm:px-4 md:px-6 lg:px-8 max-w-8xl mx-auto">
        <div className="flex flex-col items-center text-center">

          <h2 className="bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 dark:to-neutral-100/30 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight max-w-6xl mx-auto px-4">
            Features & Benefits
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 text-center max-w-[90%] sm:max-w-[550px] mx-auto mt-3 sm:mt-4 px-4">
            Simplify automation with cutting-edge AI tools built for teams, freelancers, and enterprises alike.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-12 md:mt-16 px-2 sm:px-4 md:px-6">
          <FeatureCard component={<RadialOrbitalTimelineDemo />} />
          <FeatureCard component={<ChatMessageListDemo />} />
          <FeatureCard component={
            <VaultLock
              cardTitle="Vault Access"
              cardDescription="Smooth and secure login experience, backed by encrypted access and seamless visual transitions"
            />} />
          <FeatureCard component={<WorldMapDemo />} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 px-2 sm:px-4">
        <div className="max-w-8xl mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16 md:py-20 px-2 sm:px-4 mb-12 sm:mb-16 md:mb-20 relative z-10">
        <div className="w-full lg:max-w-7xl lg:mx-auto">
          <div className="min-h-[600px] sm:min-h-[700px] md:h-[800px] mb-20 sm:mb-24 md:mb-30 mt-4 sm:mt-6 md:mt-8 mx-auto sm:ml-2 md:ml-4 lg:ml-24 rounded-lg">
            <Pricing
              plans={Plans}
              title="Transparent Pricing"
              description="Choose the plan that works for you. All plans include access to our platform, lead generation tools, and dedicated support."
            />
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="relative py-12 sm:py-16 md:py-20 px-2 sm:px-4">
        <Faq />
      </section>
      <section className="pb-12 sm:pb-16 md:pb-20 min-h-[60vh] sm:min-h-[80vh] md:min-h-screen items-center flex justify-center px-2 sm:px-4">
        <Cta />
      </section>
    </main>
  )
}

const Plans = [
  {
    name: "STARTER",
    price: "50",
    yearlyPrice: "40",
    period: "per month",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response time",
      "Limited API access",
      "Community support",
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Start Free Trial",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response time",
      "Full API access",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "299",
    yearlyPrice: "239",
    period: "per month",
    features: [
      "Everything in Professional",
      "Custom solutions",
      "Dedicated account manager",
      "1-hour support response time",
      "SSO Authentication",
      "Advanced security",
      "Custom contracts",
      "SLA agreement",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];


function FeatureCard({ component }: { component: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 ring dark:ring-neutral-700 ring-neutral-300 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="flex flex-col items-center justify-center min-h-[250px] sm:min-h-[280px] p-4 sm:p-6">
        {component}
      </div>
    </div>
  )
}