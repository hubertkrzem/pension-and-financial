import { PortableText, type PortableTextBlock } from "@portabletext/react";

type Props = {
  title?: string;
  subtitle?: React.ReactNode[];
  body?: PortableTextBlock[];
  className?: string;
};

export default function Text({
  title = "Title",
  subtitle = ["Subtitle"],
  body,
  className = "",
}: Props) {
  return (
    <section className={`py-14 sm:py-16 ${className}`}>
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>

        <div className="rich-text mt-4 space-y-2 text-slate-600">
          {body ? (
            <PortableText value={body} />
          ) : (
            subtitle.map((line, index) => (
              <p key={index}>{line}</p>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
