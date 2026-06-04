import { createFileRoute } from "@tanstack/react-router";
import heroDoner from "@/assets/hero-doner.jpg";
import spit from "@/assets/spit.jpg";
import plate from "@/assets/plate.jpg";
import roll from "@/assets/roll.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Doner na Satpayeva — сочный донер в Алматы" },
      { name: "description", content: "Авторский донер на углях. Свежий лаваш, мраморное мясо, фирменные соусы. Улица Сатпаева, Алматы." },
      { property: "og:title", content: "Doner na Satpayeva" },
      { property: "og:description", content: "Авторский донер на углях в самом сердце Алматы." },
    ],
  }),
  component: Index,
});

const menu = [
  { name: "Классический донер", desc: "Курица, лаваш, овощи, фирменный соус", price: "1 990 ₸", img: heroDoner, tag: "Хит" },
  { name: "Донер на тарелке", desc: "Сочное мясо, рис, салат, три соуса", price: "2 490 ₸", img: plate, tag: "Сытно" },
  { name: "Донер-ролл XL", desc: "Двойная порция мяса в хрустящем лаваше", price: "2 290 ₸", img: roll, tag: "Новинка" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-display text-2xl tracking-widest">DONER<span className="text-primary">·</span>SATPAYEVA</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-muted-foreground">
            <a href="#menu" className="hover:text-primary transition">Меню</a>
            <a href="#about" className="hover:text-primary transition">О нас</a>
            <a href="#visit" className="hover:text-primary transition">Контакты</a>
          </nav>
          <a href="#visit" className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition">
            Заказать
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-background to-background" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/40 text-primary text-xs uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" /> Алматы · Сатпаева
            </div>
            <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.85]">
              Сочный<br />
              <span className="text-primary">донер</span><br />
              на углях
            </h1>
            <p className="mt-8 text-lg text-muted-foreground max-w-md">
              Маринуем мясо 24 часа, печём лаваш каждый час, миксуем соусы по своим рецептам. Один укус — и ты наш.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#menu" className="px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-widest text-sm hover:bg-primary/90 transition">
                Смотреть меню
              </a>
              <a href="#visit" className="px-8 py-4 border border-border text-foreground font-semibold uppercase tracking-widest text-sm hover:border-primary transition">
                Как добраться
              </a>
            </div>
            <div className="mt-12 flex gap-10 text-sm">
              <div>
                <div className="font-display text-3xl text-primary">4.9</div>
                <div className="text-muted-foreground uppercase tracking-wider text-xs">Рейтинг 2ГИС</div>
              </div>
              <div>
                <div className="font-display text-3xl text-primary">15 мин</div>
                <div className="text-muted-foreground uppercase tracking-wider text-xs">Среднее ожидание</div>
              </div>
              <div>
                <div className="font-display text-3xl text-primary">7</div>
                <div className="text-muted-foreground uppercase tracking-wider text-xs">Лет на районе</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 bg-primary/30 blur-3xl rounded-full" />
            <img src={heroDoner} alt="Сочный донер" width={1536} height={1536} className="relative rounded-sm shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-background border border-border px-5 py-4">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Сегодня</div>
              <div className="font-display text-2xl">Открыто до 02:00</div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-y border-border bg-card/40 py-6 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-[scroll_30s_linear_infinite] font-display text-3xl md:text-5xl text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              {["Свежий лаваш", "★", "На углях", "★", "Авторские соусы", "★", "Доставка 30 мин", "★", "Открыто до 02:00", "★"].map((t, j) => (
                <span key={j} className={j % 2 === 1 ? "text-primary" : ""}>{t}</span>
              ))}
            </div>
          ))}
        </div>
        <style>{`@keyframes scroll{to{transform:translateX(-50%)}}`}</style>
      </div>

      {/* MENU */}
      <section id="menu" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="text-primary uppercase tracking-widest text-sm mb-3">— Меню</div>
              <h2 className="font-display text-6xl md:text-8xl leading-none">То, ради чего<br/>возвращаются</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">Каждый донер собирается на ваших глазах. Никаких полуфабрикатов, только огонь, мясо и руки мастеров.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {menu.map((item) => (
              <article key={item.name} className="group relative bg-card border border-border overflow-hidden hover:border-primary transition-all duration-500">
                <div className="relative aspect-square overflow-hidden">
                  <img src={item.img} alt={item.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-widest font-semibold">{item.tag}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-display text-2xl">{item.name}</h3>
                    <span className="text-primary font-display text-xl whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={spit} alt="Донер на огне" loading="lazy" width={1024} height={1280} className="w-full" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-primary text-primary-foreground p-6 max-w-[220px]">
              <div className="font-display text-5xl leading-none">24ч</div>
              <div className="text-xs uppercase tracking-widest mt-2">маринуем мясо в авторской смеси специй</div>
            </div>
          </div>
          <div>
            <div className="text-primary uppercase tracking-widest text-sm mb-3">— О нас</div>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-8">Огонь.<br/>Мясо.<br/>Сатпаева.</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Мы открылись в 2018 году в маленьком павильоне на Сатпаева — и с тех пор не меняли ни рецептов, ни характера. Только мраморное мясо, только лаваш собственной выпечки, только соусы по семейным рецептам.
            </p>
            <ul className="space-y-4 mt-10">
              {[
                ["01", "Маринад 24 часа", "Восточные специи, гранат, лук"],
                ["02", "Печь на углях", "Дубовые угли, никакого газа"],
                ["03", "Соусы каждый день", "Чесночный, острый, томатный"],
              ].map(([n, t, d]) => (
                <li key={n} className="flex gap-6 border-t border-border pt-4">
                  <span className="font-display text-2xl text-primary">{n}</span>
                  <div>
                    <div className="font-display text-2xl">{t}</div>
                    <div className="text-muted-foreground text-sm">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-primary uppercase tracking-widest text-sm mb-3">— Контакты</div>
            <h2 className="font-display text-6xl md:text-8xl leading-none mb-12">Заходи<br/>на огонёк</h2>

            <div className="space-y-8">
              <div>
                <div className="text-muted-foreground uppercase tracking-widest text-xs mb-2">Адрес</div>
                <div className="font-display text-3xl">ул. Сатпаева, Алматы</div>
              </div>
              <div>
                <div className="text-muted-foreground uppercase tracking-widest text-xs mb-2">Часы работы</div>
                <div className="font-display text-3xl">Каждый день · 10:00 — 02:00</div>
              </div>
              <div>
                <div className="text-muted-foreground uppercase tracking-widest text-xs mb-2">Телефон</div>
                <a href="tel:+77000000000" className="font-display text-3xl text-primary hover:underline">+7 700 000 00 00</a>
              </div>
            </div>

            <a href="https://go.2gis.com/ZMJtw" target="_blank" rel="noreferrer" className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-widest text-sm hover:bg-primary/90 transition">
              Открыть в 2ГИС →
            </a>
          </div>
          <div className="relative aspect-[4/5] md:aspect-auto">
            <img src={roll} alt="Донер-ролл" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="font-display text-xl tracking-widest text-foreground">DONER<span className="text-primary">·</span>SATPAYEVA</div>
          <div>© {new Date().getFullYear()} · Сделано с огнём в Алматы</div>
        </div>
      </footer>
    </div>
  );
}
