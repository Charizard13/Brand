import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { elementsIds, fadeIn, socialLinks } from "./const";
import { useState, useEffect } from "react";
import FloatingContactButton from "@/components/layout/contactButton";

export default function Hero() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleButtonClick = (elementId: keyof typeof elementsIds) => {
    const element = document.getElementById(elementsIds[elementId]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsButtonVisible(rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          my expertise.
        </h3>
      </motion.div>
      <motion.div variants={fadeIn} className="space-x-4">
        {isButtonVisible && (
          <Button onClick={() => handleButtonClick("contacts")}>
            Contact Us
          </Button>
        )}
        <Button
          variant="outline"
          className="border-primary hover:bg-primary text-primary hover:text-black"
          onClick={() => handleButtonClick("services")}
        >
          Learn More
        </Button>
      </motion.div>
      <motion.div variants={fadeIn} className="mt-4">
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
      <FloatingContactButton
        isVisible={!isButtonVisible}
        onClick={() => handleButtonClick("contacts")}
      />
    </div>
  );
}
