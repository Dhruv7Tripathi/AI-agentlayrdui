"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);
  const [hasShownConfetti, setHasShownConfetti] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && !hasShownConfetti && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#3B82F6", "#2563EB", "#1D4ED8"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
      setHasShownConfetti(true);
    }
  };

  return (
    <div className="container py-12 sm:py-16 md:py-20  sm:px-6">
      <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          {title}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl text-base sm:text-lg whitespace-pre-line px-4 sm:px-0">
          {description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0 mb-8 sm:mb-10">
        <label className="relative inline-flex items-center cursor-pointer">
          <Label>
            <Switch
              ref={switchRef as React.Ref<HTMLButtonElement>}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="relative"
            />
          </Label>
        </label>
        <span className="sm:ml-2 font-semibold text-sm sm:text-base text-center">
          Annual billing <span className="text-primary">(Save 20%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                  y: plan.isPopular ? -20 : 0,
                  opacity: 1,
                  x: index === 2 ? -30 : index === 0 ? 30 : 0,
                  scale: index === 0 || index === 2 ? 0.94 : 1.0,
                }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `rounded-xl sm:rounded-2xl border-[1px] p-4 sm:p-5 md:p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative`,
              plan.isPopular ? "border-blue-400 border-2" : "border-border",
              "flex flex-col",
              !plan.isPopular && "sm:mt-5",
              index === 0 || index === 2
                ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
                : "z-10",
              index === 0 && "origin-right",
              index === 2 && "origin-left"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 text-neutral-50 dark:text-neutral-950 bg-neutral-800 dark:bg-neutral-200 py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                <Star className="text-blue-600 h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
                <span className="text-blue-600 ml-1 font-sans font-semibold text-xs sm:text-sm">
                  Popular
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <p className="text-sm sm:text-base font-semibold text-muted-foreground">
                {plan.name}
              </p>
              <div className="mt-4 sm:mt-5 md:mt-6 flex items-center justify-center gap-x-1.5 sm:gap-x-2">
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                  <NumberFlow
                    value={
                      isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                    }
                    format={{
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    transformTiming={{
                      duration: 500,
                      easing: "ease-out",
                    }}
                    willChange
                    className="font-variant-numeric: tabular-nums"
                  />
                </span>
                {plan.period !== "Next 3 months" && (
                  <span className="text-xs sm:text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    / {plan.period}
                  </span>
                )}
              </div>

              <p className="text-xs leading-5 text-muted-foreground mt-1">
                {isMonthly ? "billed monthly" : "billed annually"}
              </p>

              <ul className="mt-4 sm:mt-5 gap-1.5 sm:gap-2 flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
                    <span className="text-left text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-3 sm:my-4" />

              <Link
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "group relative w-full gap-2 dark:hover:bg-neutral-900 overflow-hidden text-base sm:text-lg font-semibold tracking-tighter py-2 sm:py-2.5",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out",
                  plan.isPopular
                    ? "dark:bg-stone-900 bg-neutral-50 dark:text-white text-black"
                    : "bg-background text-foreground"
                )}
              >
                {plan.buttonText}
              </Link>
              <p className="mt-4 sm:mt-5 md:mt-6 text-xs leading-5 text-muted-foreground">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}