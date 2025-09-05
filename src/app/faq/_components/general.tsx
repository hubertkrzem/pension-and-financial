"use client";

import { useState } from "react";

type Item = {
  title: string;
  body: React.ReactNode;
};

const items: Item[] = [
  {
    title: "Are you regulated?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Yes. Pension & Financial is regulated by the Central Bank of Ireland and authorised to
          advise on life insurance, pensions, investments, and financial planning services.
          Our advice is fully compliant with current Irish financial regulations.
        </p>
      </div>
    ),
  },
  {
    title: "Do you offer independent advice?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Yes. We are independent financial brokers and offer impartial advice across a wide range of providers and products.
          This means we tailor our recommendations to your unique financial circumstances and goals — not to any single provider.
        </p>
      </div>
    ),
  },
  {
    title: "What is the process to get started?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Your journey with us typically includes:
        </p>
        <div>
          <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-brand-teal">
            <li>An initial consultation (no obligation)</li>
            <li>Discovery and goal-setting meeting</li>
            <li>Analysis of your current financial position</li>
            <li>Recommendations and strategy development</li>
            <li>Ongoing support and regular reviews</li>
          </ul>
        </div>
        <p>
          We aim to make the process simple, transparent, and entirely focused on your success.
        </p>
      </div>
    ),
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="general" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
          General Questions
        </h2>

        <ul className="mt-8 divide-y divide-slate-300">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <li key={item.title} className="px-4 sm:px-6">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-5 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="text-2xl font-semibold text-brand-teal sm:text-3xl">
                    {item.title}
                  </span>
                  <span aria-hidden className="ml-4 text-slate-500">
                    {open ? <CloseIcon className="h-7 w-7" /> : <ArrowIcon className="h-7 w-7" />}
                  </span>
                </button>

                {open && (
                  <div className="pb-6">
                    {item.body}
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

/* Tiny inline icons */
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