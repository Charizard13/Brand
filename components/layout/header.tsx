"use client";

import { useState } from "react";
import { Code, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ContactButton from "./contactButton";
import { Separator } from "@/components/ui/separator";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-0 right-0 left-0 z-50 fixed flex justify-between items-center gap-2 dark:border-gray-800 bg-background px-4 lg:px-6 border-b h-14">
      <div className="flex mx-auto w-full max-w-screen-2xl">
        <Link className="flex flex-1 items-center" href="#">
          <Code className="w-6 h-6 text-primary" />
          <span className="ml-2 font-bold font-mono text-center text-primary">
            Elfo Software
          </span>
        </Link>
        <nav className="md:flex flex-grow justify-center items-center gap-4 sm:gap-6 hidden text-center">
          {links.map(({ href, label }) => (
            <Link
              key={`${href}${label}`}
              href={href}
              className="w-24 font-medium text-sm hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="md:flex flex-1 justify-end hidden">
          <ContactButton />
        </div>
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
            className="top-0 right-0 fixed flex flex-col gap-4 bg-background shadow-lg p-6 border-border border-l w-64 h-full"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="fixed inset-0 bg-background/50 dark:bg-background/80"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="relative z-10 flex flex-col items-end">
              {links.map(({ href, label }) => (
                <>
                  <Link
                    key={`${href}${label}`}
                    href={href}
                    className="block text-right py-2 font-medium text-foreground text-sm hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                  <Separator className="w-full" />
                </>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
