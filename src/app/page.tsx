import OurServices from "@/app/_components/ourServices";
import WhyChooseUs from "@/app/_components/whyChooseUs";
import AutoEnrolment from "@/app/_components/autoEnrolment";
import Hero from "@/app/_components/hero";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero/>
      <OurServices/>
      <WhyChooseUs/>
      <AutoEnrolment/>
      <Contact/>
    </>
  );
}
