"use client";

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-forest" />
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(184,134,11,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(42,90,68,0.4) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(27,58,45,0.8) 0%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #F5F0EB 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute top-[15%] left-[10%] w-32 h-32 rounded-full border border-brass/20 animate-float-slow" />
      <div
        className="absolute top-[25%] right-[15%] w-48 h-48 border border-brass/10 animate-float"
        style={{ transform: "rotate(45deg)" }}
      />
      <div className="absolute bottom-[20%] left-[20%] w-20 h-20 rounded-full bg-brass/10 animate-float" />
      <div className="absolute bottom-[30%] right-[10%] w-64 h-64 rounded-full border border-linen/5 animate-float-slow" />
      <div className="absolute top-[60%] left-[5%] w-40 h-1 bg-gradient-to-r from-brass/20 to-transparent animate-float" />

      {/* Diagonal accent line */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, rgba(184,134,11,0.3) 50%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block text-brass text-[0.8rem] uppercase tracking-[0.3em] font-medium mb-4">
            Ankara &middot; Kavaklıdere
          </span>
        </div>

        <h1
          className="font-[family-name:var(--font-playfair)] text-linen font-bold leading-[1.05] mb-8"
          style={{
            fontSize: "clamp(2.75rem, 8vw, 5rem)",
            letterSpacing: "-0.04em",
          }}
        >
          Uygur{" "}
          <span className="text-brass">Mutfağı</span>
        </h1>

        <p
          className="text-linen/70 max-w-xl mx-auto mb-12 leading-relaxed"
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
          }}
        >
          Orta Asya&apos;nın zengin lezzetlerini Ankara&apos;nın kalbine taşıyoruz.
          Geleneksel tarifler, taze malzemeler, unutulmaz tatlar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="bg-accent text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:brightness-110"
          >
            Menüyü İncele
          </a>
          <a
            href="https://wa.me/905364312122"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-linen/30 text-linen text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full transition-all duration-300 hover:bg-linen/10 hover:border-linen/50"
          >
            WhatsApp Sipariş
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-linen to-transparent" />
    </section>
  );
}
