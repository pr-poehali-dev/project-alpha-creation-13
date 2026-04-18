import Icon from "@/components/ui/icon"

const CAPSULES = [
  {
    id: 1,
    title: "Монохром — осень",
    subtitle: "Городской гардероб",
    status: "ready" as const,
    items: ["Оверсайз-пальто", "Прямые брюки", "Белая рубашка", "Лоферы"],
    accent: "#D32F2F",
    image: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/8e4b3c1c-63fd-4cfa-94c2-1a3225b8a06e.jpg",
  },
  {
    id: 2,
    title: "Геометрия цвета",
    subtitle: "Капсула в стиле Мондриана",
    status: "ready" as const,
    items: ["Красный блейзер", "Синие широкие брюки", "Жёлтый акцент", "Чёрные детали"],
    accent: "#1565C0",
    image: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/ef326723-f449-4676-895e-7119f511f4ca.jpg",
  },
  {
    id: 3,
    title: "Весенний эскиз",
    subtitle: "Подбор образов в процессе",
    status: "in-progress" as const,
    items: ["Лёгкое пальто", "Бежевые брюки", "Базовые топы", "Аксессуары"],
    accent: "#F9A825",
    image: "https://cdn.poehali.dev/projects/3c1ec495-fb99-4f92-953d-ee437b43655a/files/cfbf6ed1-07de-478f-9a08-a3553c426258.jpg",
  },
]

const STATUS_LABELS = {
  ready: { label: "Готово", bg: "#0D0D0D", text: "white" },
  "in-progress": { label: "В работе", bg: "#F9A825", text: "black" },
}

export function MiniAppCollection() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-end justify-between mb-8 border-b-[3px] border-black pb-4">
        <div>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-1">02</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Playfair Display, serif" }}>
            Коллекция
          </h2>
        </div>
        <a
          href="https://t.me/yastrebovajulie"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-bold border-[2px] border-black px-4 py-2 hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0] transition-all"
        >
          <Icon name="User" size={14} />
          @yastrebovajulie
        </a>
      </div>

      <div className="space-y-0 border-[3px] border-black">
        {CAPSULES.map((capsule, i) => (
          <div
            key={capsule.id}
            className={`flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""} ${i < CAPSULES.length - 1 ? "border-b-[3px] border-black" : ""}`}
          >
            {/* Image */}
            <div className="w-full md:w-2/5 relative overflow-hidden" style={{ minHeight: 280 }}>
              <img
                src={capsule.image}
                alt={capsule.title}
                loading="lazy"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundColor: capsule.accent }}
              />
            </div>

            {/* Content */}
            <div className={`w-full md:w-3/5 p-8 flex flex-col justify-between bg-white ${i % 2 === 1 ? "md:border-r-[3px]" : "md:border-l-[3px]"} border-black border-t-[3px] md:border-t-0`}>
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-black leading-tight"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {capsule.title}
                    </h3>
                    <p className="text-gray-500 font-medium mt-1">{capsule.subtitle}</p>
                  </div>
                  <span
                    className="text-xs font-black px-3 py-2 border-[2px] border-black shrink-0 uppercase tracking-wide"
                    style={{
                      backgroundColor: STATUS_LABELS[capsule.status].bg,
                      color: STATUS_LABELS[capsule.status].text,
                    }}
                  >
                    {STATUS_LABELS[capsule.status].label}
                  </span>
                </div>

                {/* Items list */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {capsule.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-bold px-3 py-2 border-[2px] border-black bg-white"
                      style={{ borderLeftColor: capsule.accent, borderLeftWidth: 4 }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-[2px] border-black">
                <a
                  href="https://t.me/fashenki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold hover:underline underline-offset-4 transition-all"
                >
                  <Icon name="Send" size={14} />
                  Смотреть процесс в канале
                  <Icon name="ArrowRight" size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://t.me/yastrebovajulie"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#1565C0] text-white px-8 py-4 font-black text-sm uppercase tracking-widest border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
        >
          <Icon name="User" size={16} />
          Написать Юлии
        </a>
        <a
          href="https://t.me/fashenki"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-black text-sm uppercase tracking-widest border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
        >
          <Icon name="Send" size={16} />
          Канал fashenki
        </a>
      </div>
    </div>
  )
}
