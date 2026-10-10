import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-gray-600">That page doesn't exist.</p>
      <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
        Back to Home
      </Link>
    </section>
  );
}