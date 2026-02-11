import Link from "next/link";
import { PortableText, PortableTextBlock } from "@portabletext/react";

type Props = {
  header: string;
  featuredArticle: {
    featureCardTitle: string;
    featureCardBlurb: PortableTextBlock[];
    featureCardLinkLabel: string;
    slug: { current: string };
  };
};

export default function FeaturedArticle({ header, featuredArticle }: Props) {
  return (
    <section className="pt-6 sm:pt-8 pb-14 sm:pb-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-lg font-bold text-slate-900 sm:text-3xl py-4">
          {header}
        </h2>

        <div className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl text-center font-bold tracking-tight text-slate-900 sm:text-3xl">
            {featuredArticle.featureCardTitle}
          </h2>

          <div className="rich-text mt-4 text-slate-600">
            <PortableText value={featuredArticle.featureCardBlurb} />
          </div>

          <p className="mt-6">
            <Link
              href={`/articles/${featuredArticle.slug.current}`}
              className="font-semibold text-brand-teal hover:text-brand-navy"
            >
              {featuredArticle.featureCardLinkLabel}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
