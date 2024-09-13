import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  dehydrate,
  HydrationBoundary,
  useMutation,
} from "@tanstack/react-query";
import { supabaseClient } from "@/utils/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { getQueryClient } from "../../providers";
import Script from "next/script";
import { useCallback } from "react";
import { Linkedin } from "lucide-react";
import { elementsIds, fadeIn, socialLinks } from "@/utils/const";
import Link from "next/link";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const inputClass =
    "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400";

  const queryClient = getQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const { error } = await supabaseClient.from("contacts").insert([data]);
      if (error) throw error;
    },
    onSuccess: () => {
      form.reset();
      toast("Message sent successfully, I will get back to you soon.");
    },
    onError: () =>
      form.setError("message", {
        message: "Failed to send message",
      }),
  });

  const onSubmit = async (data: ContactFormData) =>
    await mutation.mutateAsync(data);

  const handleCalendlyClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/talpivena9/new-meeting",
      });
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <motion.div variants={fadeIn} className="space-y-4 text-center">
        <h2
          className="font-bold text-3xl text-primary sm:text-4xl md:text-5xl tracking-tighter"
          id={elementsIds.contacts}
        >
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400">
          Ready to bring your ideas to life? Get in touch and let&apos;s start
          building something amazing.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Script src="https://assets.calendly.com/assets/external/widget.js" />
          <link
            href="https://assets.calendly.com/assets/external/widget.css"
            rel="stylesheet"
          />
          <Button onClick={handleCalendlyClick}>Schedule Time With Us</Button>
          <Link
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary"
          >
            <Linkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
