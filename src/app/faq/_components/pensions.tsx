"use client";

import { useState } from "react";

type Item = {
  title: string;
  body: React.ReactNode;
};

const items: Item[] = [
  {
    title: "What is a pension and why is it important",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          A pension is a long-term savings plan designed to help you build up income for your
          retirement. Contributions are typically made on a regular basis and benefit from tax relief,
          while investment growth within the pension is not subject to income tax or capital gains tax.
        </p>
        <div>
          <p className="font-semibold text-brand-teal">Benefits of pensions include:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-brand-teal">
            <li>Tax relief on contributions (subject to Revenue limits)</li>
            <li>Tax-free growth of funds within the pension</li>
            <li>Option to take a tax-free lump sum at retirement (subject to limits)</li>
            <li>Long-term financial security in retirement</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "What types of pensions do you offer?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          We provide advice on a wide range of personal and company pension arrangements, including:
        </p>
        <div>
          <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-brand-teal">
            <li>Personal Retirement Savings Accounts (PRSAs)</li>
            <li>Executive Pension Plans</li>
            <li>Occupational Pension Schemes</li>
            <li>Buy-Out Bonds (PRB)</li>
            <li>Approved Retirement Funds (ARF)</li>
            <li>Auto-enrolment guidance for employers</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "How much tax relief can I get on my pension contributions?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Tax relief is available at your marginal tax rate on pension contributions,
          subject to Revenue limits based on your age and earnings. For example:
        </p>
        <div>
          <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-brand-teal">
            <li>Under 30 years: 15% of earnings (max. €115,000)</li>
            <li>30–39 years: 20%</li>
            <li>40–49 years: 25%</li>
            <li>50–54 years: 30%</li>
            <li>55–59 years: 35%</li>
            <li>60+ years: 40%</li>
          </ul>
        </div>
        <p>
          It is important to seek individualised advice to ensure you maximise the available tax advantages.
        </p>
      </div>
    ),
  },
  {
    title: "What happens to my pension if I leave my job or become self-employed?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Depending on the type of pension, you may:
        </p>
        <div>
          <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-brand-teal">
            <li>Leave the pension invested where it is</li>
            <li>Transfer it into a new employer’s scheme</li>
            <li>Move it to a Buy-Out Bond or PRSA</li>
            <li>Consolidate it with existing pensions for easier management</li>
          </ul>
        </div>
        <p>
          We can help you review your options and choose the most suitable solution.
        </p>
      </div>
    ),
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="pensions" className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Pensions
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