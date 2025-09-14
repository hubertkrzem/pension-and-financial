"use client";

import { useState } from "react";

type Item = {
  title: string;
  body: React.ReactNode;
};

const items: Item[] = [
  {
    title: "What is a Corporate Pension Scheme, and why should my company provide one?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          A corporate pension scheme allows employers to help their employees save for retirement in a structured, tax-efficient way.
          Providing a pension demonstrates a commitment to staff wellbeing, helps with employee retention, and ensures compliance with workplace pension obligations.
        </p>
      </div>
    ),
  },
  {
    title: "What are Group Risk Schemes, and how do they benefit my staff?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Group risk schemes cover benefits such as life insurance, income protection, and critical illness cover for employees.
          These benefits give staff financial security if they become ill or pass away, while also helping employers attract and retain top talent.
        </p>
      </div>
    ),
  },
  {
    title: "How much does a Group Risk Scheme cost?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          The cost depends on factors such as the number of employees, the type of cover provided, and the level of benefits chosen.
          Many employers are surprised at how cost-effective group schemes can be relative to the value they provide.
        </p>
      </div>
    ),
  },
  {
    title: "Are employee benefits tax-efficient for companies?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Yes. Employer contributions to pensions and many group risk schemes are typically allowable business expenses,
          making them a tax-efficient way to enhance employee remuneration packages.
        </p>
      </div>
    ),
  },
  {
    title: "Can benefits packages be tailored to different levels of staff?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Absolutely. We work with employers to design flexible schemes that meet the needs of
          both senior executives and the wider workforce, ensuring fairness and competitiveness.
        </p>
      </div>
    ),
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="companies" className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
          For Companies & Business Owners
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