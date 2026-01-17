import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import ValueSnapshot from "@/components/landing/ValueSnapshot";
import HowItWorks from "@/components/landing/HowItWorks";
import DeepFeatures from "@/components/landing/DeepFeatures";
import Testimonial from "@/components/landing/Testimonial";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ValueSnapshot />
      <HowItWorks />
      <DeepFeatures />
      <Testimonial />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
