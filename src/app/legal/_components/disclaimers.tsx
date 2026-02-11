import { PortableText, type PortableTextBlock } from "@portabletext/react";

type DisclaimerItem = {
  heading: string;
  body: PortableTextBlock[];
};

type Props = {
  data: {
    heading: string;
    content: DisclaimerItem[];
  };
};

export default function Disclaimers({ data }: Props) {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-left">
        {data.content?.map((item, i) => (
          <div key={i} className="mt-10 first:mt-0">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {item.heading}
            </h2>
            <div className="rich-text text-slate-600">
              <PortableText value={item.body} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
