"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code, Smartphone, Globe, Linkedin } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeIn: Variants = {
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
    <div className="flex flex-col bg-gray-900 min-h-screen text-gray-100">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48 w-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="px-4 md:px-6 container"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div variants={fadeIn} className="space-y-2">
                <h1 className="font-bold font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl/none tracking-tighter">
                  Full-Stack Solutions for Your{" "}
                  <span className="text-green-500">Digital Success</span>
                </h1>
                <p className="mx-auto max-w-[700px] font-mono text-gray-400 md:text-xl">
                  Transforming ideas into powerful, scalable applications. Your
                  vision, my expertise.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="space-x-4">
                <Button className="bg-green-500 hover:bg-green-600 font-mono text-black">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-green-500 hover:bg-green-500 font-mono text-green-500 hover:text-black"
                >
                  Learn More
                </Button>
              </motion.div>
              <motion.div variants={fadeIn} className="mt-4">
                <Link
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-green-500 hover:text-green-400"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-mono">Connect on LinkedIn</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section
          id="services"
          className="bg-gray-800 py-12 md:py-24 lg:py-32 w-full"
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="px-4 md:px-6 container"
          >
            <motion.h2
              variants={fadeIn}
              className="mb-8 font-bold font-mono text-3xl text-center text-green-500 sm:text-4xl md:text-5xl tracking-tighter"
            >
              Our Services
            </motion.h2>
            <div className="gap-6 lg:gap-12 grid lg:grid-cols-3">
              {[
                {
                  icon: <Code className="mb-2 w-8 h-8 text-green-500" />,
                  title: "Full-Stack Development",
                  description:
                    "End-to-end solutions from database design to user interface, ensuring seamless integration and optimal performance.",
                },
                {
                  icon: <Smartphone className="mb-2 w-8 h-8 text-green-500" />,
                  title: "Mobile App Development",
                  description:
                    "Cross-platform mobile applications that provide a native experience on both iOS and Android devices.",
                },
                {
                  icon: <Globe className="mb-2 w-8 h-8 text-green-500" />,
                  title: "Web Application Development",
                  description:
                    "Responsive and interactive web applications built with the latest technologies and best practices.",
                },
              ].map((service, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="border-gray-800 bg-gray-900">
                    <CardHeader>
                      {service.icon}
                      <CardTitle className="font-mono text-green-500">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-mono text-gray-400">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        <section id="about" className="py-12 md:py-24 lg:py-32 w-full">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="px-4 md:px-6 container"
          >
            <div className="items-center gap-6 lg:gap-12 grid lg:grid-cols-2">
              <motion.div variants={fadeIn} className="space-y-4">
                <h2 className="font-bold font-mono text-3xl text-green-500 sm:text-4xl tracking-tighter">
                  About Me
                </h2>
                <p className="font-mono text-gray-400">
                  With over a decade of experience in full-stack development,
                  I've helped businesses of all sizes bring their ideas to life.
                  My expertise spans across multiple technologies and
                  frameworks, allowing me to choose the best tools for each
                  unique project.
                </p>
                <ul className="gap-2 grid">
                  {[
                    "10+ years of professional experience",
                    "Expertise in multiple programming languages and frameworks",
                    "Proven track record of successful project deliveries",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeIn}
                      className="flex items-center font-mono text-gray-300"
                    >
                      <svg
                        className="mr-2 w-4 h-4 text-green-500"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]"
              >
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Developer working on a laptop"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section
          id="companies"
          className="bg-gray-800 py-12 md:py-24 lg:py-32 w-full"
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="px-4 md:px-6 container"
          >
            <motion.h2
              variants={fadeIn}
              className="mb-8 font-bold font-mono text-3xl text-center text-green-500 sm:text-4xl md:text-5xl tracking-tighter"
            >
              Companies I've Worked With
            </motion.h2>
            <div className="justify-center items-center gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                "TechCorp",
                "InnovateNow",
                "FutureSoft",
                "DataDynamics",
                "CloudNine",
                "QuantumCode",
                "CyberSolutions",
                "AIVentures",
              ].map((company, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex justify-center items-center"
                >
                  <div className="flex justify-center items-center bg-gray-700 rounded-full w-32 h-32">
                    <span className="font-bold font-mono text-center text-green-500">
                      {company}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        <section id="testimonials" className="py-12 md:py-24 lg:py-32 w-full">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="px-4 md:px-6 container"
          >
            <motion.h2
              variants={fadeIn}
              className="mb-8 font-bold font-mono text-3xl text-center text-green-500 sm:text-4xl md:text-5xl tracking-tighter"
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
                      <CardTitle className="font-mono text-green-500">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="font-mono text-gray-400">
                        {testimonial.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="font-mono text-gray-300">
                      "{testimonial.content}"
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
        <section
          id="contact"
          className="bg-gray-800 py-12 md:py-24 lg:py-32 w-full"
        >
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="px-4 md:px-6 container"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div variants={fadeIn} className="space-y-2">
                <h2 className="font-bold font-mono text-3xl text-green-500 sm:text-4xl md:text-5xl tracking-tighter">
                  Let's Work Together
                </h2>
                <p className="mx-auto max-w-[700px] font-mono text-gray-400 md:text-xl">
                  Ready to bring your ideas to life? Get in touch and let's
                  start building something amazing.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="space-y-2 w-full max-w-sm"
              >
                <form className="flex flex-col space-y-4">
                  <Input
                    placeholder="Your name"
                    className="border-gray-700 bg-gray-900 font-mono text-gray-100 placeholder-gray-400"
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="border-gray-700 bg-gray-900 font-mono text-gray-100 placeholder-gray-400"
                  />
                  <Textarea
                    placeholder="Your message"
                    className="border-gray-700 bg-gray-900 font-mono text-gray-100 placeholder-gray-400"
                  />
                  <Button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 font-mono text-black"
                  >
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
