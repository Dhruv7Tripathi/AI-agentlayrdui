"use client"
import Image from "next/image"
import Link from "next/link"
import { LogoCarouselDemo } from "@/components/icons"
import { WorldMapDemo } from "@/components/map"
import { PricingBasic } from "@/components/Pricing"
import Testimonials from "@/components/testimonials"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { CardStackDemo } from "@/components/cards"
import { RadialOrbitalTimelineDemo } from "@/components/orbital"
import { ChatMessageListDemo } from "@/components/chat"
import Faq from "./faq"
import { Cta } from "./cta"
import VaultLock from "./ui/vault-lock"

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
      <section className="min-h-screen flex flex-col justify-center text-center px-4 sm:px-6 md:px-10 lg:px-0 pt-24">
        <div className="lg:mb-20 lg:py-12 lg:mt-12">

          <h1 className="bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 dark:to-neutral-100/30 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-medium leading-tight max-w-6xl mx-auto">
            Automate Smarter Scale Faster
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 mt-4 text-base sm:text-lg max-w-[750px] mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro eveniet dolore earum nesciunt fuga,
            repudiandae, inventore nisi labore, aperiam error itaque.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap mt-6 gap-4 justify-center mb-12">
            <Link href="/#">
              <Button className="bg-blue-700 text-white text-base sm:text-lg px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </Button>
            </Link>
            <motion.div>
              <Button
                size="lg"
                className="text-base hover:bg-white hover:dark:bg-black bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 group"
              >
                Learn More
                <motion.span whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <ChevronRight className="size-5 mt-0.5 text-blue-500 transition-transform group-hover:translate-x-2" />
                </motion.span>
              </Button>
            </motion.div>
          </div>

          {/* Subtext */}
          <motion.div
            className="text-sm text-gray-800 dark:text-gray-200"
            variants={itemVariants}
          >
            <p className="flex flex-wrap justify-center gap-4">
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
          className="relative py-8 mx-auto max-w-7xl w-full px-4"
        >
          <div className="relative z-10 w-full h-[250px] sm:h-[400px] md:h-[600px] lg:h-[800px] rounded-2xl bg-white dark:bg-black backdrop-blur-md overflow-hidden">
            <Image src="/dashboard.png" alt="AI-powered SaaS Dashboard" fill
              className="rounded-3xl p-2 object-cover"
              priority />
            <div className="absolute bottom-0 left-0 h-[200px] sm:h-[300px] w-full bg-gradient-to-t dark:from-neutral-950 from-white via-transparent to-transparent z-20" />
          </div>
        </motion.div>
      </section>

      <section className="py-24  flex flex-col justify-center sm:px-6 md:px-8  text-center">
        <h2 className="bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 dark:to-neutral-100/30 bg-clip-text text-transparent text-4xl sm:text-5xl font-bold">
          Trusted by Industry Leaders
        </h2>
        <p className="text-neutral-500 text-lg max-w-[800px] mx-auto mt-4">
          Join the ranks of forward-thinking companies already <br /> leveraging our AI technology
        </p>
        <div className="mt-8 flex justify-center">
          <LogoCarouselDemo />
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 md:px-8 max-w-8xl mx-auto">
        <div className="flex flex-col items-center text-center">

          <h2 className="bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 dark:to-neutral-100/30 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-medium leading-tight max-w-6xl mx-auto">
            Features & Benefits
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center max-w-[550px] mx-auto mt-4">
            Simplify automation with cutting-edge AI tools built for teams, freelancers, and enterprises alike.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 px-2 sm:px-6">
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
      <section className="py-20 px-4 ">
        <div className="max-w-8xl mx-auto">
          <Testimonials />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <PricingBasic />
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="py-20 px-4">
        <Faq />
      </section>
      <section className="pb-20 min-h-screen items-center flex justify-center px-4">
        <Cta />
      </section>
    </main>
  )
}

function FeatureCard({ component }: { component: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl  shadow-md hover:shadow-lg transition">
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        {component}
      </div>
    </div>
  )
}
