import { Check, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
export function Cta() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950 p-12">
      {/* 🟣 Dot Pattern Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'><circle cx=\'2\' cy=\'2\' r=\'1.5\' fill=\'%23ffffff\' fill-opacity=\'0.05\' /></svg>')] bg-[length:20px_20px] bg-repeat z-0" />

      {/* 🔵 Light overlay gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      {/* ✅ Your actual content */}
      <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left side */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-white">Launch today</h2>
            <p className="text-lg leading-relaxed text-blue-100">
              In the past, new financial companies had to rely on expensive middleware that linked them to outdated
              sponsor bank systems, restricting their potential. Our API solves this today.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl">
              Start for free
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl border-0">
              Get a demo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="absolute left-1/2 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block"></div>

        {/* Right side */}
        <div className="space-y-8 ml-0 lg:ml-24">
          <div className="space-y-4">
            <div className="text-5xl font-bold text-white">$29.99</div>
            <div className="text-xl text-blue-200">per user per month</div>
          </div>
          <div className="space-y-4">
            {["All free plan features and...", "Mainline AI", "Unlimited teams"].map((text, i) => (
              <div key={i} className="flex items-center gap-3 text-blue-100">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-lg">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
}
