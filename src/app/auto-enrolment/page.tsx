import { client } from "@/sanity/client";
import { ARTICLE_PAGE_QUERY } from "@/sanity/queries";
import Contact from "@/components/contact";
import Hero from "@/components/hero-text-input";
import ArticleContent from "./_components/article";

export default async function AutoEnrollment() {
  const page = await client.fetch(ARTICLE_PAGE_QUERY);

  return (
    <>
      <Hero
        title={page?.hero?.heading}
        body={page?.hero?.body}
        className="bg-white"
      />
      {page?.content && <ArticleContent content={page.content} />}
      <Contact />
    </>
  );
}
