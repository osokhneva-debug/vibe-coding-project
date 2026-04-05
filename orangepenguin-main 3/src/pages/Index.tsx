import { useState, useEffect } from "react";
import { Lang, translations as t } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import DemoSection from "@/components/DemoSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Index() {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    document.title = t.pageTitle[lang];
  }, [lang]);

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <ProblemSection lang={lang} />
      <SolutionSection lang={lang} />
      <DemoSection lang={lang} />
      <PricingSection lang={lang} />
      <CTASection lang={lang} />
      <Footer />
    </div>
  );
}
