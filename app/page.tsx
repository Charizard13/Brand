"use client";

import Hero from "./(index)/hero";
import Services from "./(index)/services";
import About from "./(index)/about";
import Companies from "./(index)/companies";
import Testimonials from "./(index)/testimonials";
import Contact from "./(index)/contact";
import { motion, Variants } from "framer-motion";

const sections = [
  { id: "hero", component: Hero, bgClass: "" },
  { id: "services", component: Services, bgClass: "bg-gray-800" },
  { id: "about", component: About, bgClass: "" },
  { id: "companies", component: Companies, bgClass: "bg-gray-800" },
  { id: "testimonials", component: Testimonials, bgClass: "" },
  { id: "contact", component: Contact, bgClass: "bg-gray-800" },
] as const;

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const stagger: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Index() {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen font-mono text-gray-100">
      <main className="flex-1">
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
      </main>
    </div>
  );
}
