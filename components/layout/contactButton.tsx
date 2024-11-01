"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { handleButtonClickById } from "@/utils/utils";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { socialLinks } from "@/utils/const";
import { ICON_SIZE, ThemeSwitcher } from "../theme-switcher";
import Link from "next/link";

type ContactButtonProps = {
  alwaysVisible?: boolean;
};

const ContactButton = ({ alwaysVisible = false }: ContactButtonProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => handleButtonClickById("contacts");

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsVisible(rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showRegularButton = alwaysVisible || !isVisible;
  const showMobileButton = !isVisible;

  if (showRegularButton) {
    return <Button onClick={handleClick}>Contact Us</Button>;
  }

  if (showMobileButton) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="block right-4 bottom-4 z-50 fixed md:hidden"
        >
          <Button onClick={handleClick}>Contact Us</Button>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="flex flex-1 justify-end items-center">
      <Button variant="ghost" size={"sm"} asChild>
        <Link
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={ICON_SIZE} />
        </Link>
      </Button>
      <ThemeSwitcher />
    </div>
  );
};

export default ContactButton;
