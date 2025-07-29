import Navbar from "@/components/landingpage/navbar";
import Image from "next/image";
import Footer from "@/components/landingpage/footer";
import Link from "next/link";
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
      <Footer />
    </>
  );
}
