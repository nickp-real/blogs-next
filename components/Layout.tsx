import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-text">
      <div className="container mx-auto flex flex-col">
        <Navbar />
        <main className="flex-grow px-8 py-4">{children}</main>
      </div>
      <footer className="absolute bottom-2 right-4 h-8">
        © nickp_real 2023
      </footer>
    </div>
  );
}
