import { client } from "@/sanity/client";
import { CORPORATE_PAGE_QUERY } from "@/sanity/queries";
import ServicesAccordion from "@/components/services-accordion";
import Contact from "@/components/contact";
import Hero from "@/components/hero-text-input";

export default async function Corporate() {
  const page = await client.fetch(CORPORATE_PAGE_QUERY);

  return (
    <>
      <Hero
        title={page?.hero?.heading}
        body={page?.hero?.body}
        className="bg-white"
      />
      {page?.services && (
        <ServicesAccordion
          heading={page.services.heading}
          items={page.services.items}
        />
      )}
      <Contact />
    </>
  );
}
