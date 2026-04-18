import { useState } from "react"
import { MiniAppIllustrations } from "@/components/MiniAppIllustrations"
import { MiniAppCollection } from "@/components/MiniAppCollection"
import { MiniAppAbout } from "@/components/MiniAppAbout"
import Icon from "@/components/ui/icon"

type Section = "illustrations" | "collection" | "about" | null

const BG_IMAGE = "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/16ccbc99-48f3-4ba6-a088-ceb6d0bf7a49.jpg"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<Section>(null)

  if (activeSection) {
    return (
      <div className="min-h-screen bg-[#F5F0EB]">
        <header className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-black/10">
          <button
            onClick={() => setActiveSection(null)}
            className="flex items-center gap-2 font-medium text-sm text-black/60 hover:text-black transition-colors"
          >
            <Icon name="ArrowLeft" size={16} />
            Назад
          </button>
          <span className="font-black text-base tracking-widest uppercase" style={{ fontFamily: "Playfair Display, serif" }}>
            Yastrebova JY
          </span>
          <a
            href="https://t.me/fashenki"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-black/50 hover:text-black transition-colors font-medium"
          >
            <Icon name="Send" size={12} />
            fashenki
          </a>
        </header>

        <main className="p-6 md:p-10">
          {activeSection === "illustrations" && <MiniAppIllustrations />}
          {activeSection === "collection" && <MiniAppCollection />}
          {activeSection === "about" && <MiniAppAbout />}
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Фон — иллюстрация на весь экран */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      {/* Оверлей */}
      <div className="absolute inset-0 bg-black/38" />

      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Top nav */}
        <nav className="flex items-center justify-between px-6 py-5">
          <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-white/50">
            Fashion Illustration
          </span>
          <div className="flex gap-5">
            <a
              href="https://t.me/fashenki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium text-white/60 hover:text-white transition-colors tracking-wider"
            >
              fashenki
            </a>
            <a
              href="https://t.me/yastrebovajulie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium text-white/60 hover:text-white transition-colors tracking-wider"
            >
              @yastrebovajulie
            </a>
          </div>
        </nav>

        {/* Hero center */}
        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <div className="text-center">

            {/* Название без рамок */}
            <div className="mb-3">
              <h1
                className="text-5xl md:text-6xl font-black text-white tracking-tight leading-none"
                style={{ fontFamily: "Playfair Display, serif", textShadow: "0 2px 32px rgba(0,0,0,0.5)" }}
              >
                Yastrebova
              </h1>
              <div className="flex items-center gap-3 justify-center mt-2">
                <div className="h-px flex-1 bg-white/30" />
                <span
                  className="text-2xl md:text-3xl font-black text-white/85 tracking-widest"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  JY
                </span>
                <div className="h-px flex-1 bg-white/30" />
              </div>
            </div>

            <p className="text-[10px] font-semibold tracking-[0.5em] uppercase text-white/50 mb-10">
              ОДЕЖДА И ЭСКИЗЫ
            </p>

            {/* Кнопки разделов */}
            <div className="flex flex-row gap-3 justify-center mb-10">
              <button
                onClick={() => setActiveSection("illustrations")}
                className="bg-white/15 backdrop-blur-sm text-white px-6 py-2 text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-white/30 transition-all"
              >
                Иллюстрации
              </button>
              <button
                onClick={() => setActiveSection("collection")}
                className="bg-white/15 backdrop-blur-sm text-white px-6 py-2 text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-white/30 transition-all"
              >
                Коллекция
              </button>
            </div>

            {/* Контакты — без рамок, компактно */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-[9px] font-semibold tracking-[0.4em] uppercase text-white/35 mb-1">Контакты</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
                <a
                  href="https://t.me/fashenki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[11px] text-white/60 hover:text-white transition-colors font-medium"
                >
                  <Icon name="Send" size={11} />
                  Канал fashenki
                </a>
                <a
                  href="https://t.me/yastrebovajulie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[11px] text-white/60 hover:text-white transition-colors font-medium"
                >
                  <Icon name="MessageCircle" size={11} />
                  @yastrebovajulie
                </a>
                <a
                  href="https://instagram.com/yastrebovajulie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[11px] text-white/60 hover:text-white transition-colors font-medium"
                >
                  <Icon name="Instagram" size={11} />
                  Instagram
                </a>
              </div>
            </div>

            <button
              onClick={() => setActiveSection("about")}
              className="mt-6 text-[10px] font-medium tracking-widest uppercase text-white/35 hover:text-white/70 transition-colors"
            >
              Об авторе
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="px-6 py-4 flex items-center justify-center">
          <span className="text-[10px] text-white/25 tracking-widest">© 2025 Yastrebova JY</span>
        </div>
      </div>
    </div>
  )
}
