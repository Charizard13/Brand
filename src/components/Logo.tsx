"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";

type Props = {
  size: number;
};

export default function Logo({ size }: Props) {
  const router = useRouter();

  return (
    <Image
      src="/Logo.png"
      alt="Logo"
      width={size}
      height={size}
      sizes="(max-width: 768px) 100vw"
      onClick={() => router.push("/home")}
      style={{
        cursor: "pointer",
      }}
    />
  );
}
