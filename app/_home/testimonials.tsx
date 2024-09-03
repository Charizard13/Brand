import { motion } from "framer-motion";
import { fadeIn } from "./_const";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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
        {[
          {
            name: "John Doe",
            role: "CEO, TechCorp",
            content:
              "Working with DevGenius has been a game-changer for our business. Their full-stack expertise brought our vision to life seamlessly.",
          },
          {
            name: "Jane Smith",
            role: "Founder, StartupX",
            content:
              "The mobile app they developed for us exceeded our expectations. Professional, timely, and incredibly skilled.",
          },
          {
            name: "Mike Johnson",
            role: "CTO, InnovateNow",
            content:
              "Their web application development skills are top-notch. They delivered a complex project on time and within budget.",
          },
        ].map((testimonial, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="border-gray-800 bg-gray-900">
              <CardHeader>
                <CardTitle className="text-primary">
                  {testimonial.name}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {testimonial.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                "{testimonial.content}"
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}
