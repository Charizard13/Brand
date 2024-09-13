import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";
import { VercelToolbar } from "@vercel/toolbar/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Full-Stack Solutions for Your Digital Success",
  description:
    "Transforming ideas into powerful, scalable applications. Your vision, our expertise.",
  applicationName: "Elfo Software",
  generator: "Next.js",
  keywords: ["Elfo Software", "Full-Stack Solutions", "Digital Success"],
  referrer: "origin-when-cross-origin",
  creator: "Elfo Software",
  publisher: "Elfo Software",
  category: "Software Development",
  robots: "index, follow",
} satisfies Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldInjectToolbar = process.env.NODE_ENV === "development";
  const shouldInjectAnalytics = process.env.NODE_ENV === "production";
  const shouldInjectSpeedInsights = process.env.NODE_ENV === "production";

  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="mt-14">{children}</main>
            <Toaster />
            <Footer />
            {shouldInjectToolbar && <VercelToolbar />}
            {shouldInjectAnalytics && <Analytics />}
            {shouldInjectSpeedInsights && <SpeedInsights />}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
