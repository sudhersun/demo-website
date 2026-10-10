import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Your Organization.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4 mb-8 text-gray-600">
        Send us a message and we'll reply as soon as we can.
      </p>
      <ContactForm />
    </section>
  );
}