export default function Footer() {
  return (
    <footer className="px-8 py-10" style={{ background: "#1A1A1A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <a href="https://wa.me/351916539331" className="font-body text-sm hover:text-orange-light transition-colors" style={{ color: "#FF8A4C" }}>+351 916 539 331</a>
        <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>Lisboa, Portugal</span>
        <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>© 2026 Orange Penguin</span>
      </div>
    </footer>
  );
}
