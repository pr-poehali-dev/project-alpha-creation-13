import { useState } from "react"
import Icon from "@/components/ui/icon"

const ILLUSTRATIONS = [
  {
    id: 1,
    title: "Розовый жакет",
    description: "Полосатый жакет с бантом",
    year: "2025",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/39622cb7-dc18-4b54-92f0-e2a2c3b42ebc.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/39622cb7-dc18-4b54-92f0-e2a2c3b42ebc.jpg",
    color: "#D32F2F",
  },
  {
    id: 2,
    title: "Yastrebova",
    description: "Уличный стиль, белый блейзер",
    year: "2025",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/90c5e0e0-4987-4899-ae24-3e810a4d70c7.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/90c5e0e0-4987-4899-ae24-3e810a4d70c7.jpg",
    color: "#1565C0",
  },
  {
    id: 3,
    title: "Тренч и берет",
    description: "Винтажный образ с пальто",
    year: "2025",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/fe4781e3-6306-40d7-a9bf-43bed9b5be15.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/fe4781e3-6306-40d7-a9bf-43bed9b5be15.jpg",
    color: "#6D4C41",
  },
  {
    id: 4,
    title: "Монохром",
    description: "Чёрный силуэт с синими очками",
    year: "2025",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/37c3e1cc-d556-4b16-89cb-20f0f5fac4f3.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/37c3e1cc-d556-4b16-89cb-20f0f5fac4f3.jpg",
    color: "#1565C0",
  },
  {
    id: 5,
    title: "Красный вечер",
    description: "Гала-образ, красное платье",
    year: "2025",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/7f9a6478-f5c7-4866-87e8-79bef47d8f88.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/7f9a6478-f5c7-4866-87e8-79bef47d8f88.jpg",
    color: "#D32F2F",
  },
  {
    id: 6,
    title: "Miu Miu",
    description: "Цветочное платье, жёлтая сумка",
    year: "2025",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/e20f73bc-8ca4-4539-bfab-ecc5795db80d.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/e20f73bc-8ca4-4539-bfab-ecc5795db80d.jpg",
    color: "#F9A825",
  },
  {
    id: 7,
    title: "Миuccia Prada",
    description: "На открытии выставки Sueño Perrro",
    year: "2025",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/9c8fcb01-1eb9-45dc-8a0c-6b15efcc14f1.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/9c8fcb01-1eb9-45dc-8a0c-6b15efcc14f1.jpg",
    color: "#F57F17",
  },
  {
    id: 8,
    title: "Chanel Girl",
    description: "Розовый твид и пакеты Chanel",
    year: "2025",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/12a9f286-d26c-4389-8e3a-d039f4b71b24.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/12a9f286-d26c-4389-8e3a-d039f4b71b24.jpg",
    color: "#1565C0",
  },
]

export function MiniAppIllustrations() {
  const [lightbox, setLightbox] = useState<(typeof ILLUSTRATIONS)[0] | null>(null)

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-end justify-between mb-8 border-b-[3px] border-black pb-4">
        <div>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-1">01</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Playfair Display, serif" }}>
            Иллюстрации
          </h2>
        </div>
        <a
          href="https://t.me/fashenki"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-bold border-[2px] border-black px-4 py-2 rounded-xl hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all"
        >
          <Icon name="Send" size={14} />
          Все работы в канале
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ILLUSTRATIONS.map((item) => (
          <button
            key={item.id}
            onClick={() => setLightbox(item)}
            className="group relative bg-white hover:z-10 transition-all cursor-pointer text-left rounded-2xl overflow-hidden border-[2px] border-black/10 shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src={item.thumb}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: item.color }}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 rounded-full p-3 shadow-lg">
                  <Icon name="ZoomIn" size={20} />
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-black text-base leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-medium">{item.description}</p>
                </div>
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full shrink-0 text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {item.year}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://t.me/fashenki"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          <Icon name="Send" size={16} />
          Telegram-канал fashenki
        </a>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white border-[3px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 bg-white border-[2px] border-black p-2 rounded-xl hover:bg-black hover:text-white transition-all"
            >
              <Icon name="X" size={16} />
            </button>
            <img src={lightbox.full} alt={lightbox.title} className="w-full object-contain max-h-[70vh]" />
            <div className="p-6 border-t-[3px] border-black flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black" style={{ fontFamily: "Playfair Display, serif" }}>
                  {lightbox.title}
                </h3>
                <p className="text-gray-600 font-medium mt-1">{lightbox.description}</p>
              </div>
              <span
                className="text-sm font-bold px-3 py-2 border-[2px] border-black text-white"
                style={{ backgroundColor: lightbox.color }}
              >
                {lightbox.year}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}