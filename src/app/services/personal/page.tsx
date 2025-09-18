import Services from "@/app/services/personal/_components/services";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Intro from "@/components/intro"

export default function Personal() {
  return (
    <>
    <Hero/>
    {/* 
      title={["Personal Wealth Management & Financial Planning"]}
     */}
    <Intro
      title="Personal Wealth Management & Financial Planning"
      subtitle={[
        <>Tailored Wealth Solutions for High Net Worth Clients</>,
        <>We provide expert, discreet financial planning and <span className="font-bold text-brand-teal">Wealth Management</span> services for high net worth individuals and families. From strategic investment planning to tax-efficient estate planning, our aim is to protect and grow your assets for you and your generations to come.</>
      ]}
    />
    <Services/>
    <Contact/>
    </>
  );
}