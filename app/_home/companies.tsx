import { motion } from "framer-motion";
import { fadeIn } from "./const";

const companies = [
  { name: "Homelend" },
  { name: "ML Mortage" },
  { name: "Artop" },
  { name: "NG Finance" },
  { name: "Tuby Design" },
  { name: "Skiff", description: "Acquired by Notion" },
];

export default function Companies() {
  return (
    <>
      <motion.h2
        variants={fadeIn}
        className="mb-8 font-bold text-3xl text-center text-primary sm:text-4xl md:text-5xl tracking-tighter"
      >
        Companies I&apos;ve Worked With
      </motion.h2>
      <div className="justify-center items-center gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {companies.map((company) => (
          <motion.div
            key={company.name}
            variants={fadeIn}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col justify-center items-center gap-2 bg-gray-700 p-2 rounded-full w-32 h-32">
              <span className="font-bold text-center text-primary">
                {company.name}
              </span>
              {company.description && (
                <span className="text-center text-slate-400 text-xs">
                  {company.description}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
