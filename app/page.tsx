"use client"
import Navbar from "@/components/navbar";
import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";
import { LogoCarouselDemo } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { DisplayCardsDemo } from "@/components/cards";
import { WorldMapDemo } from "@/components/map";
import { RadialOrbitalTimelineDemo } from "@/components/orbital";
import { PricingBasic } from "@/components/Pricing";
import { ChatMessageListDemo } from "@/components/chat";
import Testimonials from "@/components/testimonials";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="">
          <div className="container justify-center text-center mx-auto px-4 py-8 mt-24">
            <h1 className="text-7xl ml-12 max-w-8xl font-bold text-center">
              Empowering Businesses <br /> with Intelligent AI Agents
            </h1>
            <p className="text-neutral-200 text-center max-w-[800px] mt-4 mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit . Porro eveniet dolore earum nesciunt fuga, repudiandae, inventore nisi labore, aperiam error itaque. Culpa vero dolores non. Iste similique ex blanditiis aperiam!
            </p>
          </div>
          <div className="flex mt-4 space-x-2 justify-center mb-24  ">
            <button>
              <Link href="/#" className="ml-4 bg-blue-600 font-semibold text-lg text-white px-4 py-2 rounded-4xl">
                Get Started
              </Link>
            </button>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="text-base w-full sm:w-auto bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 group"
              >
                Learn More
                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ChevronRight className="size-5 hover:size-6 text-blue-500 transition-transform group-hover:translate-x-1" />
                </motion.span>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative mx-auto max-w-7xl"
          >
            <div className="relative z-10 rounded-2xl w-[1300px] h-[800px] bg-neutral-900/60  backdrop-blur-md mx-auto mt-8 overflow-hidden">
              <Image src="/dashboard.png"
                alt="AI-powered SaaS Dashboard"
                fill className="rounded-3xl "
                priority
              />
              <div className="absolute bottom-0 left-0 h-[480px] w-full bg-gradient-to-t dark:from-black from-white via-transparent to-transparent z-20" />
            </div>
          </motion.div>

        </div>
        <div className="ml-12 py-24">
          <div className="container mb-6 justify-center text-center mx-auto px-4 mt-22">
            <h1 className="text-3xl mb-2">Trusted by Industry Leaders</h1>
            <p className="text-neutral-500 text-center text-lg max-w-[800px] mt-4 mx-auto">
              Join the ranks of forward-thinking companies already <br /> leveraging our AI technology
            </p>
          </div>
          <div className="flex mt-4 justify-center items-center">
            <LogoCarouselDemo />
          </div>
        </div>
        <div className="container justify-center items-center mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl"> Features and Benefits</h1>
            <p className="text-neutral-500 text-center text-sm max-w-[800px] mt-4 mx-auto">
              Simplify crypto investing, trading, and portfolio management with <br />cutting-edge tools designed for everyone—from beginners to pros.
            </p>
          </div>
          <div className="max-w-7xl mx-auto h-220 border-dotted border-2 border-neutral-700 mt-12 mb-12 relative">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 flex items-center justify-center">
              <DisplayCardsDemo />
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 flex items-center justify-center">
              <RadialOrbitalTimelineDemo />
            </div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 flex items-center justify-center">
              <ChatMessageListDemo />
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 flex items-center justify-center">
              <WorldMapDemo />
            </div>
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
              <div className="bg-neutral-700 mx-auto">
                <Separator />
              </div>
            </div>
            <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 flex items-center">
              <div className="bg-neutral-700 mx-auto h-full flex items-center">
                <Separator orientation="vertical" className="h-full" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Testimonials />
        </div>
        <div className="max-w-7xl mx-auto  ">

          <PricingBasic />
        </div>
        <Footer />
      </div>
    </div>
  );
}
