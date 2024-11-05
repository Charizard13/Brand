import { useTheme } from "next-themes";
import Image from "next/image";

const companiesIveWorkedWith = [
  {
    name: "Skiff",
    logo: "/brands/skiff.svg",
    logoDark: "/brands/skiff-dark.svg",
  },
  {
    name: "Nextnet",
    logo: "/brands/next-net.svg",
    logoDark: "/brands/next-net-dark.svg",
  },
  {
    name: "Homelend",
    logo: "/brands/homelend.png",
    logoDark: "/brands/homelend-dark.png",
  },
  {
    name: "ML Mortgage",
    logo: "/brands/ml-mortgage.png",
    logoDark: "/brands/ml-mortgage-dark.png",
  },
  {
    name: "NG Finance",
    logo: "/brands/ng-finance.png",
    logoDark: "/brands/ng-finance-dark.png",
  },
  {
    name: "Artop",
    logo: "/brands/artop.svg",
    logoDark: "/brands/artop-dark.svg",
  },
] as const;

export default function Companies() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-2">
      <div className="text-muted-foreground text-sm">Trusted By:</div>
      <div className="relative before:bg-[linear-gradient(to_right,hsl(var(--background))_0%,transparent_10%,transparent_90%,hsl(var(--background))_100%)] before:z-10 before:absolute before:inset-0 before:content-[''] opacity-70 mx-auto w-[1000px] before:w-full max-w-[100vw] overflow-hidden">
        <div className="flex gap-4 lg:gap-8 py-4 animate-[marquee_10s_linear_infinite] lg:animate-[marquee_30s_linear_infinite]">
          <div className="flex gap-4 lg:gap-8 shrink-0">
            {companiesIveWorkedWith.map((company) => (
              <Image
                key={company.name}
                src={theme === "dark" ? company.logo : company.logoDark}
                alt={company.name}
                className="opacity-60 p-2 rounded-lg w-32 h-12 mix-blend-normal"
                width={100}
                height={48}
                draggable={false}
              />
            ))}
          </div>
          <div className="flex gap-8 shrink-0">
            {companiesIveWorkedWith.map((company) => (
              <Image
                key={`${company.name}-duplicate`}
                src={theme === "dark" ? company.logo : company.logoDark}
                alt={company.name}
                className="opacity-60 p-2 rounded-lg w-32 h-12 mix-blend-normal"
                width={100}
                height={48}
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
