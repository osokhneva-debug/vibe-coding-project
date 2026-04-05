import { Lang, translations as t } from "@/lib/translations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function DemoSection({ lang }: { lang: Lang }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="exemplo" className="py-24 px-8" style={{ background: "#F5EDE4" }}>
      <div ref={ref} className={`max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        {/* Browser mockup */}
        <div className="rounded-card shadow-card overflow-hidden border border-border">
          <div className="flex items-center gap-2 px-4 py-3" style={{ background: "#F5F5F5" }}>
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28CA41" }} />
            <div className="ml-3 flex-1 bg-white rounded-md px-3 py-1">
              <span className="font-body text-xs text-muted-foreground">salaomaria.pt</span>
            </div>
          </div>
          <div className="bg-card p-8" style={{ minHeight: 320 }}>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-1">Salão Beleza Maria</h3>
            <p className="font-body text-sm text-muted-foreground mb-6">Cabeleireiro & Estética · Lisboa</p>
            <div className="flex flex-col gap-3">
              {t.demo.browserFeatures.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 rounded-btn px-4 py-3" style={{ background: "#FDFAF7" }}>
                  <span className="w-6 h-6 rounded-md flex items-center justify-center text-xs" style={{ background: "#E8F5E9", color: "#4CAF50" }}>✓</span>
                  <span className="font-body text-sm text-foreground">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div>
          <p className="font-body text-sm uppercase tracking-[1px] font-bold text-orange mb-3">{t.demo.tag[lang]}</p>
          <h2 className="font-heading font-bold text-foreground mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}>{t.demo.title[lang]}</h2>
          <p className="font-body text-base text-muted-foreground mb-8 leading-relaxed">{t.demo.desc[lang]}</p>
          <div className="flex flex-col gap-5">
            {t.demo.features[lang].map((feat, i) => (
              <div key={i} className={`flex items-start gap-4 ${isVisible ? `animate-fade-in-up stagger-${i + 1}` : "opacity-0"}`}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: "rgba(232,98,28,0.12)" }}>
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-body text-base font-bold text-foreground">{feat.heading}</h4>
                  <p className="font-body text-sm text-muted-foreground">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
