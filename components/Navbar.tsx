"use client";

import { useState, useEffect } from "react";

const CLIENT_BOT = "https://t.me/city_of_masters_client_bot";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Услуги", href: "#services" },
    { label: "Как это работает", href: "#how-it-works" },
    { label: "Мастерам", href: "#masters" },
    { label: "Отзывы", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <img
              src="/logo.png"
              alt="Город Мастеров"
              width={44}
              height={44}
              style={{ borderRadius: 10, objectFit: "contain", flexShrink: 0, background: "white", padding: 2 }}
            />
            <span
              className={`font-bold text-lg leading-tight transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Город <span style={{ color: "#FF6B35" }}>Мастеров</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-medium text-sm transition-colors no-underline hover:text-orange-500 ${
                  scrolled ? "text-gray-700" : "text-white/80"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={CLIENT_BOT}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex btn-primary text-sm py-2.5 px-5"
          >
            <span>📲</span> Вызвать мастера
          </a>

          {/* Burger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <span className="block w-6 h-0.5 bg-current mb-1.5" />
            <span className="block w-6 h-0.5 bg-current transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-gray-700 py-2 no-underline hover:text-orange-500"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CLIENT_BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              📲 Вызвать мастера
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
