import CTASection from "@/components/landing/cta-section";
import FeatureSection from "@/components/landing/feature-section";
import HowItWorksSection from "@/components/landing/how-it-works-section";
import PricingSection from "@/components/landing/pricing-section";
import HeroSection from "@/components/landing/hero-section";
import BackgroundGradient from "@/components/landing/bakcground-gradient";
import { MotionDiv } from "@/components/ui/motion-div";

//updated the page layout and content to match your landing page design
export default function Home() {
  return (
   <div className="relative min-h-screen">
      <BackgroundGradient />
      <div className="relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <HeroSection />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <FeatureSection />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HowItWorksSection />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <PricingSection />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CTASection />
        </MotionDiv>
      </div>
    </div>
  );
}