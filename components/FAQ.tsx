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
    a: "Напишите нашему администратору @gorodmasterov312. Мы разберём ситуацию и поможем решить проблему. Качество работы — наш приоритет.",
  },
  {
    q: "Нужно ли скачивать приложение?",
    a: "Нет! Всё работает через Telegram. Просто откройте @city_of_masters_client_bot и сделайте заказ. Никаких скачиваний.",
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
          <h2 className="section-title mb-3">
            Часто задаваемые<br />вопросы
          </h2>
        </div>

        {/* Accordion */}
        <div
          style={{
            background: "white",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
            border: "1px solid #F3F4F6",
          }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const isLast = i === faqs.length - 1;
            return (
              <div
                key={i}
                style={{
                  borderBottom: isLast ? "none" : "1px solid #F3F4F6",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    gap: 16,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: 16,
                      color: isOpen ? "#FF6B35" : "#1A1A2E",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: "#FF6B35",
                      fontSize: 24,
                      flexShrink: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: isOpen ? "rgba(255,107,53,0.12)" : "rgba(255,107,53,0.07)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease, background 0.2s ease",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 20px",
                      color: "#6B7280",
                      fontSize: 15,
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
