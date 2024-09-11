import { motion } from "framer-motion";
import { fadeIn } from "./const";
import Image from "next/image";
import { Check } from "lucide-react";

const about = [
  "4+ years of professional experience",
  "Expertise in multiple programming languages and frameworks",
  "Proven track record of successful project deliveries",
] as const;

export default function About() {
  return (
    <div className="items-center gap-6 lg:gap-12 grid lg:grid-cols-2">
      <motion.div variants={fadeIn} className="space-y-4">
        <h2 className="text-primary">About Me</h2>
        <p className="text-gray-400">
          With over a 4 of experience in full-stack development, I've helped
          businesses of all sizes bring their ideas to life. My expertise spans
          across multiple technologies and frameworks, allowing me to choose the
          best tools for each unique project.
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
          src="https://media.licdn.com/dms/image/v2/D4D03AQE9qF_EMgZYSw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675247204003?e=1730937600&v=beta&t=E1y8QTCJwvjDJvu5uiPH_qFFzuJs4Z9Xu3B6QSY429k"
          alt="Developer working on a laptop"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </motion.div>
    </div>
  );
}
