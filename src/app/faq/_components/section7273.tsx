"use client";

import { useState } from "react";

type Item = {
  title: string;
  body: React.ReactNode;
};

const items: Item[] = [
  {
    title: "What is a Section 72 Life Policy",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          A Section 72 Life Insurance Policy is a Revenue-approved whole-of-life insurance plan
          specifically designed to cover inheritance tax liabilities due on your estate when you pass
          away.
        </p>
        <div>
          <p className="text-brand-teal font-semibold">If structured correctly:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-brand-teal">
            <li>The proceeds of the policy can be used by your beneficiaries to pay inheritance tax</li>
            <li>The policy proceeds will not be considered part of your taxable estate</li>
            <li>This allows your estate to be passed on without forcing asset sales to cover tax
                liabilities</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Who should consider a Section 72 Policy",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Section 72 is particularly useful for individuals or couples with significant assets (e.g.
          property, business shares, or investment portfolios) who wish to pass on their estate without
          burdening their heirs with tax bills.
        </p>
        <p>
          We can assess your estate value and advise if this solution is suitable for your circumstances.
        </p>
      </div>
    ),
  },
  {
    title: "What is a Section 73 Policy",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          A Section 73 Policy is a savings or investment policy intended to help fund Capital
          Acquisitions Tax (CAT) on lifetime gifts. It is typically used by parents or grandparents
          gifting assets to children or grandchildren during their lifetime.
        </p>
        <div>
          <p className="text-brand-teal font-semibold">Key features include:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-brand-teal">
            <li>Must be in force for at least 8 years</li>
            <li>Premiums must be paid by the person making the gift</li>
            <li>If conditions are met, the proceeds can be used to pay CAT without being treated as
                an additional gift</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Are there tax benefits to Section 73",
    body: (
      <div className="space-y-4 text-slate-600">
        <p>
          Yes, the main benefit is that the policy proceeds can be used to pay CAT without themselves
          being taxed as a gift, provided all Revenue conditions are met.
        </p>
        <p>
          This makes Section 73 a valuable tool for intergenerational wealth planning and lifetime
          gifting strategies.
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
          Section 72 &amp; Section 73 Life Insurance Policies
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