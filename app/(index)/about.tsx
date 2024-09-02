import { motion } from "framer-motion";
import { fadeIn } from "../page";
import Image from "next/image";

export default function About() {
  return (
    <div className="items-center gap-6 lg:gap-12 grid lg:grid-cols-2">
      <motion.div variants={fadeIn} className="space-y-4">
        <h2 className="font-bold text-3xl text-primary sm:text-4xl tracking-tighter">
          About Me
        </h2>
        <p className="text-gray-400">
          With over a decade of experience in full-stack development, I've
          helped businesses of all sizes bring their ideas to life. My expertise
          spans across multiple technologies and frameworks, allowing me to
          choose the best tools for each unique project.
        </p>
        <ul className="gap-2 grid">
          {[
            "10+ years of professional experience",
            "Expertise in multiple programming languages and frameworks",
            "Proven track record of successful project deliveries",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={fadeIn}
              className="flex items-center text-gray-300"
            >
              <svg
                className="mr-2 w-4 h-4 text-primary"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
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
          src="/placeholder.svg?height=500&width=500"
          alt="Developer working on a laptop"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </motion.div>
    </div>
  );
}
