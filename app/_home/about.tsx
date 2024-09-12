import { motion } from "framer-motion";
import { fadeIn, socialLinks } from "./const";
import Image from "next/image";
import { Check } from "lucide-react";

const about = [
  "Extensive professional experience in diverse development environments",
  "Expertise in multiple programming languages and frameworks",
  "Proven track record of successful project deliveries for various clients",
] as const;

export default function About() {
  return (
    <div className="items-center gap-6 lg:gap-12 grid lg:grid-cols-2">
      <motion.div variants={fadeIn} className="space-y-4">
        <h2 className="text-primary">About Me</h2>
        <p className="text-gray-400">
          As an experienced full-stack developer, I&apos;ve helped businesses of
          all sizes bring their ideas to life. My expertise spans across
          multiple technologies and frameworks, allowing me to choose the best
          tools for each unique project.
        </p>
        <ul className="gap-2 grid">
          {about.map((item) => (
            <motion.li
              key={item}
              variants={fadeIn}
              className="flex items-center text-gray-300"
            >
              <Check className="mr-2 w-4 h-4 text-primary" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        variants={fadeIn}
        className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]"
      >
        <Image
          src={socialLinks.linkedinImageUrl}
          alt="Tal Piven LinkedIn Profile Picture"
          fill
          className="rounded-xl w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
