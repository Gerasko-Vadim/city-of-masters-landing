const CLIENT_BOT = "https://t.me/city_of_masters_client_bot";
const MASTER_BOT = "https://t.me/gorodmasterov312";

export default function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden min-h-screen flex items-center">
      {/* Decorative circles */}
      <div
        className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #FF6B35, transparent)" }}
      />
      <div
        className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #FF6B35, transparent)" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          {/* Online badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="relative flex h-3 w-3">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                style={{ animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite" }}
              />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
            </span>
            <span className="text-white/90 text-sm font-medium">
              Мастера онлайн — принимаем заказы прямо сейчас
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-white font-extrabold leading-tight mb-6" style={{ fontSize: "clamp(36px, 6vw, 64px)" }}>
            Мастер за{" "}
            <span style={{ color: "#FF6B35" }}>20 минут</span>
            <br />— прямо в Telegram
          </h1>

          {/* Subtitle */}
          <p className="text-white/75 text-xl leading-relaxed mb-10 max-w-xl">
            Проверенные электрики, сантехники и специалисты в Бишкеке.
            Заказ через Telegram — без звонков, без ожидания.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={CLIENT_BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg py-4 px-8"
            >
              <span>📲</span>
              Вызвать мастера
            </a>
            <a
              href={MASTER_BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg py-4 px-8"
            >
              <span>👷</span>
              Стать мастером
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-12">
            {[
              { icon: "✅", text: "Проверенные мастера" },
              { icon: "⚡", text: "Приедем за 20 минут" },
              { icon: "💳", text: "Прозрачные цены" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/70">
                <span>{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating card (desktop) */}
        <div
          className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3"
          style={{ width: "260px" }}
        >
          {[
            { emoji: "⚡", title: "Электрик", desc: "от 200 сом", time: "~ 15 мин" },
            { emoji: "🔧", title: "Сантехник", desc: "от 400 сом", time: "~ 20 мин" },
            { emoji: "🪑", title: "Сборка мебели", desc: "от 500 сом", time: "~ 30 мин" },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-3"
            >
              <span className="text-3xl">{service.emoji}</span>
              <div>
                <div className="text-white font-semibold text-sm">{service.title}</div>
                <div className="text-white/60 text-xs">{service.desc} · {service.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: "80px" }}>
          <path d="M0 80L1440 80L1440 20C1200 70 960 0 720 40C480 80 240 10 0 50L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
