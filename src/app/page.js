import {Contact} from "@/components/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import  Pricing  from "@/components/Pricing"
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Services } from "@/components/Services";
import { Testimonial } from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <Projects />
      <Resume />
      <Testimonial />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
