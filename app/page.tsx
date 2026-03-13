import CTASection from "@/components/landing/cta-section";
import FeatureSection from "@/components/landing/feature-section";
import HowItWorksSection from "@/components/landing/how-it-works-section";
import PricingSection from "@/components/landing/pricing-section";
import HeroSection from "@/components/landing/hero-section";
import BackgroundGradient from "@/components/landing/bakcground-gradient";


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundGradient />
      <div className="relative z-10">
      <HeroSection/>
      <FeatureSection/>
      <HowItWorksSection/>
      <PricingSection/>
      <CTASection/>  
     
      </div>
    </div>
  );
}