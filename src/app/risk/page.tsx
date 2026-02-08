import { client } from "@/sanity/client";
import { RISK_PAGE_QUERY } from "@/sanity/queries";
import Contact from "@/components/contact";
import Intro from "@/app/risk/_components/intro";
import RiskScale from "@/app/risk/_components/riskScale";
import Hero from "@/components/hero-text-input";

export default async function Risk() {
  const page = await client.fetch(RISK_PAGE_QUERY);

  return (
    <>
      <Hero
        title={page?.hero?.heading}
        body={page?.hero?.body}
        className="bg-gray-50"
      />
      {page?.riskAppetite && <Intro data={page.riskAppetite} />}
      <RiskScale />
      <Contact />
    </>
  );
}
