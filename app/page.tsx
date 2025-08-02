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
import { Facebook, Twitter, Linkedin, Youtube, Globe, MessageSquare, Share2, Play } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit . Porro eveniet dolore earum nesciunt fuga,
              repudiandae, inventore nisi labore, aperiam error itaque. Culpa vero dolores non. Iste similique ex
              blanditiis aperiam!
            </p>
          </div>
          <div className="flex mt-4 space-x-2 justify-center mb-24  ">
            <button>
              <Link href="/#" className="ml-4 bg-blue-600 font-semibold text-lg text-white px-4 py-2 rounded-4xl">
                Get Started
              </Link>
            </button>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Button
                size="lg"
                className="text-base w-full sm:w-auto bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 group"
              >
                Learn More
                <motion.span whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
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
              <Image src="/dashboard.png" alt="AI-powered SaaS Dashboard" fill className="rounded-3xl " priority />
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

        {/* Features & Benefits Section */}
        <div className="container justify-center items-center mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Features & Benefits</h1>
            <p className="text-neutral-400 text-center text-lg max-w-[800px] mt-4 mx-auto">
              Simplify crypto investing, trading, and portfolio management with <br />
              cutting-edge tools designed for everyone—from beginners to pros.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {/* Hosting over the edge */}
            <div className="bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800">
              <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                <div className="relative mb-8">
                  <div className="w-32 h-32 rounded-full border-2 border-neutral-700 flex items-center justify-center relative">
                    <MessageSquare className="w-8 h-8 text-neutral-400" />
                    <div className="absolute -top-4 -left-4">
                      <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                        <Facebook className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4">
                      <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                        <Linkedin className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -left-4">
                      <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                        <Twitter className="w-6 h-6 text-sky-400" />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4">
                      <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                        <Youtube className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                        <Share2 className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Hosting over the edge</h3>
                <p className="text-neutral-400 text-center">
                  With our edge network, we host your website by going into each city by ourselves.
                </p>
              </div>
            </div>

            {/* Available in every country */}
            <div className="bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800">
              <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                <div className="mb-6">
                  <WorldMapDemo />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Available in every country</h3>
                <p className="text-neutral-400 text-center mb-6">
                  Access our platform from anywhere in the world with our globally distributed network and localized
                  support in multiple languages.
                </p>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">100+</div>
                  <div className="text-xl text-neutral-400">Countries</div>
                </div>
              </div>
            </div>

            {/* Major User Adoption */}
            <div className="bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800">
              <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                <div className="flex space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                    <Twitter className="w-6 h-6 text-sky-400" />
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Major User Adoption</h3>
                <p className="text-neutral-400 text-center mb-6">
                  Join our growing community of over 500,000 users who trust our platform for their crypto trading and
                  investment needs.
                </p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-neutral-900"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 border-2 border-neutral-900"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-neutral-900"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 border-2 border-neutral-900"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 border-2 border-neutral-900"></div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-neutral-900"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">542,000</div>
                  <div className="text-xl text-neutral-400">Users</div>
                </div>
              </div>
            </div>

            {/* People love us */}
            <div className="bg-neutral-900/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-800">
              <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                <h3 className="text-2xl font-bold text-white mb-2">People love us</h3>
                <p className="text-neutral-400 text-center mb-8">
                  See what our users are saying about their experience with our platform and why they love using it,
                  consequat elementum lacus et bibendum.
                </p>
                <div className="w-full max-w-md bg-neutral-800/50 rounded-xl p-6 border border-neutral-700">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                      MA
                    </div>
                    <div>
                      <div className="text-white font-semibold">Manu Arora</div>
                    </div>
                  </div>
                  <p className="text-neutral-300 text-sm">
                    These cards are amazing, <span className="text-green-400">I want to use them</span> in my project.
                    Framer motion is a godsend ngl tbh fam 🔥
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Testimonials />
        </div>

        {/* FAQ Section */}

        <div className="max-w-7xl mx-auto  ">
          <PricingBasic />
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our AI-powered platform and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-neutral-900/50 rounded-lg border border-neutral-800 px-6">
                <AccordionTrigger className="text-white hover:text-neutral-300 text-left">
                  What makes your AI agents different from others?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400">
                  Our AI agents are built with advanced machine learning algorithms and are specifically designed for
                  business automation. They offer superior accuracy, faster processing times, and seamless integration
                  with existing business systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-neutral-900/50 rounded-lg border border-neutral-800 px-6">
                <AccordionTrigger className="text-white hover:text-neutral-300 text-left">
                  How quickly can I get started with your platform?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400">
                  You can get started in minutes! Our onboarding process is streamlined and includes step-by-step
                  guidance. Most users are up and running within 15 minutes of signing up.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-neutral-900/50 rounded-lg border border-neutral-800 px-6">
                <AccordionTrigger className="text-white hover:text-neutral-300 text-left">
                  Is my data secure with your platform?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400">
                  Absolutely. We use enterprise-grade security measures including end-to-end encryption, regular
                  security audits, and compliance with industry standards like SOC 2 and GDPR. Your data is protected at
                  all times.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-neutral-900/50 rounded-lg border border-neutral-800 px-6">
                <AccordionTrigger className="text-white hover:text-neutral-300 text-left">
                  What kind of support do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400">
                  We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our
                  support team consists of AI specialists who can help with both technical and strategic questions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-neutral-900/50 rounded-lg border border-neutral-800 px-6">
                <AccordionTrigger className="text-white hover:text-neutral-300 text-left">
                  Can I integrate your AI agents with my existing tools?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400">
                  Yes! Our platform offers extensive integration capabilities with popular business tools, CRMs,
                  databases, and APIs. We also provide custom integration support for enterprise clients.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-neutral-900/50 rounded-lg border border-neutral-800 px-6">
                <AccordionTrigger className="text-white hover:text-neutral-300 text-left">
                  What pricing plans do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400">
                  We offer flexible pricing plans to suit businesses of all sizes, from startups to enterprises. Our
                  plans include a free tier for getting started, professional plans for growing businesses, and custom
                  enterprise solutions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
