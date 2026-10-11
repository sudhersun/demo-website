import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "brand" | "dark";
};

export default function ButtonLink({ href, children, variant = "brand" }: Props) {
  const styles =
    variant === "brand"
      ? "bg-brand text-ink hover:bg-white"
      : "bg-ink text-white hover:bg-white hover:text-ink";
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-6 py-3.5 text-[11px] font-bold uppercase tracking-wider transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}