import NavBar from "./_components/NavBar";

export default function HelloLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <NavBar />
      {children}
    </section>
  );
}
