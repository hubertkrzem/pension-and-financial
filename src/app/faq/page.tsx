import type { PortableTextBlock } from "@portabletext/react";
import { client } from "@/sanity/client";
import { FAQ_PAGE_QUERY } from "@/sanity/queries";
import Contact from "@/components/contact";
import Hero from "@/components/hero-text-input";
import FaqContents from "./_components/faq-contents";
import FaqSection from "./_components/faq-section";
import Text from "@/components/text";
import AlternatingSections from "@/components/alternating-sections";

export const revalidate = 3600;

export default async function Faq() {
  const page = await client.fetch(FAQ_PAGE_QUERY);

  return (
    <AlternatingSections>
      <Hero
        title={page?.hero?.heading}
        body={page?.hero?.body}
      />
      {page?.contents && page?.faqs && (
        <FaqContents data={page.contents} faqs={page.faqs} />
      )}
      {page?.faqs?.map((faq: { heading: string; items: { heading: string; body: PortableTextBlock[] }[] }, i: number) => (
        <FaqSection key={i} data={faq} />
      ))}
      {page?.moreInfo && (
        <Text
          title={page.moreInfo.heading}
          subtitle={[]}
          body={page.moreInfo.body}
        />
      )}
      <Contact />
    </AlternatingSections>
  );
}
