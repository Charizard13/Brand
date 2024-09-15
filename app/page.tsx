"use client";

import { motion, Variants } from "framer-motion";
import Hero from "./_home/components/hero";
import Services from "./_home/components/services";
import About from "./_home/components/about";
import Companies from "./_home/components/companies";
import Testimonials from "./_home/components/testimonials";
import Contact from "./_home/components/contact";

const bgClass = "bg-gray-100 dark:bg-gray-900";

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
    <div className="flex flex-col font-mono">
      {sections.map(({ id, component: Component, bgClass }, index) => (
        <section
          key={id}
          id={id}
          className={`py-12 md:py-24 lg:py-32 xl:py-48 min-h-screen flex items-center ${bgClass}`}
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="container"
          >
            <Component />
          </motion.div>
        </section>
      ))}
    </div>
  );
}
