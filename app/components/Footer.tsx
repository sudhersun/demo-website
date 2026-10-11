"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { isLightPage } from "@/lib/theme";

export default function Footer() {
  const light = isLightPage(usePathname());

  const wrap = light ? "bg-[#f5f4f2] text-ink" : "bg-ink text-white";
  const muted = light ? "text-ink/60" : "text-white/60";
  const hover = light ? "hover:text-ink" : "hover:text-brand";
  const rule = light ? "border-ink/15" : "border-white/10";
  const circle = light
    ? "border-ink/30 hover:bg-ink hover:text-white"
    : "border-white/30 hover:bg-brand hover:text-ink";

  return (
    <footer className={wrap}>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="font-display text-sm font-bold">About {site.name}</h2>
            <p className={`mt-5 max-w-sm text-sm leading-relaxed ${muted}`}>{site.description}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-sm font-bold">Links</h2>
            <ul className={`mt-5 space-y-3 text-sm ${muted}`}>
              {site.nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={`transition-colors ${hover}`}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold">Get in touch</h2>
            <ul className={`mt-5 space-y-3 text-sm ${muted}`}>
              <li>
                <a href={`mailto:${site.email}`} className={`transition-colors ${hover}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className={`transition-colors ${hover}`}>
                  {site.phone}
                </a>
              </li>
              <li>
                <address className="not-italic">{site.address}</address>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-16 flex items-center justify-between border-t pt-8 ${rule}`}>
          <p className={`text-xs font-semibold ${muted}`}>
            © 2026 {site.name}. All rights reserved.
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${circle}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}