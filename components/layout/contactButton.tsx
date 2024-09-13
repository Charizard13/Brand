import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface FloatingContactButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

const FloatingContactButton: React.FC<FloatingContactButtonProps> = ({
  isVisible,
  onClick,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="right-4 bottom-4 z-50 fixed"
        >
          <Button onClick={onClick}>Contact Us</Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButton;
