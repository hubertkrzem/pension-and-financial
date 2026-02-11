import Image from "next/image";
import { PortableText, type PortableTextBlock, type PortableTextComponents } from "@portabletext/react";

type Props = {
  title?: React.ReactNode;
  headingLine2?: string;
  subtitle?: React.ReactNode[];
  body?: PortableTextBlock[];
  className?: string;
};

const portableTextComponents: PortableTextComponents = {
  block: {
    blockquote: ({ children }) => (
      <blockquote className="text-center text-balance italic">{children}</blockquote>
    ),
  },
};

export default function HeroTextInput({
  title = "Title",
  headingLine2,
  subtitle,
  body,
  className = "",
}: Props) {
  return (
    <section className={`py-14 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT: Shopfront image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="inline-block rounded-xl bg-white shadow-2xl overflow-hidden">
              <Image
                src="/shop-front-zoom2.jpg"
                alt="Pension & Financial shopfront"
                width={1753}
                height={1017}
                className="block w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Text section */}
          <div className="lg:col-span-6 text-slate-600 md:text-left mx-auto max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-black sm:text-4xl">
              {title}
              {headingLine2 && (
                <>
                  <br />
                  {headingLine2}
                </>
              )}
            </h1>

            <div className="rich-text pt-2">
              {body ? (
                <PortableText value={body} components={portableTextComponents} />
              ) : (
                subtitle?.map((line, index) => (
                  <p className="mt-4" key={index}>{line}</p>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
