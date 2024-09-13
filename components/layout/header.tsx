"use client";

import { useState } from "react";
import { Code, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeSwitcher } from "../theme-switcher";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#companies", label: "Companies" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center gap-2 border-gray-800 px-4 lg:px-6 border-b h-14">
      <Link className="flex justify-center items-center" href="#">
        <Code className="w-6 h-6 text-primary" />
        <span className="ml-2 font-bold font-mono text-primary">Elfo</span>
      </Link>

      <nav className="md:flex gap-4 sm:gap-6 hidden ml-auto">
        {links.map(({ href, label }) => (
          <Link
            key={`${href}${label}`}
            href={href}
            className="font-medium text-sm hover:text-primary transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="md:block hidden">
        <ThemeSwitcher />
      </div>
      <Button
        className="md:hidden ml-auto"
        size="icon"
        variant="ghost"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-primary" />
        ) : (
          <Menu className="w-6 h-6 text-primary" />
        )}
      </Button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="top-0 right-0 fixed flex flex-col gap-4 bg-card p-6 w-64 h-full"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="relative z-10 flex flex-col items-end">
              {links.map(({ href, label }) => (
                <Link
                  key={`${href}${label}`}
                  href={href}
                  className="block text-right py-2 font-medium text-sm hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
