import Contact from "@/components/contact";
import Intro from "@/app/risk/_components/intro";
import RiskScale from "@/app/risk/_components/riskScale";
import Hero from "@/components/hero";

export default function Risk() {
  return (
    <>
    <Hero
            title="Understanding Risk"
        />
    <Intro/>
    <RiskScale/>
    <Contact/>
    </>
  );
}