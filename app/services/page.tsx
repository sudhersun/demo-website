import type { Metadata } from "next";
import Link from "next/link";
import Photo from "../components/Photo";
import ImageHero from "../components/ImageHero";
import Ticker from "../components/Ticker";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding, web development, digital marketing, illustration, content marketing, and social advertising services for growing businesses.",
  alternates: { canonical: "/services" },
};

const cut = "fill-[#f5f4f2]"; // matches the card background for icon cut-outs

const services = [
  {
    title: "Branding Design",
    text: "Logos, identity systems, and brand guidelines that make your business easy to recognise.",
    icon: (
      <>
        <circle cx="11" cy="11" r="8" />
        <circle cx="29" cy="11" r="8" />
        <circle cx="11" cy="29" r="8" />
        <circle cx="29" cy="29" r="8" />
      </>
    ),
  },
  {
    title: "Web Development",
    text: "Fast, secure, and search-friendly websites and web applications built to grow with you.",
    icon: (
      <>
        <path d="M4 4h20a8 8 0 0 1 4 15 9 9 0 0 1-4 17H4z" />
        <rect x="11" y="10" width="9" height="5" rx="2.5" className={cut} />
        <rect x="11" y="25" width="9" height="5" rx="2.5" className={cut} />
      </>
    ),
  },
  {
    title: "Digital Marketing",
    text: "Campaigns that bring the right audience to your business and turn visits into enquiries.",
    icon: <path d="M4 6l16 14L36 6v28H4z" />,
  },
  {
    title: "Illustration Modelling",
    text: "Custom illustration and 3D visuals that give your brand a look nobody else has.",
    icon: (
      <>
        <path d="M4 4h16a16 16 0 0 1 16 16v16H20A16 16 0 0 1 4 20z" />
        <circle cx="14" cy="26" r="6" className={cut} />
      </>
    ),
  },
  {
    title: "Content Marketing",
    text: "Clear, persuasive articles, pages, and emails that build trust and support your search ranking.",
    icon: (
      <>
        <rect x="4" y="4" width="32" height="32" rx="4" />
        <path d="M20 10l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" className={cut} />
      </>
    ),
  },
  {
    title: "Social Advertising",
    text: "Paid social campaigns with creative and targeting tuned to the results you care about.",
    icon: <path d="M12 4h16v8h8v16h-8v8H12v-8H4V12h8z" />,
  },
];

export default function Services() {
  return (
    <div className="bg-white text-ink">
      <ImageHero
        title="Services"
        alt="Person typing on a laptop at a desk"
        tint="hue-rotate-[250deg]"
      />

      <section aria-labelledby="services-heading" className="py-16 md:py-24">
        <h2 id="services-heading" className="sr-only">What we do</h2>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.title} className="bg-[#f5f4f2] p-8">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
                  {s.icon}
                </svg>
                <h3 className="mt-14 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/70">{s.text}</p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 border-b-2 border-ink pb-0.5 text-[11px] font-bold uppercase tracking-wider"
                >
                  Enquire now <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Image band */}
      <div className="relative h-[280px] md:h-[520px]">
        <Photo
          src="/images/placeholder.svg"
          alt="Smiling colleagues gathered around a laptop"
          fill
          sizes="100vw"
          className="object-cover hue-rotate-[120deg]"
        />
      </div>

      <Ticker />
    </div>
  );
}