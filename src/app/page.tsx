import { client } from "@/sanity/client";
import { HOME_PAGE_QUERY } from "@/sanity/queries";
import OurServices from "@/app/_components/ourServices";
import FeaturedArticle from "@/app/_components/featuredArticle";
import Hero from "@/components/hero-text-input";
import Contact from "@/components/contact";
import AlternatingSections from "@/components/alternating-sections";

export const revalidate = 3600;

export default async function Home() {
  const page = await client.fetch(HOME_PAGE_QUERY);

  return (
    <AlternatingSections>
      <Hero
        title={page?.hero?.heading}
        headingLine2={page?.hero?.headingLine2}
        body={page?.hero?.body}
      />
      {page?.services && (
        <OurServices
          heading={page.services.heading}
          box1={page.services.box1}
          box2={page.services.box2}
        />
      )}
      {page?.articleSection?.featuredArticle && (
        <FeaturedArticle
          header={page.articleSection.header}
          featuredArticle={page.articleSection.featuredArticle}
        />
      )}
      <Contact />
    </AlternatingSections>
  );
}
