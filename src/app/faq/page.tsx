import Contact from "@/components/contact";
import Questions from "@/app/faq/_components/contents";
import Pensions from "@/app/faq/_components/pensions";
import Investments from "@/app/faq/_components/investment-policies";
import General from "@/app/faq/_components/general";
import Hero from "@/components/hero"

import Companies from "@/app/faq/_components/companies";
import Individuals from "@/app/faq/_components/individuals";
import General2 from "@/app/faq/_components/general2";

export default function Faq() {
  return (
    <>
    <Hero
        title="Frequently Asked Questions (FAQ)"
        subtitle={[
            "At Pension & Financial, we understand that financial planning can be complex. Our aim is to provide clarity and confidence when it comes to protecting your business, your people, and your wealth.",
            "Below are answers to some of the most common questions we receive from both corporate and personal clients."
        ]}
    />
    <Questions/>
    <Pensions/>
    <Investments/>
    <General/>

    <Companies/>
    <Individuals/>
    <General2/>

    <Contact
        title="Need More Help?"
        subtitle="If you have any questions about pensions, investment planning,
                    or inheritance tax solutions, please contact us directly.
                    We are here to provide clear, professional guidance you can trust."
    />
    </>
  );
}