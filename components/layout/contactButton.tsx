"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { handleButtonClickById } from "@/utils/utils";

interface FloatingContactButtonProps {
  isVisible: boolean;
}

const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({
  isVisible,
}) => {
  const handleClick = () => handleButtonClickById("contacts");
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="block right-4 bottom-4 z-50 fixed md:hidden"
        >
          <Button onClick={handleClick}>Contact Us</Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButton;
