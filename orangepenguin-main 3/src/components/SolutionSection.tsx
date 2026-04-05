import { Lang, translations as t } from "@/lib/translations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function SolutionSection({ lang }: { lang: Lang }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="como-funciona" className="py-24 px-8" style={{ background: "#FDFAF7" }}>
      <div ref={ref} className={`max-w-[1100px] mx-auto text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <p className="font-body text-[13px] uppercase tracking-[1.5px] text-orange font-medium mb-3">{t.solution.tag[lang]}</p>
        <h2 className="font-heading font-bold text-foreground mb-4" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>{t.solution.title[lang]}</h2>
        <p className="font-body text-[17px] text-muted-foreground max-w-[600px] mx-auto mb-16">{t.solution.desc[lang]}</p>

        <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-4">
          {t.solution.steps[lang].map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center">
              <div className={`flex flex-col items-center text-center px-8 py-10 max-w-[320px] ${isVisible ? `animate-fade-in-up stagger-${i + 1}` : "opacity-0"}`}>
                <div className="w-14 h-14 rounded-full bg-orange text-primary-foreground font-heading text-[22px] font-bold flex items-center justify-center mb-5 shadow-orange-lg">
                  {i + 1}
                </div>
                <h3 className="font-body text-lg font-bold text-foreground mb-2">{step.heading}</h3>
                <p className="font-body text-[15px] text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < 2 && <span className="hidden md:block text-orange text-3xl opacity-40 mx-2">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
