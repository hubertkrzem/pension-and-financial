import { client } from "@/sanity/client";
import { ARTICLE_PAGE_QUERY } from "@/sanity/queries";
import Contact from "@/components/contact";
import Hero from "@/components/hero-text-input";
import ArticleContent from "./_components/article";
import AlternatingSections from "@/components/alternating-sections";

export default async function AutoEnrollment() {
  const page = await client.fetch(ARTICLE_PAGE_QUERY);

  return (
    <AlternatingSections>
      <Hero
        title={page?.hero?.heading}
        body={page?.hero?.body}
      />
      {page?.content && <ArticleContent content={page.content} />}
      <Contact />
    </AlternatingSections>
  );
}
