import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Your Organization. Learn what we do and how we can help.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-bold">Welcome to Your Organization</h1>
      <p className="mt-4 max-w-2xl text-lg text-gray-600">
        A one or two sentence summary of what you do and who you help.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/services" className="rounded bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
          Our Services
        </Link>
        <Link href="/contact" className="rounded border border-gray-300 px-5 py-3 hover:bg-gray-50">
          Contact Us
        </Link>
      </div>
    </section>
  );
}