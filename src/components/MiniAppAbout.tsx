import Icon from "@/components/ui/icon"

export function MiniAppAbout() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 border-b border-white/10 pb-4">
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/30 mb-1">03</p>
        <h2 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: "Playfair Display, serif" }}>
          Yastrebova JY
        </h2>
      </div>

      {/* Bio */}
      <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-8">
        <p className="text-[11px] font-bold tracking-[0.4em] uppercase text-white/30 mb-3">Художник-иллюстратор</p>
        <p className="text-base leading-relaxed text-white/80 mb-4">
          Я создаю fashion-иллюстрации и помогаю формировать визуальный образ — через эскизы, капсульные подборки и авторский взгляд на стиль.
        </p>
        <p className="text-base leading-relaxed text-white/50">
          Моя работа — это точка, где одежда встречается с искусством. Каждый образ начинается с линии и заканчивается историей.
        </p>
      </div>

      {/* Что делаю */}
      <div className="grid sm:grid-cols-3 gap-3 mb-8">
        {[
          { label: "Fashion illustration", icon: "Pencil" },
          { label: "Капсульный гардероб", icon: "Layers" },
          { label: "Подбор образов", icon: "Sparkles" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col gap-3"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">
              <Icon name={item.icon as "Pencil"} size={16} className="text-white/70" />
            </div>
            <p className="font-semibold text-xs text-white/70 uppercase tracking-wide">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Contacts */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="https://t.me/fashenki"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-5 py-4 rounded-2xl transition-colors flex-1"
        >
          <Icon name="Send" size={16} className="text-white/60" />
          <div>
            <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">Telegram-канал</div>
            <div className="text-sm font-bold">fashenki</div>
          </div>
        </a>
        <a
          href="https://t.me/yastrebovajulie"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-5 py-4 rounded-2xl transition-colors flex-1"
        >
          <Icon name="MessageCircle" size={16} className="text-white/60" />
          <div>
            <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">Личный аккаунт</div>
            <div className="text-sm font-bold">@yastrebovajulie</div>
          </div>
        </a>
        <a
          href="https://instagram.com/yastrebovajulie"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-5 py-4 rounded-2xl transition-colors flex-1"
        >
          <Icon name="Instagram" size={16} className="text-white/60" />
          <div>
            <div className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">Instagram</div>
            <div className="text-sm font-bold">@yastrebovajulie</div>
          </div>
        </a>
      </div>
    </div>
  )
}
