import Services from "@/app/services/corporate/_components/services";
import Contact from "@/components/contact";
import Hero from "@/components/hero-text-input";

export default function Corporate() {
  return (
    <>
      <Hero
        title={<>Company Financial Services</>}
        subtitle={[
          <>Professional Financial Planning for Irish Businesses</>,
          <>We offer <span className="font-bold text-brand-teal">trusted</span>, strategic support to companies across Ireland. Our tailored services help employers manage their obligations, grow financial assets, and offer valuable <span className="font-bold text-brand-teal">employee benefits</span> through pensions and protection.</>,
          <>Our goal is to deliver <span className="font-bold text-brand-teal">professional</span>, <span className="font-bold text-brand-teal">impartial</span> advice that strengthens your business, supports your team, and builds long-term financial stability, leading to strong staff retention.</>
        ]}
        className="bg-white"
        />
      <Services/>
      <Contact/>
    </>
  );
}