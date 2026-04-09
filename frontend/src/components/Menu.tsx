"use client";

import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const categories = [
  { id: "corbalar", label: "Çorbalar" },
  { id: "ana-yemekler", label: "Ana Yemekler" },
  { id: "tavuk", label: "Tavuk Yemekleri" },
  { id: "sebze-ara", label: "Sebzeler / Ara Sıcaklar" },
  { id: "sebze-detay", label: "Sebze Yemekleri" },
  { id: "makarna-pilav", label: "Makarna & Pilav" },
  { id: "manti-hamur", label: "Mantı & Hamur İşleri" },
  { id: "noodle-ramen", label: "Noodle / Ramen" },
  { id: "salatalar", label: "Salatalar" },
];

const menuItems: Record<
  string,
  { name: string; description: string; price: string; popular?: boolean }[]
> = {
  corbalar: [
    { name: "Yumurta Çorba", description: "", price: "₺280" },
    { name: "Soslu Makarna Çorba", description: "", price: "₺280" },
    { name: "Köfte Çorba", description: "", price: "₺280" },
    { name: "Makarna Çorba", description: "", price: "₺280" },
    { name: "Uygur (Ügre)", description: "", price: "₺280" },
    { name: "Çiçüre", description: "", price: "₺280" },
  ],
  "ana-yemekler": [
    { name: "Kazan Kebabı", description: "", price: "₺780", popular: true },
    { name: "Patates Dana Et", description: "", price: "₺780" },
    { name: "Özel Dana Et", description: "", price: "₺780" },
    { name: "Mantarlı Kavurma", description: "", price: "₺355" },
    { name: "Bütün Balık", description: "", price: "₺988" },
    { name: "Buharda Balık", description: "", price: "₺388" },
    { name: "Acılı Ekşili Balık", description: "", price: "₺988" },
    { name: "Tavada Dana Et", description: "", price: "₺640" },
    { name: "Balık Kızartması", description: "", price: "₺988" },
    { name: "Nefis Acılı Balık", description: "", price: "Fiyat Sorunuz" },
  ],
  tavuk: [
    { name: "Kuru Tavuk Kavurması", description: "", price: "₺580 / ₺380" },
    { name: "Fıstıklı Tavuk Kavurması", description: "", price: "₺580 / ₺380" },
    { name: "Çıtır Tavuk Kavurması", description: "", price: "₺575", popular: true },
    { name: "Acılı Biber Tavuk Kavurması", description: "", price: "₺580 / ₺380" },
    { name: "Özel Tavuk Kavurması", description: "", price: "₺950 / ₺620" },
    { name: "Tatlı Ekşili Tavuk", description: "", price: "Fiyat Sorunuz" },
  ],
  "sebze-ara": [
    { name: "Lince Patates", description: "", price: "Fiyat Sorunuz" },
    { name: "Acılı Erişte Patates", description: "", price: "₺355" },
    { name: "Du Fu Kızartması", description: "", price: "₺568" },
    { name: "Acılı Du Fu", description: "", price: "₺548" },
    { name: "Yumurta Domates Kavurma", description: "", price: "₺355" },
    { name: "Yumurta Ispanak Kavurma", description: "", price: "₺355" },
    { name: "Kabak Kavurması", description: "", price: "₺355" },
    { name: "Fasulye Kızartması", description: "", price: "₺420" },
    { name: "Biber Kızartması", description: "", price: "₺365" },
    { name: "Brokoli Kavurması", description: "", price: "₺355" },
    { name: "Patates Kızartması", description: "", price: "₺220" },
    { name: "Etli Patates", description: "", price: "Fiyat Sorunuz" },
  ],
  "sebze-detay": [
    { name: "Lahana", description: "", price: "Fiyat Sorunuz" },
    { name: "Patlıcan Musakka", description: "", price: "₺355" },
    { name: "Uygur Ekmek", description: "", price: "₺50" },
    { name: "Patates Fasulye", description: "", price: "₺420" },
    { name: "Patlıcanlı Fasulye", description: "", price: "₺420" },
    { name: "İşkembe Kavurma", description: "", price: "₺430 / ₺360" },
    { name: "Taze Soğanlı Et", description: "", price: "₺430 / ₺660" },
    { name: "Mantarlı Et", description: "", price: "₺430 / ₺660" },
    { name: "Ağaç Mantarlı Et", description: "", price: "₺430 / ₺660" },
    { name: "Köy Biberli Et", description: "", price: "Fiyat Sorunuz" },
    { name: "Nefis Sebzeli Et", description: "", price: "₺430 / ₺660" },
    { name: "Etli Fasulye", description: "", price: "₺430 / ₺420" },
  ],
  "makarna-pilav": [
    { name: "Özel Makarna Kavurması", description: "", price: "₺360" },
    { name: "Kıymalı Makarna Kavurması", description: "", price: "₺370" },
    { name: "Etli Sebzeli Pilav", description: "", price: "₺360" },
    { name: "Uygur Pilavı", description: "", price: "₺338", popular: true },
    { name: "Yumurtalı Sebzeli Pilav", description: "", price: "₺360" },
    { name: "Beyaz Pilav", description: "", price: "₺130" },
  ],
  "manti-hamur": [
    { name: "Uygur Etli Ekmek", description: "", price: "₺420", popular: true },
    { name: "Etli Pitir Mantı", description: "", price: "₺370 / ₺175" },
    { name: "Buharda Kıymalı Mantı", description: "", price: "₺370 / ₺175" },
    { name: "Su Mantısı", description: "", price: "₺375" },
    { name: "Mantı Kızartması", description: "", price: "₺375" },
    { name: "Samsa", description: "", price: "₺140" },
  ],
  "noodle-ramen": [
    { name: "Lenzhou Ramen", description: "Dana Etli Erişte Çorba", price: "₺280", popular: true },
    { name: "Lagmen", description: "", price: "₺360" },
    { name: "Özel Lagmen", description: "", price: "₺360" },
    { name: "Kıymalı Lagmen", description: "", price: "₺370" },
  ],
  salatalar: [
    { name: "Brokoli Salata", description: "", price: "₺280" },
    { name: "Mor Salata", description: "", price: "₺280" },
    { name: "Havuç Salata", description: "", price: "₺210" },
    { name: "Özel Soslu Salata", description: "", price: "Fiyat Sorunuz" },
    { name: "Ispanak Salata", description: "", price: "₺210" },
    { name: "Çoban Salata", description: "", price: "₺190" },
    { name: "Dana Et Salata", description: "", price: "₺428" },
    { name: "İşkembe Salata", description: "", price: "₺350" },
  ],
};

