import Link from "next/link";

export default function OurServices() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading + subheading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Core Services
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 gap-4">
          {/* Corporate Clients */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm w-full max-w-sm mx-auto">
            {/* Icon */}
            <div className="mb-4">
              <ShieldIcon className="h-8 w-8 text-brand-teal" />
            </div>

            <h3 className="text-xl font-semibold text-slate-900">Corporate Clients</h3>

            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                <span>Corporate Pension Schemes</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                <span>Auto Enrolment Compliance</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                <span>Employee Benefits</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                <span>Group Risk Benefits (Life, Illness, and Income Protection)</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                <span>Company Investment Planning and Financial Governance</span>
              </li>
            </ul>

            <Link
              href="/services/corporate"
              className="mt-6 inline-flex items-center font-semibold text-brand-teal hover:text-brand-navy"
            >
              Learn more →
            </Link>
          </div>

          {/* High Net-Worth Individuals */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm w-full max-w-sm mx-auto">
            {/* Icon */}
            <div className="mb-4">
              <TrendIcon/>
            </div>

            <h3 className="text-xl font-semibold text-slate-900">High Net-Worth Individuals</h3>

            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                <span>Wealth Management and Strategic Financial Planning</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                <span>Tax-Efficient Investment Advice and Portfolio Construction</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                <span>Personal Pension, PRSAs, Executive Pensions</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                <span>Estate &amp; Inheritance Tax Planning</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                <span>Life Assurance, Income Protection for Family Security</span>
              </li>
            </ul>

            <Link
              href="/services/personal"
              className="mt-6 inline-flex items-center font-semibold text-brand-teal hover:text-brand-navy"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==== Inline SVG Icons (no deps) ==== */

function ShieldIcon({ className = "h-8 w-8 text-brand-teal" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function TrendIcon({ className = "h-8 w-8 text-brand-teal" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
    </svg>
  );
}