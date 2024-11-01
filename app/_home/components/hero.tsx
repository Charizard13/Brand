"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/utils/const";
import ContactButton from "@/components/layout/contactButton";
import { handleButtonClickById } from "@/utils/utils";
import Image from "next/image";

const companiesIveWorkedWith = [
  {
    name: "ML Mortgage",
    logo: "/brands/ml-mortgage.png",
  },
  {
    name: "Homelend",
    logo: "/brands/homelend.png",
  },
  {
    name: "Skiff",
    logo: "/brands/skiff.svg",
  },
  {
    name: "NG Finance",
    logo: "/brands/ng-finance.png",
  },
  {
    name: "Nextnet",
    logo: "/brands/next-net.svg",
  },
] as const;

export default function Hero() {
  return (
    <div
      id="hero-section"
      className="flex flex-col items-center space-y-6 text-center"
    >
      <motion.div variants={fadeIn}>
        <h1 className="font-bold text-3xl lg:text-6xl/none tracking-tighter">
          Our Developers <br />
          <span className="text-primary">Your Digital Success</span>
        </h1>
        <p className="mx-auto max-w-[700px] font-bold text-gray-400 text-sm lg:text-lg">
          Transforming ideas into powerful, scalable applications.
          <br />
          Your vision, our expertise.
        </p>
      </motion.div>
      <motion.div variants={fadeIn} className="space-x-4">
        <ContactButton alwaysVisible={true} />
        <Button
          variant="outline"
          className="border-primary hover:bg-primary text-primary hover:text-white"
          onClick={() => handleButtonClickById("services")}
        >
          Learn More
        </Button>
      </motion.div>
      <div className="relative before:bg-[linear-gradient(to_right,hsl(var(--background))_0%,transparent_10%,transparent_90%,hsl(var(--background))_100%)] before:z-10 before:absolute before:inset-0 before:content-[''] opacity-70 mx-auto w-full before:w-full max-w-4xl overflow-hidden">
        <div className="flex gap-8 py-4 animate-[marquee_90s_linear_infinite]">
          <div className="flex gap-8 shrink-0">
            {companiesIveWorkedWith.map((company) => (
              <div
                key={company.name}
                className="flex justify-center items-center border-white/10 bg-white/5 backdrop-blur-sm p-2 border rounded-lg w-32 h-12"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  className="mix-blend-multiply object-contain dark:mix-blend-normal bg-slate-300 dark:bg-transparent p-2 rounded-lg w-32 h-12"
                  width={100}
                  height={48}
                  draggable={false}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-8 shrink-0">
            {companiesIveWorkedWith.map((company) => (
              <div
                key={`${company.name}-duplicate`}
                className="flex justify-center items-center border-white/10 bg-white/5 backdrop-blur-sm p-2 border rounded-lg w-32 h-12"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  className="mix-blend-multiply object-contain dark:mix-blend-normal bg-slate-300 dark:bg-transparent p-2 rounded-lg w-32 h-12"
                  width={100}
                  height={48}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
