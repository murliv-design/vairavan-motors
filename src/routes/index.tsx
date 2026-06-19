import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MapPin, Clock, Star, Wrench, Cog, Droplet, Disc, Zap, BatteryCharging,
  CircleDot, Settings2, CalendarCheck, AlertTriangle, Menu, X, MessageCircle,
  ShieldCheck, BadgeIndianRupee, Users, Timer, Award,
} from "lucide-react";
import heroImg from "@/assets/hero-workshop.jpg";
import engineImg from "@/assets/engine-repair.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vairavan Motors — Expert Two-Wheeler Service & Repair in Chennai" },
      { name: "description", content: "Multi-brand bike workshop in Pallikaranai, Chennai. Genuine spares, expert technicians, transparent pricing. Rated 4.8★ by 66+ riders. Call 99628 42672." },
      { property: "og:title", content: "Vairavan Motors — Multi Brand Bike Workshop, Chennai" },
      { property: "og:description", content: "Trusted two-wheeler service & repair in Pallikaranai. Book your bike service today." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "Vairavan Motors",
          image: "https://vairavanmotors.in/logo.png",
          telephone: "+91-99628-42672",
          url: "https://vairavanmotors.in",
          address: {
            "@type": "PostalAddress",
            streetAddress: "29, Velachery Main Road, Pallikaranai, Narayanapuram",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600100",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 09:00-22:00",
          priceRange: "₹₹",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "66" },
        }),
      },
    ],
  }),
  component: Home,
});

const PHONE_DISPLAY = "99628 42672";
const PHONE_TEL = "+919962842672";
const WHATSAPP = "919962842672";
const ADDRESS = "29, Velachery Main Road, Pallikaranai, Narayanapuram, Chennai, Tamil Nadu 600100";

const services = [
  { icon: Wrench, title: "General Bike Service", desc: "Complete periodic service with multi-point inspection." },
  { icon: Cog, title: "Engine Repair", desc: "Overhauls, top-ends, rebuilds for all major brands." },
  { icon: Droplet, title: "Oil Change", desc: "Genuine grade engine oils with filter replacement." },
  { icon: Disc, title: "Brake Service", desc: "Pad replacement, disc truing & brake fluid bleed." },
  { icon: Zap, title: "Electrical Repairs", desc: "Wiring, ignition, lights & sensor diagnostics." },
  { icon: BatteryCharging, title: "Battery Replacement", desc: "Branded batteries with on-the-spot fitment." },
  { icon: CircleDot, title: "Tyre Replacement", desc: "Tubed & tubeless tyres for every model." },
  { icon: Settings2, title: "Suspension Repair", desc: "Fork oil, seals, rear shock service & tuning." },
  { icon: CalendarCheck, title: "Periodic Maintenance", desc: "Scheduled service plans to keep you riding." },
  { icon: AlertTriangle, title: "Emergency Repairs", desc: "Quick fixes when you need to get back on the road." },
];

const whyUs = [
  { icon: Users, title: "Experienced Technicians", desc: "Trained mechanics across all bike brands." },
  { icon: ShieldCheck, title: "Genuine Spare Parts", desc: "OEM-quality parts you can trust." },
  { icon: BadgeIndianRupee, title: "Transparent Pricing", desc: "Upfront estimates. No hidden charges." },
  { icon: Timer, title: "Quick Turnaround", desc: "Most services completed the same day." },
  { icon: Award, title: "Customer Satisfaction", desc: "4.8★ rating from 66+ happy riders." },
  { icon: MapPin, title: "Convenient Location", desc: "On Velachery Main Road, Pallikaranai." },
];

