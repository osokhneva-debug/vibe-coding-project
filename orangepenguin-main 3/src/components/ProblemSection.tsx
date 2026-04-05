import { Lang, translations as t } from "@/lib/translations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProblemSection({ lang }: { lang: Lang }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-8" style={{ background: "#1A1A1A" }}>
      <div ref={ref} className={`max-w-[1100px] mx-auto ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <p className="font-body text-[13px] uppercase tracking-[1.5px] text-orange-light font-medium mb-3">{t.problem.tag[lang]}</p>
        <h2 className="font-heading font-bold text-white mb-12" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>{t.problem.title[lang]}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.problem.cards[lang].map((card, i) => (
            <div
              key={i}
              className={`rounded-card p-9 border transition-all duration-300 hover:-translate-y-1 ${isVisible ? `animate-fade-in-up stagger-${i + 1}` : "opacity-0"}`}
              style={{ background: "#2D2D2D", borderColor: "rgba(255,255,255,0.06)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(232,98,28,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
            >
              <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl mb-5" style={{ background: "rgba(232,98,28,0.12)" }}>
                {card.icon}
              </div>
              <h3 className="font-body text-lg font-bold italic text-white mb-3">{card.heading}</h3>
              <p className="font-body text-[15px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
