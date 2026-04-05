import { Lang, translations as t, WHATSAPP_URL } from "@/lib/translations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HeroSection({ lang }: { lang: Lang }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="pt-[120px] pb-20 px-8" style={{ background: "#FDFAF7" }}>
      <div ref={ref} className={`max-w-[1100px] mx-auto text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "rgba(232,98,28,0.12)" }}>
          <span className="w-2 h-2 rounded-full bg-orange pulse-dot inline-block" />
          <span className="font-body text-sm font-medium text-orange">{t.hero.badge[lang]}</span>
        </div>

        {/* Title */}
        <h1 className="font-heading font-extrabold text-foreground leading-tight mb-6" style={{ fontSize: "clamp(38px, 5vw, 68px)" }}>
          {t.hero.title[lang]}
        </h1>

        {/* Subtitle */}
        <p className="font-body text-muted-foreground mx-auto mb-10 leading-relaxed max-w-[560px]" style={{ fontSize: "clamp(17px, 2vw, 20px)" }}>
          {t.hero.subtitle[lang]}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a href={WHATSAPP_URL} className="bg-orange text-primary-foreground font-body text-base font-semibold px-9 py-4 rounded-[14px] shadow-orange hover:opacity-90 transition-all">
            {t.hero.cta1[lang]}
          </a>
          <a href="#como-funciona" className="bg-card text-foreground font-body text-base font-semibold px-9 py-4 rounded-[14px] border border-border hover:border-orange/30 transition-all">
            {t.hero.cta2[lang]}
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {t.hero.stats[lang].map((stat, i) => (
            <div key={i} className={`text-center ${isVisible ? `animate-fade-in-up stagger-${i + 2}` : "opacity-0"}`}>
              <div className="font-heading text-4xl font-bold text-orange">{stat.number}</div>
              <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
