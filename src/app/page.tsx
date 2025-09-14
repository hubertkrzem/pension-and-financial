import OurServices from "@/app/_components/ourServices";
import AutoEnrolment from "@/app/_components/autoEnrolment";
import Hero from "@/components/hero";
import Intro from "@/app/_components/intro";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero/>
      <Intro/>
      <OurServices/>
      <AutoEnrolment/>
      <Contact/>
    </>
  );
}
