import { PortableText, type PortableTextBlock } from "@portabletext/react";

type MissionData = {
  heading: string;
  subheading: string;
  quotes: string[];
  author: string;
  body: PortableTextBlock[];
};

export default function Mission({ data }: { data: MissionData }) {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 text-slate-600">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{data.heading}</h2>
          <p className="mt-3">{data.subheading}</p>
        </div>

        {/* Quotes */}
        {data.quotes && data.quotes.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            {data.quotes.map((quote, i) => (
              <figure key={i} className="relative">
                <blockquote className="text-2xl sm:text-3xl font-semibold leading-relaxed text-slate-800 pl-8">
                  <span aria-hidden="true" className="absolute left-0 top-0 text-brand-teal text-6xl align-top leading-none select-none">&ldquo;</span>
                  {quote}
                  <span aria-hidden="true" className="absolute text-brand-teal text-6xl align-bottom leading-none select-none">&rdquo;</span>
                </blockquote>
              </figure>
            ))}
          </div>
        )}

        {/* Attribution */}
        {data.author && (
          <p className="mt-8 text-center text-sm font-medium">
            — {data.author}
          </p>
        )}

        {/* Body content */}
        {data.body && (
          <div className="rich-text mt-8 text-center max-w-3xl mx-auto">
            <PortableText value={data.body} />
          </div>
        )}
      </div>
    </section>
  );
}
