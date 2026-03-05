"use client";

import { QRCodeSVG } from "qrcode.react";

const CLIENT_BOT = "https://t.me/city_of_masters_client_bot";

export default function QRSection() {
  return (
    <section className="py-20" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* QR Code */}
          <div className="flex-shrink-0 flex flex-col items-center">
            {/* Glow wrapper */}
            <div
              className="relative p-6 rounded-3xl qr-glow"
              style={{ background: "rgba(255,107,53,0.12)", border: "1px solid rgba(255,107,53,0.3)" }}
            >
              {/* Inner white card */}
              <div className="bg-white rounded-2xl p-5">
                <QRCodeSVG
                  value={CLIENT_BOT}
                  size={200}
                  fgColor="#1A1A2E"
                  bgColor="#ffffff"
                  level="M"
                  includeMargin={false}
                  imageSettings={{
                    src: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><text y='18' font-size='18'>🏠</text></svg>",
                    x: undefined,
                    y: undefined,
                    height: 32,
                    width: 32,
                    excavate: true,
                  }}
                />
              </div>

              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: "#FF6B35" }} />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: "#FF6B35" }} />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: "#FF6B35" }} />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: "#FF6B35" }} />
            </div>

            <p className="text-white/50 text-sm mt-4 text-center">
              Наведите камеру телефона на QR-код
            </p>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <span
              className="inline-block text-sm font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
              style={{ color: "#FF6B35", background: "rgba(255,107,53,0.15)" }}
            >
              Быстрый старт
            </span>
            <h2
              className="font-extrabold text-white mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.2 }}
            >
              Отсканируйте QR-код<br />
              <span style={{ color: "#FF6B35" }}>и мастер будет через 5 минут</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              Отсканируйте код камерой смартфона — откроется чат с нашим ботом в Telegram.
              Выберите услугу, укажите адрес, и ждите мастера.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={CLIENT_BOT}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                📲 Открыть в Telegram
              </a>
              <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
                <span>✅</span>
                <span>Бесплатно · Без регистрации</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-10 max-w-md mx-auto lg:mx-0">
              {[
                { icon: "⚡", text: "Мастер за 5 минут" },
                { icon: "🔒", text: "Проверенные специалисты" },
                { icon: "💬", text: "Чат с мастером" },
                { icon: "📍", text: "Трекинг на карте" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-2 text-white/70">
                  <span className="text-lg">{f.icon}</span>
                  <span className="text-sm font-medium">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
