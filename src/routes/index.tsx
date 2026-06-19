import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MapPin, Clock, Star, Wrench, Cog, Droplet, Disc, Zap, BatteryCharging,
  CircleDot, Settings2, CalendarCheck, AlertTriangle, Menu, X, MessageCircle,
  ShieldCheck, BadgeIndianRupee, Users, Timer, Award, Globe,
} from "lucide-react";
import heroImg from "@/assets/hero-workshop.jpg";
import engineImg from "@/assets/engine-repair.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import logoAsset from "@/assets/vairavan-logo.png.asset.json";
import { LangProvider, useLang, type Lang } from "@/lib/i18n";

const logo = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vairavan Motors — Expert Two-Wheeler Service & Repair in Chennai" },
      { name: "description", content: "Multi-brand bike workshop in Pallikaranai, Chennai. Genuine spares, expert technicians, transparent pricing. Rated 4.8★ by 66+ riders. Call 99628 42672." },
      { name: "keywords", content: "bike service near me, two wheeler repair shop in Pallikaranai, bike repair Chennai, motorcycle service center Chennai, Royal Enfield service Pallikaranai" },
      { property: "og:title", content: "Vairavan Motors — Multi Brand Bike Workshop, Chennai" },
      { property: "og:description", content: "Trusted two-wheeler service & repair in Pallikaranai. Book your bike service today." },
      { property: "og:image", content: logoAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "Vairavan Motors",
          alternateName: "வைரவன் மோட்டர்ஸ்",
          image: logoAsset.url,
          logo: logoAsset.url,
          telephone: "+91-99628-42672",
          url: "/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "29, Velachery Main Road, Pallikaranai, Narayanapuram",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600100",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 12.9437, longitude: 80.2098 },
          openingHours: "Mo-Su 09:00-22:00",
          priceRange: "₹₹",
          areaServed: ["Pallikaranai", "Velachery", "Medavakkam", "Chennai"],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "66" },
        }),
      },
    ],
  }),
  component: Page,
});

const PHONE_DISPLAY = "99628 42672";
const PHONE_TEL = "+919962842672";
const WHATSAPP = "919962842672";
const ADDRESS = "29, Velachery Main Road, Pallikaranai, Narayanapuram, Chennai, Tamil Nadu 600100";
const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJVairavanMotors";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Vairavan+Motors+Pallikaranai+Chennai";

const serviceIcons = [Wrench, Cog, Droplet, Disc, Zap, BatteryCharging, CircleDot, Settings2, CalendarCheck, AlertTriangle];
const whyIcons = [Users, ShieldCheck, BadgeIndianRupee, Timer, Award, MapPin];

