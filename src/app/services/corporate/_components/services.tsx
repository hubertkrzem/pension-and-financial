"use client";

import { useState } from "react";

type Item = {
  title: string;
  body: React.ReactNode;
};

const items: Item[] = [
  {
    title: "Company Pension Schemes",
    body: (
      <div className="space-y-4 text-slate-600 marker:text-brand-teal">
        <p>
          Guidance on selecting and running the right pension structure for your business,
          with clear communication for employees and ongoing governance support.
        </p>
        <div>
          <p className="font-semibold text-brand-teal">Key Features:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Auto-enrolment readiness & compliance</li>
            <li>Scheme design and provider selection</li>
            <li>Employer & employee contribution strategies</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-brand-teal">Benefits:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Improved retention & employee wellbeing</li>
            <li>Clear fiduciary oversight for directors</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Company Investment Planning",
    body: (
      <div className="space-y-4 text-slate-600 marker:text-brand-teal">
        <p>
          We help businesses manage surplus cash efficiently with tailored,
          professional investment strategies aligned to company goals and risk tolerance.
        </p>
        <div>
          <p className="font-semibold text-brand-teal">Key Features:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Low–medium risk options & liquidity focus</li>
            <li>Professionally managed fund access</li>
            <li>Governance & reporting for stakeholders</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-brand-teal">Benefits:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Enhanced returns on idle capital</li>
            <li>Improved cash-flow strength & flexibility</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Company Group Risk",
    body: (
      <div className="space-y-4 text-slate-600 marker:text-brand-teal">
        <p>
          Cost-effective protection for your team with group life, income protection, and
          specified illness benefits designed for SMEs and larger employers.
        </p>
        <div>
          <p className="font-semibold text-brand-teal">Key Features:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Life, Illness & Income Protection</li>
            <li>Flexible eligibility & cover levels</li>
            <li>Claims support & annual reviews</li>
          </ul>
        </div>
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
          Explore Our Range of Corporate Financial Services
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