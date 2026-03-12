import CTASection from "@/components/landing/cta-section";
import FeatureSection from "@/components/landing/feature-section";
import HowItWorksSection from "@/components/landing/how-it-works-section";
import PricingSection from "@/components/landing/pricing-section";
import HeroSection from "@/components/landing/hero-section";
import Footer from "@/components/layout/footer";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeatureSection/>
      <HowItWorksSection/>
      <PricingSection/>
      <CTASection/>  
      <Footer/>
    </div>
  );
}