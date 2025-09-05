"use client";

import { useState } from "react";

type Item = {
  title: string;
  body: React.ReactNode;
};

const items: Item[] = [
  {
    title: "Wealth Management and Financial Planning",
    body: (
      
      <div className="space-y-4 text-slate-600 marker:text-brand-teal">
        <p>
          Guidance on selecting and running the right pension structure for your business,
          with clear communication for employees and ongoing governance support.
        </p>
        <div>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Personalised financial strategies based on your goals and risk appetite</li>
            <li>Investment portfolio design and performance reviews</li>
            <li>Estate planning and wealth transfer strategies</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-brand-teal">Outcomes:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 ">
            <li>Clarity and confidence about your financial future</li>
            <li>Tax-efficient structuring of assets</li>
            <li>A long-term, relationship-based approach to your finances</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Investment Policies",
    body: (
      <div className="space-y-4 text-slate-600">
        <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-brand-teal">
          <li>Access to a wide selection of asset classes and fund managers</li>
          <li>Tax-efficient structures suitable for lump sums or regular contributions</li>
          <li>Flexible options based on income, growth, or diversification needs</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Investment Policies",
    body: (
      <div className="space-y-4 text-slate-600">
        <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-brand-teal">
          <li>Advice on PRSAs, Executive Pensions, and ARFs</li>
          <li>Maximising tax relief on pension contributions</li>
          <li>Planning for post-retirement income and drawdown strategies</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Section 72 Inheritance Tax Planning",
    body: (
      <div className="space-y-4 text-slate-600">
        <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-brand-teal">
          <li>Revenue-approved life insurance policy</li>
          <li>Used to cover inheritance tax bills on death</li>
          <li>Helps preserve estate value and ease the transfer of assets</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Section 73 Policies",
    body: (
      <div className="space-y-4 text-slate-600">
        <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-brand-teal">
          <li>Investment policies designed to offset Capital Acquisitions Tax (CAT) on lifetime gifts</li>
          <li>Commonly used by parents or grandparents gifting assets</li>
          <li>Conditions include minimum policy term and Revenue requirements</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Protection Products",
    body: (
      <div className="space-y-4 text-slate-600">
        <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-brand-teal">
          <li>Life assurance, income protection, and serious illness cover</li>
          <li>Tailored for individual needs or business protection (e.g. Co-Director Insurance)</li>
          <li>Supports your long-term financial resilience and family security</li>
        </ul>
      </div>
    ),
  },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Explore Our Range of Personal Financial Services
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