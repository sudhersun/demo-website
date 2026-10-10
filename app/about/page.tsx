import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Your Organization, our mission, and our team.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <section>
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="mt-4 max-w-2xl text-gray-600">
        Tell your story here: who you are, your mission, and what makes you different.
      </p>
    </section>
  );
}