import { motion } from "framer-motion";
import { fadeIn } from "../../utils/const";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const companies = [
  {
    name: "Homelend",
    description:
      "The Direct Investment Platform and Liquidity Hub of the Mortgage Industry, providing a seamless and secure platform for investors to access mortgage investments and for borrowers to access liquidity.",
    categories: ["Finance", "Mortgage"],
  },
  {
    name: "ML Mortage",
    description:
      "We know that buying a home, refinancing, and taking on the responsibility of home ownership is an exciting time. We’re here to make it as easy as possible. Here at ML Mortgage, your home is our business.",
    categories: ["Finance", "Mortgage"],
  },
  {
    name: "Artop",
    description:
      "Transform your imagination into reality with Artop. Our cutting-edge AI tools empower creators to design, generate, and deliver stunning visuals directly to your doorstep. Experience the future of creative production with seamless integration of artificial intelligence and artistic vision.",
    categories: ["Design", "Generative AI"],
  },
  {
    name: "NG Finance",
    description:
      "Empowering individuals with practical financial knowledge, fostering a wealth mindset, and providing personalized investment strategies through online courses, a supportive community, and expert guidance to navigate the real-world financial landscape",
    categories: ["Finance", "Education"],
  },
  {
    name: "Tuby Design",
    description:
      "A creative powerhouse delivering impactful brand identities, eye-catching marketing content, and user-centric designs that transform visions into distinct, audience-resonant experiences across digital and visual platforms.",
    categories: ["Design", "UI/UX"],
  },
  {
    name: "Skiff",
    description:
      "A privacy-focused collaboration platform acquired by Notion, merging their mission of internet freedom and secure communication with Notion's vision of connected workspaces to create more empowering and private online tools for users.",
    categories: ["Privacy", "Productivity"],
  },
] as const;

export default function Companies() {
  return (
    <>
      <motion.h2
        variants={fadeIn}
        className="mb-8 font-bold text-3xl text-center text-gray-800 sm:text-4xl md:text-5xl dark:text-primary tracking-tighter"
      >
        Companies We Worked With
      </motion.h2>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <motion.div
            key={company.name}
            variants={fadeIn}
            className="flex justify-center items-center"
          >
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg w-full h-[300px] transition-all duration-300 ease-in-out hover:scale-105">
              <CardHeader className="flex-shrink-0">
                <CardTitle>{company.name}</CardTitle>
                <CardDescription className="flex flex-wrap gap-2">
                  {company.categories.map((categories) => (
                    <Badge key={categories}>{categories}</Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden">
                <p className="line-clamp-4">{company.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}