const testimonials = [
  { name: "Karthik R.", text: "Best workshop in Pallikaranai. Honest pricing and quick service for my Royal Enfield.", rating: 5 },
  { name: "Priya S.", text: "Got my Activa serviced here — staff are friendly and explained everything clearly.", rating: 5 },
  { name: "Mohan K.", text: "Genuine parts and reliable work. My go-to place for engine work on my Pulsar.", rating: 5 },
  { name: "Arun V.", text: "Quick brake job done within an hour. Very professional team.", rating: 4 },
];

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

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why Us" },
    { href: "#reviews", label: "Reviews" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16 lg:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Vairavan Motors logo" className="h-10 w-10 lg:h-12 lg:w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-xl lg:text-2xl text-white tracking-wide">VAIRAVAN <span className="text-brand">MOTORS</span></div>
            <div className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-white/60">Multi Brand Bike Workshop</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white/80 hover:text-brand transition-colors uppercase tracking-wide">{l.label}</a>
          ))}
          <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 bg-gradient-brand text-brand-foreground font-semibold px-5 py-2.5 rounded-md shadow-elegant hover:opacity-90 transition">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-ink border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-white/90 uppercase text-sm tracking-wide border-b border-white/5">{l.label}</a>
            ))}
            <a href={`tel:${PHONE_TEL}`} className="mt-3 inline-flex items-center justify-center gap-2 bg-gradient-brand text-brand-foreground font-semibold px-5 py-3 rounded-md">
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Vairavan Motors bike service workshop" width={1920} height={1080} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full text-xs uppercase tracking-widest">
            <span className="h-2 w-2 bg-brand rounded-full animate-pulse" /> Open Today · Closes 10 PM
          </div>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
            Expert <span className="text-gradient-brand">Two-Wheeler</span><br /> Service & Repair in Chennai
          </h1>
          <p className="mt-5 text-lg text-white/75 max-w-xl">
            Trusted by riders across Pallikaranai with quality service, genuine spare parts, and experienced technicians for every brand of bike.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-brand text-brand-foreground font-bold uppercase tracking-wide px-7 py-4 rounded-md shadow-elegant hover:opacity-90 transition">
              <CalendarCheck className="h-5 w-5" /> Book Service
            </a>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold uppercase tracking-wide px-7 py-4 rounded-md transition">
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2"><Star className="h-5 w-5 fill-brand-accent text-brand-accent" /><strong>4.8</strong><span className="text-white/60">· 66+ Reviews</span></div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-brand-accent" /><span className="text-white/80">Genuine Parts</span></div>
            <div className="flex items-center gap-2"><Timer className="h-5 w-5 text-brand-accent" /><span className="text-white/80">Same-Day Service</span></div>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="absolute -inset-4 bg-gradient-brand opacity-30 blur-3xl rounded-full" />
          <img src={engineImg} alt="Mechanic working on motorcycle engine" width={1024} height={1024} className="relative rounded-2xl shadow-elegant border border-white/10" loading="eager" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <img src={gallery1} alt="Classic motorcycle being serviced" width={1024} height={1024} className="rounded-2xl shadow-card object-cover h-full max-h-[520px] w-full" loading="lazy" />
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-brand font-semibold">About Vairavan Motors</div>
          <h2 className="mt-3 text-4xl lg:text-5xl">Built on trust, tuned for every rider.</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            வைரவன் மோட்டர்ஸ் is Pallikaranai's go-to multi-brand bike workshop. From everyday commuters to performance machines, our skilled mechanics service every two-wheeler with care, precision and genuine parts.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat n="10+" l="Years Experience" />
            <Stat n="4.8★" l="Google Rating" />
            <Stat n="5000+" l="Bikes Serviced" />
          </div>
          <p className="mt-6 text-muted-foreground">
            Every job is backed by transparent pricing, a friendly team, and a commitment to getting you back on the road — fast.
          </p>
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
  return (
    <section id="services" className="py-20 lg:py-28 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-brand-accent font-semibold">Our Services</div>
          <h2 className="mt-3 text-4xl lg:text-5xl">Everything your bike needs, under one roof.</h2>
          <p className="mt-4 text-white/70 text-lg">From routine maintenance to major repairs — we handle it all for every brand and model.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((s) => (
            <div key={s.title} className="group p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:border-brand hover:bg-white/[0.06] transition-all">
              <div className="h-12 w-12 rounded-lg bg-gradient-brand flex items-center justify-center text-brand-foreground shadow-elegant">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-display tracking-wide">{s.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-brand font-semibold">Why Choose Us</div>
          <h2 className="mt-3 text-4xl lg:text-5xl">Why riders keep coming back.</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((w) => (
            <div key={w.title} className="p-7 rounded-xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 rounded-lg bg-accent text-brand flex items-center justify-center">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-display">{w.title}</h3>
              <p className="mt-2 text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="text-xs uppercase tracking-[0.25em] text-brand font-semibold">Customer Reviews</div>
            <h2 className="mt-3 text-4xl lg:text-5xl">Rated 4.8★ by 66+ riders.</h2>
            <div className="mt-6 flex items-center gap-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-7 w-7 fill-brand-accent text-brand-accent" />)}
            </div>
            <p className="mt-4 text-muted-foreground">Real reviews from our customers on Google.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-xl bg-card shadow-card border border-border">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />)}
                </div>
                <p className="mt-3 text-foreground/85 leading-relaxed">"{t.text}"</p>
                <div className="mt-4 font-semibold">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    { src: heroImg, alt: "Workshop interior" },
    { src: engineImg, alt: "Engine repair" },
    { src: gallery1, alt: "Classic motorcycle service" },
    { src: gallery2, alt: "Workshop tool wall" },
    { src: gallery3, alt: "Tyre replacement" },
  ];
  return (
    <section id="gallery" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-brand font-semibold">Gallery</div>
          <h2 className="mt-3 text-4xl lg:text-5xl">Inside our workshop.</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <img src={imgs[0].src} alt={imgs[0].alt} className="col-span-2 row-span-2 rounded-xl object-cover h-full w-full aspect-square lg:aspect-auto" loading="lazy" />
          <img src={imgs[1].src} alt={imgs[1].alt} className="rounded-xl object-cover aspect-square w-full" loading="lazy" />
          <img src={imgs[2].src} alt={imgs[2].alt} className="rounded-xl object-cover aspect-square w-full" loading="lazy" />
          <img src={imgs[3].src} alt={imgs[3].alt} className="rounded-xl object-cover aspect-square w-full" loading="lazy" />
          <img src={imgs[4].src} alt={imgs[4].alt} className="rounded-xl object-cover aspect-square w-full" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = `*New Service Booking*%0A%0AName: ${f.get("name")}%0APhone: ${f.get("phone")}%0ABike: ${f.get("bike")}%0AService: ${f.get("service")}%0AMessage: ${f.get("message") || "-"}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    setSubmitted(true);
  };
  return (
    <section id="contact" className="py-20 lg:py-28 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-brand-accent font-semibold">Contact & Booking</div>
          <h2 className="mt-3 text-4xl lg:text-5xl">Book your bike service today.</h2>
          <p className="mt-4 text-white/70">Drop in, call us, or send your booking request — we'll confirm right away.</p>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <InfoCard icon={MapPin} title="Visit Us" body={ADDRESS} />
            <InfoCard icon={Phone} title="Call Us" body={`+91 ${PHONE_DISPLAY}`} href={`tel:${PHONE_TEL}`} />
            <InfoCard icon={Clock} title="Business Hours" body="Open Daily · 9:00 AM – 10:00 PM" />
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
            <h3 className="text-2xl font-display">Service Booking</h3>
            <Field name="name" label="Full Name" required />
            <Field name="phone" label="Phone Number" type="tel" required />
            <Field name="bike" label="Bike Model" placeholder="e.g. Royal Enfield Classic 350" required />
            <div>
              <label className="block text-sm uppercase tracking-wide text-white/70 mb-1.5">Service Required</label>
              <select name="service" required className="w-full bg-ink border border-white/15 rounded-md px-4 py-3 text-white focus:border-brand outline-none">
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm uppercase tracking-wide text-white/70 mb-1.5">Message (optional)</label>
              <textarea name="message" rows={3} className="w-full bg-ink border border-white/15 rounded-md px-4 py-3 text-white focus:border-brand outline-none resize-none" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-brand text-brand-foreground font-bold uppercase tracking-wide px-7 py-4 rounded-md shadow-elegant hover:opacity-90 transition">
              <MessageCircle className="h-5 w-5" /> Send via WhatsApp
            </button>
            {submitted && <p className="text-sm text-brand-accent text-center">Opening WhatsApp… we'll confirm shortly!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, body, href }: { icon: any; title: string; body: string; href?: string }) {
  const C: any = href ? "a" : "div";
  return (
    <C href={href} className="flex gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-brand transition-colors">
      <div className="h-12 w-12 shrink-0 rounded-lg bg-gradient-brand flex items-center justify-center"><Icon className="h-6 w-6 text-brand-foreground" /></div>
      <div>
        <div className="font-display text-xl">{title}</div>
        <div className="text-white/70 mt-1">{body}</div>
      </div>
    </C>
  );
}

function Field({ name, label, type = "text", required, placeholder }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm uppercase tracking-wide text-white/70 mb-1.5">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} className="w-full bg-ink border border-white/15 rounded-md px-4 py-3 text-white focus:border-brand outline-none" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 object-contain" />
            <div className="font-display text-2xl text-white">VAIRAVAN <span className="text-brand">MOTORS</span></div>
          </div>
          <p className="mt-4 max-w-md">Chennai's trusted multi-brand bike workshop. Quality service, genuine parts, friendly mechanics — every single time.</p>
        </div>
        <div>
          <div className="text-white font-display text-lg mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-brand">About</a></li>
            <li><a href="#services" className="hover:text-brand">Services</a></li>
            <li><a href="#reviews" className="hover:text-brand">Reviews</a></li>
            <li><a href="#contact" className="hover:text-brand">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-display text-lg mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand" /> {ADDRESS}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-brand" /> +91 {PHONE_DISPLAY}</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-brand" /> Daily 9 AM – 10 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Vairavan Motors · வைரவன் மோட்டர்ஸ் · All rights reserved.
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <>
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-20 right-5 sm:bottom-6 sm:right-6 z-50 h-14 w-14 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-elegant hover:scale-110 transition"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-gradient-brand text-brand-foreground font-bold uppercase tracking-wide py-4 flex items-center justify-center gap-2 shadow-elegant"
      >
        <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
      </a>
    </>
  );
}
