import { client } from "@/sanity/client";
import { HOME_PAGE_QUERY } from "@/sanity/queries";
import OurServices from "@/app/_components/ourServices";
import AutoEnrolment from "@/app/_components/autoEnrolment";
import Hero from "@/components/hero-text-input";
import Contact from "@/components/contact";
import AlternatingSections from "@/components/alternating-sections";

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
      {page?.articleSection && (
        <AutoEnrolment
          header={page.articleSection.header}
          bubble={page.articleSection.bubble}
        />
      )}
      <Contact />
    </AlternatingSections>
  );
}
