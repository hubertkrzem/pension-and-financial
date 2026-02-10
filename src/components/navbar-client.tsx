"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavbarClientProps = {
  button?: { label: string; link: string };
};

export default function NavbarClient({ button }: NavbarClientProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const ctaLabel = button?.label ?? "Get In Touch";
  const ctaLink = button?.link ?? "#contact";

  return (
    <nav className="sticky top-0 z-20 bg-white shadow-sm border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between text-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 h-full">
            <Image src="/p&f-logo2.png" alt="Pension & Financial" width={160} height={64} className="h-full w-auto" />
            <span className="sr-only">Home</span>
          </Link>

          {/* Center links (desktop) */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-navy">
            <li><Link href="/" className="hover:text-brand-teal">Home</Link></li>

            {/* Services dropdown (desktop) */}
            <li ref={servicesRef} className="relative">
              <button
                type="button"
                className="px-2 py-1 hover:text-brand-teal transition-colors"
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((o) => !o)}
              >
                Services
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 top-full z-10 -translate-x-1/2 pt-[18px]">
                  <div className="overflow-hidden rounded-b-lg border border-slate-200 border-t-0 bg-white shadow-md z-10">
                    <ul role="menu" aria-label="Services" className="w-fit py-2">
                      <li>
                        <Link
                          href="/services/personal"
                          className="block px-4 py-2 hover:text-brand-teal"
                          onClick={() => setServicesOpen(false)}
                          role="menuitem"
                        >
                          Personal
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/corporate"
                          className="block px-4 py-2 hover:text-brand-teal"
                          onClick={() => setServicesOpen(false)}
                          role="menuitem"
                        >
                          Corporate
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            <li><Link href="/about" className="hover:text-brand-teal">About</Link></li>
            <li><Link href="/risk" className="hover:text-brand-teal">Risk</Link></li>
            <li><Link href="/faq" className="hover:text-brand-teal">FAQs</Link></li>
          </ul>

          {/* CTA (desktop) */}
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-lg bg-brand-teal px-4 py-2 text-white font-semibold transition hover:bg-brand-navy"
          >
            {ctaLabel}
          </a>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden inline-flex items-center rounded-md p-2 hover:bg-slate-100"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`md:hidden border-t border-slate-200 ${menuOpen ? "block" : "hidden"}`}>
        <ul className="px-4 py-2 text-slate-800 text-sm font-medium">
          <li><Link href="/" className="block py-2" onClick={() => setMenuOpen(false)}>Home</Link></li>

          {/* Services submenu (mobile) */}
          <li>
            <button
              className="flex w-full items-center justify-between py-2"
              aria-expanded={submenuOpen}
              onClick={() => setSubmenuOpen((v) => !v)}
            >
              <span>Services</span>
              <svg viewBox="0 0 24 24" className={`h-5 w-5 transition-transform ${submenuOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <ul className={`${submenuOpen ? "block" : "hidden"} pl-3 pb-1`}>
              <li>
                <Link href="/services/personal" className="block py-2" onClick={() => setMenuOpen(false)}>
                  Personal
                </Link>
              </li>
              <li>
                <Link href="/services/corporate" className="block py-2" onClick={() => setMenuOpen(false)}>
                  Corporate
                </Link>
              </li>
            </ul>
          </li>

          <li><Link href="/about" className="block py-2" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href="/risk" className="block py-2" onClick={() => setMenuOpen(false)}>Risk</Link></li>
          <li><Link href="/faq" className="block py-2" onClick={() => setMenuOpen(false)}>FAQs</Link></li>

          {/* CTA (mobile) */}
          <li className="pt-2">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 inline-flex w-full items-center justify-center rounded-lg bg-brand-teal px-4 py-2 text-white font-semibold hover:bg-brand-navy"
              onClick={() => setMenuOpen(false)}
            >
              {ctaLabel}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
