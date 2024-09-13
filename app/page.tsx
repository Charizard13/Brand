"use client";

import { motion, Variants } from "framer-motion";
import Hero from "./_home/_components/hero";
import Services from "./_home/_components/services";
import About from "./_home/_components/about";
import Companies from "./_home/_components/companies";
import Testimonials from "./_home/_components/testimonials";
import Contact from "./_home/_components/contact";

const bgClass = "bg-white dark:bg-gray-900";

const sections = [
  { id: "hero", component: Hero, bgClass: "" },
  {
    id: "services",
    component: Services,
    bgClass,
  },
  { id: "about", component: About, bgClass: "" },
  {
    id: "companies",
    component: Companies,
    bgClass,
  },
  { id: "testimonials", component: Testimonials, bgClass: "" },
  {
    id: "contact",
    component: Contact,
    bgClass,
  },
] as const;

const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white dark:bg-gray-900 min-h-screen font-mono text-gray-900 dark:text-gray-100">
      {sections.map(({ id, component: Component, bgClass }, index) => (
        <section
          key={id || index}
          id={id}
          className={`py-12 md:py-24 lg:py-32 xl:py-48 w-full ${bgClass}`}
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="px-4 md:px-6 container"
          >
            <Component />
          </motion.div>
        </section>
      ))}
    </div>
  );
}
