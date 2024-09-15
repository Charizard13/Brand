import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/const";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        className="mb-8 text-center text-primary sm:text-4xl md:text-5xl dark:text-primary tracking-tighter"
      >
        Companies We Worked With
      </motion.h2>
      <div className="relative mx-auto px-2 sm:px-4 lg:px-6 w-full max-w-6xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="px-4 sm:px-8 w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {companies.map((company) => (
              <CarouselItem
                key={company.name}
                className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div variants={fadeIn} className="p-2 sm:p-4">
                  <Card className="dark:bg-gray-800 shadow-md hover:shadow-lg h-[250px] transition-all duration-300 ease-in-out hover:scale-105">
                    <CardHeader className="flex-shrink-0">
                      <CardTitle>{company.name}</CardTitle>
                      <div className="flex flex-wrap gap-2 text-muted-foreground text-sm">
                        {company.categories.map((category) => (
                          <Badge key={category}>{category}</Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow overflow-hidden">
                      <p className="line-clamp-4">{company.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="top-1/2 right-0 left-0 absolute flex justify-between -translate-y-1/2">
            <CarouselPrevious className="relative -left-4 transition-transform hover:-translate-x-1" />
            <CarouselNext className="relative -right-4 transition-transform hover:translate-x-1" />
          </div>
        </Carousel>
      </div>
    </>
  );
}
