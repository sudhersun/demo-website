import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-6 pb-24 pt-44 text-center">
      <h1 className="font-display text-6xl font-bold text-brand">404</h1>
      <p className="mt-4 text-white/60">That page doesn’t exist.</p>
      <Link href="/" className="mt-8 inline-block text-xs font-bold uppercase tracking-wider text-brand hover:underline">
        Back to Home
      </Link>
    </section>
  );
}