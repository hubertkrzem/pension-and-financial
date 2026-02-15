import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { ARTICLE_BY_SLUG_QUERY, ARTICLE_METADATA_QUERY } from "@/sanity/queries";
import Hero from "@/components/hero-text-input";
import ArticleContent from "@/components/article-content";
import Contact from "@/components/contact";
import AlternatingSections from "@/components/alternating-sections";

export const revalidate = 3600;

type ArticleParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ArticleParams): Promise<Metadata> {
  const { slug } = await params;
  const article = await client.fetch(ARTICLE_METADATA_QUERY, { slug });

  if (!article) {
    return { title: "Article not found" };
  }

  return {
    title: article.title,
    description: article.hero?.heading,
  };
}

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
