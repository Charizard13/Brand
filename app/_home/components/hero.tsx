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
      <motion.div variants={fadeIn}>
        <h1 className="font-bold text-3xl lg:text-6xl/none tracking-tighter">
          Our Developers <br />
          <span className="text-primary">Your Digital Success</span>
        </h1>
        <p className="mx-auto max-w-[700px] font-bold text-gray-400 text-sm lg:text-lg">
          Transforming ideas into powerful, scalable applications.
          <br />
          Your vision, our expertise.
        </p>
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
    </div>
  );
}
