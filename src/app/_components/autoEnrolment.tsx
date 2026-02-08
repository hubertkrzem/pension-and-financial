import Link from "next/link";
import { PortableText, PortableTextBlock } from "@portabletext/react";

type Props = {
  header: string;
  bubble: {
    heading: string;
    body: PortableTextBlock[];
    link: { linkLabel: string; linkAddress: string };
  };
};

export default function AutoEnrolment({ header, bubble }: Props) {
  return (
    <section className="bg-gray-50 pt-6 sm:pt-8 pb-14 sm:pb-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-lg font-bold text-slate-900 sm:text-3xl py-4">
          {header}
        </h2>

        <div className="border-1 bg-white rounded rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl text-center font-bold tracking-tight text-slate-900 sm:text-3xl">
            {bubble.heading}
          </h2>

          <div className="mt-4 text-slate-600">
            <PortableText value={bubble.body} />
          </div>

          <p className="mt-6">
            <Link href={bubble.link?.linkAddress ?? "#"} className="font-semibold text-brand-teal hover:text-brand-navy">
              {bubble.link?.linkLabel ?? "Learn more →"}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
