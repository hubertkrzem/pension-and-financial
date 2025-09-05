"use client";

import { useState } from "react";

type Item = {
  title: string;
  body: React.ReactNode;
};

const items: Item[] = [
  {
    title: "What is an investment policy?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          An investment policy is a structured, tax-efficient plan that allows you to invest
          in a range of professionally managed funds. These may include equities, bonds, property
          funds, and multi-asset portfolios. Investment policies are ideal for medium to long-term
          goals such as capital growth, income generation, or wealth preservation.
        </p>
      </div>
    ),
  },
  {
    title: "Are investment policies tax efficient?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Yes, investment policies offer potential for tax deferral and are subject to an exit
          tax rather than ongoing income or capital gains tax.
          The exit tax rate for individuals in Ireland is currently 41%.
          With proper structuring, these policies can be used effectively in estate or retirement planning.
        </p>
      </div>
    ),
  },
  {
    title: "What level of risk is involved?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          As with all investments, there is a level of risk involved.
          We will assess your investment goals, risk tolerance, and time horizon to recommend an appropriate strategy.
          You may choose from cautious, balanced, or growth-oriented portfolios based on your financial objectives.
        </p>
      </div>
    ),
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="investment-policies" className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Investment Policies
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