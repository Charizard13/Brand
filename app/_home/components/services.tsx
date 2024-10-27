import { motion } from "framer-motion";
import { Code, Smartphone, Globe } from "lucide-react";
const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Front-end development for responsive websites, leveraging React, Next.js, and Tailwind CSS.",
    framework: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Globe,
    title: "Backend Development",
    description:
      "Backend development with easy to use frameworks like Deno, Supabase, and PostgreSQL.",
    framework: ["Deno", "Supabase", "PostgreSQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications that provide a native experience on both iOS and Android devices.",
    framework: ["React Native", "Expo"],
  },
] as const;
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { elementsIds, fadeIn } from "@/utils/const";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  return (
    <>
      <motion.h2
        variants={fadeIn}
        id={elementsIds.services}
        className="mb-8 font-bold text-3xl text-center text-primary sm:text-4xl md:text-5xl tracking-tighter"
      >
        Our Services
      </motion.h2>
      <div className="gap-6 lg:gap-12 grid lg:grid-cols-3">
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              whileHover={{
                boxShadow: "0 0 8px rgb(var(--primary-rgb) / 0.5)",
              }}
              className="h-full"
            >
              <Card className="dark:bg-gray-800 shadow-md hover:shadow-lg w-full transition-all duration-300 ease-in-out hover:scale-105 h-full">
                <CardHeader>
                  <service.icon className="mb-2 w-8 h-8 text-primary" />
                  <CardTitle className="text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <h3 className="font-medium text-sm">Our Expertise:</h3>
                  <div className="flex flex-wrap gap-4">
                    {service.framework.map((framework) => (
                      <Badge key={framework} variant="secondary">
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
