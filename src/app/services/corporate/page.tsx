import { client } from "@/sanity/client";
import { CORPORATE_PAGE_QUERY } from "@/sanity/queries";
import ServicesAccordion from "@/components/services-accordion";
import Contact from "@/components/contact";
import Hero from "@/components/hero-text-input";
import AlternatingSections from "@/components/alternating-sections";

export default async function Corporate() {
  const page = await client.fetch(CORPORATE_PAGE_QUERY);

  return (
    <AlternatingSections>
      <Hero
        title={page?.hero?.heading}
        body={page?.hero?.body}
      />
      {page?.services && (
        <ServicesAccordion
          heading={page.services.heading}
          items={page.services.items}
        />
      )}
      <Contact />
    </AlternatingSections>
  );
}
