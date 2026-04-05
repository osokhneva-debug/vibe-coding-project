import { useState } from "react";
import { Lang, translations as t, WHATSAPP_URL } from "@/lib/translations";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center" style={{ background: "rgba(253,250,247,0.85)", backdropFilter: "blur(20px)" }}>
      <div className="w-full max-w-[1100px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img src={logo} alt="Orange Penguin" className="w-9 h-9 rounded-[10px] object-cover" style={{ transform: "rotate(-6deg)" }} />
          <span className="font-heading font-bold text-lg text-foreground">Orange Penguin</span>
        </a>

        {/* Center links - desktop */}
        <div className="hidden md:flex items-center gap-6">
          {t.nav.links[lang].map((link, i) => (
            <a key={i} href={t.nav.anchors[i]} className="font-body text-[15px] font-medium text-muted-foreground hover:text-orange transition-colors duration-250">
              {link}
            </a>
          ))}
        </div>

        {/* Right side - desktop */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex rounded-btn overflow-hidden border border-border" role="group" aria-label="Language selector">
            <button onClick={() => setLang("pt")} aria-pressed={lang === "pt"} className={`px-3 py-1.5 text-sm font-medium transition-colors ${lang === "pt" ? "bg-orange text-primary-foreground" : "text-muted-foreground"}`}>PT</button>
            <button onClick={() => setLang("en")} aria-pressed={lang === "en"} className={`px-3 py-1.5 text-sm font-medium transition-colors ${lang === "en" ? "bg-orange text-primary-foreground" : "text-muted-foreground"}`}>EN</button>
          </div>
          <a href={WHATSAPP_URL} className="bg-orange text-primary-foreground font-body text-sm font-medium px-5 py-2.5 rounded-btn shadow-orange hover:opacity-90 transition-opacity">
            {t.nav.cta[lang]}
          </a>
        </div>

        {/* Hamburger - mobile */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-dark/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[280px] bg-cream-DEFAULT p-8 flex flex-col gap-6 shadow-card-hover" style={{ background: "#FDFAF7" }}>
            <button className="self-end" onClick={() => setOpen(false)} aria-label="Close menu"><X size={24} /></button>
            {t.nav.links[lang].map((link, i) => (
              <a key={i} href={t.nav.anchors[i]} onClick={() => setOpen(false)} className="font-body text-base font-medium text-foreground hover:text-orange transition-colors">{link}</a>
            ))}
            <div className="flex rounded-btn overflow-hidden border border-border w-fit" role="group" aria-label="Language selector">
              <button onClick={() => setLang("pt")} aria-pressed={lang === "pt"} className={`px-3 py-1.5 text-sm font-medium transition-colors ${lang === "pt" ? "bg-orange text-primary-foreground" : "text-muted-foreground"}`}>PT</button>
              <button onClick={() => setLang("en")} aria-pressed={lang === "en"} className={`px-3 py-1.5 text-sm font-medium transition-colors ${lang === "en" ? "bg-orange text-primary-foreground" : "text-muted-foreground"}`}>EN</button>
            </div>
            <a href={WHATSAPP_URL} className="bg-orange text-primary-foreground font-body text-sm font-medium px-5 py-3 rounded-btn shadow-orange text-center hover:opacity-90 transition-opacity">
              {t.nav.cta[lang]}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
