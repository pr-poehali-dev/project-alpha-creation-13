import Icon from "@/components/ui/icon"

export function MiniAppAbout() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 border-b-[3px] border-black pb-4">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400 mb-1">Об авторе</p>
        <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Playfair Display, serif" }}>
          Yastrebova JY
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-0 border-[3px] border-black mb-8">
        {/* Color accent block */}
        <div className="border-b-[3px] md:border-b-0 md:border-r-[3px] border-black">
          <div className="h-32 bg-[#D32F2F]" />
          <div className="h-20 bg-[#F9A825]" />
          <div className="flex-1 bg-[#1565C0] h-16" />
        </div>

        {/* Text */}
        <div className="md:col-span-2 p-8 bg-white">
          <h3 className="text-2xl font-black mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Художник и стилист
          </h3>
          <p className="text-base leading-relaxed mb-4 text-gray-800">
            Я создаю fashion-иллюстрации и помогаю формировать визуальный образ — через эскизы, капсульные подборки и авторский взгляд на стиль.
          </p>
          <p className="text-base leading-relaxed text-gray-600">
            Моя работа — это точка, где одежда встречается с искусством. Каждый образ начинается с линии и заканчивается историей.
          </p>
        </div>
      </div>

      {/* Skills/areas */}
      <div className="border-[3px] border-black p-8 bg-white mb-8">
        <h3 className="text-xl font-black mb-6 uppercase tracking-widest">Что я делаю</h3>
        <div className="grid sm:grid-cols-3 gap-0 border-[2px] border-black">
          {[
            { label: "Fashion illustration", icon: "Pencil", color: "#D32F2F" },
            { label: "Капсульный гардероб", icon: "Layers", color: "#1565C0" },
            { label: "Подбор образов", icon: "Sparkles", color: "#F9A825" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`p-6 ${i < 2 ? "border-b-[2px] sm:border-b-0 sm:border-r-[2px]" : ""} border-black`}
            >
              <div
                className="w-10 h-10 flex items-center justify-center border-[2px] border-black mb-3"
                style={{ backgroundColor: item.color }}
              >
                <Icon name={item.icon as "Pencil"} size={18} className="text-white" />
              </div>
              <p className="font-black text-sm uppercase tracking-wide">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div className="border-[3px] border-black p-8 bg-black text-white">
        <h3 className="text-xl font-black mb-6 uppercase tracking-widest">Связаться</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://t.me/fashenki"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-black px-6 py-4 font-black border-[2px] border-white hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all"
          >
            <Icon name="Send" size={18} />
            <div>
              <div className="text-xs font-bold opacity-60">Telegram-канал</div>
              <div>fashenki</div>
            </div>
          </a>
          <a
            href="https://t.me/yastrebovajulie"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-black px-6 py-4 font-black border-[2px] border-white hover:bg-[#1565C0] hover:text-white hover:border-[#1565C0] transition-all"
          >
            <Icon name="User" size={18} />
            <div>
              <div className="text-xs font-bold opacity-60">Личный аккаунт</div>
              <div>@yastrebovajulie</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
