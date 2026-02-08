import Image from "next/image";
import { PortableText, type PortableTextBlock } from "@portabletext/react";

type ContentBlock = {
  _type: string;
  heading?: string;
  body?: PortableTextBlock[];
  asset?: { url: string };
  alt?: string;
  [key: string]: unknown;
};

type Props = {
  content: ContentBlock[];
};

export default function ArticleContent({ content }: Props) {
  return (
    <section className="bg-gray-50 py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        {content?.map((block, i) => {
          if (block._type === "textTitleSection") {
            return (
              <div key={i} className="mt-8 first:mt-0">
                {block.heading && (
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {block.heading}
                  </h2>
                )}
                {block.body && (
                  <div className="mt-4 text-slate-600 text-left">
                    <PortableText value={block.body} />
                  </div>
                )}
              </div>
            );
          }

          if (block._type === "image" && block.asset?.url) {
            return (
              <div key={i} className="mt-8">
                <Image
                  src={block.asset.url}
                  alt={block.alt || ""}
                  width={768}
                  height={432}
                  className="m-4 mx-auto block max-w-full"
                />
              </div>
            );
          }

          if (block._type === "block") {
            return (
              <div key={i} className="mt-4 text-slate-600 text-left">
                <PortableText value={[block]} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
}
