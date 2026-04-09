"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#menu", label: "Menü" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-linen/95 shadow-md backdrop-blur-[12px]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <a
          href="#anasayfa"
          className="font-[family-name:var(--font-playfair)] text-xl font-bold tracking-tight"
          style={{ color: scrolled ? "var(--color-primary)" : "#F5F0EB" }}
        >
          Uygur <span style={{ color: "var(--color-accent)" }}>Mutfağı</span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[0.8rem] uppercase tracking-[0.15em] font-medium transition-colors duration-200"
              style={{
                color: scrolled
                  ? "var(--color-text)"
                  : "rgba(245,240,235,0.85)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            className="bg-accent text-white text-[0.8rem] uppercase tracking-[0.15em] font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
          >
            Sipariş Ver
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-[60]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          <span
            className="block w-6 h-[2px] transition-all duration-300 origin-center"
            style={{
              backgroundColor: mobileOpen || !scrolled ? "#F5F0EB" : "var(--color-text)",
              transform: mobileOpen
                ? "translateY(5px) rotate(45deg)"
                : "none",
            }}
          />
          <span
            className="block w-6 h-[2px] transition-all duration-300"
            style={{
              backgroundColor: mobileOpen || !scrolled ? "#F5F0EB" : "var(--color-text)",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-[2px] transition-all duration-300 origin-center"
            style={{
              backgroundColor: mobileOpen || !scrolled ? "#F5F0EB" : "var(--color-text)",
              transform: mobileOpen
                ? "translateY(-5px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-forest/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-linen text-lg uppercase tracking-[0.2em] font-medium transition-all duration-500"
            style={{
              transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#iletisim"
          onClick={() => setMobileOpen(false)}
          className="mt-4 bg-accent text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full transition-all duration-500"
          style={{
            transitionDelay: mobileOpen ? `${links.length * 80}ms` : "0ms",
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Sipariş Ver
        </a>
      </div>
    </header>
  );
}
