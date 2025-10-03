import Contact from "@/components/contact";
import Hero from "@/components/hero-text-input";
import Article from "./_components/article";

export default function AutoEnrollment() {
  return (
    <>
    <Hero
      title={<>What Is Pension Auto-Enrolment (AE)?</>}
      subtitle={["The Irish Government's Auto-Enrolment (AE) pension scheme will launch in January 2026. It aims to increase retirement savings by automatically enrolling eligible employees into a workplace pension scheme—unless they choose to opt out"]}
      className="bg-white"
    />
    <Article/>
    <Contact/>
    </>
  );
}