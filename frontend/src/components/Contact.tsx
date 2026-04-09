"use client";

import { useState, type FormEvent } from "react";
import { useScrollReveal } from "./useScrollReveal";

export default function Contact() {
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) throw new Error("Gönderim başarısız");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="iletisim" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — Info + Form */}
          <div className="reveal">
            <span className="text-accent text-[0.8rem] uppercase tracking-[0.2em] font-medium">
              İletişim
            </span>
            <h2
              className="font-[family-name:var(--font-playfair)] text-espresso font-semibold mt-4 mb-10"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Bize Ulaşın
            </h2>

            {/* Contact details */}
            <div className="space-y-5 mb-12">
              <a
                href="tel:+905364312122"
                className="flex items-center gap-4 text-espresso/80 hover:text-accent transition-colors group"
              >
                <span className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <span className="text-[1.05rem]">0536 431 21 22</span>
              </a>

              <a
                href="https://wa.me/905364312122"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-espresso/80 hover:text-[#25D366] transition-colors group"
              >
                <span className="w-12 h-12 rounded-full bg-surface flex items-center justify-center group-hover:bg-[#25D366]/10 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span className="text-[1.05rem]">WhatsApp ile Yazın</span>
              </a>

              <div className="flex items-center gap-4 text-espresso/80">
                <span className="w-12 h-12 rounded-full bg-surface flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <span className="text-[1.05rem]">
                  Kavaklıdere, Bankacı Sk. No:3 D:A,
                  <br />
                  06680 Çankaya/Ankara
                </span>
              </div>
            </div>

            {/* Form */}
            {status === "success" ? (
              <div className="bg-forest/5 border border-forest/20 rounded-2xl p-10 text-center">
                <svg
                  className="w-12 h-12 text-forest mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-forest">
                  Mesajınız Alındı!
                </p>
                <p className="text-espresso/60 mt-2">
                  En kısa sürede size dönüş yapacağız.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-3 text-sm">
                    Bir hata oluştu. Lütfen tekrar deneyin veya bizi arayın.
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Adınız"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-espresso/10 text-espresso placeholder:text-sage focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="E-posta Adresiniz"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-5 py-3.5 rounded-xl bg-white border border-espresso/10 text-espresso placeholder:text-sage focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition-all"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Telefon Numaranız"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-espresso/10 text-espresso placeholder:text-sage focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition-all"
                />

                <textarea
                  placeholder="Mesajınız veya sipariş detaylarınız..."
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-5 py-3.5 rounded-xl bg-white border border-espresso/10 text-espresso placeholder:text-sage focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none transition-all resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-accent text-white text-sm uppercase tracking-[0.12em] font-medium px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
                </button>
              </form>
            )}
          </div>

          {/* Right — Map */}
          <div className="reveal reveal-delay-1">
            <div className="relative w-full h-full min-h-[500px] rounded-2xl overflow-hidden bg-forest">
              {/* Stylized map placeholder */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(245,240,235,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,235,0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Map pin illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative inline-block">
                    <svg
                      className="w-20 h-20 text-brass"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-brass/20 rounded-full blur-sm" />
                  </div>
                  <p className="text-linen/60 text-sm mt-6 uppercase tracking-[0.15em]">
                    Kavaklıdere, Ankara
                  </p>
                </div>
              </div>

              {/* Accent circles */}
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full border border-brass/10" />
              <div className="absolute bottom-20 left-10 w-20 h-20 rounded-full border border-linen/5" />

              {/* Bottom overlay with info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest via-forest/90 to-transparent p-8 pt-16">
                <p className="font-[family-name:var(--font-playfair)] text-linen text-lg font-semibold">
                  Uygur Mutfağı
                </p>
                <p className="text-linen/60 text-sm mt-1">
                  Kavaklıdere, Bankacı Sk. No:3 D:A, 06680 Çankaya/Ankara
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kavaklıdere+Bankacı+Sk+No+3+Çankaya+Ankara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-brass text-sm font-medium hover:text-brass/80 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Google Maps&apos;te Aç
                </a>
              </div>

              {/* Accent border */}
              <div className="absolute inset-0 rounded-2xl border border-brass/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
