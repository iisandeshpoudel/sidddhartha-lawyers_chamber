import Hero from "../sections/Hero";
import PracticeAreas from "../sections/PracticeAreas";
import WhyUs from "../sections/WhyUs";
import Contact from "../sections/Contact";
import TestimonialsPage from "../sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <PracticeAreas />
      <WhyUs />
      <TestimonialsPage/>
      <Contact />
    </div>
  );
}
