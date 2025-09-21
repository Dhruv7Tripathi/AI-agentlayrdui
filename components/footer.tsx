import { ArrowRight } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-neutral-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-9xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="AI Agent Logo"
                width={30}
                height={30}
                className="object-contain rounded-xl"
              />
              <Link
                href="/"
                className="text-xl font-bold text-foreground dark:text-white"
              >
                AI Agent
              </Link>
            </div>
            <p className="text-sm text-muted-foreground dark:text-gray-400 mb-6 max-w-md">
              Empowering businesses with intelligent AI agents. Transform your
              workflow with cutting-edge artificial intelligence solutions
              designed for the modern enterprise.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com"
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                aria-label="GitHub"
              >
                <SiGithub className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </Link>
              <Link
                href="https://twitter.com"
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                aria-label="Twitter"
              >
                <SiX className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </Link>
            </div>
          </div>

          {/* Navigation & Resources */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row justify-end gap-12">
            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-foreground dark:text-white mb-6 text-lg">
                Navigation
              </h4>
              <div className="flex flex-col space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/#features", label: "Features" },
                  { href: "/#pricing", label: "Pricing" },
                  { href: "/#about", label: "About" },
                  { href: "/#contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors duration-200 group flex items-center gap-2 text-sm"
                  >
                    {link.label}
                    <ArrowRight className="size-3 opacity-0 group-hover:text-blue-600 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources - Section 1 */}
            <div>
              <h4 className="font-semibold text-foreground dark:text-white mb-6 text-lg">
                Resources
              </h4>
              <div className="flex flex-col space-y-3">
                {[
                  { href: "/#blog", label: "Blog" },
                  { href: "/#support", label: "Support" },
                  { href: "/#documentation", label: "Documentation" },
                  { href: "/#privacy", label: "Privacy Policy" },
                  { href: "/#terms", label: "Terms of Service" },
                ].map((link) => (
                  <Link
                    key={link.href + "-1"}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors duration-200 group flex items-center gap-2 text-sm"
                  >
                    {link.label}
                    <ArrowRight className="size-3 opacity-0 group-hover:text-blue-600 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground dark:text-white mb-6 text-lg">
                Legal
              </h4>
              <div className="flex flex-col space-y-3">
                {[
                  { href: "/#cookies", label: "Cookie Policy" },
                  { href: "/#disclaimer", label: "Disclaimer" },
                  { href: "/#gdpr", label: "GDPR Compliance" },
                ].map((link) => (
                  <Link
                    key={link.href + "-2"}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors duration-200 group flex items-center gap-2 text-sm"
                  >
                    {link.label}
                    <ArrowRight className="size-3 opacity-0 group-hover:text-blue-600 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-center items-center text-sm text-muted-foreground dark:text-gray-400">
          <p>
            Made with{" "}
            <span className="text-blue-500 animate-pulse">💙</span> by{" "}
            <Link
              href="https://layrdui.dhruvtripathi.in"
              target="_blank"
              className="ml-1 underline hover:text-blue-600"
            >
              LayrdUI
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
