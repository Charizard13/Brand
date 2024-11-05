import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine, RiSupabaseFill } from "react-icons/ri";
import { TbBrandDeno, TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";

const services = [
  {
    title: "Frontend Development",
    description:
      "Modern, responsive web interfaces with industry-leading technologies.",
    icon: "🎨",
    css: "w-full lg:w-[60%]",
    frameworks: [
      {
        icon: FaReact,
        label: "React",
        description: "UI components & state management",
      },
      {
        icon: RiNextjsLine,
        label: "Next.js",
        description: "SSR, routing & API integration",
      },
    ],
  },
  {
    title: "Backend Solutions",
    description:
      "Scalable infrastructure with modern cloud-native technologies.",
    icon: "⚡",
    css: "w-full lg:w-[40%] transition-all duration-300",
    frameworks: [
      {
        icon: RiSupabaseFill,
        label: "Supabase",
        description: "Auth, DB & realtime features",
      },
      {
        icon: TbBrandDeno,
        label: "Deno",
        description: "Secure TypeScript runtime",
      },
    ],
  },
  {
    title: "Mobile Development",
    description: "Cross-platform native apps for iOS and Android.",
    icon: "📱",
    css: "w-full lg:my-4",
    frameworks: [
      {
        icon: SiExpo,
        label: "Expo",
        description: "Fast mobile deployment",
      },
      {
        icon: TbBrandReactNative,
        label: "React Native",
        description: "Native UI & performance",
      },
    ],
  },
] as const;

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { elementsIds, fadeIn } from "@/utils/const";

export default function Services() {
  return (
    <section className="py-16">
      <motion.h2
        variants={fadeIn}
        id={elementsIds.services}
        className="mb-12 font-bold text-3xl text-center text-primary sm:text-4xl lg:text-5xl tracking-tighter"
      >
        Our Technology Stack
      </motion.h2>

      <div className="flex flex-wrap">
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeIn}
            className={service.css}
          >
            <Card className="border-primary/10 dark:bg-gray-800/50 backdrop-blur-sm mx-2 h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span>{service.icon}</span>
                  <CardTitle className="text-primary text-xl lg:text-2xl">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex lg:flex-col lg:gap-4">
                {service.frameworks.map(
                  ({ icon: Icon, label, description }) => (
                    <div
                      key={label}
                      className={"flex items-center gap-2 w-full"}
                    >
                      <Icon className="w-4 lg:w-8 h-4 lg:h-8" />
                      <div>
                        <h5>{label}</h5>
                        <div className="lg:block hidden text-muted-foreground">
                          {description}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
