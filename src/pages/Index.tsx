import { useState } from "react"
import { MiniAppIllustrations } from "@/components/MiniAppIllustrations"
import { MiniAppCollection } from "@/components/MiniAppCollection"
import { MiniAppAbout } from "@/components/MiniAppAbout"
import Icon from "@/components/ui/icon"

type Section = "illustrations" | "collection" | "about" | null

const BG_IMAGE = "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/16ccbc99-48f3-4ba6-a088-ceb6d0bf7a49.jpg"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<Section>(null)

  const isDark = activeSection === "illustrations" || activeSection === "about"

  if (activeSection) {
    return (
      <div className={`min-h-screen ${isDark ? "bg-[#0e0e0e]" : "bg-[#F5F0EB]"}`}>
        <header className={`flex items-center justify-between px-6 py-4 backdrop-blur-md border-b ${isDark ? "bg-white/5 border-white/10" : "bg-white/90 border-black/10"}`}>
          <button
            onClick={() => setActiveSection(null)}
            className={`flex items-center gap-2 font-medium text-sm transition-colors ${isDark ? "text-white/50 hover:text-white" : "text-black/60 hover:text-black"}`}
          >
            <Icon name="ArrowLeft" size={16} />
            Назад
          </button>
          <span className={`font-black text-base tracking-widest uppercase ${isDark ? "text-white" : "text-black"}`} style={{ fontFamily: "Playfair Display, serif" }}>
            Yastrebova JY
          </span>
          <a
            href="https://t.me/fashenki"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-xs transition-colors font-medium ${isDark ? "text-white/40 hover:text-white" : "text-black/50 hover:text-black"}`}
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

        {/* Hero — три колонки: левые контакты | центр | правые контакты */}
        <div className="flex-1 flex items-center justify-between px-6 md:px-12 py-8 gap-4">

          {/* Левая колонка — контакты */}
          <div className="hidden md:flex flex-col gap-3 items-start">
            <p className="text-[9px] font-semibold tracking-[0.4em] uppercase text-white/35 mb-1">Контакты</p>
            <a
              href="https://t.me/fashenki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] text-white font-semibold bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-black/70 transition-colors"
            >
              <Icon name="Send" size={11} />
              Канал fashenki
            </a>
            <a
              href="https://t.me/yastrebovajulie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] text-white font-semibold bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-black/70 transition-colors"
            >
              <Icon name="MessageCircle" size={11} />
              @yastrebovajulie
            </a>
            <a
              href="https://instagram.com/yastrebovajulie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] text-white font-semibold bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-black/70 transition-colors"
            >
              <Icon name="Instagram" size={11} />
              Instagram
            </a>
          </div>

          {/* Центр */}
          <div className="text-center flex-1">
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

            <div className="flex flex-row gap-3 justify-center mb-8">
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

            {/* Мобильные контакты — только на маленьких экранах */}
            <div className="flex md:hidden flex-wrap gap-x-3 gap-y-2 justify-center mb-4">
              <a href="https://t.me/fashenki" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] text-white font-semibold bg-black/50 px-3 py-1.5 rounded-full hover:bg-black/70 transition-colors">
                <Icon name="Send" size={11} />Канал fashenki
              </a>
              <a href="https://t.me/yastrebovajulie" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] text-white font-semibold bg-black/50 px-3 py-1.5 rounded-full hover:bg-black/70 transition-colors">
                <Icon name="MessageCircle" size={11} />@yastrebovajulie
              </a>
              <a href="https://instagram.com/yastrebovajulie" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] text-white font-semibold bg-black/50 px-3 py-1.5 rounded-full hover:bg-black/70 transition-colors">
                <Icon name="Instagram" size={11} />Instagram
              </a>
            </div>

            <button
              onClick={() => setActiveSection("about")}
              className="text-[10px] font-medium tracking-widest uppercase text-white/35 hover:text-white/70 transition-colors"
            >
              Об авторе
            </button>
          </div>

          {/* Правая колонка — дополнительные ссылки */}
          <div className="hidden md:flex flex-col gap-3 items-end">
            <p className="text-[9px] font-semibold tracking-[0.4em] uppercase text-white/35 mb-1">Навигация</p>
            <button
              onClick={() => setActiveSection("illustrations")}
              className="text-[11px] text-white font-semibold bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-black/70 transition-colors"
            >
              Иллюстрации
            </button>
            <button
              onClick={() => setActiveSection("collection")}
              className="text-[11px] text-white font-semibold bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-black/70 transition-colors"
            >
              Коллекция
            </button>
            <button
              onClick={() => setActiveSection("about")}
              className="text-[11px] text-white font-semibold bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-black/70 transition-colors"
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