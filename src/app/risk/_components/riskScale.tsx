// components/sections/RiskScale.tsx
"use client";

import { useRef, useState } from "react";

type RiskItem = {
  level: number;
  name: string;           // e.g., "Low risk"
  blurb: string;          // short description
  profile: string;        // investor profile
};

const DATA: RiskItem[] = [
  { level: 1, name: "Very low risk", blurb: "Minimal fluctuations. Capital protection is key.", profile: "Very cautious investors prioritising stability." },
  { level: 2, name: "Low risk", blurb: "Minimal fluctuations. Capital protection is key.", profile: "Cautious investors seeking stability." },
  { level: 3, name: "Low–medium risk", blurb: "Small fluctuations, focus on preservation with some growth.", profile: "Conservative investors willing to accept limited risk." },
  { level: 4, name: "Medium risk", blurb: "Balanced risk/return with moderate volatility.", profile: "Balanced investors seeking steady growth." },
  { level: 5, name: "Medium–high risk", blurb: "Higher volatility with increased growth potential.", profile: "Growth investors comfortable with drawdowns." },
  { level: 6, name: "High risk", blurb: "Significant fluctuations. Long-term horizon recommended.", profile: "Aggressive investors seeking higher returns." },
  { level: 7, name: "Very high risk", blurb: "Large swings likely. Only for experienced investors.", profile: "Very aggressive investors with strong risk tolerance." },
];

// nice gradient-ish colour steps for the selector circles
const levelColors = [
  "bg-[#00A9E0]",
  "bg-[#0092D7]",
  "bg-[#007BCC]",
  "bg-[#1165BE]",
  "bg-[#284FB1]",
  "bg-[#3D39A5]",
  "bg-[#10069F]",
];

export default function RiskScale() {
  const [selected, setSelected] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSelect = (idx: number) => {
    setSelected(idx);
    const el = cardRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4">
        {/* Title */}
        <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
          7 Point Risk Scale
        </h2>

        {/* Selector */}
        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-500">
          <span className="hidden sm:inline">Low risk</span>
          <div className="flex items-center gap-2">
            {DATA.map((item, i) => {
              const active = selected === i;
              return (
                <button
                  key={item.level}
                  type="button"
                  onClick={() => handleSelect(i)}
                  aria-pressed={active}
                  aria-label={`Select risk level ${item.level}`}
                  className={[
                    "relative inline-flex h-12 w-12 items-center justify-center rounded-full",
                    "ring-3 ring-slate-300 transition cursor-pointer",
                    active ? "ring-3 ring-offset-1 ring-offset-gray-50 ring-slate-400" : "",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "absolute inset-1 rounded-full",
                      levelColors[i],
                      active ? "opacity-100" : "opacity-90",
                    ].join(" ")}
                    aria-hidden
                  />
                  <span className="relative z-10 text-white text-sm font-semibold">
                    {item.level}
                  </span>
                </button>
              );
            })}
          </div>
          <span className="hidden sm:inline">High risk</span>
        </div>

        {/* Cards */}
        <div className="mt-8 space-y-4">
          {DATA.map((item, i) => {
            const active = selected === i;
            return (
              <div
                key={item.level}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                id={`risk-${item.level}`}
                className={[
                  "rounded-xl border bg-white px-5 py-4 sm:px-6 sm:py-5",
                  "transition-shadow",
                  active
                    ? "border-slate-500 shadow-[0_0_0_3px_rgba(100,116,139,0.25)]"
                    : "border-slate-300",
                ].join(" ")}
              >

                {/* Content: mobile stacks; desktop in three columns */}
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {/* Header row */}
                  <div className="flex items-baseline justify-between">
                    <div className="flex flex-col sm:items-baseline gap-2"> 
                      <span className="text-3xl leading-none text-brand-teal">
                        Level <span>{item.level}</span>
                      </span>
                      <span className="text-slate-500">{item.name}</span>
                    </div>
                  </div>

                  {/* Column 2: Description */}
                  <div>
                    <p className="font-semibold text-brand-teal">Description</p>
                    <p className="text-sm text-slate-600 mt-1">{item.blurb}</p>
                  </div>

                  {/* Column 3: Investor Profile */}
                  <div>
                    <p className="font-semibold text-brand-teal">Investor Profile</p>
                    <p className="text-sm text-slate-600 mt-1">{item.profile}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}