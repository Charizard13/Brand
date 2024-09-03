import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

const links = [
  { href: "#", text: "Terms of Service" },
  { href: "#", text: "Privacy" },
] as const;

export default function Footer() {
  const footerTextClass = "font-mono text-gray-400 text-xs";
  return (
    <footer className="flex sm:flex-row flex-col items-center gap-2 border-gray-800 px-4 md:px-6 py-6 border-t w-full shrink-0">
      <p className={footerTextClass}>© 2023 DevGenius. All rights reserved.</p>
      <nav className="flex gap-4 sm:gap-6 sm:ml-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${footerTextClass} hover:text-primary underline-offset-4 hover:underline`}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
