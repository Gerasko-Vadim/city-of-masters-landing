const services = [
  { icon: "⚡", title: "Электрик", desc: "Розетки, проводка, светильники", price: "от 200 сом" },
  { icon: "🔧", title: "Сантехник", desc: "Краны, трубы, засоры, унитаз", price: "от 400 сом" },
  { icon: "🪑", title: "Сборка мебели", desc: "Шкафы, кровати, кухни IKEA", price: "от 500 сом" },
  { icon: "🧹", title: "Уборка", desc: "Квартиры, офисы, после ремонта", price: "от 1 500 сом" },
  { icon: "🏗️", title: "Ремонт техники", desc: "Стиральные машины, холодильники", price: "от 600 сом" },
  { icon: "🎨", title: "Покраска / шпаклёвка", desc: "Стены, потолки, фасады", price: "от 80 сом/м²" },
  { icon: "🚪", title: "Двери и замки", desc: "Установка, замена, регулировка", price: "от 800 сом" },
  { icon: "📦", title: "Грузчики", desc: "Переезды, подъём, разборка", price: "от 500 сом/час" },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "#FF6B35", background: "rgba(255,107,53,0.1)" }}
          >
            Наши услуги
          </span>
          <h2 className="section-title mb-4">Решим любую задачу<br />в вашем доме</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            8 категорий услуг, более 50 видов работ. Если не нашли — напишите, мы найдём мастера.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="card p-5 flex flex-col"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4"
                style={{ background: "linear-gradient(135deg, #fff8f5, #ffe8dc)" }}
              >
                {s.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-base">{s.title}</h3>
              <p className="text-gray-500 text-sm flex-1 mb-3">{s.desc}</p>
              <span
                className="text-xs font-bold px-3 py-1 rounded-full self-start"
                style={{ background: "rgba(255,107,53,0.1)", color: "#FF6B35" }}
              >
                {s.price}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
