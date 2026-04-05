import { Lang, translations as t } from "@/lib/translations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function PricingSection({ lang }: { lang: Lang }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="precos" className="py-24 px-8" style={{ background: "#FDFAF7" }}>
      <div ref={ref} className={`max-w-[1100px] mx-auto text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <p className="font-body text-[13px] uppercase tracking-[1.5px] text-orange font-medium mb-3">{t.pricing.tag[lang]}</p>
        <h2 className="font-heading font-bold text-foreground mb-14" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>{t.pricing.title[lang]}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[420px] md:max-w-none mx-auto">
          {t.pricing.cards[lang].map((card, i) => (
            <div
              key={i}
              className={`relative bg-card rounded-card p-10 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${isVisible ? `animate-fade-in-up stagger-${i + 1}` : "opacity-0"}`}
              style={{
                border: card.featured ? "1.5px solid #E8621C" : "1.5px solid rgba(0,0,0,0.06)",
                boxShadow: card.featured ? "0 8px 40px rgba(232,98,28,0.15)" : undefined,
              }}
            >
              {card.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange text-primary-foreground font-body text-xs font-bold rounded-full px-4 py-1">
                  {t.pricing.popularBadge[lang]}
                </span>
              )}
              <h3 className="font-body text-lg font-bold text-foreground mb-2">{card.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-heading text-[40px] font-bold text-foreground">{card.price}</span>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-6">{card.period}</p>
              <div className="flex flex-col divide-y divide-border mb-8">
                {card.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 py-3">
                    <span className="text-orange font-bold text-sm">✓</span>
                    <span className="font-body text-[15px] text-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/351916539331"
                className={`block w-full text-center font-body text-[15px] font-bold py-3.5 rounded-xl transition-all ${
                  card.featured
                    ? "bg-orange text-primary-foreground shadow-orange hover:opacity-90"
                    : "border-2 border-orange text-orange hover:bg-orange hover:text-primary-foreground"
                }`}
              >
                {card.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
