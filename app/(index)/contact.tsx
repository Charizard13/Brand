import { motion } from "framer-motion";
import { fadeIn } from "../page";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const inputClass =
    "border-gray-700 bg-gray-900 text-gray-100 placeholder-gray-400";
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <motion.div variants={fadeIn} className="space-y-2">
        <h2 className="font-bold text-3xl text-primary sm:text-4xl md:text-5xl tracking-tighter">
          Let's Work Together
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
          Ready to bring your ideas to life? Get in touch and let's start
          building something amazing.
        </p>
      </motion.div>
      <motion.div variants={fadeIn} className="space-y-2 w-full max-w-sm">
        <form className="flex flex-col space-y-4">
          <Input placeholder="Your name" className={inputClass} />
          <Input type="email" placeholder="Your email" className={inputClass} />
          <Textarea placeholder="Your message" className={inputClass} />
          <Button type="submit">Send Message</Button>
        </form>
      </motion.div>
    </div>
  );
}
