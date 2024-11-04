import Link from "next/link";

const links = [
  { href: "#", text: "Terms of Service", id: "terms-of-service" },
  { href: "#", text: "Privacy", id: "privacy" },
] as const;

export default function Footer() {
  const footerTextClass = "font-mono text-gray-400 text-xs w-full";
  return (
    <footer className="flex sm:flex-row flex-col items-center gap-2 dark:border-gray-800 px-4 md:px-6 py-6 border-t w-full text-center shrink-0">
      <p className={footerTextClass}>
        © 2024 Elfo Software LLC. All rights reserved.
      </p>
    </footer>
  );
}
