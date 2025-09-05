
import Mission from "@/app/about/_components/mission";
import TeamSection from "@/app/about/_components/teamSection"
import Contact from "@/components/contact";
import Hero from "@/components/hero";

export default function About() {
  return (
    <>
      <Hero 
        title="About us"
        subtitle={[
          "Founded in 1992 by John Clare, a seasoned financial advisor with over 30 years of experience in pensions and financial services.",
          "Our firm is built on trust, professionalism, and a commitment to long-term client success."
        ]}
          />
      <Mission/>
      <TeamSection/>
      <Contact/>
    </>
  );
}