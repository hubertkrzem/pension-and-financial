import Contact from "@/components/contact";
import Questions from "./_components/contents";
import Pensions from "./_components/pensions";
import Investments from "./_components/investment-policies";
import General from "./_components/general";
import Hero from "@/components/hero";

import Companies from "./_components/companies";
import Individuals from "./_components/individuals";
import Section7273 from "./_components/section7273";
import Intro from "./_components/intro";
import Text from "./_components/text"

export default function Faq() {
  return (
    <>
    <Hero
        title={["Frequently Asked Questions"]}
    />
    <Intro/>
    <Questions/>
    <Pensions/>
    <Investments/>
    <Section7273/>
    <General/>

    <Companies/>
    <Individuals/>

    <Text
      title="Need More Help?"
      subtitle={[
        "If you have any questions about pensions, investment planning, or inheritance tax solutions, please contact us directly. We are here to provide clear, professional guidance you can trust.",
        "We aim to make the process simple, transparent, and entirely focused on your success."
      ]}
    />
    <Contact/>
    </>
  );
}