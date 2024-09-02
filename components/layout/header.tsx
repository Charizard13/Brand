import { Code } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center border-gray-800 px-4 lg:px-6 border-b h-14">
      <Link className="flex justify-center items-center" href="#">
        <Code className="w-6 h-6 text-green-500" />
        <span className="ml-2 font-bold font-mono text-green-500">
          DevGenius
        </span>
      </Link>
      <nav className="flex gap-4 sm:gap-6 ml-auto">
        <Link
          className="font-medium text-sm hover:text-green-500 transition-colors"
          href="#services"
        >
          Services
        </Link>
        <Link
          className="font-medium text-sm hover:text-green-500 transition-colors"
          href="#about"
        >
          About
        </Link>
        <Link
          className="font-medium text-sm hover:text-green-500 transition-colors"
          href="#companies"
        >
          Companies
        </Link>
        <Link
          className="font-medium text-sm hover:text-green-500 transition-colors"
          href="#testimonials"
        >
          Testimonials
        </Link>
        <Link
          className="font-medium text-sm hover:text-green-500 transition-colors"
          href="#contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
