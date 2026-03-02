const CLIENT_BOT = "https://t.me/city_of_masters_client_bot";
const MASTER_BOT = "https://t.me/gorodmasterov312";

export default function Footer() {
  return (
    <footer style={{ background: "#1A1A2E" }}>
      {/* Top CTA bar */}
      <div
        className="py-12 px-4 text-center border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <h2 className="text-white font-extrabold text-2xl md:text-3xl mb-3">
          Нужен мастер прямо сейчас?
        </h2>
        <p className="text-white/50 mb-6">Откройте Telegram — мастер будет у вас за 20 минут</p>
        <a
          href={CLIENT_BOT}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg"
        >
          📲 Вызвать мастера
        </a>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏠</span>
              <span className="text-white font-bold text-lg">
                Город <span style={{ color: "#FF6B35" }}>Мастеров</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Сервис вызова проверенных мастеров в Бишкеке. Электрики, сантехники и другие специалисты — за 20 минут.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Быстрые ссылки</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Услуги", href: "#services" },
                { label: "Как это работает", href: "#how-it-works" },
                { label: "Стать мастером", href: "#masters" },
                { label: "Отзывы", href: "#reviews" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-white/50 hover:text-white text-sm no-underline transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <div className="flex flex-col gap-3">
              <a
                href={CLIENT_BOT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm no-underline transition-colors"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ background: "rgba(255,107,53,0.2)" }}
                >
                  📲
                </span>
                @city_of_masters_client_bot
              </a>
              <a
                href={MASTER_BOT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-white text-sm no-underline transition-colors"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ background: "rgba(255,107,53,0.2)" }}
                >
                  👷
                </span>
                @gorodmasterov312
              </a>
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  📍
                </span>
                Бишкек, Кыргызстан
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="border-t py-6 px-4"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-white/30 text-sm">
          <span>© 2025 Город Мастеров · Бишкек, Кыргызстан</span>
          <span>Мастера рядом с вами</span>
        </div>
      </div>
    </footer>
  );
}
