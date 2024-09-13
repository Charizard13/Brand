import { motion } from "framer-motion";
import { fadeIn, socialLinks } from "../../utils/const";
import Image from "next/image";
import { Check } from "lucide-react";

const companyInfo = [
  "Founded in 2023 to address the growing need for innovative software solutions",
  "Vision: To empower businesses with cutting-edge technology and exceptional service",
  "Specializing in tailored full-stack development for businesses of all sizes",
] as const;

const founderInfo = [
  "Extensive professional experience in diverse development environments",
  "Expertise in multiple programming languages and frameworks",
  "Proven track record of successful project deliveries for various clients",
] as const;

export default function About() {
  return (
    <div className="items-center gap-6 lg:gap-12 grid lg:grid-cols-2">
      <motion.div variants={fadeIn} className="space-y-4">
        <h2 className="text-primary">About Us</h2>
        <p className="text-black dark:text-white text-opacity-60 dark:text-opacity-70">
          Elfo Software Ltd. was established to bridge the gap between
          innovative ideas and their digital realization. Our mission is to
          provide top-tier software solutions that address the unique challenges
          faced by modern businesses.
        </p>
        <ul className="gap-2 grid">
          {companyInfo.map((item) => (
            <motion.li
              key={item}
              variants={fadeIn}
              className="flex items-center text-black dark:text-white text-opacity-80 dark:text-opacity-90"
            >
              <Check className="mr-2 w-4 h-4 text-primary" />
              {item}
            </motion.li>
          ))}
        </ul>
        <h3 className="mt-6 text-primary">About the Founder</h3>
        <p className="text-black dark:text-white text-opacity-60 dark:text-opacity-70">
          As the founder and owner of Elfo Software Ltd., I bring a wealth of
          experience to every project:
        </p>
        <ul className="gap-2 grid">
          {founderInfo.map((item) => (
            <motion.li
              key={item}
              variants={fadeIn}
              className="flex items-center text-black dark:text-white text-opacity-80 dark:text-opacity-90"
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
          alt="Tal Piven, Founder of Elfo Software Ltd."
          fill
          className="rounded-xl w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
