"use client";

import { useState } from "react";

type Item = {
  title: string;
  body: React.ReactNode;
};

const items: Item[] = [
  {
    title: "What makes high-net-worth pensions different from standard retirement plans?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          High-net-worth pensions often involve more advanced strategies to maximise allowances, minimise tax exposure, and integrate with other wealth planning tools.
          They are designed to preserve and grow wealth while maintaining flexibility.
        </p>
      </div>
    ),
  },
  {
    title: "How can I ensure my investments are aligned with my long-term goals?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          We begin with a detailed financial review to understand your objectives, risk tolerance, and time horizon.
          Based on this, we create a bespoke investment strategy that balances growth, capital preservation, and tax efficiency.
        </p>
      </div>
    ),
  },
  {
    title: "What investment options are available for high-net-worth clients?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Our clients typically access a wide range of opportunities including managed portfolios, direct equities, alternative investments,
          and tax-efficient structures, always aligned with regulatory guidelines and your personal objectives.
        </p>
      </div>
    ),
  },
  {
    title: "How do you manage risk in investment portfolios?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Risk is managed through diversification, careful asset allocation, and regular reviews.
          We actively monitor portfolios to ensure they remain aligned with your goals and adjust as market conditions change.
        </p>
      </div>
    ),
  },
  {
    title: "Can wealth planning also include succession and estate planning?",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Yes. For many high-net-worth clients, intergenerational wealth transfer is a key priority.
          We work with you (and your legal/tax advisers where appropriate) to develop strategies that protect your estate, minimise inheritance tax, and ensure your wealth is passed on according to your wishes.
        </p>
      </div>
    ),
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="individuals" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 sm:text-4xl">
          For High-Net-Worth Individuals
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