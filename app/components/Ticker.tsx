export default function Ticker({
  text = "We Give Unparalleled Flexibility",
}: {
  text?: string;
}) {
  return (
    <section className="overflow-hidden bg-royal py-5">
      <p className="sr-only">{text}.</p>
      <div aria-hidden="true" className="animate-marquee flex w-max">
        {[0, 1].map((group) => (
          <ul key={group} className="flex shrink-0 items-center">
            {[0, 1, 2, 3].map((n) => (
              <li
                key={n}
                className="flex items-center gap-6 px-6 font-display text-xl font-bold text-white md:text-3xl"
              >
                <span className="text-brand">✱</span>
                {text}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}