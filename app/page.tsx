import Navbar from "@/components/navbar";
import Image from "next/image";
import Footer from "@/components/footer";
import Link from "next/link";
import { LogoCarouselDemo } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { DisplayCardsDemo } from "@/components/cards";
import { WorldMapDemo } from "@/components/map";
export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="container mx-auto px-4 py-8 mt-24">
          <h1 className="text-7xl font-bold text-center">
            Welcome to AI Agent
          </h1>
          <p className="text-neutral-200 text-center max-w-[800px] mt-4 mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro eveniet dolore earum nesciunt fuga, repudiandae, inventore nisi labore, aperiam error itaque. Culpa vero dolores non. Iste similique ex blanditiis aperiam!
          </p>
        </div>
        <div className="flex justify-center mb-24  ">
          <button>
            <Link href="/#" className="ml-4 bg-blue-600 text-md text-white px-4 py-2 rounded-4xl">
              Get Started
            </Link>
          </button>
          <button>
            <Link href="/#" className="ml-4 text-md">
              Learn More
            </Link>
          </button>
        </div>
        <div className="flex justify-center rounded-2xl border mt-8 mx-28">
          <Image
            src="/dashboard.png"
            alt="AI Agent Illustration"
            className="rounded-2xl w-full"
            width={500}
            height={200}
          />
        </div>
      </div>
      <div className="ml-12">
        <LogoCarouselDemo />
      </div>
      <div className="max-w-7xl mx-auto h-220 border-dotted border-2 border-neutral-700 mt-12 mb-12 relative">
        {/* Display Cards in Top-Left Quadrant */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 flex items-center justify-center">
          <DisplayCardsDemo />
        </div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 flex items-center justify-center">
          <DisplayCardsDemo />
        </div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 flex items-center justify-center">
          <DisplayCardsDemo />
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 flex items-center justify-center">
          <WorldMapDemo />
        </div>

        {/* Horizontal Separator (Y-Axis) */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
          <div className="bg-neutral-700 mx-auto">
            <Separator />
          </div>
        </div>

        {/* Vertical Separator (X-Axis) */}
        <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 flex items-center">
          <div className="bg-neutral-700 mx-auto h-full flex items-center">
            <Separator orientation="vertical" className="h-full" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
