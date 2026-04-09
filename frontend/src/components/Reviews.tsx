"use client";

import { useScrollReveal } from "./useScrollReveal";

const reviews = [
  {
    text: "Ankara'da yediğim en otantik Uygur yemekleriydi. Laghman erişteleri tamamen el yapımı ve lezzeti inanılmaz. Paket servis de çok hızlı geldi, kesinlikle tekrar sipariş vereceğim.",
    name: "Mehmet Yılmaz",
    label: "Google Yorumu",
  },
  {
    text: "Kavaklıdere'de böyle bir yer olduğunu bilmiyordum. Pilavları muhteşem, baharatlar tam kıvamında. Porsiyon büyüklükleri de gayet tatmin edici. Özellikle kawap'ları denemenizi tavsiye ederim.",
    name: "Ayşe Kara",
    label: "Google Yorumu",
  },
  {
    text: "Ofis toplantımız için toplu sipariş verdik, herkes bayıldı. Mantılar ve samsa börekleri favorimiz oldu. Hizmet kalitesi ve yemeklerin sunumu gerçekten profesyonel. Teşekkürler!",
    name: "Emre Demir",
    label: "Google Yorumu",
  },
];

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-brass" : "text-brass/30"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Reviews() {
  useScrollReveal();

  return (
    <section id="yorumlar" className="py-28 lg:py-36 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="text-accent text-[0.8rem] uppercase tracking-[0.2em] font-medium">
            Müşteri Yorumları
          </span>
          <div className="mt-6">
            <span className="font-[family-name:var(--font-playfair)] text-[6rem] font-bold text-forest leading-none">
              4.0
            </span>
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-4">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon filled={false} />
          </div>
          <p className="text-sage mt-3 text-sm uppercase tracking-[0.1em]">
            Google Değerlendirmesi
          </p>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl shadow-sm p-8 relative`}
            >
              {/* Decorative quote */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-accent/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <p className="text-espresso/70 italic leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-espresso text-sm">
                    {review.name}
                  </p>
                  <p className="text-sage text-xs mt-0.5">{review.label}</p>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon key={s} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