function Page() {
  return (
    <LangProvider>
      <Home />
    </LangProvider>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

function LangSwitcher({ dark = true }: { dark?: boolean }) {
  const { lang, setLang } = useLang();
  const base = dark ? "border-white/20 text-white/80" : "border-border text-foreground";
  const activeCls = dark ? "bg-brand text-brand-foreground" : "bg-brand text-brand-foreground";
  return (
    <div className={`inline-flex items-center rounded-md border ${base} overflow-hidden text-xs font-semibold`}>
      <Globe className="h-3.5 w-3.5 mx-2 opacity-60" />
      {(["en", "ta"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1.5 uppercase tracking-wider transition ${lang === l ? activeCls : "hover:bg-white/5"}`}
          aria-pressed={lang === l}
        >
          {l === "en" ? "EN" : "த"}
        </button>
      ))}
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#why", label: t.nav.why },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16 lg:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Vairavan Motors logo" className="h-10 w-10 lg:h-12 lg:w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-xl lg:text-2xl text-white tracking-wide">VAIRAVAN <span className="text-brand">MOTORS</span></div>
            <div className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-white/60">{t.tagline}</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/80 hover:text-brand transition-colors uppercase tracking-wide">{l.label}</a>
          ))}
          <LangSwitcher />
          <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-brand text-brand-foreground font-semibold px-5 py-2.5 rounded-md shadow-elegant hover:opacity-90 transition">
            <CalendarCheck className="h-4 w-4" /> {t.nav.book}
          </a>
        </nav>
        <div className="lg:hidden flex items-center gap-2">
          <LangSwitcher />
          <button onClick={() => setOpen(!open)} className="text-white p-2" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-ink border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-white/90 uppercase text-sm tracking-wide border-b border-white/5">{l.label}</a>
            ))}
            <a href={`tel:${PHONE_TEL}`} className="mt-3 inline-flex items-center justify-center gap-2 bg-gradient-brand text-brand-foreground font-semibold px-5 py-3 rounded-md">
              <Phone className="h-4 w-4" /> {t.callBtn} {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Vairavan Motors bike service workshop" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full text-xs uppercase tracking-widest">
            <span className="h-2 w-2 bg-brand rounded-full animate-pulse" /> {t.hero.openBadge}
          </div>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
            {t.hero.title1} <span className="text-gradient-brand">{t.hero.title2}</span><br /> {t.hero.title3}
          </h1>
          <p className="mt-5 text-lg text-white/75 max-w-xl">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-brand text-brand-foreground font-bold uppercase tracking-wide px-7 py-4 rounded-md shadow-elegant hover:opacity-90 transition">
              <CalendarCheck className="h-5 w-5" /> {t.hero.book}
            </a>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold uppercase tracking-wide px-7 py-4 rounded-md transition">
              <Phone className="h-5 w-5" /> {t.hero.call}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2"><Star className="h-5 w-5 fill-brand-accent text-brand-accent" /><strong>4.8</strong><span className="text-white/60">· {t.hero.reviews}</span></div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-brand-accent" /><span className="text-white/80">{t.hero.genuine}</span></div>
            <div className="flex items-center gap-2"><Timer className="h-5 w-5 text-brand-accent" /><span className="text-white/80">{t.hero.sameDay}</span></div>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="absolute -inset-4 bg-gradient-brand opacity-30 blur-3xl rounded-full" />
          <img src={engineImg} alt="Mechanic working on motorcycle engine" className="relative rounded-2xl shadow-elegant border border-white/10" loading="eager" />
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <img src={gallery1} alt="Classic motorcycle being serviced" className="rounded-2xl shadow-card object-cover h-full max-h-[520px] w-full" loading="lazy" />
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-brand font-semibold">{t.about.eyebrow}</div>
          <h2 className="mt-3 text-4xl lg:text-5xl">{t.about.title}</h2>
          <p className="mt-5 text-muted-foreground text-lg">{t.about.body}</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat n="10+" l={t.about.years} />
            <Stat n="4.8★" l={t.about.rating} />
            <Stat n="5000+" l={t.about.bikes} />
          </div>
          <p className="mt-6 text-muted-foreground">{t.about.footer}</p>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="border-l-4 border-brand pl-4">
      <div className="font-display text-3xl lg:text-4xl">{n}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="py-20 lg:py-28 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-brand-accent font-semibold">{t.services.eyebrow}</div>
          <h2 className="mt-3 text-4xl lg:text-5xl">{t.services.title}</h2>
          <p className="mt-4 text-white/70 text-lg">{t.services.subtitle}</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {t.services.items.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <div key={s.title} className="group p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:border-brand hover:bg-white/[0.06] transition-all">
                <div className="h-12 w-12 rounded-lg bg-gradient-brand flex items-center justify-center text-brand-foreground shadow-elegant">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-display tracking-wide">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const { t } = useLang();
  return (
    <section id="why" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-brand font-semibold">{t.why.eyebrow}</div>
          <h2 className="mt-3 text-4xl lg:text-5xl">{t.why.title}</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.why.items.map((w, i) => {
            const Icon = whyIcons[i];
            return (
              <div key={w.title} className="p-7 rounded-xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-lg bg-accent text-brand flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-display">{w.title}</h3>
                <p className="mt-2 text-muted-foreground">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const { t } = useLang();
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="text-xs uppercase tracking-[0.25em] text-brand font-semibold">{t.reviews.eyebrow}</div>
            <h2 className="mt-3 text-4xl lg:text-5xl">{t.reviews.title}</h2>
            <div className="mt-6 flex items-center gap-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-7 w-7 fill-brand-accent text-brand-accent" />)}
            </div>
            <p className="mt-4 text-muted-foreground">{t.reviews.sub}</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {t.reviews.items.map((tt, i) => (
              <div key={tt.name} className="p-6 rounded-xl bg-card shadow-card border border-border">
                <div className="flex gap-1">
                  {[...Array(i === 3 ? 4 : 5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-brand-accent text-brand-accent" />)}
                </div>
                <p className="mt-3 text-foreground/85 leading-relaxed">"{tt.text}"</p>
                <div className="mt-4 font-semibold">{tt.name}</div>
              </div>
            ))}
          </div>
        </div>
        <ReviewCTA />
      </div>
    </section>
  );
}

function ReviewCTA() {
  const { t } = useLang();
  return (
    <a
      href={GOOGLE_REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-10 flex flex-col sm:flex-row items-center gap-6 p-7 rounded-2xl bg-gradient-to-r from-ink to-ink/90 text-white shadow-elegant hover:shadow-xl transition group"
    >
      <div className="h-16 w-16 shrink-0 rounded-full bg-white flex items-center justify-center">
        <GoogleGIcon className="h-9 w-9" />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <div className="font-display text-2xl">{t.reviews.ctaTitle}</div>
        <p className="text-white/75 mt-1">{t.reviews.ctaBody}</p>
      </div>
      <div className="inline-flex items-center gap-2 bg-gradient-brand text-brand-foreground font-bold uppercase tracking-wide px-6 py-3.5 rounded-md group-hover:opacity-90">
        <Star className="h-5 w-5" /> {t.reviews.ctaBtn}
      </div>
    </a>
  );
}

function GoogleGIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16.1 18.9 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.2-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C41.1 35.9 44 30.4 44 24c0-1.2-.1-2.3-.4-3.5z" />
    </svg>
  );
}

function Gallery() {
  const { t } = useLang();
  const imgs = [heroImg, engineImg, gallery1, gallery2, gallery3];
  return (
    <section id="gallery" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-brand font-semibold">{t.gallery.eyebrow}</div>
          <h2 className="mt-3 text-4xl lg:text-5xl">{t.gallery.title}</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <img src={imgs[0]} alt="Workshop interior" className="col-span-2 row-span-2 rounded-xl object-cover h-full w-full aspect-square lg:aspect-auto" loading="lazy" />
          <img src={imgs[1]} alt="Engine repair" className="rounded-xl object-cover aspect-square w-full" loading="lazy" />
          <img src={imgs[2]} alt="Classic motorcycle service" className="rounded-xl object-cover aspect-square w-full" loading="lazy" />
          <img src={imgs[3]} alt="Workshop tool wall" className="rounded-xl object-cover aspect-square w-full" loading="lazy" />
          <img src={imgs[4]} alt="Tyre replacement" className="rounded-xl object-cover aspect-square w-full" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const sanitize = (v: FormDataEntryValue | null, max = 200) => String(v ?? "").trim().slice(0, max);
    const name = sanitize(f.get("name"), 80);
    const phone = sanitize(f.get("phone"), 20);
    const bike = sanitize(f.get("bike"), 80);
    const service = sanitize(f.get("service"), 80);
    const date = sanitize(f.get("date"), 30);
    const notes = sanitize(f.get("notes"), 500);
    if (!name || !phone || !bike || !service) return;
    const message =
      `Hello Vairavan Motors, I would like to book a service.\n` +
      `Name: ${name}\n` +
      `Mobile: ${phone}\n` +
      `Bike Model: ${bike}\n` +
      `Service Required: ${service}\n` +
      `Preferred Date: ${date || "-"}` +
      (notes ? `\nNotes: ${notes}` : "");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    setSubmitted(true);
  };
  return (
    <section id="contact" className="py-20 lg:py-28 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-brand-accent font-semibold">{t.contact.eyebrow}</div>
          <h2 className="mt-3 text-4xl lg:text-5xl">{t.contact.title}</h2>
          <p className="mt-4 text-white/70">{t.contact.sub}</p>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <InfoCard icon={MapPin} title={t.contact.visit} body={ADDRESS} href={GOOGLE_MAPS_URL} />
            <InfoCard icon={Phone} title={t.contact.callUs} body={`+91 ${PHONE_DISPLAY}`} href={`tel:${PHONE_TEL}`} />
            <InfoCard icon={Clock} title={t.contact.hours} body={t.contact.hoursValue} />
            <div className="rounded-xl overflow-hidden border border-white/10 h-72">
              <iframe
                title="Vairavan Motors location"
                src="https://www.google.com/maps?q=29+Velachery+Main+Road+Pallikaranai+Chennai+600100&output=embed"
                className="w-full h-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <form onSubmit={onSubmit} className="p-6 lg:p-8 rounded-xl bg-white/[0.04] border border-white/10 space-y-4">
            <h3 className="text-2xl font-display">{t.contact.formTitle}</h3>
            <Field name="name" label={t.contact.name} required maxLength={80} />
            <Field name="phone" label={t.contact.phone} type="tel" required maxLength={20} pattern="[0-9+\\-\\s]{7,20}" />
            <Field name="bike" label={t.contact.bike} placeholder={t.contact.bikePh} required maxLength={80} />
            <div>
              <label className="block text-sm uppercase tracking-wide text-white/70 mb-1.5">{t.contact.service}</label>
              <select name="service" required className="w-full bg-ink border border-white/15 rounded-md px-4 py-3 text-white focus:border-brand outline-none">
                {t.services.items.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
            </div>
            <Field name="date" label={t.contact.date} type="date" />
            <div>
              <label className="block text-sm uppercase tracking-wide text-white/70 mb-1.5">{t.contact.notes}</label>
              <textarea name="notes" rows={3} maxLength={500} className="w-full bg-ink border border-white/15 rounded-md px-4 py-3 text-white focus:border-brand outline-none resize-none" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-brand text-brand-foreground font-bold uppercase tracking-wide px-7 py-4 rounded-md shadow-elegant hover:opacity-90 transition">
              <MessageCircle className="h-5 w-5" /> {t.contact.submit}
            </button>
            {submitted && (
              <div className="space-y-3 text-center">
                <p className="text-sm text-brand-accent">{t.contact.opening}</p>
                <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-brand-accent">
                  <Star className="h-4 w-4" /> {t.footer.review}
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, body, href }: { icon: any; title: string; body: string; href?: string }) {
  const C: any = href ? "a" : "div";
  const extra = href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <C href={href} {...extra} className="flex gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-brand transition-colors">
      <div className="h-12 w-12 shrink-0 rounded-lg bg-gradient-brand flex items-center justify-center"><Icon className="h-6 w-6 text-brand-foreground" /></div>
      <div>
        <div className="font-display text-xl">{title}</div>
        <div className="text-white/70 mt-1">{body}</div>
      </div>
    </C>
  );
}

function Field({ name, label, type = "text", required, placeholder, maxLength, pattern }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string; maxLength?: number; pattern?: string }) {
  return (
    <div>
      <label className="block text-sm uppercase tracking-wide text-white/70 mb-1.5">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} maxLength={maxLength} pattern={pattern} className="w-full bg-ink border border-white/15 rounded-md px-4 py-3 text-white focus:border-brand outline-none" />
    </div>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-black text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Vairavan Motors logo" className="h-10 w-10 object-contain" />
            <div className="font-display text-2xl text-white">VAIRAVAN <span className="text-brand">MOTORS</span></div>
          </div>
          <p className="mt-4 max-w-md">{t.footer.tagline}</p>
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2.5 rounded-md">
            <Star className="h-4 w-4 fill-brand-accent text-brand-accent" /> {t.footer.review}
          </a>
        </div>
        <div>
          <div className="text-white font-display text-lg mb-3">{t.footer.quick}</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-brand">{t.nav.about}</a></li>
            <li><a href="#services" className="hover:text-brand">{t.nav.services}</a></li>
            <li><a href="#reviews" className="hover:text-brand">{t.nav.reviews}</a></li>
            <li><a href="#contact" className="hover:text-brand">{t.nav.contact}</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-display text-lg mb-3">{t.footer.contactHead}</div>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand" /> {ADDRESS}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-brand" /> +91 {PHONE_DISPLAY}</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-brand" /> {t.contact.hoursValue}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Vairavan Motors · வைரவன் மோட்டர்ஸ் · {t.footer.rights}
      </div>
    </footer>
  );
}

function FloatingButtons() {
  const { t } = useLang();
  return (
    <>
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Vairavan Motors, I would like to enquire about a bike service.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-5 sm:bottom-6 sm:right-6 z-50 h-14 w-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-elegant hover:scale-110 transition"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-gradient-brand text-brand-foreground font-bold uppercase tracking-wide py-4 flex items-center justify-center gap-2 shadow-elegant"
      >
        <Phone className="h-5 w-5" /> {t.callBtn} {PHONE_DISPLAY}
      </a>
    </>
  );
}
