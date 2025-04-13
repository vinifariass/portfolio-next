import HeroSection from "@/components/HeroSection";
import  Pricing  from "@/components/Pricing"
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Services } from "@/components/Services";
import { Testimonial } from "@/components/Testimonial";


export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Projects />
      <Resume />
      <Testimonial />
      <Pricing />
    </>
  );
}
