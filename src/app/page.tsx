import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Treatments from "@/components/Treatments";
import AppointmentForm from "@/components/AppointmentForm";
import SpaExperience from "@/components/SpaExperience";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <Header />
      
      <FadeIn>
        <Hero />
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <Metrics />
      </FadeIn>
      
      <FadeIn>
        <Treatments />
      </FadeIn>
      
      <FadeIn>
        <SpaExperience />
      </FadeIn>

      <FadeIn>
        <Testimonials />
      </FadeIn>

      <FadeIn>
        <AppointmentForm />
      </FadeIn>

      <FadeIn>
        <FAQ />
      </FadeIn>

      <FadeIn>
        <FinalCTA />
      </FadeIn>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
