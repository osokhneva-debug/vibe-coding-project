import { Lang, translations as t, WHATSAPP_URL } from "@/lib/translations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTASection({ lang }: { lang: Lang }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contacto" className="py-24 px-8" style={{ background: "#1A1A1A" }}>
      <div ref={ref} className={`max-w-[1100px] mx-auto text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <h2 className="font-heading font-bold text-white mb-5" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>{t.ctaFinal.title[lang]}</h2>
        <p className="font-body text-[17px] max-w-[500px] mx-auto mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{t.ctaFinal.desc[lang]}</p>
        <a
          href={WHATSAPP_URL}
          className="inline-flex items-center gap-3 text-primary-foreground font-body text-[17px] font-bold px-10 py-[18px] rounded-[14px] shadow-whatsapp transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: "#25D366" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1fb855")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}
        >
          {t.ctaFinal.button[lang]}
        </a>
        <p className="font-body text-sm mt-6" style={{ color: "rgba(255,255,255,0.5)" }}>{t.ctaFinal.phone[lang]}</p>
      </div>
    </section>
  );
}
