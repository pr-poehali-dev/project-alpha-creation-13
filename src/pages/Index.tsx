import { useState } from "react"
import { MiniAppIllustrations } from "@/components/MiniAppIllustrations"
import { MiniAppCollection } from "@/components/MiniAppCollection"
import { MiniAppAbout } from "@/components/MiniAppAbout"
import Icon from "@/components/ui/icon"

type Section = "illustrations" | "collection" | "about" | null

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<Section>(null)

  if (activeSection) {
    return (
      <div className="min-h-screen bg-[#FAFAFA]">
        <header className="flex items-center justify-between px-6 py-4 border-b-[3px] border-black bg-white">
          <button
            onClick={() => setActiveSection(null)}
            className="flex items-center gap-2 font-bold text-sm border-[2px] border-black px-3 py-2 rounded-xl hover:bg-black hover:text-white transition-all"
          >
            <Icon name="ArrowLeft" size={16} />
            Назад
          </button>
          <span className="font-black text-lg tracking-widest uppercase" style={{ fontFamily: "Playfair Display, serif" }}>
            Yastrebova JY
          </span>
          <div className="flex gap-3">
            <a
              href="https://t.me/fashenki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-bold border-[2px] border-black px-3 py-2 rounded-xl hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0] transition-all"
            >
              <Icon name="Send" size={12} />
              Канал
            </a>
          </div>
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
    <div className="min-h-screen bg-[#FAFAFA] relative overflow-hidden">
      <FashionBackground />

      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Top nav */}
        <nav className="flex items-center justify-between px-6 py-4 border-b-[3px] border-black bg-white/80 backdrop-blur-sm">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">Fashion Illustration</span>
          <div className="flex gap-2 flex-wrap justify-end">
            <a
              href="https://t.me/fashenki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-bold border-[2px] border-black px-3 py-1.5 rounded-xl hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all"
            >
              <Icon name="Send" size={11} />
              fashenki
            </a>
            <a
              href="https://t.me/yastrebovajulie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-bold border-[2px] border-black px-3 py-1.5 rounded-xl hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0] transition-all"
            >
              <Icon name="User" size={11} />
              @yastrebovajulie
            </a>
          </div>
        </nav>

        {/* Hero center */}
        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <div className="text-center relative z-10 w-full max-w-lg">

            {/* Title — уменьшен вдвое */}
            <div className="relative inline-block mb-6">
              <div className="absolute -top-2 -left-4 w-8 h-8 bg-[#D32F2F] border-[2px] border-black rounded-sm" />
              <div className="absolute -bottom-2 -right-4 w-6 h-10 bg-[#1565C0] border-[2px] border-black rounded-sm" />
              <div className="absolute top-0 -right-8 w-5 h-5 bg-[#F9A825] border-[2px] border-black rounded-sm" />
              <div className="relative bg-white border-[3px] border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h1
                  className="text-3xl md:text-4xl font-black text-black tracking-tight leading-none mb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Yastrebova
                </h1>
                <div className="flex items-center gap-2 justify-center">
                  <div className="h-[2px] flex-1 bg-black" />
                  <span
                    className="text-xl md:text-2xl font-black text-[#D32F2F]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    JY
                  </span>
                  <div className="h-[2px] flex-1 bg-black" />
                </div>
              </div>
            </div>

            <p className="text-xs font-bold tracking-[0.4em] uppercase text-black mb-8 border-b-[2px] border-black pb-2 inline-block">
              ОДЕЖДА И ЭСКИЗЫ
            </p>

            {/* Кнопки — маленькие */}
            <div className="flex flex-row gap-3 justify-center mt-6">
              <button
                onClick={() => setActiveSection("illustrations")}
                className="group bg-white border-[2px] border-black px-5 py-2.5 font-bold text-xs uppercase tracking-widest hover:bg-[#D32F2F] hover:text-white transition-all rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Иллюстрации
              </button>
              <button
                onClick={() => setActiveSection("collection")}
                className="group bg-black text-white border-[2px] border-black px-5 py-2.5 font-bold text-xs uppercase tracking-widest hover:bg-[#1565C0] transition-all rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Коллекция
              </button>
            </div>

            <button
              onClick={() => setActiveSection("about")}
              className="mt-4 text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-black underline underline-offset-4 transition-colors"
            >
              Об авторе
            </button>

            {/* Контакты */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Контакты</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://t.me/fashenki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border-[2px] border-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all shadow-sm"
                >
                  <Icon name="Send" size={13} />
                  Канал fashenki
                </a>
                <a
                  href="https://t.me/yastrebovajulie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border-[2px] border-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0] transition-all shadow-sm"
                >
                  <Icon name="MessageCircle" size={13} />
                  @yastrebovajulie
                </a>
                <a
                  href="https://instagram.com/yastrebovajulie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border-[2px] border-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all shadow-sm"
                >
                  <Icon name="Instagram" size={13} />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t-[3px] border-black bg-white flex items-center justify-between px-6 py-3">
          <span className="text-xs text-gray-500 font-medium">Fashion illustration · Капсульные образы</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-[#D32F2F] border-[2px] border-black rounded-full" />
            <div className="w-3 h-3 bg-[#1565C0] border-[2px] border-black rounded-full" />
            <div className="w-3 h-3 bg-[#F9A825] border-[2px] border-black rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

function FashionBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Леопардовый паттерн SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="leopard" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            {/* Пятна леопарда */}
            <ellipse cx="20" cy="20" rx="9" ry="6" fill="#0d0d0d" transform="rotate(-20 20 20)" />
            <ellipse cx="20" cy="20" rx="5" ry="3" fill="#FAFAFA" transform="rotate(-20 20 20)" />
            <ellipse cx="22" cy="13" rx="4" ry="2.5" fill="#0d0d0d" transform="rotate(10 22 13)" />
            <ellipse cx="14" cy="26" rx="3.5" ry="2" fill="#0d0d0d" transform="rotate(-30 14 26)" />
            <ellipse cx="28" cy="27" rx="3" ry="2" fill="#0d0d0d" transform="rotate(20 28 27)" />

            <ellipse cx="60" cy="20" rx="9" ry="6" fill="#0d0d0d" transform="rotate(15 60 20)" />
            <ellipse cx="60" cy="20" rx="5" ry="3" fill="#FAFAFA" transform="rotate(15 60 20)" />
            <ellipse cx="62" cy="13" rx="4" ry="2.5" fill="#0d0d0d" transform="rotate(-10 62 13)" />
            <ellipse cx="54" cy="26" rx="3.5" ry="2" fill="#0d0d0d" transform="rotate(25 54 26)" />
            <ellipse cx="67" cy="27" rx="3" ry="2" fill="#0d0d0d" transform="rotate(-15 67 27)" />

            <ellipse cx="40" cy="55" rx="9" ry="6" fill="#0d0d0d" transform="rotate(-10 40 55)" />
            <ellipse cx="40" cy="55" rx="5" ry="3" fill="#FAFAFA" transform="rotate(-10 40 55)" />
            <ellipse cx="42" cy="48" rx="4" ry="2.5" fill="#0d0d0d" transform="rotate(15 42 48)" />
            <ellipse cx="33" cy="61" rx="3.5" ry="2" fill="#0d0d0d" transform="rotate(-20 33 61)" />
            <ellipse cx="48" cy="62" rx="3" ry="2" fill="#0d0d0d" transform="rotate(10 48 62)" />

            <ellipse cx="10" cy="65" rx="7" ry="4.5" fill="#0d0d0d" transform="rotate(25 10 65)" />
            <ellipse cx="10" cy="65" rx="4" ry="2.5" fill="#FAFAFA" transform="rotate(25 10 65)" />
            <ellipse cx="5" cy="58" rx="3" ry="2" fill="#0d0d0d" />
            <ellipse cx="16" cy="71" rx="3" ry="1.8" fill="#0d0d0d" transform="rotate(-15 16 71)" />

            <ellipse cx="70" cy="60" rx="7" ry="4.5" fill="#0d0d0d" transform="rotate(-20 70 60)" />
            <ellipse cx="70" cy="60" rx="4" ry="2.5" fill="#FAFAFA" transform="rotate(-20 70 60)" />
            <ellipse cx="65" cy="54" rx="3" ry="2" fill="#0d0d0d" transform="rotate(10 65 54)" />
            <ellipse cx="76" cy="67" rx="3" ry="1.8" fill="#0d0d0d" transform="rotate(20 76 67)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#leopard)" />
      </svg>

      {/* Цветные блоки поверх */}
      <div className="absolute top-[15%] left-0 w-[10%] h-[30%] bg-[#D32F2F] opacity-10 rounded-r-2xl" />
      <div className="absolute bottom-0 right-[18%] w-[10%] h-[18%] bg-[#1565C0] opacity-15 rounded-t-2xl" />
      <div className="absolute top-0 right-0 w-[7%] h-[15%] bg-[#F9A825] opacity-20 rounded-bl-2xl" />
      <div className="absolute bottom-[18%] left-[10%] w-[20%] h-[15%] bg-[#F9A825] opacity-8 rounded-2xl" />
      <div className="absolute top-[50%] right-[18%] w-[7%] h-[20%] bg-[#D32F2F] opacity-10 rounded-2xl" />
      <div className="absolute top-[35%] left-[30%] w-[8%] h-[12%] bg-[#1565C0] opacity-8 rounded-2xl" />
    </div>
  )
}
