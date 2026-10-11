import ButtonLink from "../components/ButtonLink";

export default function CtaBanner() {
  return (
    <section className="bg-brand text-ink" aria-labelledby="cta-heading">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center md:py-24 lg:px-10">
        <h2 id="cta-heading" className="font-display text-4xl font-bold leading-tight md:text-6xl">
          Let’s Work
          <br />
          Together
        </h2>
        <div className="md:justify-self-end">
          <p className="max-w-sm text-sm leading-relaxed">
            We are a digital agency that helps businesses develop immersive and engaging user
            experiences.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contact" variant="dark">
              Let’s talk with us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}