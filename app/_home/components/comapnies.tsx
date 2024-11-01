import Image from "next/image";

const companiesIveWorkedWith = [
  {
    name: "ML Mortgage",
    logo: "/brands/ml-mortgage.png",
  },
  {
    name: "Homelend",
    logo: "/brands/homelend.png",
  },
  {
    name: "Skiff",
    logo: "/brands/skiff.svg",
  },
  {
    name: "NG Finance",
    logo: "/brands/ng-finance.png",
  },
  {
    name: "Nextnet",
    logo: "/brands/next-net.svg",
  },
] as const;

export default function Companies() {
  return (
    <div className="relative before:bg-[linear-gradient(to_right,hsl(var(--background))_0%,transparent_10%,transparent_90%,hsl(var(--background))_100%)] before:z-10 before:absolute before:inset-0 before:content-[''] opacity-70 mx-auto w-full before:w-full max-w-4xl overflow-hidden">
      <div className="flex gap-8 py-4 animate-[marquee_90s_linear_infinite]">
        <div className="flex gap-8 shrink-0">
          {companiesIveWorkedWith.map((company) => (
            <div
              key={company.name}
              className="flex justify-center items-center border-white/10 bg-white/5 backdrop-blur-sm p-2 border rounded-lg w-32 h-12"
            >
              <Image
                src={company.logo}
                alt={company.name}
                className="mix-blend-multiply object-contain dark:mix-blend-normal bg-slate-300 dark:bg-transparent p-2 rounded-lg w-32 h-12"
                width={100}
                height={48}
                draggable={false}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-8 shrink-0">
          {companiesIveWorkedWith.map((company) => (
            <div
              key={`${company.name}-duplicate`}
              className="flex justify-center items-center border-white/10 bg-white/5 backdrop-blur-sm p-2 border rounded-lg w-32 h-12"
            >
              <Image
                src={company.logo}
                alt={company.name}
                className="mix-blend-multiply object-contain dark:mix-blend-normal bg-slate-300 dark:bg-transparent p-2 rounded-lg w-32 h-12"
                width={100}
                height={48}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
