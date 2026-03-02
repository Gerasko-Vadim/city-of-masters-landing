const CLIENT_BOT = "https://t.me/city_of_masters_client_bot";

const steps = [
  {
    number: "1",
    icon: "📲",
    title: "Откройте Telegram-бот",
    desc: "Нажмите кнопку ниже или найдите @city_of_masters_client_bot в Telegram. Бесплатно, без регистрации.",
  },
  {
    number: "2",
    icon: "📍",
    title: "Выберите услугу и адрес",
    desc: "Укажите что нужно сделать, выберите адрес на карте. Всё в удобном интерфейсе прямо в Telegram.",
  },
  {
    number: "3",
    icon: "👷",
    title: "Мастер приедет к вам",
    desc: "Проверенный специалист приедет за 20 минут. Вы получите уведомление и сможете отслеживать мастера на карте.",
  },
];

export default function HowItWorksClient() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: text */}
          <div className="flex-1">
            <span
              className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
              style={{ color: "#FF6B35", background: "rgba(255,107,53,0.1)" }}
            >
              Для клиентов
            </span>
            <h2 className="section-title mb-4">Как вызвать мастера<br />за 3 простых шага</h2>
            <p className="section-subtitle mb-10">
              Никаких звонков, никакого ожидания. Оформите заказ в Telegram за 2 минуты.
            </p>

            <div className="flex flex-col gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-5">
                  <div className="step-number">{step.number}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      {step.icon} {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={CLIENT_BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 inline-flex"
            >
              📲 Открыть в Telegram
            </a>
          </div>

          {/* Right: phone mockup */}
          <div className="flex-1 flex justify-center">
            <div
              className="relative w-72 h-[520px] rounded-[40px] overflow-hidden shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #1A1A2E, #16213E)",
                border: "6px solid #2D2D4E",
              }}
            >
              {/* Status bar */}
              <div className="flex justify-between items-center px-6 pt-4 pb-2">
                <span className="text-white/50 text-xs">9:41</span>
                <div className="w-20 h-4 rounded-full bg-black" />
                <span className="text-white/50 text-xs">●●●</span>
              </div>

              {/* Chat messages */}
              <div className="px-4 pt-2 flex flex-col gap-3">
                <div className="flex gap-2 items-end">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: "#FF6B35" }}>🏠</div>
                  <div className="bg-white/10 rounded-2xl rounded-bl-none px-4 py-3 max-w-[200px]">
                    <p className="text-white text-xs">Добро пожаловать! Выберите услугу:</p>
                    <div className="mt-2 flex flex-col gap-1.5">
                      {["⚡ Электрик", "🔧 Сантехник", "🪑 Мебель"].map((s) => (
                        <div key={s} className="text-xs py-1 px-2 rounded-lg text-center text-white/90" style={{ background: "rgba(255,107,53,0.3)" }}>
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-br-none px-4 py-2.5" style={{ background: "#FF6B35" }}>
                    <p className="text-white text-xs">⚡ Электрик</p>
                  </div>
                </div>

                <div className="flex gap-2 items-end">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: "#FF6B35" }}>🏠</div>
                  <div className="bg-white/10 rounded-2xl rounded-bl-none px-4 py-3 max-w-[200px]">
                    <p className="text-white text-xs">Отлично! Укажите адрес на карте 📍</p>
                  </div>
                </div>

                <div
                  className="rounded-2xl overflow-hidden h-24 flex items-center justify-center"
                  style={{ background: "rgba(255,107,53,0.2)", border: "1px solid rgba(255,107,53,0.3)" }}
                >
                  <span className="text-white/60 text-xs">📍 Карта Бишкека</span>
                </div>

                <div className="flex gap-2 items-end">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: "#FF6B35" }}>🏠</div>
                  <div className="bg-white/10 rounded-2xl rounded-bl-none px-4 py-3">
                    <p className="text-white text-xs">✅ Мастер едет к вам!<br/><span className="text-green-400">~15 минут</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
