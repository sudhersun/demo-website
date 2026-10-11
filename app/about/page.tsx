import type { Metadata } from "next";
import Photo from "../components/Photo";
import ButtonLink from "../components/ButtonLink";
import ImageHero from "../components/ImageHero";
import Ticker from "../components/Ticker";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our creative agency: our experience, our values, our awards, and the team behind the studio.",
  alternates: { canonical: "/about" },
};

const IMG = "/images/placeholder.svg";

const stats = [
  { value: "26+", title: "Years of Experience", text: "We are a creative agency building insightful strategy and unique designs for brands." },
  { value: "347+", title: "Successful Projects", text: "We are a creative agency building insightful strategy and unique designs for brands." },
  { value: "139+", title: "Satisfied Customers", text: "We are a creative agency building insightful strategy and unique designs for brands." },
];

const awards = [
  { year: "2017", title: "New York Design Week", role: "Main Developer" },
  { year: "2019", title: "The Blue Design Awards", role: "Animator" },
  { year: "2019", title: "Best Web Flow", role: "Main Developer" },
  { year: "2019", title: "Berlin Interactive Award", role: "Best Innovations" },
];

const team = ["one", "two", "three", "four"];

const logos = [
  "logoipsum", "LOGO", "logo", "LOGO IPSUM",
  "logo", "LOGOIPSUM", "logoipsum", "LOGO IPSUM",
];

export default function About() {
  return (
    <div className="bg-white text-ink">
      <ImageHero
        title="About"
        alt="Two team members in conversation at the studio"
        tint="hue-rotate-[330deg]"
      />

      {/* Stats */}
      <section aria-label="Our numbers" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ul className="grid divide-y divide-ink/25 md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((s) => (
              <li key={s.title} className="py-8 md:px-10 md:py-0 md:first:pl-0">
                <p className="font-display text-5xl font-bold">{s.value}</p>
                <h2 className="mt-4 font-display text-lg font-bold">{s.title}</h2>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/70">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Passionate */}
      <section aria-labelledby="passion-heading" className="relative">
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-0 bg-brand md:top-12" />
        <div className="relative grid md:grid-cols-2">
          <div className="px-6 py-14 md:px-14 md:py-24 lg:px-20">
            <h2 id="passion-heading" className="font-display text-3xl font-bold leading-tight md:text-4xl">
              Passionate About Creating Quality Design
            </h2>
            <h3 className="mt-10 font-display text-base font-bold">We Love What We Do</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed">
              We are a creative agency working with brands, building insightful strategy, creating
              unique designs, and crafting lasting value.
            </p>
            <h3 className="mt-8 font-display text-base font-bold">Why Work With Us</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed">
              If you ask our clients what it’s like working with us, they’ll talk about how much we
              care about their success. For us, real relationships fuel real success.
            </p>
          </div>
          <div className="md:pb-16">
            <div className="relative aspect-[4/3]">
              <Photo
                src={IMG}
                alt="Two colleagues smiling while working on a laptop"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover hue-rotate-[20deg]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section aria-labelledby="awards-heading" className="py-16 md:py-24">
        <h2 id="awards-heading" className="sr-only">Awards and recognition</h2>
        <div className="mx-auto max-w-4xl px-6">
          <ol className="border-b border-ink">
            {awards.map((a) => (
              <li
                key={a.title}
                className="grid gap-2 border-t border-ink py-5 md:grid-cols-[80px_1fr_auto] md:gap-6"
              >
                <p className="text-xs font-semibold">{a.year}</p>
                <div>
                  <h3 className="font-display text-lg font-bold">{a.title}</h3>
                  <p className="mt-1 text-xs text-ink/70">
                    We bring to life the most complex projects, specializing in design and
                    development.
                  </p>
                </div>
                <p className="text-[11px] font-bold uppercase tracking-wider md:text-right">
                  {a.role}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section aria-labelledby="team-heading" className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 id="team-heading" className="text-center font-display text-3xl font-bold md:text-5xl">
            Our Team Behind
            <br />
            The Studio
          </h2>
          <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {team.map((n, i) => (
              <li key={n} className="relative aspect-[3/4] overflow-hidden bg-ink">
                <Photo
                  src={IMG}
                  alt={`Portrait of team member ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover grayscale brightness-75"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Map + project CTA */}
      <section aria-labelledby="project-heading" className="relative">
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-0 bg-brand md:top-12" />
        <div className="relative grid md:grid-cols-2">
          <div className="md:pb-16">
            <div className="relative aspect-[4/3]">
              <Photo
                src={IMG}
                alt="Map showing the location of our office"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover hue-rotate-[120deg]"
              />
            </div>
          </div>
          <div className="flex items-center px-6 py-14 md:px-14 md:py-20 lg:px-20">
            <div>
              <h2 id="project-heading" className="font-display text-3xl font-bold leading-tight md:text-4xl">
                Have Any Project
                <br />
                on Your Mind?
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed">
                Great! We’re excited to hear from you, and let’s start something.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact" variant="dark">
                  Send message
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section aria-labelledby="clients-heading" className="py-16 md:py-24">
        <h2 id="clients-heading" className="sr-only">Brands we have worked with</h2>
        <div className="mx-auto max-w-3xl px-6">
          <ul className="grid grid-cols-2 border-l border-t border-ink md:grid-cols-4">
            {logos.map((name, i) => (
              <li
                key={i}
                className="flex h-24 items-center justify-center border-b border-r border-ink px-2 text-center font-display text-sm font-bold text-ink/70"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Ticker />
    </div>
  );
}