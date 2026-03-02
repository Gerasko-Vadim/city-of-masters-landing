const MASTER_BOT = "https://t.me/gorodmasterov312";

const steps = [
  {
    number: "1",
    icon: "📲",
    title: "Напишите нашему администратору",
    desc: "Найдите @gorodmasterov312 в Telegram и напишите нам. Регистрация займёт 2 минуты.",
  },
  {
    number: "2",
    icon: "✅",
    title: "Пройдите верификацию",
    desc: "Укажите специализацию и контакты. Наша команда проверит данные и активирует аккаунт.",
  },
  {
    number: "3",
    icon: "🕐",
    title: "Выходите на смену",
    desc: "Работайте когда удобно. Включите смену — и заказы рядом с вами начнут поступать автоматически.",
  },
  {
    number: "4",
    icon: "💰",
    title: "Принимайте заказы и зарабатывайте",
    desc: "Выполняйте заказы и получайте оплату. Прозрачная система без скрытых комиссий.",
  },
];

const benefits = [
  { icon: "🕐", title: "Свободный график", desc: "Работайте когда и сколько хотите" },
  { icon: "📍", title: "Заказы рядом", desc: "Только заказы в вашем районе" },
  { icon: "💸", title: "Быстрые выплаты", desc: "Деньги без задержек" },
  { icon: "🛡️", title: "Поддержка 24/7", desc: "Мы всегда на связи" },
];

export default function HowItWorksMaster() {
  return (
    <section id="masters" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "#FF6B35", background: "rgba(255,107,53,0.1)" }}
          >
            Для мастеров
          </span>
          <h2 className="section-title mb-4">
            Зарабатывайте больше<br />со своим расписанием
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Присоединяйтесь к платформе и получайте стабильный поток клиентов без рекламы и холодных звонков.
          </p>
        </div>

        {/* Steps + Benefits */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Steps */}
          <div className="flex-1 flex flex-col gap-7">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-5">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-6 top-14 w-0.5 h-full -bottom-7"
                    style={{ background: "linear-gradient(to bottom, rgba(255,107,53,0.4), transparent)" }}
                  />
                )}
                <div className="step-number z-10">{step.number}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {step.icon} {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}

            <a
              href={MASTER_BOT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex btn-primary mt-4 self-start"
            >
              👷 Стать мастером
            </a>
          </div>

          {/* Benefits grid */}
          <div className="flex-1 grid grid-cols-2 gap-5 content-start">
            {benefits.map((b) => (
              <div key={b.title} className="card p-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: "linear-gradient(135deg, #fff8f5, #ffe8dc)" }}
                >
                  {b.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{b.title}</h4>
                <p className="text-gray-500 text-sm">{b.desc}</p>
              </div>
            ))}

            {/* Earnings card */}
            <div
              className="col-span-2 rounded-2xl p-6 text-white"
              style={{ background: "linear-gradient(135deg, #FF6B35, #E85D04)" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white/80 text-sm font-medium mb-1">Средний заработок</div>
                  <div className="text-3xl font-extrabold">50 000 – 120 000 сом</div>
                  <div className="text-white/70 text-sm mt-1">в месяц при полной занятости</div>
                </div>
                <span className="text-6xl opacity-80">💰</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
