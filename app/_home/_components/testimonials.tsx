import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/const";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const testimonials = [
  {
    name: "Eli",
    role: "CTO, Homelend",
    content:
      "We're incredibly grateful for the support we received on our frontend tasks. Their ability to step in and deliver high-quality work when we needed it most was invaluable to our project's success.",
  },
  {
    name: "Itamar",
    role: "Owner, Tuby Design",
    content:
      "As a small business owner in UI/UX design, I've worked with many developers, but none quite like this. They consistently deliver fast, beautiful websites for both my business and my clients. Their work has significantly enhanced our design implementations.",
  },
  {
    name: "Avia",
    role: "CEO, Ng Finance",
    content:
      "The CRM system they built for us has revolutionized our workflow. Not only did they understand our unique needs, but they also created a solution that saves time for both me and my employees. Their expertise in building practical, efficient systems is outstanding.",
  },
] as const;

export default function Testimonials() {
  return (
    <>
      <motion.h2
        variants={fadeIn}
        className="mb-8 font-bold text-3xl text-center text-primary sm:text-4xl md:text-5xl tracking-tighter"
      >
        What Clients Say
      </motion.h2>
      <div className="gap-6 lg:gap-12 grid lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 h-[300px]">
              <CardHeader>
                <CardTitle className="text-primary">
                  {testimonial.name}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-grow items-center text-gray-700 dark:text-gray-300">
                <p className="line-clamp-4">
                  &quot;{testimonial.content}&quot;
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}
