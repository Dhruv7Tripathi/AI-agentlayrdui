import { Github, Import, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
const Footer = () => {

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex-1 md:max-w-md">
          <div className="flex mb-2 items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="object-contain rounded-xl"
            />
            <Link href="/" className="text-xl font-bold">
              AI Agent
            </Link>
          </div>
          <p className="text-neutral-600 dark:text-gray-400 mb-6 max-w-sm">
            lorem ipsum dolor sit amet. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com"
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </Link>
            <Link
              href="https://twitter.com"
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </Link>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:flex-row gap-8 w-full justify-end">
          <div className="min-w-[160px]">
            <h4 className="text-md font-semibold text-black dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="min-w-[160px]">
            <h4 className="text-md font-semibold text-black dark:text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 dark:text-gray-400">Web Development</span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400">UI/UX Design</span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400">API Development</span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400">Consulting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
