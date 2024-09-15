import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/const";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      <div className="relative mx-auto px-2 sm:px-4 lg:px-6 w-full max-w-6xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="px-4 sm:px-8 w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="pl-2 sm:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div variants={fadeIn} className="p-2 sm:p-4">
                  <Card className="dark:bg-gray-800 shadow-md hover:shadow-lg h-[250px] transition-all duration-300 ease-in-out hover:scale-105">
                    <CardHeader className="flex-shrink-0">
                      <CardTitle className="text-primary">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow text-gray-700 dark:text-gray-300 overflow-hidden">
                      <p className="line-clamp-4">
                        &quot;{testimonial.content}&quot;
                      </p>
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
