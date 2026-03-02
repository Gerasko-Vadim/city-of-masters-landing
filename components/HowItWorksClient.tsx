"use client";

import { useState } from "react";

const CLIENT_BOT = "https://t.me/city_of_masters_client_bot";

const steps = [
  {
    number: "1",
    icon: "📲",
    title: "Откройте Telegram-бот",
    desc: "Найдите @city_of_masters_client_bot или нажмите кнопку ниже. Бесплатно, без регистрации.",
  },
  {
    number: "2",
    icon: "📍",
    title: "Выберите услугу и адрес",
    desc: "Укажите что нужно сделать и отметьте адрес на карте прямо в Telegram.",
  },
  {
    number: "3",
    icon: "✅",
    title: "Мастер едет к вам",
    desc: "Получите уведомление, отслеживайте мастера на карте. Работа выполнена — платите мастеру.",
  },
];

// Screens that cycle in the phone mockup
const SCREENS = ["select", "map", "tracking"] as const;
type Screen = typeof SCREENS[number];

function PhoneScreen({ screen }: { screen: Screen }) {
  const primary = "#0ea5e9";

  if (screen === "select") {
    return (
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 12px" }}>
        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#1e293b", marginBottom: 4 }}>
            Выберите мастера
          </div>
          <div style={{ fontSize: 12, color: "#64748b" }}>
            С какими работами вам нужна помощь?
          </div>
        </div>

        {/* Category cards */}
        {[
          { icon: "⚡", label: "Электрик", desc: "Розетки, проводка, светильники" },
          { icon: "🔧", label: "Сантехник", desc: "Краны, трубы, засоры" },
          { icon: "🪑", label: "Сборка мебели", desc: "Шкафы, кровати, кухни" },
          { icon: "🧹", label: "Уборка", desc: "Квартиры, офисы" },
        ].map((cat) => (
          <div
            key={cat.label}
            style={{
              background: "#f8fafc",
              borderRadius: 14,
              padding: "12px 14px",
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 12,
              border: "2px solid transparent",
            }}
          >
            <span style={{ fontSize: 24, flexShrink: 0 }}>{cat.icon}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>{cat.label}</div>
              <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 1 }}>{cat.desc}</div>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        ))}
      </div>
    );
  }

  if (screen === "map") {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "16px 12px", gap: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          Местоположение *
        </div>

        {/* Map box */}
        <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", height: 170, flexShrink: 0 }}>
          {/* Fake map background */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, #e8f4fd 0%, #dbeafe 50%, #e0f2fe 100%)",
          }}>
            {/* Grid lines */}
            {[40, 80, 120, 160].map(y => (
              <div key={y} style={{ position: "absolute", left: 0, right: 0, top: y, height: 1, background: "rgba(148,163,184,0.25)" }} />
            ))}
            {[40, 80, 120, 160, 200].map(x => (
              <div key={x} style={{ position: "absolute", top: 0, bottom: 0, left: x, width: 1, background: "rgba(148,163,184,0.25)" }} />
            ))}
            {/* Fake roads */}
            <div style={{ position: "absolute", top: 85, left: 0, right: 0, height: 8, background: "rgba(255,255,255,0.7)", borderTop: "1px solid rgba(148,163,184,0.4)", borderBottom: "1px solid rgba(148,163,184,0.4)" }} />
            <div style={{ position: "absolute", top: 0, bottom: 0, left: 100, width: 8, background: "rgba(255,255,255,0.7)", borderLeft: "1px solid rgba(148,163,184,0.4)", borderRight: "1px solid rgba(148,163,184,0.4)" }} />
            {/* Fake blocks */}
            {[
              { top: 20, left: 20, w: 70, h: 55 },
              { top: 20, left: 118, w: 55, h: 55 },
              { top: 103, left: 20, w: 70, h: 50 },
              { top: 103, left: 118, w: 75, h: 50 },
            ].map((b, i) => (
              <div key={i} style={{ position: "absolute", top: b.top, left: b.left, width: b.w, height: b.h, background: "rgba(203,213,225,0.5)", borderRadius: 4 }} />
            ))}
          </div>

          {/* Search input overlay */}
          <div style={{ position: "absolute", top: 10, left: 10, right: 10, display: "flex", gap: 6 }}>
            <div style={{
              flex: 1, background: "white", borderRadius: 10, padding: "8px 12px",
              fontSize: 11, color: "#94a3b8", boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              Введите адрес для поиска
            </div>
            <div style={{ width: 32, height: 32, background: primary, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 12px rgba(14,165,233,0.4)` }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
          </div>

          {/* Center pin */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -100%)" }}>
            <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 26 16 26S32 28 32 16C32 7.163 24.837 0 16 0z" fill={primary}/>
              <circle cx="16" cy="16" r="7" fill="white"/>
            </svg>
          </div>
        </div>

        {/* Address field */}
        <div style={{ background: "#f8fafc", borderRadius: 12, padding: "11px 14px", border: `1px solid ${primary}`, boxShadow: `0 0 0 3px rgba(14,165,233,0.1)` }}>
          <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", marginBottom: 2 }}>Адрес</div>
          <div style={{ fontSize: 13, color: "#1e293b", fontWeight: 500 }}>ул. Манаса 40, Бишкек</div>
        </div>

        {/* Property type */}
        <div style={{ display: "flex", gap: 6 }}>
          {["Квартира", "Дом", "Офис"].map((t, i) => (
            <div key={t} style={{
              flex: 1, padding: "8px 4px", borderRadius: 10, textAlign: "center",
              fontSize: 11, fontWeight: 600,
              background: i === 0 ? "white" : "#f8fafc",
              border: i === 0 ? `2px solid ${primary}` : "2px solid transparent",
              color: i === 0 ? primary : "#94a3b8",
            }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // tracking screen
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px 12px", textAlign: "center" }}>
      {/* Steps indicator */}
      <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 24, width: "100%" }}>
        {["Заказ создан", "Поиск", "Мастер едет"].map((s, i) => (
          <div key={s} style={{ display: "contents" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, flex: 1 }}>
              <div style={{
                width: 20, height: 20, borderRadius: "50%",
                background: i < 2 ? "#22c55e" : primary,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {i < 2
                  ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  : <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />
                }
              </div>
              <span style={{ fontSize: 9, color: i < 2 ? "#22c55e" : primary, fontWeight: 600 }}>{s}</span>
            </div>
            {i < 2 && <div style={{ flex: 1, height: 2, background: i === 0 ? "#22c55e" : primary, marginBottom: 14, borderRadius: 1 }} />}
          </div>
        ))}
      </div>

      {/* Ripple */}
      <div style={{ position: "relative", width: 100, height: 100, marginBottom: 16 }}>
        {[1, 2, 3].map((r) => (
          <div key={r} style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            border: `1.5px solid rgba(14,165,233,${0.5 - r * 0.12})`,
            transform: `scale(${1 + r * 0.35})`,
          }} />
        ))}
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: "white", boxShadow: `0 4px 20px rgba(14,165,233,0.2)`,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28,
        }}>
          🔧
        </div>
      </div>

      <div style={{ fontWeight: 800, fontSize: 16, color: "#1e293b", marginBottom: 6 }}>Мастер едет к вам!</div>
      <div style={{ fontSize: 11, color: "#64748b", marginBottom: 16 }}>Среднее время ожидания — 15–20 мин</div>

      {/* Master card */}
      <div style={{ width: "100%", background: "#f8fafc", borderRadius: 14, padding: "10px 12px", display: "flex", alignItems: "center", gap: 10, textAlign: "left" }}>
        <div style={{ width: 38, height: 38, borderRadius: "50%", background: primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
          👷
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: "#1e293b" }}>Айдар · Электрик</div>
          <div style={{ fontSize: 11, color: "#22c55e", display: "flex", alignItems: "center", gap: 3 }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
            Проверенный специалист
          </div>
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: primary }}>★ 4.9</div>
      </div>
    </div>
  );
}

export default function HowItWorksClient() {
  const [activeScreen, setActiveScreen] = useState<Screen>("select");
  const primary = "#0ea5e9";

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: steps */}
          <div className="flex-1">
            <span
              className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
              style={{ color: "#FF6B35", background: "rgba(255,107,53,0.1)" }}
            >
              Для клиентов
            </span>
            <h2 className="section-title mb-4">
              Мастер за 3 простых<br />шага через Telegram
            </h2>
            <p className="section-subtitle mb-10">
              Никаких звонков и ожидания. Весь процесс — прямо в мессенджере.
            </p>

            <div className="flex flex-col gap-7">
              {steps.map((step, i) => {
                const screenMap: Record<number, Screen> = { 0: "select", 1: "map", 2: "tracking" };
                const isActive = activeScreen === screenMap[i];
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveScreen(screenMap[i])}
                    style={{
                      display: "flex", gap: 16, textAlign: "left", background: "none",
                      border: "none", cursor: "pointer", padding: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 48, height: 48, borderRadius: "50%",
                        background: isActive ? "linear-gradient(135deg, #FF6B35, #E85D04)" : "#f1f5f9",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, fontSize: 18, fontWeight: 800,
                        color: isActive ? "white" : "#94a3b8",
                        boxShadow: isActive ? "0 4px 16px rgba(255,107,53,0.35)" : "none",
                        transition: "all 0.2s",
                      }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: 17, color: isActive ? "#1e293b" : "#64748b", marginBottom: 4, transition: "color 0.2s" }}>
                        {step.icon} {step.title}
                      </h3>
                      <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.6 }}>{step.desc}</p>
                    </div>
                  </button>
                );
              })}
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

          {/* Right: real mini-app phone mockup */}
          <div className="flex-1 flex justify-center">
            <div style={{ position: "relative" }}>
              {/* Phone frame */}
              <div
                style={{
                  width: 260,
                  height: 520,
                  borderRadius: 40,
                  background: "#fff",
                  border: "8px solid #1e293b",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* Status bar */}
                <div style={{ background: "#f8fafc", padding: "10px 16px 6px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: "#1e293b" }}>9:41</span>
                  <div style={{ width: 60, height: 14, background: "#1e293b", borderRadius: 8 }} />
                  <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                    <svg width="12" height="10" viewBox="0 0 24 20"><rect x="0" y="6" width="4" height="14" rx="1" fill="#1e293b"/><rect x="6" y="3" width="4" height="17" rx="1" fill="#1e293b"/><rect x="12" y="0" width="4" height="20" rx="1" fill="#1e293b"/><rect x="18" y="4" width="4" height="16" rx="1" fill="#e2e8f0"/></svg>
                  </div>
                </div>

                {/* App header */}
                <div style={{ background: "#f8fafc", padding: "6px 16px 12px", borderBottom: "1px solid #e2e8f0", flexShrink: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <img src="/logo.png" alt="logo" width={26} height={26} style={{ borderRadius: 6, objectFit: "contain", background: "white", padding: 2 }} />
                    <span style={{ fontWeight: 800, fontSize: 13, color: "#1e293b" }}>Город Мастеров</span>
                    <span style={{ marginLeft: "auto", fontSize: 10, color: "#22c55e", fontWeight: 600, display: "flex", alignItems: "center", gap: 3 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                      Онлайн
                    </span>
                  </div>
                </div>

                {/* Screen content */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  <PhoneScreen screen={activeScreen} />
                </div>

                {/* Bottom button */}
                <div style={{ padding: "10px 12px 16px", background: "#f8fafc", borderTop: "1px solid #e2e8f0", flexShrink: 0 }}>
                  <div style={{
                    background: primary,
                    color: "white", fontWeight: 700, fontSize: 13,
                    borderRadius: 14, padding: "13px", textAlign: "center",
                    boxShadow: `0 4px 16px rgba(14,165,233,0.35)`,
                  }}>
                    {activeScreen === "select" && "Продолжить →"}
                    {activeScreen === "map" && "Подтвердить адрес →"}
                    {activeScreen === "tracking" && "✅ Мастер принял заказ"}
                  </div>
                </div>
              </div>

              {/* Screen selector tabs below phone */}
              <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 16 }}>
                {(["select", "map", "tracking"] as Screen[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveScreen(s)}
                    style={{
                      width: activeScreen === s ? 24 : 8,
                      height: 8, borderRadius: 4,
                      background: activeScreen === s ? "#FF6B35" : "#e2e8f0",
                      border: "none", cursor: "pointer", transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
