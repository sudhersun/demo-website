"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { isLightPage } from "@/lib/theme";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const light = isLightPage(pathname);

  const linkClass = (href: string) => {
    const active = pathname === href;
    const base = "text-xs font-semibold uppercase tracking-wider transition-colors";
    if (light) {
      return `${base} ${
        active
          ? "text-ink underline decoration-ink decoration-2 underline-offset-8"
          : "text-ink/70 hover:text-ink"
      }`;
    }
    return `${base} hover:text-brand ${active ? "text-brand" : "text-white"}`;
  };

  return (
    <header
      className={
        light ? "relative z-50 bg-white" : "absolute inset-x-0 top-0 z-50"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={`font-display text-xl font-bold ${light ? "text-ink" : "text-white"}`}
        >
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {site.nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={linkClass(l.href)}
                  aria-current={pathname === l.href ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center md:hidden ${
            light ? "text-ink" : "text-white"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className={`px-6 pb-6 md:hidden ${
          light
            ? "border-t border-ink/10 bg-white"
            : "border-t border-white/10 bg-ink/95 backdrop-blur"
        }`}
      >
        <ul className="flex flex-col">
          {site.nav.map((l) => (
            <li key={l.href} className={`border-b ${light ? "border-ink/10" : "border-white/10"}`}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-4 ${linkClass(l.href)}`}
                aria-current={pathname === l.href ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}