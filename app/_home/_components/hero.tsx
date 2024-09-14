"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { fadeIn, socialLinks } from "@/utils/const";
import ContactButton from "@/components/layout/contactButton";
import { handleButtonClickById } from "@/utils/utils";

export default function Hero() {
  return (
    <div
      id="hero-section"
      className="flex flex-col items-center space-y-4 text-center"
    >
      <motion.div variants={fadeIn} className="space-y-2">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl/none tracking-tighter">
          Full-Stack Solutions for Your{" "}
          <span className="text-primary">Digital Success</span>
        </h1>
        <h3 className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
          Transforming ideas into powerful, scalable applications. Your vision,
          our expertise.
        </h3>
      </motion.div>
      <motion.div variants={fadeIn} className="space-x-4">
        <ContactButton alwaysVisible={true} />
        <Button
          variant="outline"
          className="border-primary hover:bg-primary text-primary hover:text-white"
          onClick={() => handleButtonClickById("services")}
        >
          Learn More
        </Button>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Link
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-primary hover:text-primary"
        >
          <Linkedin className="w-5 h-5" />
          <span>Connect on LinkedIn</span>
        </Link>
      </motion.div>
    </div>
  );
}
