import { client } from "@/sanity/client";
import { HOME_PAGE_QUERY } from "@/sanity/queries";
import OurServices from "@/app/_components/ourServices";
import AutoEnrolment from "@/app/_components/autoEnrolment";
import Hero from "@/components/hero-text-input";
import Contact from "@/components/contact";

export default async function Home() {
  const page = await client.fetch(HOME_PAGE_QUERY);

  return (
    <>
      <Hero
        title={page?.hero?.heading}
        body={page?.hero?.body}
        className="bg-gray-50"
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
    </>
  );
}
