import { client } from "@/sanity/client";
import { RISK_PAGE_QUERY } from "@/sanity/queries";
import Contact from "@/components/contact";
import Intro from "@/app/risk/_components/intro";
import RiskScale from "@/app/risk/_components/riskScale";
import Hero from "@/components/hero-text-input";
import AlternatingSections from "@/components/alternating-sections";

export const revalidate = 3600;

export default async function Risk() {
  const page = await client.fetch(RISK_PAGE_QUERY);

  return (
    <AlternatingSections>
      <Hero
        title={page?.hero?.heading}
        body={page?.hero?.body}
      />
      {page?.riskAppetite && <Intro data={page.riskAppetite} />}
      <RiskScale warnings={page?.body} levels={page?.riskLevels} />
      <Contact />
    </AlternatingSections>
  );
}
