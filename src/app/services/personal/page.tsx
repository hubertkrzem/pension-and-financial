import Services from "@/app/services/personal/_components/services";
import Contact from "@/components/contact";
import Hero from "@/components/hero"

export default function Personal() {
  return (
    <>
    <Hero
      title="Personal Wealth Management & Financial Planning"
      subtitle={[
        "Tailored Wealth Solutions for High Net Worth Clients",
        "We provide expert, discreet financial planning and wealth management services for high net worth individuals and families. From strategic investment planning to tax-efficient estate structures, our aim is to protect and grow your assets for generations to come."
      ]}
    />
    <Services/>
    <Contact/>
    </>
  );
}