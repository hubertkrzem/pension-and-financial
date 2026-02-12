"use client";

import { useState } from "react";
import { PortableText, type PortableTextBlock } from "@portabletext/react";
import { ArrowIcon, CloseIcon } from "@/components/icons";

type ServiceItem = {
  heading: string;
  body: PortableTextBlock[];
};

type Props = {
  heading: string;
  items: ServiceItem[];
};

export default function ServicesAccordion({ heading, items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
          {heading}
        </h2>

        <ul className="mt-8 divide-y divide-slate-300">
          {items?.map((item, i) => {
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
                  <span aria-hidden="true" className="ml-4 text-slate-500">
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
