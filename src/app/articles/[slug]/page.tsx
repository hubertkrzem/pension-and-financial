import { notFound } from "next/navigation";
import { client, REVALIDATE_TIME } from "@/sanity/client";
import { ARTICLE_BY_SLUG_QUERY } from "@/sanity/queries";
import Hero from "@/components/hero-text-input";
import ArticleContent from "@/components/article-content";
import Contact from "@/components/contact";
import AlternatingSections from "@/components/alternating-sections";

export const revalidate = REVALIDATE_TIME;

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await client.fetch(ARTICLE_BY_SLUG_QUERY, { slug });

  if (!page) notFound();

  return (
    <AlternatingSections>
      <Hero title={page.hero?.heading} body={page.hero?.body} />
      {page.content && <ArticleContent content={page.content} />}
      <Contact />
    </AlternatingSections>
  );
}
