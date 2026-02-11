"use client";

import { useState } from "react";
import { PortableText, type PortableTextBlock } from "@portabletext/react";

type FaqItem = {
  heading: string;
  body: PortableTextBlock[];
};

type Props = {
  data: {
    heading: string;
    items: FaqItem[];
  };
};

export default function FaqSection({ data }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sectionId = data.heading?.toLowerCase().replace(/\s+/g, "-");

  return (
    <section id={sectionId} className="scroll-mt-[20vh] py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
          {data.heading}
        </h2>

        <ul className="mt-8 divide-y divide-slate-300">
          {data.items?.map((item, i) => {
            const open = openIndex === i;
            return (
              <li key={i} className="px-4 sm:px-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="text-2xl font-semibold text-brand-teal sm:text-3xl">
                    {item.heading}
                  </span>
                  <span aria-hidden className="ml-4 text-slate-500">
                    {open ? <CloseIcon className="h-7 w-7" /> : <ArrowIcon className="h-7 w-7" />}
                  </span>
                </button>

                {open && (
                  <div className="rich-text pb-6 text-slate-600">
                    <PortableText value={item.body} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
