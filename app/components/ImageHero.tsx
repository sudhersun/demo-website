import Photo from "../components/Photo";

type Props = {
  title: string;
  alt: string;
  tint?: string; // optional Tailwind class, e.g. "hue-rotate-[250deg]"
};

export default function ImageHero({ title, alt, tint = "" }: Props) {
  return (
    <section className="relative isolate flex min-h-[240px] items-center justify-center md:min-h-[340px]">
      <Photo
        src="/images/placeholder.svg"
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={`-z-20 object-cover ${tint}`}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/35" />
      <h1 className="font-display text-5xl font-bold text-white md:text-7xl">{title}</h1>
    </section>
  );
}