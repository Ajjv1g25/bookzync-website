import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { ProblemSection } from "@/components/home/problem-section";
import { SolutionSection } from "@/components/home/solution-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { IndustrySelector } from "@/components/home/industry-selector";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <IndustrySelector />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
