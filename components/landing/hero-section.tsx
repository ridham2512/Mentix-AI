import Link from "next/link";
import { Rocket, RocketIcon, SparkleIcon, ZapIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { HeroGradient } from "./bakcground-gradient";
import { Button } from "../ui/button";
// Improved hero section spacing
export default function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            <HeroGradient />
            <div className="relative section-container section-padding">
                <div className="text-center">
                    <Badge className = "mb-6 text-sm font-medium" variant="secondary"> Powered by AI 
                        <SparkleIcon className ="size-4 inline ml-2"/> 
                    </Badge>
                <h1> Find Your Perfect <span className="block gradient-text">AI Learnig Partner</span></h1>  
                    <p className="hero-subheading">
                        Join commmunities ,set your learning goals ,and get matched with partner who share your passion for learning. Chat ,collaborate and grow together with AI powered learning insights.
                    </p>                
                <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mt-8">
                    <Link href="/sign-up"> 
                    <Button size="lg" variant="outline" className=" hero-button-outline">
                        <span className="hero-button-content">
                            <RocketIcon className="size-4 inline-block align-middle group-hover:-rotate-12"/>
                        Get Started For Free
                        </span>
                    </Button>
                    </Link>
                   <Link href="/#pricing">
                     <Button size="lg" className="link-button hero-button-outline group">
                     <span className="hero-button-content">
                      <ZapIcon className="hero-button-icon-primary inline-block align-middle group-hover:scale-125 group-hover:rotate-12"/>
                    Buy a Plan
                     </span>
                    </Button>
                    </Link>
                </div>
                </div>  
            </div>
        </section>
    );
}
