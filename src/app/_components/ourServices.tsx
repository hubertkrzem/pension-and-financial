import Link from "next/link";

type ServiceBox = {
  heading: string;
  list: string[];
  link: { linkLabel: string; linkAddress: string };
};

type Props = {
  heading: string;
  box1: ServiceBox;
  box2: ServiceBox;
};

export default function OurServices({ heading, box1, box2 }: Props) {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 gap-4">
          <ServiceCard icon={<ShieldIcon />} data={box1} />
          <ServiceCard icon={<TrendIcon />} data={box2} />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, data }: { icon: React.ReactNode; data: ServiceBox }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm w-full max-w-sm mx-auto">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900">{data.heading}</h3>
      <ul className="mt-4 space-y-3 text-slate-600">
        {data.list?.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={data.link?.linkAddress ?? "#"}
        className="mt-6 inline-flex items-center font-semibold text-brand-teal hover:text-brand-navy"
      >
        {data.link?.linkLabel ?? "Learn more →"}
      </Link>
    </div>
  );
}

function ShieldIcon({ className = "h-8 w-8 text-brand-teal" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function TrendIcon({ className = "h-8 w-8 text-brand-teal" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
    </svg>
  );
}
