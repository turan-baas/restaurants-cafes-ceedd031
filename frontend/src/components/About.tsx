"use client";

import { useScrollReveal } from "./useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <section id="hakkimizda" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Text */}
          <div className="lg:col-span-3 reveal">
            <span className="text-accent text-[0.8rem] uppercase tracking-[0.2em] font-medium">
              Hakkımızda
            </span>
            <h2
              className="font-[family-name:var(--font-playfair)] text-espresso font-semibold mt-4 mb-8"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Orta Asya&apos;dan Ankara&apos;ya Uzanan Lezzet Yolculuğu
            </h2>

            <div className="space-y-6 text-[1.125rem] leading-[1.8] text-espresso/70">
              <p>
                Kavaklıdere&apos;nin kalbinde, Bankacı Sokak&apos;ta kapılarımızı
                açtığımız günden bu yana tek bir hedefimiz var: Uygur mutfağının
                asırlık tariflerini, en taze malzemelerle sofralarınıza taşımak.
                Her bir yemeğimiz, nesiller boyu aktarılan geleneksel
                yöntemlerle hazırlanıyor.
              </p>
              <p>
                El açması laghman erişteleri, uzun süre demlenmiş et suyuyla
                pişirilen pilavlar ve özenle hazırlanan mantılarımız — her
                lokmada Orta Asya&apos;nın zengin mutfak kültürünü hissedeceksiniz.
                Baharatlarımız özel olarak temin ediliyor, hamurlarımız her gün
                taze açılıyor.
              </p>
              <p>
                Ankara&apos;da Uygur lezzetlerini arayanlar için bir buluşma
                noktası olmaktan gurur duyuyoruz. İster paket servis ile evinize,
                ister özel siparişlerinizle toplantılarınıza — kalitemizden ödün
                vermeden hizmet sunuyoruz.
              </p>
            </div>
          </div>

          {/* Decorative */}
          <div className="lg:col-span-2 reveal reveal-delay-1">
            <div className="relative">
              {/* Abstract composition */}
              <div className="relative w-full aspect-square max-w-[360px] mx-auto">
                {/* Large circle */}
                <div className="absolute inset-4 rounded-full bg-surface/80" />
                {/* Overlapping accent circle */}
                <div className="absolute top-0 right-0 w-3/5 h-3/5 rounded-full bg-accent/10" />
                {/* Small accent dot */}
                <div className="absolute bottom-8 left-8 w-16 h-16 rounded-full bg-accent/20" />

                {/* Rating display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-[family-name:var(--font-playfair)] text-[5rem] font-bold text-forest leading-none">
                    4.0
                  </span>
                  <div className="flex gap-1 mt-3 mb-2">
                    {[1, 2, 3, 4].map((i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-brass"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg
                      className="w-5 h-5 text-brass/30"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-sage text-sm uppercase tracking-[0.15em]">
                    Google Puanı
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
