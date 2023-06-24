export default function Article({ children }: { children: React.ReactNode }) {
  return <article className="prose mx-auto">{children}</article>;
}
