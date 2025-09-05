"use client";

import { useState } from "react";

type Item = {
  title: string;
  body: React.ReactNode;
};

const items: Item[] = [
  {
    title: "Is my money secure with your firm?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          As a Central Bank of Ireland–regulated financial planning broker, we operate under strict regulatory standards.
          All investments and policies are placed with leading, well-capitalised providers, giving clients confidence and peace of mind.
        </p>
      </div>
    ),
  },
  {
    title: "How often will I meet with my adviser?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          We recommend a full financial review at least once a year, with additional meetings as
          required to reflect changes in your circumstances or the financial markets.
        </p>
      </div>
    ),
  },
  {
    title: "What fees are involved?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Our fee structures are transparent and agreed in advance. Depending on the service, 
          fees may be commission-based, fee-based, or a combination of both. We will always explain all costs clearly before you proceed.
        </p>
      </div>
    ),
  },
  {
    title: "How do I get started?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Simply contact us to arrange an initial consultation.
          This meeting allows us to understand your needs and explain how we can help. There is no obligation, and all discussions are completely confidential.
        </p>
      </div>
    ),
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="general2" className="bg-gray-50 py-12 sm:py-16">
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