export default function Menu() {
  const [active, setActive] = useState("corbalar");
  useScrollReveal();

  return (
    <section id="menu" className="py-28 lg:py-36 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-accent text-[0.8rem] uppercase tracking-[0.2em] font-medium">
            Menümüz
          </span>
          <h2
            className="font-[family-name:var(--font-playfair)] text-espresso font-semibold mt-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Geleneksel Tatlar, Taze Malzemeler
          </h2>
          <p className="text-espresso/60 mt-4 max-w-2xl mx-auto text-lg">
            Her yemeğimiz günlük taze malzemelerle, geleneksel Uygur tariflerine
            sadık kalınarak özenle hazırlanır.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 reveal">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-[0.1em] transition-all duration-300 ${
                active === cat.id
                  ? "bg-forest text-linen shadow-lg"
                  : "bg-white/60 text-espresso/70 hover:bg-white hover:text-espresso"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {menuItems[active].map((item, i) => (
            <div
              key={item.name}
              className={`reveal reveal-delay-${Math.min(i + 1, 3)} group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-espresso/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/30`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-espresso">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span className="text-[0.65rem] uppercase tracking-wider bg-accent/10 text-accent px-2.5 py-0.5 rounded-full font-medium">
                        Popüler
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-espresso/60 text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
                <span className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-accent whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp order CTA */}
        <div className="text-center mt-16 reveal">
          <p className="text-espresso/60 mb-6 text-lg">
            Sipariş vermek için WhatsApp üzerinden bize ulaşın
          </p>
          <a
            href="https://wa.me/905364312122?text=Merhaba%2C%20sipari%C5%9F%20vermek%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white text-sm uppercase tracking-[0.12em] font-medium px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp ile Sipariş Ver
          </a>
        </div>
      </div>
    </section>
  );
}
