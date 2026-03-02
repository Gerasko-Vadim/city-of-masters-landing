const stats = [
  { value: "45+", label: "Мастеров в Бишкеке", icon: "👷" },
  { value: "200+", label: "Заказов выполнено", icon: "✅" },
  { value: "20 мин", label: "Среднее время ожидания", icon: "⚡" },
  { value: "4.9 ★", label: "Средний рейтинг", icon: "⭐" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-6 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #fff8f5, #fff)" }}
            >
              <div className="text-4xl mb-2">{s.icon}</div>
              <div
                className="font-extrabold mb-1"
                style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "#FF6B35" }}
              >
                {s.value}
              </div>
              <div className="text-gray-500 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
