"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { handleButtonClickById } from "@/utils/utils";
import { useState, useEffect } from "react";

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
  return (
    <>
      {showRegularButton && <Button onClick={handleClick}>Contact Us</Button>}
      {showMobileButton && (
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
      )}
    </>
  );
};

export default ContactButton;
