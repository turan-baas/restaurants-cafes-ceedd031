"use client";

export default function Footer() {
  return (
    <footer className="bg-forest text-linen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-bold">
              Uygur <span className="text-brass">Mutfağı</span>
            </p>
            <p className="text-linen/50 mt-4 leading-relaxed text-sm">
              Orta Asya&apos;nın zengin mutfak geleneğini Ankara&apos;nın
              kalbine taşıyoruz. Geleneksel tarifler, taze malzemeler.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.2em] text-linen/40 font-medium mb-6">
              Hızlı Bağlantılar
            </p>
            <nav className="space-y-3">
              {[
                { href: "#anasayfa", label: "Ana Sayfa" },
                { href: "#hakkimizda", label: "Hakkımızda" },
                { href: "#menu", label: "Menü" },
                { href: "#yorumlar", label: "Yorumlar" },
                { href: "#iletisim", label: "İletişim" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-linen/60 hover:text-brass transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.75rem] uppercase tracking-[0.2em] text-linen/40 font-medium mb-6">
              İletişim Bilgileri
            </p>
            <div className="space-y-3 text-sm text-linen/60">
              <a
                href="tel:+905364312122"
                className="block hover:text-brass transition-colors"
              >
                0536 431 21 22
              </a>
              <a
                href="https://wa.me/905364312122"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-brass transition-colors"
              >
                WhatsApp
              </a>
              <p>
                Kavaklıdere, Bankacı Sk. No:3 D:A,
                <br />
                06680 Çankaya/Ankara
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-linen/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-linen/40 text-xs">
            &copy; 2026 Uygur Mutfağı. Tüm hakları saklıdır.
          </p>
          <p className="text-linen/30 text-xs">
            Ankara, Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}
