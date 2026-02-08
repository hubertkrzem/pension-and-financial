"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  label: string;
  link: Array<{ _type: string; internalReference?: { slug?: { current: string } }; url?: string }>;
  openInNewTab: boolean;
};

type NavbarData = {
  title: string;
  items: NavItem[];
  button: {
    label: string;
    link: string;
  };
};

function getHref(item: NavItem): string {
  const linkObj = item.link?.[0];
  if (!linkObj) return "/";
  if (linkObj._type === "externalLink" && linkObj.url) return linkObj.url;
  return linkObj.internalReference?.slug?.current || "/";
}

export default function NavbarClient({ data }: { data: NavbarData }) {
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

  // Split items: find "Services" to render as a dropdown, rest as plain links
  const servicesItem = data.items?.find(
    (item) => item.label?.toLowerCase() === "services"
  );
  const plainItems = data.items?.filter(
    (item) => item.label?.toLowerCase() !== "services"
  ) ?? [];

  // If there are child links under Services, extract them
  // For now Services dropdown links are hardcoded to personal/corporate since the schema
  // stores them differently. The links in the Services submenu are managed through the navbar items.
  const servicesChildren = servicesItem
    ? [
        { label: "Personal", href: "/services/personal" },
        { label: "Corporate", href: "/services/corporate" },
      ]
    : [];

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
            {plainItems.map((item, i) => (
              <li key={i}>
                <Link href={getHref(item)} className="hover:text-brand-teal">
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Services dropdown (desktop) */}
            {servicesItem && (
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
                        {servicesChildren.map((child, j) => (
                          <li key={j}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2 hover:text-brand-teal"
                              onClick={() => setServicesOpen(false)}
                              role="menuitem"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            )}
          </ul>

          {/* CTA (desktop) */}
          <a
            href={data.button?.link ?? "#contact"}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-lg bg-brand-teal px-4 py-2 text-white font-semibold transition hover:bg-brand-navy"
          >
            {data.button?.label ?? "Get In Touch"}
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
          {plainItems.map((item, i) => (
            <li key={i}>
              <Link href={getHref(item)} className="block py-2" onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}

          {/* Services submenu (mobile) */}
          {servicesItem && (
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
                {servicesChildren.map((child, j) => (
                  <li key={j}>
                    <Link href={child.href} className="block py-2" onClick={() => setMenuOpen(false)}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )}

          {/* CTA (mobile) */}
          <li className="pt-2">
            <a
              href={data.button?.link ?? "#contact"}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 inline-flex w-full items-center justify-center rounded-lg bg-brand-teal px-4 py-2 text-white font-semibold hover:bg-brand-navy"
              onClick={() => setMenuOpen(false)}
            >
              {data.button?.label ?? "Get In Touch"}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
