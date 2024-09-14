import { motion } from "framer-motion";
import { fadeIn, socialLinks } from "../../../utils/const";
import Image from "next/image";
import { Check } from "lucide-react";

const founderExpertise = [
  "Full-stack development across diverse environments",
  "Mastery of multiple programming languages and frameworks",
  "Proven track record of successful project deliveries",
] as const;

export default function About() {
  return (
    <div className="flex flex-col items-center gap-6 lg:gap-12 lg:grid lg:grid-cols-2">
      <motion.div
        variants={fadeIn}
        className="space-y-6 w-full text-center lg:text-left"
      >
        <h2 className="font-bold text-2xl text-primary sm:text-3xl">
          About Us
        </h2>
        <p className="text-base text-black sm:text-lg dark:text-white text-opacity-80 dark:text-opacity-90">
          Elfo Software LLC bridges innovative ideas with digital solutions. We
          deliver top-tier, tailored full-stack development to empower
          businesses of all sizes with cutting-edge technology and exceptional
          service.
        </p>
        <div className="flex flex-col gap-3 sm:gap-4">
          <h3 className="text-primary">Founder Expertise</h3>
          <ul className="gap-2 grid m-0 p-0">
            {founderExpertise.map((item) => (
              <motion.li
                key={item}
                variants={fadeIn}
                className="flex justify-center lg:justify-start items-center md:gap-2 text-black text-xs sm:text-sm dark:text-white text-opacity-70 dark:text-opacity-80"
              >
                <Check className="sm:block hidden w-3 sm:w-4 h-3 sm:h-4 text-primary" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn}
        className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]h-[250px] lg:h-[500px]h-[250px] lg:h-[500px]"
      >
        <Image
          src={socialLinks.linkedinImageUrl}
          alt="Tal Piven, Founder of Elfo Software LLC"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-xl w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
