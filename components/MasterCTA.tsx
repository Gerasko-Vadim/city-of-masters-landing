const MASTER_BOT = "https://t.me/city_masters_bot";

const perks = [
  { icon: "🕐", text: "Свободный график — работайте когда хотите" },
  { icon: "📍", text: "Только заказы рядом с вами" },
  { icon: "💸", text: "Прозрачная система оплаты без скрытых комиссий" },
  { icon: "📈", text: "Стабильный поток клиентов без рекламы" },
  { icon: "🛡️", text: "Поддержка и помощь 24/7" },
  { icon: "📱", text: "Удобное приложение прямо в Telegram" },
];

export default function MasterCTA() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FF6B35 0%, #E85D04 100%)" }}
    >
      {/* Decorative */}
      <div
        className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, white, transparent)" }}
      />
      <div
        className="absolute bottom-[-100px] left-[-100px] w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, white, transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full bg-white/20 text-white">
              Вакансии мастеров
            </span>
            <h2
              className="font-extrabold text-white mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2 }}
            >
              Хотите зарабатывать<br />больше?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              Присоединяйтесь к нашей команде профессионалов в Бишкеке.
              Мы предоставляем клиентов — вы делаете своё дело.
            </p>

            <a
              href={MASTER_BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white font-bold py-4 px-8 rounded-2xl text-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
              style={{ color: "#FF6B35", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
            >
              👷 Стать мастером
            </a>

            <p className="text-white/60 text-sm mt-4">
              Бесплатная регистрация · Начните уже сегодня
            </p>
          </div>

          {/* Right: perks */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {perks.map((p) => (
              <div
                key={p.text}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
              >
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <span className="text-white/90 text-sm font-medium leading-snug">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
