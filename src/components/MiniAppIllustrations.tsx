import { useState } from "react"
import Icon from "@/components/ui/icon"

const ILLUSTRATIONS = [
  {
    id: 1,
    title: "Монохром I",
    description: "Силуэт в оверсайз-пальто",
    year: "2024",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/8e4b3c1c-63fd-4cfa-94c2-1a3225b8a06e.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/8e4b3c1c-63fd-4cfa-94c2-1a3225b8a06e.jpg",
    color: "#D32F2F",
  },
  {
    id: 2,
    title: "Геометрия форм",
    description: "Капсула — вертикаль и объём",
    year: "2024",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/ef326723-f449-4676-895e-7119f511f4ca.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/ef326723-f449-4676-895e-7119f511f4ca.jpg",
    color: "#1565C0",
  },
  {
    id: 3,
    title: "Эскиз коллекции",
    description: "Мудборд весенней капсулы",
    year: "2024",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/cfbf6ed1-07de-478f-9a08-a3553c426258.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/cfbf6ed1-07de-478f-9a08-a3553c426258.jpg",
    color: "#F9A825",
  },
  {
    id: 4,
    title: "Объём и линия",
    description: "Редакционная иллюстрация",
    year: "2023",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/8e4b3c1c-63fd-4cfa-94c2-1a3225b8a06e.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/8e4b3c1c-63fd-4cfa-94c2-1a3225b8a06e.jpg",
    color: "#D32F2F",
  },
  {
    id: 5,
    title: "Цветовой блок",
    description: "Образ в стиле неопластицизма",
    year: "2023",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/ef326723-f449-4676-895e-7119f511f4ca.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/ef326723-f449-4676-895e-7119f511f4ca.jpg",
    color: "#1565C0",
  },
  {
    id: 6,
    title: "Белый и красный",
    description: "Зимняя капсула",
    year: "2023",
    thumb: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/cfbf6ed1-07de-478f-9a08-a3553c426258.jpg",
    full: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/cfbf6ed1-07de-478f-9a08-a3553c426258.jpg",
    color: "#F9A825",
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
          className="flex items-center gap-2 text-sm font-bold border-[2px] border-black px-4 py-2 hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all"
        >
          <Icon name="Send" size={14} />
          Все работы в канале
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-[3px] border-black">
        {ILLUSTRATIONS.map((item, i) => (
          <button
            key={item.id}
            onClick={() => setLightbox(item)}
            className={`group relative border-black bg-white hover:z-10 transition-all cursor-pointer text-left ${
              i % 3 !== 2 ? "border-r-[3px]" : ""
            } ${i < 3 ? "border-b-[3px]" : ""}`}
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
                <div className="bg-white border-[2px] border-black p-3">
                  <Icon name="ZoomIn" size={20} />
                </div>
              </div>
            </div>
            <div className="p-4 border-t-[2px] border-black">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-black text-base leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-medium">{item.description}</p>
                </div>
                <span
                  className="text-xs font-bold px-2 py-1 border-[2px] border-black shrink-0"
                  style={{ backgroundColor: item.color, color: "white" }}
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
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-black text-sm uppercase tracking-widest border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
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
              className="absolute top-4 right-4 z-10 bg-white border-[2px] border-black p-2 hover:bg-black hover:text-white transition-all"
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
