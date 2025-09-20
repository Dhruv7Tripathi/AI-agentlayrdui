import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Frequently Asked Questions</h2>
        <p className="text-neutral-400 text-sm max-w-sm mx-auto">
          Find answers to common questions about our AI-powered platform and services.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="bg-neutral-100/50 dark:bg-neutral-900/50 rounded-lg border border-neutral-200 dark:border-neutral-800 px-6">
            <AccordionTrigger className="text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 text-left">
              What makes your AI agents different from others?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-800 dark:text-neutral-400">
              Our AI agents are built with advanced machine learning algorithms and are specifically designed for
              business automation. They offer superior accuracy, faster processing times, and seamless integration
              with existing business systems.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-neutral-100/50 dark:bg-neutral-900/50 rounded-lg border border-neutral-200 dark:border-neutral-800 px-6">
            <AccordionTrigger className="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 text-left">
              How quickly can I get started with your platform?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-800 dark:text-neutral-400">
              You can get started in minutes! Our onboarding process is streamlined and includes step-by-step
              guidance. Most users are up and running within 15 minutes of signing up.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-neutral-100/50 dark:bg-neutral-900/50 rounded-lg border border-neutral-200 dark:border-neutral-800 px-6">
            <AccordionTrigger className="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 text-left">
              Is my data secure with your platform?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-800 dark:text-neutral-400">
              Absolutely. We use enterprise-grade security measures including end-to-end encryption, regular
              security audits, and compliance with industry standards like SOC 2 and GDPR. Your data is protected at
              all times.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-neutral-100/50 dark:bg-neutral-900/50 rounded-lg border border-neutral-200 dark:border-neutral-800 px-6">
            <AccordionTrigger className="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 text-left">
              What kind of support do you offer?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-800 dark:text-neutral-400">
              We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our
              support team consists of AI specialists who can help with both technical and strategic questions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-neutral-100/50 dark:bg-neutral-900/50 rounded-lg border border-neutral-200 dark:border-neutral-800 px-6">
            <AccordionTrigger className="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 text-left">
              Can I integrate your AI agents with my existing tools?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-800 dark:text-neutral-400">
              Yes! Our platform offers extensive integration capabilities with popular business tools, CRMs,
              databases, and APIs. We also provide custom integration support for enterprise clients.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-neutral-100/50 dark:bg-neutral-900/50 rounded-lg border border-neutral-200 dark:border-neutral-800 px-6">
            <AccordionTrigger className="text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 text-left">
              What pricing plans do you offer?
            </AccordionTrigger>
            <AccordionContent className="text-neutral-800 dark:text-neutral-400">
              We offer flexible pricing plans to suit businesses of all sizes, from startups to enterprises. Our
              plans include a free tier for getting started, professional plans for growing businesses, and custom
              enterprise solutions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

