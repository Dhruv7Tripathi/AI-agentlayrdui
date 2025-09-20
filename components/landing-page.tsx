"use client"
import Navbar from "@/components/navbar"
import Image from "next/image"
import Footer from "@/components/footer"
import Link from "next/link"
import { LogoCarouselDemo } from "@/components/icons"
import { WorldMapDemo } from "@/components/map"
import { PricingBasic } from "@/components/Pricing"
import Testimonials from "@/components/testimonials"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { CardStackDemo } from "@/components/cards";
import { RadialOrbitalTimelineDemo } from "@/components/orbital";
import { ChatMessageListDemo } from "@/components/chat";
import Faq from "./faq"
import Cta from "./cta"
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
    <div>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="">
          <div className="container justify-center text-center mx-auto px-4 py-8 mt-24">
            <h1
              className="bg-gradient-stop mx-auto max-w-6xl text-balance bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 via-50% dark:to-neutral-100/30 bg-clip-text py-2 text-5xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-6xl lg:text-7xl"
            >
              Automate Smarter. Scale Faster.
            </h1>
            <p className="dark:text-neutral-200 text-neutral-800 text-center max-w-[800px] mt-4 mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit . Porro eveniet dolore earum nesciunt fuga,
              repudiandae, inventore nisi labore, aperiam error itaque. Culpa vero dolores non. Iste  ex
              blanditiis aperiam!
            </p>
          </div>
          <div className="flex mt-4 space-x-2 justify-center mb-12">
            <button>
              <Link href="/#" className="ml-4 bg-blue-600 font-semibold text-lg text-white px-4 py-2 rounded-lg">
                Get Started
              </Link>
            </button>
            <motion.div>
              <Button
                size="lg"
                className="text-base w-full sm:w-auto hover:bg-white hover:dark:bg-black bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 group"
              >
                Learn More
                <motion.span whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <ChevronRight className="size-5 mt-0.5 hover:size-6 text-blue-500 transition-transform group-hover:translate-x-2" />
                </motion.span>
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="bottom-4 w-full z-20 text-center text-sm text-gray-800 dark:text-gray-200"
            variants={itemVariants}
          >
            <p className="flex justify-center gap-4">
              <span className="text-blue-400">✓</span> No credit card
              <span className="text-blue-400">✓</span> 14-day trial
              <span className="text-blue-400">✓</span> Cancel anytime
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative py-8 mx-auto max-w-7xl"
          >
            <div className="relative z-10 py-8 rounded-2xl w-[1250px] h-[800px] bg-neutral-900/60  backdrop-blur-md mx-auto mt-8 overflow-hidden">
              <Image src="/dashboard.png" alt="AI-powered SaaS Dashboard" fill className="rounded-3xl " priority />
              <div className="absolute bottom-0 left-0 h-[480px] w-full bg-gradient-to-t dark:from-black from-white via-transparent to-transparent z-20" />
            </div>
          </motion.div>
        </div>
        <div className="ml-12 py-24">
          <div className="container mb-6 justify-center text-center mx-auto px-4 mt-22">
            <h1 className="bg-gradient-stop mx-auto max-w-6xl text-balance bg-gradient-to-br from-neutral-800 via-neutral-800 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 via-50% dark:to-neutral-100/30 bg-clip-text py-2 px-2 text-6xl font-bold leading-[1.1] tracking-tighter text-transparent md:text-6xl lg:text-6xl">Trusted by Industry Leaders</h1>
            <p className="text-neutral-500 text-center text-lg max-w-[800px] mt-4 mx-auto">
              Join the ranks of forward-thinking companies already <br /> leveraging our AI technology
            </p>
          </div>
          <div className="flex mt-8 justify-center items-center">
            <LogoCarouselDemo />
          </div>
        </div>
        <section className="py-24 px-4 container mx-auto">
          <h2 className="text-4xl font-bold text-center">Features & Benefits</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center max-w-[700px] mx-auto mt-4">
            Simplify automation with cutting-edge AI tools built for teams, freelancers, and enterprises alike.
          </p>
          {/* Features Grid */}
          <div className="grid ml-12 mr-12 md:grid-cols-2 gap-6 mt-16">
            <FeatureCard component={<RadialOrbitalTimelineDemo />} />
            <FeatureCard component={<ChatMessageListDemo />} />
            <FeatureCard component={<CardStackDemo />} />
            <FeatureCard component={<WorldMapDemo />} />
          </div>
        </section>

        <div className="mr-30 mb-8  ml-28">
          <Testimonials />
        </div>

        <div className="max-w-7xl mx-auto  ">
          <PricingBasic />
        </div>
        <Faq />
        <Cta />
        <Footer />
      </div>
    </div>
  )
}

function FeatureCard({ component }: { component: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8 shadow-lg shadow-primary/10">
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        {component}
      </div>
    </div>
  );
}
