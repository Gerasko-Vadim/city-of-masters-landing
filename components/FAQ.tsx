"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Как быстро приедет мастер?",
    a: "В среднем мастер приезжает в течение 20 минут после принятия заказа. Время зависит от района и загруженности. После того как мастер принял заказ, вы сможете отслеживать его на карте.",
  },
  {
    q: "Как оплатить услуги?",
    a: "Оплата производится напрямую мастеру наличными или переводом после выполнения работы. Все цены обсуждаются заранее — никаких скрытых платежей.",
  },
  {
    q: "Работаете ли вы в выходные и праздники?",
    a: "Да! Наши мастера работают ежедневно, включая выходные и праздничные дни. Заказы принимаются круглосуточно.",
  },
  {
    q: "Как проверяются мастера?",
    a: "Каждый мастер проходит верификацию перед регистрацией: проверяем документы, квалификацию и опыт работы. Все специалисты идентифицированы и несут ответственность за выполненную работу.",
  },
  {
    q: "Что если работа выполнена некачественно?",
    a: "Напишите нам в поддержку @gorodmasterov312. Мы разберём ситуацию и поможем решить проблему. Качество работы — наш приоритет.",
  },
  {
    q: "Нужно ли скачивать приложение?",
    a: "Нет! Всё работает через Telegram — самый удобный мессенджер. Просто откройте бот @city_of_masters_client_bot и сделайте заказ. Никаких скачиваний.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{ color: "#FF6B35", background: "rgba(255,107,53,0.1)" }}
          >
            Вопросы и ответы
          </span>
          <h2 className="section-title mb-3">Часто задаваемые<br />вопросы</h2>
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item last:border-0">
              <button
                className="faq-question px-6"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span
                  className="text-2xl flex-shrink-0 ml-4 transition-transform duration-300"
                  style={{
                    color: "#FF6B35",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-500 leading-relaxed text-[15px]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
