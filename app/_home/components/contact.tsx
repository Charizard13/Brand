import { Button } from "@/components/ui/button";

import Script from "next/script";
import { useCallback } from "react";
import { Linkedin } from "lucide-react";
import { elementsIds, fadeIn, socialLinks } from "@/utils/const";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  const handleCalendlyClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/talpivena9/new-meeting",
      });
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-12 py-16">
      <motion.div variants={fadeIn} className="space-y-6 text-center">
        <h2
          className="font-bold text-3xl text-primary sm:text-4xl md:text-5xl tracking-tighter"
          id={elementsIds.contacts}
        >
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400">
          Ready to bring your ideas to life? Get in touch and let&apos;s start
          building something amazing.
        </p>
        <div className="flex flex-col items-center gap-6 mt-8">
          <Script src="https://assets.calendly.com/assets/external/widget.js" />
          <link
            href="https://assets.calendly.com/assets/external/widget.css"
            rel="stylesheet"
          />
          <Button onClick={handleCalendlyClick} size="lg">
            Schedule Time With Us
          </Button>
          <Link
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary"
          >
            <Linkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
