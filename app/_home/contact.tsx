import { motion } from "framer-motion";
import { elementsIds, fadeIn } from "./const";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { getQueryClient } from "../providers";

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
    onError: (error) =>
      form.setError("message", {
        message: "Failed to send message",
      }),
  });

  const onSubmit = async (data: ContactFormData) =>
    await mutation.mutateAsync(data);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col items-center space-y-4">
        <motion.div variants={fadeIn} className="space-y-2 text-center">
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
        </motion.div>
        <motion.div variants={fadeIn} className="space-y-2 w-full max-w-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Jon Snow"
                        {...field}
                        className={inputClass}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="jon.snow@gmail.com"
                        {...field}
                        className={inputClass}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project or inquiry."
                        {...field}
                        className={inputClass}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full"
              >
                {mutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </HydrationBoundary>
  );
}
