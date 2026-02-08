import { PortableText, type PortableTextBlock } from "@portabletext/react";

type Props = {
  data: {
    heading: string;
    body: PortableTextBlock[];
  };
};

export default function Intro({ data }: Props) {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {data.heading}
        </h2>
        {data.body && (
          <div className="mt-4 text-slate-600">
            <PortableText value={data.body} />
          </div>
        )}
      </div>
    </section>
  );
}
