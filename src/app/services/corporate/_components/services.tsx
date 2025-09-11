"use client";

import { useState } from "react";

type Item = {
  title: string;
  body: React.ReactNode;
};

const items: Item[] = [
  {
    title: "Shareholder & Director Benefits",
    body: (
      <div className="space-y-4 text-slate-600 marker:text-brand-teal">
        <p>
          There are a range of tailored solutions available to protect company owners and key decision-makers to provide both personal financial security and business continuity including:
        </p>
        <div>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Executive Pensions – structured retirement plans designed for company directors.</li>
            <li>Key Person (Keyman) Insurance – financial protection for the business if a key director or employee becomes seriously ill or dies.</li>
            <li>Directors’ Insurance – cover that helps protect directors and their families in the event of illness or death.</li>
            <li>Shareholder Protection – ensures remaining shareholders can retain control of the business if a shareholder passes away.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Company Employee Benefits",
    body: (
      <div className="space-y-4 text-slate-600 marker:text-brand-teal">
        <p>
          Employee Benefits are company backed pension and insurance plans that support staff both
          now and in the future. They help attract and retain talent giving employees financial security
          and show a company’s commitment to its people.
        </p>
      </div>
    ),
  },
  {
    title: "Company Pension Schemes",
    body: (
      <div className="space-y-4 text-slate-600 marker:text-brand-teal">
        <p>
          A <span className="font-bold text-brand-teal">Company Pension Scheme</span> is one of the most valuable employee benefits a business can
          offer. These schemes help your team save for retirement, while also offering tax efficiencies
          and long-term planning advantages for your company.
        </p>
        <p>
          We support employers in setting up and managing compliant pension arrangements, including
          preparation for Ireland’s upcoming auto-enrolment system, commencing January 2026.
        </p>
        <div>
          <p className="font-semibold text-brand-teal">Key Features:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Regular employer contributions</li>
            <li>Employee contributions qualify for income tax relief</li>
            <li>Investment options to match different employee risk profiles</li>
            <li>Compliant with Revenue rules and future auto-enrolment</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-brand-teal">Benefits for your business:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Attract and retain high-quality staff</li>
            <li>Demonstrate a long-term commitment to employee wellbeing</li>
            <li>Position your business as a responsible and forward-thinking employer</li>
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
          Our <span className="font-bold text-brand-teal">Company Investment Planning</span> service focuses on helping businesses manage
          company funds more efficiently. Whether preparing for future growth, capital spending, or
          improving cash flow yield, we provide professional investment guidance tailored to your
          financial goals.
        </p>
        <div>
          <p className="font-semibold text-brand-teal">Key Features:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Low–medium risk investment options</li>
            <li>Professionally managed fund access</li>
            <li>Tailored strategies to match your company’s goals</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-brand-teal">Benefits:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Enhanced return on idle capital</li>
            <li>Improved liquidity and long-term financial strength</li>
            <li>Demonstrates financial governance to stakeholders</li>
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
          We provide <span className="font-bold text-brand-teal">Group Risk Benefits</span> that support employee wellbeing and protect against life’s
          unexpected challenges.
        </p>
        <div>
          <p className="font-semibold text-brand-teal">Types of Cover:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Group Life Cover (death-in-service) lump sum on death</li>
            <li>Group Income Protection, replace income during illness</li>
            <li>Group Specified Illness Cover, lump sum payable on medical event</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-brand-teal">Benefits:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Financial security for employees and their families</li>
            <li>Enhanced staff loyalty and retention</li>
            <li>Easy-to-administer and cost-effective solutions</li>
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