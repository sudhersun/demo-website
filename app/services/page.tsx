import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the services Your Organization offers.",
  alternates: { canonical: "/services" },
};

const services = [
  { title: "Service One", text: "Short description of this service." },
  { title: "Service Two", text: "Short description of this service." },
  { title: "Service Three", text: "Short description of this service." },
];

export default function Services() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Our Services</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-gray-600">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}