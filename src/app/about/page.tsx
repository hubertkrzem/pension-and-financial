import { client } from "@/sanity/client";
import { ABOUT_PAGE_QUERY } from "@/sanity/queries";
import Mission from "@/app/about/_components/mission";
import TeamSection from "@/app/about/_components/teamSection";
import WhyChooseUs from "@/app/about/_components/whyChooseUs";
import Contact from "@/components/contact";
import Hero from "@/components/hero-text-input";

export default async function About() {
  const page = await client.fetch(ABOUT_PAGE_QUERY);

  return (
    <>
      <Hero
        title={page?.hero?.heading}
        body={page?.hero?.body}
        className="bg-white"
      />
      {page?.mission && <Mission data={page.mission} />}
      {page?.ourTeam && <TeamSection members={page.ourTeam} />}
      {page?.whyUs1 && <WhyChooseUs data={page.whyUs1} />}
      <Contact />
    </>
  );
}
