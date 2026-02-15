import { PortableText, type PortableTextBlock } from "@portabletext/react";

type Props = {
  data: {
    heading: string;
    content: PortableTextBlock[];
  };
};

export default function Disclaimers({ data }: Props) {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-left">
        {data.content && data.content.length > 0 && (
          <div className="rich-text text-slate-600">
            <PortableText value={data.content} />
          </div>
        )}
      </div>
    </section>
  );
}
