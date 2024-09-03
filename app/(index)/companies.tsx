import { motion } from "framer-motion";
import { fadeIn } from "../page";

const companies = ["Homelend", "Mlm", "Artop AI", "Ng Finance"] as const;
export default function Companies() {
  return (
    <>
      <motion.h2
        variants={fadeIn}
        className="mb-8 font-bold text-3xl text-center text-primary sm:text-4xl md:text-5xl tracking-tighter"
      >
        Companies I've Worked With
      </motion.h2>
      <div className="justify-center items-center gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {companies.map((company) => (
          <motion.div
            key={company}
            variants={fadeIn}
            className="flex justify-center items-center"
          >
            <div className="flex justify-center items-center bg-gray-700 rounded-full w-32 h-32">
              <span className="font-bold text-center text-primary">
                {company}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
