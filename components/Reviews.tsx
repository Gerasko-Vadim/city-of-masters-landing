const clientReviews = [
  {
    name: "Алина К.",
    location: "мкр. Достук, Бишкек",
    avatar: "👩",
    rating: 5,
    text: "Вызвала электрика поздно вечером — приехал через 15 минут! Поменял розетку, проверил проводку. Очень аккуратный и профессиональный мастер. Обязательно буду пользоваться снова.",
    service: "Электрик",
    date: "2 недели назад",
  },
  {
    name: "Бакыт М.",
    location: "мкр. Ак-Орго, Бишкек",
    avatar: "👨",
    rating: 5,
    text: "Сантехник починил кран на кухне за 20 минут. Объяснил причину поломки, ничего лишнего не навязывал. Цена оказалась ниже, чем я ожидал. Рекомендую!",
    service: "Сантехник",
    date: "1 месяц назад",
  },
  {
    name: "Наталья Р.",
    location: "ул. Манаса, Бишкек",
    avatar: "👩‍💼",
    rating: 5,
    text: "Заказала сборку мебели IKEA через бот — всё очень удобно, выбрала время, мастер приехал вовремя. Собрал шкаф и кровать быстро и аккуратно. Отличный сервис!",
    service: "Сборка мебели",
    date: "3 недели назад",
  },
];

const masterReviews = [
  {
    name: "Айдар Б.",
    role: "Электрик · 2 года на платформе",
    avatar: "👷",
    rating: 5,
    text: "Работаю через Город Мастеров уже 2 года. Заказов всегда достаточно, могу сам выбирать время работы. Выплаты приходят без задержек. Рекомендую всем мастерам!",
  },
  {
    name: "Максим С.",
    role: "Сантехник · 1 год на платформе",
    avatar: "🔧",
    rating: 5,
    text: "Отличная платформа для специалистов. Клиенты адекватные, заказы реальные. До этого работал через объявления — здесь намного стабильнее и удобнее.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="stars">
      {"★".repeat(count)}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "#FF6B35", background: "rgba(255,107,53,0.1)" }}
          >
            Отзывы
          </span>
          <h2 className="section-title mb-4">Нам доверяют клиенты<br />и мастера</h2>
          <div className="flex items-center justify-center gap-3">
            <StarRating count={5} />
            <span className="font-bold text-gray-900 text-lg">4.9</span>
            <span className="text-gray-400">— средний рейтинг по 500+ отзывам</span>
          </div>
        </div>

        {/* Client reviews */}
        <div className="mb-12">
          <h3 className="font-bold text-gray-500 uppercase tracking-wider text-sm mb-6 text-center">
            Отзывы клиентов
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {clientReviews.map((r) => (
              <article key={r.name} className="card p-6 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #fff8f5, #ffe8dc)" }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.location}</div>
                  </div>
                </div>

                <StarRating count={r.rating} />

                <p className="text-gray-600 leading-relaxed mt-3 flex-1 text-sm">"{r.text}"</p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded-lg"
                    style={{ background: "rgba(255,107,53,0.1)", color: "#FF6B35" }}
                  >
                    {r.service}
                  </span>
                  <span className="text-gray-400 text-xs">{r.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Master reviews */}
        <div>
          <h3 className="font-bold text-gray-500 uppercase tracking-wider text-sm mb-6 text-center">
            Отзывы мастеров
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {masterReviews.map((r) => (
              <article
                key={r.name}
                className="rounded-2xl p-6 flex flex-col"
                style={{ background: "linear-gradient(135deg, #1A1A2E, #16213E)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: "rgba(255,107,53,0.2)" }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{r.name}</div>
                    <div className="text-white/50 text-xs">{r.role}</div>
                  </div>
                </div>

                <StarRating count={r.rating} />

                <p className="text-white/70 leading-relaxed mt-3 text-sm">"{r.text}"</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
