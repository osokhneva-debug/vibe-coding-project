export type Lang = "pt" | "en";

export const translations = {
  nav: {
    links: {
      pt: ["Como funciona", "Exemplo", "Preços", "Contacto"],
      en: ["How it works", "Example", "Pricing", "Contact"],
    },
    anchors: ["#como-funciona", "#exemplo", "#precos", "#contacto"],
    cta: { pt: "Fale connosco", en: "Get in touch" },
  },
  hero: {
    badge: {
      pt: "Sites para salões de beleza em Lisboa",
      en: "Websites for beauty salons in Lisbon",
    },
    title: {
      pt: "Cada chamada perdida é um cliente perdido",
      en: "Every missed call is a lost client",
    },
    subtitle: {
      pt: "Criamos o site do seu salão — com marcações online, galeria e preços. Pronto em 48 horas.",
      en: "We build your salon's website — with online booking, gallery, and pricing. Ready in 48 hours.",
    },
    cta1: { pt: "💬 Ver o meu site demo", en: "💬 See my demo site" },
    cta2: { pt: "Como funciona ↓", en: "How it works ↓" },
    stats: {
      pt: [
        { number: "225", label: "salões em Lisboa sem site" },
        { number: "62%", label: "ignoram negócios sem presença online" },
        { number: "+26%", label: "reservas com marcação online" },
      ],
      en: [
        { number: "225", label: "salons in Lisbon without a website" },
        { number: "62%", label: "ignore businesses with no online presence" },
        { number: "+26%", label: "more bookings with online scheduling" },
      ],
    },
  },
  problem: {
    tag: { pt: "O PROBLEMA", en: "THE PROBLEM" },
    title: { pt: "Reconhece-se?", en: "Sound familiar?" },
    cards: {
      pt: [
        { icon: "📞", heading: "Perco 3–5 clientes por semana porque não consigo atender", desc: "Trabalha 10 horas por dia com as mãos. Cada chamada perdida é dinheiro perdido." },
        { icon: "📱", heading: "O meu Instagram pode ser bloqueado amanhã", desc: "Todo o negócio depende de uma plataforma que não controla. Sem SEO, sem marcações, sem segurança." },
        { icon: "🌍", heading: "Expats procuram 'beauty salon Lisbon' — e não me encontram", desc: "Milhares de estrangeiros em Lisboa procuram serviços em inglês. Sem site bilingue, é invisível para eles." },
      ],
      en: [
        { icon: "📞", heading: "I lose 3–5 clients a week because I can't answer the phone", desc: "You work 10 hours a day with your hands. Every missed call is money lost." },
        { icon: "📱", heading: "My Instagram could be blocked tomorrow", desc: "Your entire business depends on a platform you don't control. No SEO, no bookings, no safety net." },
        { icon: "🌍", heading: "Expats search 'beauty salon Lisbon' — and can't find me", desc: "Thousands of foreigners in Lisbon search for services in English. Without a bilingual site, you're invisible to them." },
      ],
    },
  },
  solution: {
    tag: { pt: "SOLUÇÃO", en: "SOLUTION" },
    title: { pt: "Como funciona", en: "How it works" },
    desc: {
      pt: "Não precisa de fazer nada. Nós tratamos de tudo.",
      en: "You don't need to do anything. We handle everything.",
    },
    steps: {
      pt: [
        { heading: "Analisámos o seu negócio", desc: "Recolhemos informações do Google Maps: nome, morada, avaliações, fotos, horário." },
        { heading: "Criámos o seu site demo", desc: "Galeria, preços, marcação online, em português e inglês. Tudo pronto." },
        { heading: "Aprova e publica em 48h", desc: "Ajustamos ao seu gosto e o site fica online. Zero conhecimentos técnicos." },
      ],
      en: [
        { heading: "We analyzed your business", desc: "We gathered info from Google Maps: name, address, reviews, photos, hours." },
        { heading: "We built your demo site", desc: "Gallery, pricing, online booking, in Portuguese and English. All ready." },
        { heading: "Approve & go live in 48h", desc: "We adjust to your taste and the site goes live. Zero tech skills needed." },
      ],
    },
  },
  demo: {
    tag: { pt: "O QUE INCLUI", en: "WHAT'S INCLUDED" },
    title: { pt: "Veja como fica o seu site", en: "See what your site looks like" },
    desc: {
      pt: "Cada site inclui tudo o que o seu salão precisa para atrair e converter clientes online.",
      en: "Each site includes everything your salon needs to attract and convert clients online.",
    },
    features: {
      pt: [
        { icon: "✨", heading: "Galeria de trabalhos", desc: "Mostre o antes e depois" },
        { icon: "📅", heading: "Marcação online", desc: "Clientes reservam a qualquer hora" },
        { icon: "💰", heading: "Tabela de preços", desc: "Transparência que gera confiança" },
        { icon: "⭐", heading: "Avaliações", desc: "Mostre as suas estrelas do Google" },
        { icon: "🌐", heading: "Bilingue PT + EN", desc: "Alcance clientes locais e expats" },
      ],
      en: [
        { icon: "✨", heading: "Work gallery", desc: "Show the before and after" },
        { icon: "📅", heading: "Online booking", desc: "Clients book anytime" },
        { icon: "💰", heading: "Pricing table", desc: "Transparency builds trust" },
        { icon: "⭐", heading: "Reviews", desc: "Show your Google stars" },
        { icon: "🌐", heading: "Bilingual PT + EN", desc: "Reach local and expat clients" },
      ],
    },
    browserFeatures: [
      "Galeria de trabalhos",
      "Marcação online 24/7",
      "Tabela de preços",
      "Avaliações Google ⭐ 4.8",
      "Português + English",
    ],
  },
  pricing: {
    tag: { pt: "PREÇOS", en: "PRICING" },
    title: { pt: "Planos simples, sem surpresas", en: "Simple plans, no surprises" },
    popularBadge: { pt: "MAIS POPULAR", en: "MOST POPULAR" },
    cards: {
      pt: [
        {
          name: "Site Base", price: "300–500 €", period: "pagamento único",
          features: ["Design responsivo", "Galeria de trabalhos", "Tabela de preços", "Contactos + Google Maps", "Certificado SSL"],
          cta: "Saber mais", featured: false,
        },
        {
          name: "Site + Reservas", price: "400–600 €", period: "pagamento único",
          features: ["Tudo do Site Base", "Marcação online 24/7", "Site bilingue PT + EN", "Integração WhatsApp", "Painel de gestão"],
          cta: "Fale connosco", featured: true,
        },
        {
          name: "Pacote Completo", price: "200–300 €", period: "/mês",
          features: ["Site + Reservas incluído", "Gestão Instagram", "Google Ads", "Relatório mensal", "Suporte prioritário"],
          cta: "Saber mais", featured: false,
        },
      ],
      en: [
        {
          name: "Basic Site", price: "300–500 €", period: "one-time payment",
          features: ["Responsive design", "Work gallery", "Pricing table", "Contacts + Google Maps", "SSL certificate"],
          cta: "Learn more", featured: false,
        },
        {
          name: "Site + Booking", price: "400–600 €", period: "one-time payment",
          features: ["Everything in Basic", "24/7 online booking", "Bilingual site PT + EN", "WhatsApp integration", "Management dashboard"],
          cta: "Get in touch", featured: true,
        },
        {
          name: "Full Package", price: "200–300 €", period: "/mo",
          features: ["Site + Booking included", "Instagram management", "Google Ads", "Monthly report", "Priority support"],
          cta: "Learn more", featured: false,
        },
      ],
    },
  },
  ctaFinal: {
    title: { pt: "Pronto para ver o seu site?", en: "Ready to see your website?" },
    desc: {
      pt: "Envie-nos uma mensagem no WhatsApp — mostramos o site demo do seu salão em 24 horas.",
      en: "Send us a WhatsApp message — we'll show you your salon's demo site within 24 hours.",
    },
    button: { pt: "💬 Enviar mensagem no WhatsApp", en: "💬 Send a WhatsApp message" },
    phone: { pt: "Ou ligue: +351 916 539 331", en: "Or call: +351 916 539 331" },
  },
  pageTitle: {
    pt: "Orange Penguin — Sites para salões de beleza em Lisboa",
    en: "Orange Penguin — Websites for beauty salons in Lisbon",
  },
} as const;
