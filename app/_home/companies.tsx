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
        className="mb-8 font-bold text-3xl text-center text-gray-800 sm:text-4xl md:text-5xl dark:text-primary tracking-tighter"
      >
        Companies I&apos;ve Worked With
      </motion.h2>
      <div className="gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {companies.map((company) => (
          <motion.div
            key={company.name}
            variants={fadeIn}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-700 p-4 rounded-full w-full max-w-[200px] aspect-square">
              <span className="font-bold text-center text-gray-800 dark:text-primary">
                {company.name}
              </span>
              {company.description && (
                <span className="text-center text-gray-600 text-xs dark:text-slate-400">
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
