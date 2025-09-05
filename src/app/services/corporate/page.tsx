import Services from "@/app/services/corporate/_components/services";
import Contact from "@/components/contact";
import Hero from "@/components/hero"

export default function Corporate() {
  return (
    <>
      <Hero
              title="Company Financial Services"
              subtitle={[
                  "Professional Financial Planning for Irish Businesses",
                  "We are a Central Bank of Ireland-regulated financial planning broker offering trusted, strategic support to companies across Ireland. Our tailored services help employers manage their obligations, grow surplus assets, and offer valuable employee benefits through pensions and protection.",
                  "Our goal is to deliver professional, impartial advice that strengthens your business, supports your team, and builds long-term financial stability."
                ]}
          />
      <Services/>
      <Contact/>
    </>
  );
}