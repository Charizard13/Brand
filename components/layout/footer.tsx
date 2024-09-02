import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Footer() {
  return (
    <footer className="flex sm:flex-row flex-col items-center gap-2 border-gray-800 px-4 md:px-6 py-6 border-t w-full shrink-0">
      <p className="font-mono text-gray-400 text-xs">
        © 2023 DevGenius. All rights reserved.
      </p>
      <nav className="flex gap-4 sm:gap-6 sm:ml-auto">
        <Link
          className="font-mono text-gray-400 text-xs hover:text-green-500 underline-offset-4 hover:underline"
          href="#"
        >
          Terms of Service
        </Link>
        <Link
          className="font-mono text-gray-400 text-xs hover:text-green-500 underline-offset-4 hover:underline"
          href="#"
        >
          Privacy
        </Link>
      </nav>
      <ThemeSwitcher />
    </footer>
  );
}
