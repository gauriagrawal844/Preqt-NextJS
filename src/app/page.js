import HeroSection from "@/components/HeroSection/HeroSection";
import WelcomeSection from "@/components/welcomeSection/WelcomeSection";
import NetworkSection from "@/components/NetworkSection/NetworkSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import DealSection from "@/components/DealsSection/DealsSection";
import ConnectionSection from "@/components/ConnectionSection/ConnectionSection";


export default function Home() {
  return (
   <div>
    <HeroSection/>
    <WelcomeSection/>
    <NetworkSection/>
    <TestimonialsSection/>
    <ProcessSection/>
    <DealSection/>
    <ConnectionSection/>
   </div>
  );
}
