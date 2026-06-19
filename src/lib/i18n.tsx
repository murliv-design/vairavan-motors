import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ta";

export const translations = {
  en: {
    nav: { about: "About", services: "Services", why: "Why Us", reviews: "Reviews", gallery: "Gallery", contact: "Contact", book: "Book Service" },
    tagline: "Multi Brand Bike Workshop",
    hero: {
      openBadge: "Open Today · Closes 10 PM",
      title1: "Expert", title2: "Two-Wheeler", title3: "Service & Repair in Chennai",
      subtitle: "Trusted by riders across Pallikaranai with quality service, genuine spare parts, and experienced technicians for every brand of bike.",
      book: "Book Service", call: "Call Now",
      reviews: "66+ Reviews", genuine: "Genuine Parts", sameDay: "Same-Day Service",
    },
    about: {
      eyebrow: "About Vairavan Motors",
      title: "Built on trust, tuned for every rider.",
      body: "Vairavan Motors is Pallikaranai's go-to multi-brand bike workshop. From everyday commuters to performance machines, our skilled mechanics service every two-wheeler with care, precision and genuine parts.",
      footer: "Every job is backed by transparent pricing, a friendly team, and a commitment to getting you back on the road — fast.",
      years: "Years Experience", rating: "Google Rating", bikes: "Bikes Serviced",
    },
    services: {
      eyebrow: "Our Services",
      title: "Everything your bike needs, under one roof.",
      subtitle: "From routine maintenance to major repairs — we handle it all for every brand and model.",
      items: [
        { title: "General Bike Service", desc: "Complete periodic service with multi-point inspection." },
        { title: "Engine Repair", desc: "Overhauls, top-ends, rebuilds for all major brands." },
        { title: "Oil Change", desc: "Genuine grade engine oils with filter replacement." },
        { title: "Brake Service", desc: "Pad replacement, disc truing & brake fluid bleed." },
        { title: "Electrical Repairs", desc: "Wiring, ignition, lights & sensor diagnostics." },
        { title: "Battery Replacement", desc: "Branded batteries with on-the-spot fitment." },
        { title: "Tyre Replacement", desc: "Tubed & tubeless tyres for every model." },
        { title: "Suspension Repair", desc: "Fork oil, seals, rear shock service & tuning." },
        { title: "Periodic Maintenance", desc: "Scheduled service plans to keep you riding." },
        { title: "Emergency Repairs", desc: "Quick fixes when you need to get back on the road." },
      ],
    },
    why: {
      eyebrow: "Why Choose Us",
      title: "Why riders keep coming back.",
      items: [
        { title: "Experienced Technicians", desc: "Trained mechanics across all bike brands." },
        { title: "Genuine Spare Parts", desc: "OEM-quality parts you can trust." },
        { title: "Transparent Pricing", desc: "Upfront estimates. No hidden charges." },
        { title: "Quick Turnaround", desc: "Most services completed the same day." },
        { title: "Customer Satisfaction", desc: "4.8★ rating from 66+ happy riders." },
        { title: "Convenient Location", desc: "On Velachery Main Road, Pallikaranai." },
      ],
    },
    reviews: {
      eyebrow: "Customer Reviews",
      title: "Rated 4.8★ by 66+ riders.",
      sub: "Real reviews from our customers on Google.",
      ctaTitle: "Loved Our Service?",
      ctaBody: "Leave us a Google review and help other riders find us.",
      ctaBtn: "Leave a Google Review",
      items: [
        { name: "Karthik R.", text: "Best workshop in Pallikaranai. Honest pricing and quick service for my Royal Enfield." },
        { name: "Priya S.", text: "Got my Activa serviced here — staff are friendly and explained everything clearly." },
        { name: "Mohan K.", text: "Genuine parts and reliable work. My go-to place for engine work on my Pulsar." },
        { name: "Arun V.", text: "Quick brake job done within an hour. Very professional team." },
      ],
    },
    gallery: { eyebrow: "Gallery", title: "Inside our workshop." },
    contact: {
      eyebrow: "Contact & Booking",
      title: "Book your bike service today.",
      sub: "Drop in, call us, or send your booking request — we'll confirm right away.",
      visit: "Visit Us", callUs: "Call Us", hours: "Business Hours", hoursValue: "Open Daily · 9:00 AM – 10:00 PM",
      formTitle: "Service Booking",
      name: "Full Name", phone: "Phone Number", bike: "Bike Model", bikePh: "e.g. Royal Enfield Classic 350",
      service: "Service Required", date: "Preferred Date", notes: "Additional Notes (optional)",
      submit: "Book via WhatsApp", opening: "Opening WhatsApp… we'll confirm shortly!",
    },
    footer: {
      tagline: "Chennai's trusted multi-brand bike workshop. Quality service, genuine parts, friendly mechanics — every single time.",
      quick: "Quick Links", contactHead: "Contact", review: "Review Us on Google",
      rights: "All rights reserved.",
    },
    callBtn: "Call",
  },
  ta: {
    nav: { about: "எங்களைப் பற்றி", services: "சேவைகள்", why: "ஏன் நாங்கள்", reviews: "மதிப்புரைகள்", gallery: "படத்தொகுப்பு", contact: "தொடர்பு", book: "சேவை பதிவு" },
    tagline: "மல்டி பிராண்ட் பைக் பட்டறை",
    hero: {
      openBadge: "இன்று திறந்துள்ளது · இரவு 10 மணி வரை",
      title1: "நிபுணத்துவ", title2: "இருசக்கர வாகன", title3: "சேவை மற்றும் பழுது சென்னை",
      subtitle: "பள்ளிக்கரணை சவாரியாளர்களின் நம்பிக்கையுடன் — தரமான சேவை, ஒரிஜினல் பாகங்கள் மற்றும் அனுபவமிக்க தொழில்நுட்ப வல்லுநர்கள்.",
      book: "சேவை பதிவு", call: "இப்போது அழைக்கவும்",
      reviews: "66+ மதிப்புரைகள்", genuine: "ஒரிஜினல் பாகங்கள்", sameDay: "அதே நாள் சேவை",
    },
    about: {
      eyebrow: "வைரவன் மோட்டர்ஸ் பற்றி",
      title: "நம்பிக்கையின் அடித்தளம், ஒவ்வொரு சவாரியாளருக்கும் சரியான ட்யூனிங்.",
      body: "வைரவன் மோட்டர்ஸ் என்பது பள்ளிக்கரணையின் முன்னணி மல்டி-பிராண்ட் பைக் பட்டறை. தினசரி பயன்படுத்தும் வாகனங்கள் முதல் உயர் செயல்திறன் இயந்திரங்கள் வரை — ஒவ்வொரு இருசக்கர வாகனத்திற்கும் கவனமாக, துல்லியமாக சேவை செய்கிறோம்.",
      footer: "ஒவ்வொரு வேலையும் வெளிப்படையான விலை, நட்பு குழு மற்றும் உங்களை விரைவாக சாலையில் திருப்பி அனுப்பும் உறுதிமொழியுடன்.",
      years: "வருட அனுபவம்", rating: "Google மதிப்பீடு", bikes: "சேவை செய்த பைக்குகள்",
    },
    services: {
      eyebrow: "எங்கள் சேவைகள்",
      title: "உங்கள் பைக்குக்கு தேவையான அனைத்தும், ஒரே இடத்தில்.",
      subtitle: "சாதாரண பராமரிப்பு முதல் பெரிய பழுது வரை — ஒவ்வொரு பிராண்டிற்கும் மாடலுக்கும்.",
      items: [
        { title: "பொது பைக் சேவை", desc: "முழுமையான கால அளவிலான சேவை மற்றும் முழு பரிசோதனை." },
        { title: "என்ஜின் பழுது", desc: "ஓவர்ஹால், டாப்-எண்ட், ரீபில்ட் — அனைத்து பிராண்டுகளுக்கும்." },
        { title: "ஆயில் மாற்றம்", desc: "ஒரிஜினல் கிரேட் இன்ஜின் ஆயில் மற்றும் பில்டர் மாற்றம்." },
        { title: "பிரேக் சேவை", desc: "பேட் மாற்றம், டிஸ்க் சீரமைப்பு மற்றும் பிரேக் ஃப்ளூயிட்." },
        { title: "மின்சார பழுது", desc: "வயரிங், இக்னிஷன், லைட் & சென்சார் பரிசோதனை." },
        { title: "பேட்டரி மாற்றம்", desc: "பிராண்டட் பேட்டரிகள் — உடனடி பொருத்துதலுடன்." },
        { title: "டயர் மாற்றம்", desc: "ட்யூப்டு & ட்யூப்லெஸ் டயர்கள் — ஒவ்வொரு மாடலுக்கும்." },
        { title: "சஸ்பென்ஷன் பழுது", desc: "ஃபோர்க் ஆயில், சீல்ஸ், ரியர் ஷாக் சேவை." },
        { title: "காலமுறை பராமரிப்பு", desc: "திட்டமிட்ட சேவை திட்டங்கள் — தொடர்ந்து சவாரிக்க." },
        { title: "அவசர பழுது", desc: "சாலையில் திரும்பி வர விரைவான தீர்வுகள்." },
      ],
    },
    why: {
      eyebrow: "ஏன் எங்களை தேர்வு செய்ய வேண்டும்",
      title: "ஏன் சவாரியாளர்கள் மீண்டும் வருகிறார்கள்.",
      items: [
        { title: "அனுபவமிக்க தொழில்நுட்ப வல்லுநர்கள்", desc: "அனைத்து பிராண்டுகளிலும் பயிற்றுவிக்கப்பட்ட மெக்கானிக்குகள்." },
        { title: "ஒரிஜினல் ஸ்பேர் பார்ட்ஸ்", desc: "OEM தரம் கொண்ட நம்பகமான பாகங்கள்." },
        { title: "வெளிப்படையான விலை", desc: "முன்கூட்டிய மதிப்பீடு. மறைக்கப்பட்ட கட்டணம் இல்லை." },
        { title: "விரைவான முடிப்பு", desc: "பெரும்பாலான சேவைகள் அதே நாளில் முடிக்கப்படும்." },
        { title: "வாடிக்கையாளர் திருப்தி", desc: "66+ மகிழ்ச்சியான சவாரியாளர்களின் 4.8★ மதிப்பீடு." },
        { title: "வசதியான இடம்", desc: "வேளச்சேரி மெயின் ரோடு, பள்ளிக்கரணை." },
      ],
    },
    reviews: {
      eyebrow: "வாடிக்கையாளர் மதிப்புரைகள்",
      title: "66+ சவாரியாளர்களின் 4.8★ மதிப்பீடு.",
      sub: "Google இல் எங்கள் வாடிக்கையாளர்களின் உண்மையான மதிப்புரைகள்.",
      ctaTitle: "எங்கள் சேவை பிடித்ததா?",
      ctaBody: "Google இல் ஒரு மதிப்புரை எழுதி மற்ற சவாரியாளர்களுக்கு உதவுங்கள்.",
      ctaBtn: "Google மதிப்புரை எழுதவும்",
      items: [
        { name: "கார்த்திக் R.", text: "பள்ளிக்கரணையில் சிறந்த பட்டறை. நேர்மையான விலை, விரைவான சேவை — என் ராயல் என்ஃபீல்டுக்கு." },
        { name: "ப்ரியா S.", text: "என் ஆக்டிவாவை இங்கே சேவை செய்தேன் — பணியாளர்கள் நட்பாக எல்லாம் தெளிவாக விளக்கினார்கள்." },
        { name: "மோகன் K.", text: "ஒரிஜினல் பாகங்கள் மற்றும் நம்பகமான வேலை. என் பல்சருக்கு என் முதல் தேர்வு." },
        { name: "அருண் V.", text: "ஒரு மணி நேரத்தில் பிரேக் வேலை முடிந்தது. மிகவும் தொழில்முறை குழு." },
      ],
    },
    gallery: { eyebrow: "படத்தொகுப்பு", title: "எங்கள் பட்டறையில்." },
    contact: {
      eyebrow: "தொடர்பு மற்றும் பதிவு",
      title: "இன்றே உங்கள் பைக் சேவையை பதிவு செய்யுங்கள்.",
      sub: "நேரில் வாருங்கள், அழைக்கவும், அல்லது உங்கள் பதிவு கோரிக்கையை அனுப்புங்கள்.",
      visit: "எங்களை சந்திக்கவும்", callUs: "எங்களை அழைக்கவும்", hours: "வேலை நேரம்", hoursValue: "தினமும் திறந்துள்ளது · காலை 9:00 – இரவு 10:00",
      formTitle: "சேவை பதிவு",
      name: "முழு பெயர்", phone: "தொலைபேசி எண்", bike: "பைக் மாடல்", bikePh: "உதா. ராயல் என்ஃபீல்ட் கிளாசிக் 350",
      service: "தேவையான சேவை", date: "விருப்பமான தேதி", notes: "கூடுதல் குறிப்புகள் (விருப்பம்)",
      submit: "WhatsApp மூலம் பதிவு செய்க", opening: "WhatsApp திறக்கிறது… விரைவில் உறுதிசெய்கிறோம்!",
    },
    footer: {
      tagline: "சென்னையின் நம்பிக்கையான மல்டி-பிராண்ட் பைக் பட்டறை. தரமான சேவை, ஒரிஜினல் பாகங்கள், நட்பு மெக்கானிக்குகள் — ஒவ்வொரு முறையும்.",
      quick: "விரைவு இணைப்புகள்", contactHead: "தொடர்பு", review: "Google இல் மதிப்புரை எழுதவும்",
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
    callBtn: "அழை",
  },
};

type Dict = typeof translations.en;
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("vm_lang") as Lang | null)) || null;
    if (saved === "en" || saved === "ta") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("vm_lang", l);
  };
  const t: Dict = translations[lang] as Dict;
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
