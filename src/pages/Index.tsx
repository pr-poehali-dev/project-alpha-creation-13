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
        {/* Header */}
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
      {/* Mondrian Grid Background */}
      <MondriangBackground />

      {/* Main Hero Layout */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Top nav */}
        <nav className="flex items-center justify-between px-6 py-4 border-b-[3px] border-black bg-white/80 backdrop-blur-sm">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500">Fashion Illustration</span>
          <div className="flex gap-3">
            <a
              href="https://t.me/fashenki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-bold border-[2px] border-black px-3 py-2 rounded-xl hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all"
            >
              <Icon name="Send" size={12} />
              fashenki
            </a>
            <a
              href="https://t.me/yastrebovajulie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-bold border-[2px] border-black px-3 py-2 rounded-xl hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0] transition-all"
            >
              <Icon name="User" size={12} />
              @yastrebovajulie
            </a>
          </div>
        </nav>

        {/* Hero center */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          <div className="text-center relative z-10">
            {/* Central color block hero */}
            <div className="relative inline-block mb-8">
              <div className="absolute -top-4 -left-8 w-16 h-16 bg-[#D32F2F] border-[3px] border-black" />
              <div className="absolute -bottom-4 -right-8 w-12 h-20 bg-[#1565C0] border-[3px] border-black" />
              <div className="absolute top-0 -right-16 w-10 h-10 bg-[#F9A825] border-[3px] border-black" />
              <div className="relative bg-white border-[3px] border-black px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h1
                  className="text-5xl md:text-7xl font-black text-black tracking-tight leading-none mb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Yastrebova
                </h1>
                <div className="flex items-center gap-3 justify-center">
                  <div className="h-[3px] flex-1 bg-black" />
                  <span
                    className="text-3xl md:text-5xl font-black text-[#D32F2F]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    JY
                  </span>
                  <div className="h-[3px] flex-1 bg-black" />
                </div>
              </div>
            </div>

            <p className="text-sm md:text-base font-bold tracking-[0.4em] uppercase text-black mb-12 border-b-[2px] border-black pb-3 inline-block">
              ОДЕЖДА И ЭСКИЗЫ
            </p>

            {/* Two main CTA blocks */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={() => setActiveSection("illustrations")}
                className="group relative bg-white border-[2px] border-black px-10 py-6 font-black text-lg uppercase tracking-widest hover:bg-[#D32F2F] hover:text-white transition-all rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span className="block text-xs text-gray-400 group-hover:text-red-100 font-bold tracking-widest mb-1">01</span>
                Иллюстрации
              </button>
              <button
                onClick={() => setActiveSection("collection")}
                className="group relative bg-black text-white border-[2px] border-black px-10 py-6 font-black text-lg uppercase tracking-widest hover:bg-[#1565C0] transition-all rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span className="block text-xs text-gray-400 group-hover:text-blue-100 font-bold tracking-widest mb-1">02</span>
                Коллекция
              </button>
            </div>

            <button
              onClick={() => setActiveSection("about")}
              className="mt-6 text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-black underline underline-offset-4 transition-colors"
            >
              Об авторе
            </button>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t-[3px] border-black bg-white flex items-center justify-between px-6 py-3">
          <span className="text-xs text-gray-500 font-medium">Fashion illustration · Капсульные образы</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-[#D32F2F] border-[2px] border-black" />
            <div className="w-3 h-3 bg-[#1565C0] border-[2px] border-black" />
            <div className="w-3 h-3 bg-[#F9A825] border-[2px] border-black" />
          </div>
        </div>
      </div>
    </div>
  )
}

function MondriangBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Vertical lines */}
      <div className="absolute left-[12%] top-0 bottom-0 w-[3px] bg-black opacity-20" />
      <div className="absolute left-[35%] top-0 bottom-0 w-[3px] bg-black opacity-15" />
      <div className="absolute right-[20%] top-0 bottom-0 w-[3px] bg-black opacity-20" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[3px] bg-black opacity-10" />

      {/* Horizontal lines */}
      <div className="absolute top-[18%] left-0 right-0 h-[3px] bg-black opacity-15" />
      <div className="absolute top-[55%] left-0 right-0 h-[3px] bg-black opacity-20" />
      <div className="absolute bottom-[20%] left-0 right-0 h-[3px] bg-black opacity-15" />

      {/* Color blocks */}
      <div className="absolute top-[18%] left-0 w-[12%] h-[37%] bg-[#D32F2F] opacity-15" />
      <div className="absolute bottom-0 right-[20%] w-[12%] h-[20%] bg-[#1565C0] opacity-20" />
      <div className="absolute top-0 right-0 w-[8%] h-[18%] bg-[#F9A825] opacity-25" />
      <div className="absolute bottom-[20%] left-[12%] w-[23%] h-[20%] bg-[#F9A825] opacity-10" />
      <div className="absolute top-[55%] right-[20%] w-[8%] h-[25%] bg-[#D32F2F] opacity-15" />
    </div>
  )
}