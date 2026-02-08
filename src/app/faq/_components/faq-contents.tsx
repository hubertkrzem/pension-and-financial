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
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {data.heading}
          </h2>
        </div>

        <div className="text-slate-600 font-semibold mt-4">
          <ul className="list-disc list-inside underline">
            {faqs?.map((faq, i) => {
              const sectionId = faq.heading?.toLowerCase().replace(/\s+/g, "-");
              return (
                <li key={i}>
                  <a href={`#${sectionId}`}>{faq.heading}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
