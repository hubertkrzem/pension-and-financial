import OurServices from "@/app/_components/ourServices";
import AutoEnrolment from "@/app/_components/autoEnrolment";
import Hero from "@/components/hero-text-input";
import Intro from "@/app/_components/intro";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero
        title={<>Welcome to<br></br>Pension & Financial</>}
        subtitle={[
          <>At Pension & Financial, we are proud to offer expert, independent financial advice and personalised service to both corporate clients and high-net-worth individuals across Ireland. Founded in 1992 by John Clare, with over 33 years of experience in pensions and financial services, our firm is built on trust, professionalism, and a commitment to long-term client success.</>,
          <>John’s vision has remained consistent since day one:</>,
          <p className="w-100 mx-auto italic">“To offer only the highest quality professional pension and investment services with a personal and trusted approach.”</p>,
          <>We specialise in tailored financial planning services, provided in a clear, concise, confidential and considered manner, fully regulated by the Central Bank of Ireland.</>
        ]}
      />
      {/* <Intro/> */}
      <OurServices/>
      <AutoEnrolment/>
      <Contact/>
    </>
  );
}
