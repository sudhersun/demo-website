import type { Metadata } from "next";
import Link from "next/link";
import Photo from "./components/Photo";
import ButtonLink from "./components/ButtonLink";
import CtaBanner from "./components/CtaBanner";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | ${site.tagline}` },
  description: site.description,
  alternates: { canonical: "/" },
};

const IMG = "/images/placeholder.svg";

const steps = [
  {
    label: "Step 1",
    title: "Strategic Approach",
    text: "We are a creative agency working with brands, building insightful strategy and crafting unique designs.",
  },
  {
    label: "Step 2",
    title: "Collaboration is Key",
    text: "We work side by side with your team, sharing progress openly so every decision moves the project forward.",
  },
  {
    label: "Step 3",
    title: "End to End Delivery",
    text: "From the first workshop to launch and beyond, we handle design, build, and support under one roof.",
  },
];

const projects = [
  { title: "Decentralized Platform", tags: "Branding / Development / Marketing", tint: "" },
  { title: "App for Business", tags: "Development / Marketing", tint: "hue-rotate-[200deg]" },
  { title: "Educational Platform", tags: "Marketing / Branding", tint: "hue-rotate-[60deg]" },
  { title: "Nova Scotia Winery", tags: "Branding / Development / Marketing", tint: "hue-rotate-[300deg]" },
];

const articles = [
  { date: "2024-03-26", dateLabel: "March 26, 2024", category: "Branding", title: "Everything You Should Know About Return" },
  { date: "2024-03-26", dateLabel: "March 26, 2024", category: "Branding", title: "6 Big Commerce Design Tips For Big Results" },
  { date: "2024-03-26", dateLabel: "March 26, 2024", category: "Branding", title: "Four Steps to Conduct a Successful Usability" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[640px] items-center overflow-hidden md:min-h-[740px]">
        <Photo
          src={IMG}
          alt="Creative team collaborating around a table in a studio"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.4)_55%,rgba(5,6,0,0.9))]"
        />

        <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-10">
          <h1 className="font-display text-5xl font-bold leading-[0.95] sm:text-7xl lg:text-8xl xl:text-9xl">
            <span className="block">Modern</span>
            <span className="block text-brand">Agency</span>
          </h1>
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/80">
            We are a digital agency that helps brands create immersive and engaging user
            experiences.
          </p>
          <div className="mt-10 flex items-center gap-3 text-[11px] font-semibold uppercase leading-snug tracking-wider">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6l1.8 3.7 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6z" />
            </svg>
            <span>
              Agency of the year
              <br />
              Worldwide
            </span>
          </div>
        </div>

        <Link
          href="/contact"
          className="absolute bottom-8 right-6 flex h-28 w-28 items-center justify-center rounded-full bg-brand p-4 text-center text-[11px] font-bold uppercase leading-tight text-ink transition-transform hover:scale-105 md:bottom-20 md:right-16 md:h-32 md:w-32 lg:right-32"
        >
          Let’s talk with us
        </Link>
      </section>

      {/* Three step process */}
      <section aria-labelledby="process-heading" className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 id="process-heading" className="text-center font-display text-3xl font-bold md:text-5xl">
            Three Step Process
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((s) => (
              <li key={s.label}>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-white/70">
                  {s.label}
                </p>
                <div className="relative mt-3 h-px bg-white/30">
                  <span aria-hidden="true" className="absolute -top-[3.5px] left-0 h-2 w-2 rounded-full bg-white" />
                </div>
                <h3 className="mt-6 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services split */}
      <section aria-labelledby="services-heading" className="grid bg-panel md:grid-cols-2">
        <div className="relative min-h-[320px] md:min-h-[520px]">
          <Photo
            src={IMG}
            alt="Designer working on a laptop at a desk"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover hue-rotate-[30deg]"
          />
        </div>
        <div className="flex items-center px-6 py-14 md:px-14 lg:px-20">
          <div>
            <h2 id="services-heading" className="font-display text-3xl font-bold leading-tight md:text-4xl">
              We Offer a Wide Range of Brand Services
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
              We are a creative agency working with brands building insightful strategy, creating
              unique designs and crafting value.
            </p>
            <ul className="mt-8 space-y-3 font-display text-sm font-bold">
              <li>Human Centered Design to Challenges</li>
              <li>Bring Their Individual Experience</li>
              <li>Developing Core Web Applications</li>
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-brand hover:underline"
            >
              About us <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section aria-labelledby="projects-heading" className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 id="projects-heading" className="text-center font-display text-3xl font-bold md:text-5xl">
            Discover Our
            <br />
            Selected Projects
          </h2>
          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Photo
                    src={IMG}
                    alt={`${p.title} project preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={`object-cover ${p.tint}`}
                  />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-[11px] text-white/60">{p.tags}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center">
            <ButtonLink href="/services">Explore our services</ButtonLink>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-panel py-20 text-center md:py-28">
        <h2 className="sr-only">Client testimonial</h2>
        <figure className="mx-auto max-w-3xl px-6">
          <span aria-hidden="true" className="font-display text-7xl leading-none text-brand">
            “
          </span>
          <blockquote>
            <p className="mt-4 text-lg leading-relaxed md:text-2xl">
              It’s a pleasure working with the team. Our new brand positioning guidelines were
              translated beautifully and consistently into our on-going marketing comms.
            </p>
          </blockquote>
          <figcaption className="mt-8">
            <span className="block text-sm font-bold">Daniyel Karlos</span>
            <span className="text-xs text-white/50">Senior Director of Marketing</span>
          </figcaption>
        </figure>
      </section>

      {/* Image band */}
      <div className="relative h-[260px] md:h-[460px]">
        <Photo
          src={IMG}
          alt="Smiling team members looking at a screen together"
          fill
          sizes="100vw"
          className="object-cover hue-rotate-[120deg]"
        />
      </div>

      {/* Articles */}
      <section aria-labelledby="articles-heading" className="bg-ink py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 id="articles-heading" className="text-center font-display text-3xl font-bold md:text-5xl">
            Read Our Articles
            <br />
            and News
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {articles.map((a, i) => (
              <article key={a.title}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Photo
                    src={IMG}
                    alt={`Cover image for ${a.title}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover ${["hue-rotate-[80deg]", "hue-rotate-[160deg]", "hue-rotate-[240deg]"][i]}`}
                  />
                </div>
                <p className="mt-5 text-[11px] text-white/50">
                  <time dateTime={a.date}>{a.dateLabel}</time> · {a.category}
                </p>
                <h3 className="mt-2 font-display text-base font-bold leading-snug">{a.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}