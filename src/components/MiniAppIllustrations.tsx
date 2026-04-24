import { useState } from "react"
import Icon from "@/components/ui/icon"

const ILLUSTRATIONS = [
  {
    id: 1,
    title: "Розовый жакет",
    description: "Полосатый жакет с бантом",
    price: 4900,
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/39622cb7-dc18-4b54-92f0-e2a2c3b42ebc.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/39622cb7-dc18-4b54-92f0-e2a2c3b42ebc.jpg",
    color: "#D32F2F",
  },
  {
    id: 2,
    title: "Yastrebova",
    description: "Уличный стиль, белый блейзер",
    price: 6500,
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/90c5e0e0-4987-4899-ae24-3e810a4d70c7.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/90c5e0e0-4987-4899-ae24-3e810a4d70c7.jpg",
    color: "#1565C0",
  },
  {
    id: 3,
    title: "Тренч и берет",
    description: "Винтажный образ с пальто",
    price: 5200,
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/fe4781e3-6306-40d7-a9bf-43bed9b5be15.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/fe4781e3-6306-40d7-a9bf-43bed9b5be15.jpg",
    color: "#6D4C41",
  },
  {
    id: 4,
    title: "Монохром",
    description: "Чёрный силуэт с синими очками",
    price: 3800,
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/37c3e1cc-d556-4b16-89cb-20f0f5fac4f3.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/37c3e1cc-d556-4b16-89cb-20f0f5fac4f3.jpg",
    color: "#1565C0",
  },
  {
    id: 5,
    title: "Красный вечер",
    description: "Гала-образ, красное платье",
    price: 7800,
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/7f9a6478-f5c7-4866-87e8-79bef47d8f88.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/7f9a6478-f5c7-4866-87e8-79bef47d8f88.jpg",
    color: "#D32F2F",
  },
  {
    id: 6,
    title: "Miu Miu",
    description: "Цветочное платье, жёлтая сумка",
    price: 5500,
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/e20f73bc-8ca4-4539-bfab-ecc5795db80d.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/e20f73bc-8ca4-4539-bfab-ecc5795db80d.jpg",
    color: "#F9A825",
  },
  {
    id: 7,
    title: "Миuccia Prada",
    description: "На открытии выставки Sueño Perrro",
    price: 9200,
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/9c8fcb01-1eb9-45dc-8a0c-6b15efcc14f1.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/9c8fcb01-1eb9-45dc-8a0c-6b15efcc14f1.jpg",
    color: "#F57F17",
  },
  {
    id: 8,
    title: "Chanel Girl",
    description: "Розовый твид и пакеты Chanel",
    price: 8400,
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/12a9f286-d26c-4389-8e3a-d039f4b71b24.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/bucket/12a9f286-d26c-4389-8e3a-d039f4b71b24.jpg",
    color: "#1565C0",
  },
]

export function MiniAppIllustrations() {
  const [lightbox, setLightbox] = useState<(typeof ILLUSTRATIONS)[0] | null>(null)

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/30 mb-1">01</p>
          <h2 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: "Playfair Display, serif" }}>
            Иллюстрации
          </h2>
        </div>
        <a
          href="https://t.me/fashenki"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[11px] font-medium text-white/40 hover:text-white/80 transition-colors"
        >
          <Icon name="Send" size={11} />
          Все работы в канале
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ILLUSTRATIONS.map((item) => (
          <div
            key={item.id}
            className="group relative bg-[#1a1a1a] hover:z-10 transition-all cursor-pointer text-left rounded-2xl overflow-hidden border border-white/10 shadow-md hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Картинка — кликабельна для lightbox */}
            <button
              onClick={() => setLightbox(item)}
              className="block w-full text-left"
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
                  <div className="bg-black/60 rounded-full p-3 shadow-lg">
                    <Icon name="ZoomIn" size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </button>

            {/* Нижняя часть карточки */}
            <div className="p-3 relative">
              <h3 className="font-black text-sm leading-tight mb-0.5 text-white" style={{ fontFamily: "Playfair Display, serif" }}>
                {item.title}
              </h3>
              <p className="text-[11px] text-white/40 font-medium pr-16">{item.description}</p>

              {/* Кнопка "Купить" — правый нижний угол */}
              <button
                onClick={(e) => { e.stopPropagation() }}
                className="absolute bottom-3 right-3 flex items-center gap-1 bg-white text-black text-[10px] font-bold uppercase tracking-wide px-2.5 py-1.5 rounded-full hover:bg-white/80 transition-colors shadow-md"
              >
                {item.price.toLocaleString("ru-RU")} ₽
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://t.me/fashenki"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-white/15 text-white px-4 py-2 font-semibold text-xs uppercase tracking-widest rounded-full hover:bg-white/25 transition-all"
        >
          <Icon name="Send" size={12} />
          Telegram fashenki
        </a>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all"
            >
              <Icon name="X" size={16} />
            </button>
            <img src={lightbox.full} alt={lightbox.title} className="w-full object-contain max-h-[70vh]" />
            <div className="p-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-white" style={{ fontFamily: "Playfair Display, serif" }}>
                  {lightbox.title}
                </h3>
                <p className="text-white/50 font-medium mt-1">{lightbox.description}</p>
              </div>
              <button className="bg-white text-black font-bold text-sm px-5 py-2.5 rounded-full hover:bg-white/80 transition-colors">
                {lightbox.price.toLocaleString("ru-RU")} ₽ — Купить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
