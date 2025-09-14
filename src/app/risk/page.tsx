import Contact from "@/components/contact";
import Intro from "@/app/risk/_components/intro";
import RiskScale from "@/app/risk/_components/riskScale";
import Hero from "@/components/hero";
import Text from "@/components/text"

export default function Risk() {
  return (
    <>
    <Hero
      title={["Understanding Investment Risk"]}
    />
    <Text
      title="Understanding Investment Risk"
      subtitle={["All investments carry some level of risk, which simply means the value of your money can go up or down. Your risk appetite is how comfortable you are with this — whether you prefer lower-risk options that aim for steady but smaller returns, or higher-risk choices that may bring bigger rewards but also bigger ups and downs.", "Finding the right balance is key to building an investment plan that suits you."]}
      className="bg-gray-50"
    />
    <Intro/>
    <RiskScale/>
    <Contact/>
    </>
  );
}