import Services from "@/app/services/corporate/_components/services";
import Contact from "@/components/contact";
import Hero from "@/components/hero"
import Text from "@/components/text"

export default function Corporate() {
  return (
    <>
      <Hero
        title="Company Financial Services"
      />
      <Text
        title="Professional Financial Planning for Irish Businesses"
        subtitle={[
          "We offer trusted, strategic support to companies across Ireland. Our tailored services help employers manage their obligations, grow financial assets, and offer valuable employee benefits through pensions and protection.",
          "Our goal is to deliver professional, impartial advice that strengthens your business, supports your team, and builds long-term financial stability, leading to strong staff retention."
        ]}
      />
      <Services/>
      <Contact/>
    </>
  );
}