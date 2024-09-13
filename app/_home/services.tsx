import { motion } from "framer-motion";
import { Code, Smartphone, Globe } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "End-to-end solutions from database design to user interface, ensuring seamless integration and optimal performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications that provide a native experience on both iOS and Android devices.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Responsive and interactive web applications built with the latest technologies and best practices.",
  },
] as const;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { elementsIds, fadeIn } from "./const";

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
              <Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 h-full">
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
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
