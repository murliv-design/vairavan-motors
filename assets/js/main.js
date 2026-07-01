/* Vairavan Motors — Static JavaScript */

const PHONE_DISPLAY = "99628 42672";
const PHONE_TEL = "+919962842672";
const WHATSAPP = "919962842672";
const GOOGLE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJVairavanMotors";

const translations = {
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

let currentLang = "en";

function getNested(obj, path) {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getNested(t, key);
    if (value !== undefined && typeof value === "string") {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = getNested(t, key);
    if (value !== undefined) el.placeholder = value;
  });

  document.querySelectorAll(".lang-switcher button").forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang");
    btn.classList.toggle("is-active", btnLang === lang);
    btn.setAttribute("aria-pressed", btnLang === lang ? "true" : "false");
  });

  const serviceSelect = document.getElementById("service-select");
  if (serviceSelect) {
    const current = serviceSelect.value;
    serviceSelect.innerHTML = t.services.items
      .map((s) => `<option value="${s.title}">${s.title}</option>`)
      .join("");
    if (current) serviceSelect.value = current;
  }

  const servicesGrid = document.getElementById("services-grid");
  if (servicesGrid) {
    const icons = servicesGrid.querySelectorAll(".service-card");
    icons.forEach((card, i) => {
      const item = t.services.items[i];
      if (!item) return;
      const title = card.querySelector(".service-card__title");
      const desc = card.querySelector(".service-card__desc");
      if (title) title.textContent = item.title;
      if (desc) desc.textContent = item.desc;
    });
  }

  const whyGrid = document.getElementById("why-grid");
  if (whyGrid) {
    whyGrid.querySelectorAll(".why-card").forEach((card, i) => {
      const item = t.why.items[i];
      if (!item) return;
      const title = card.querySelector(".why-card__title");
      const desc = card.querySelector(".why-card__desc");
      if (title) title.textContent = item.title;
      if (desc) desc.textContent = item.desc;
    });
  }

  const reviewsCards = document.getElementById("reviews-cards");
  if (reviewsCards) {
    reviewsCards.querySelectorAll(".review-card").forEach((card, i) => {
      const item = t.reviews.items[i];
      if (!item) return;
      const text = card.querySelector(".review-card__text");
      const name = card.querySelector(".review-card__name");
      if (text) text.textContent = `"${item.text}"`;
      if (name) name.textContent = item.name;
    });
  }

  document.documentElement.lang = lang === "ta" ? "ta" : "en";
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("vm_lang", lang);
  applyTranslations(lang);
}

function initLang() {
  const saved = localStorage.getItem("vm_lang");
  if (saved === "en" || saved === "ta") currentLang = saved;
  applyTranslations(currentLang);
}

function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initLangSwitcher() {
  document.querySelectorAll(".lang-switcher button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang === "en" || lang === "ta") setLang(lang);
    });
  });
}

function sanitize(value, max = 200) {
  return String(value ?? "").trim().slice(0, max);
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = sanitize(data.get("name"), 80);
    const phone = sanitize(data.get("phone"), 20);
    const bike = sanitize(data.get("bike"), 80);
    const service = sanitize(data.get("service"), 80);
    const date = sanitize(data.get("date"), 30);
    const notes = sanitize(data.get("notes"), 500);

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
    const success = document.getElementById("form-success");
    if (success) success.classList.remove("hidden");
  });
}

function initCopyright() {
  const yearEl = document.getElementById("copyright-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function initActiveNav() {
  const page = document.body.getAttribute("data-page");
  if (!page) return;
  document.querySelectorAll(`[data-nav="${page}"]`).forEach((el) => {
    el.classList.add("is-active");
  });
}

const SERVICE_ICON_SVGS = [
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M12 11v4"/><path d="M8 11v4"/><path d="M16 11v4"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
];

const WHY_ICON_SVGS = [
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8 8"/><path d="M6 13h6"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
];

const INFO_ICON_SVGS = [
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
];

const GOOGLE_G_SVG = `<svg viewBox="0 0 48 48" class="icon" style="width:2.25rem;height:2.25rem" aria-hidden="true">
  <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"/>
  <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16.1 18.9 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"/>
  <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.2-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
  <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2C41.1 35.9 44 30.4 44 24c0-1.2-.1-2.3-.4-3.5z"/>
</svg>`;

function injectIcons() {
  document.querySelectorAll("#services-grid .service-card__icon").forEach((el, i) => {
    if (SERVICE_ICON_SVGS[i]) el.innerHTML = SERVICE_ICON_SVGS[i];
  });
  document.querySelectorAll("#why-grid .why-card__icon").forEach((el, i) => {
    if (WHY_ICON_SVGS[i]) el.innerHTML = WHY_ICON_SVGS[i];
  });
  document.querySelectorAll(".info-card__icon").forEach((el, i) => {
    if (INFO_ICON_SVGS[i]) el.innerHTML = INFO_ICON_SVGS[i];
  });
  document.querySelectorAll(".review-cta__icon").forEach((el) => {
    el.innerHTML = GOOGLE_G_SVG;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initMobileMenu();
  initLangSwitcher();
  initContactForm();
  initCopyright();
  initActiveNav();
  injectIcons();
});
