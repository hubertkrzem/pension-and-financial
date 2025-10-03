
import Mission from "@/app/about/_components/mission";
import TeamSection from "@/app/about/_components/teamSection"
import WhyChooseUs from "@/app/about/_components/whyChooseUs"
import Contact from "@/components/contact";
import Hero from "@/components/hero-text-input";

export default function About() {
  return (
    <>
      <Hero
        title={<>About us</>}
        subtitle={["Founded in 1992 by John Clare, a seasoned financial advisor with over 30 years of experience in pensions and financial services.",
                    "Our firm is built on trust, professionalism, and a commitment to long-term client success."]}
        className="bg-white"
      />
      <Mission/>
      <TeamSection/>
      <WhyChooseUs/>
      <Contact/>
    </>
  );
}