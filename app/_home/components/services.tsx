import { motion } from "framer-motion";
import { Code, Smartphone, Globe } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine, RiSupabaseFill } from "react-icons/ri";
import { TbBrandDeno, TbBrandReactNative } from "react-icons/tb";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import { SiExpo } from "react-icons/si";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Front-end development for responsive websites, leveraging React, Next.js, and Tailwind CSS.",
    frameworks: [
      { Icon: FaReact, url: "https://react.dev" },
      { Icon: RiNextjsLine, url: "https://nextjs.org" },
      { Icon: BiLogoTailwindCss, url: "https://tailwindcss.com" },
    ],
  },
  {
    icon: Globe,
    title: "Backend Development",
    description:
      "Backend development with easy to use tools and technologies like Deno, Supabase, and PostgreSQL.",
    frameworks: [
      { Icon: TbBrandDeno, url: "https://deno.land" },
      { Icon: RiSupabaseFill, url: "https://supabase.com" },
      { Icon: BiLogoPostgresql, url: "https://www.postgresql.org" },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications that provide a native experience on both iOS and Android devices.",
    frameworks: [
      { Icon: TbBrandReactNative, url: "https://reactnative.dev" },
      { Icon: SiExpo, url: "https://expo.dev" },
    ],
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
import Link from "next/link";

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
                <CardFooter className="flex flex-col gap-4">
                  <div className="flex flex-wrap justify-end items-center gap-3 w-full">
                    {service.frameworks.map(({ Icon, url }) => (
                      <Link
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity hover:scale-105"
                      >
                        <Badge
                          variant="secondary"
                          className="flex items-center hover:bg-opacity-90 p-2 transition-colors"
                        >
                          <Icon className="w-5 h-5" />
                        </Badge>
                      </Link>
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
