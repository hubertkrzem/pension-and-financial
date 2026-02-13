import type { PortableTextBlock } from "@portabletext/react";

type FaqItem = {
  heading: string;
  body: PortableTextBlock[];
};

type FaqGroup = {
  heading: string;
  items: FaqItem[];
};

type Props = {
  data: {
    heading: string;
    body?: PortableTextBlock[];
  };
  faqs: FaqGroup[];
};

export default function FaqContents({ data, faqs }: Props) {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {data.heading}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {faqs?.map((faq, i) => {
            const sectionId = faq.heading?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
            return (
              <a
                key={i}
                href={`#${sectionId}`}
                className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all hover:border-brand-teal/40 hover:shadow-md"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-teal/10 text-xs font-bold text-brand-teal">
                  {i + 1}
                </span>
                <p className="text-sm font-semibold text-slate-900 group-hover:text-brand-teal transition-colors">
                  {faq.heading}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
