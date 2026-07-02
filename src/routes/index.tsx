import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight, Phone, Siren, ShieldCheck, Sparkles, HeartPulse, Brain, Bone, Baby, Stethoscope,
  Activity, Eye, Ear, Scissors, Flower2, Droplets, Waves, Dumbbell, Ribbon, Building2,
  Clock, Star, MapPin, ArrowRight, Quote, CheckCircle2, Plus, PersonStanding, Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { DepartmentIcon } from "@/components/DepartmentIcon";
import { SITE, DEPARTMENTS, STATS } from "@/lib/site";
import medstarLogo from "@/assets/medstar-logo.png";
import icuImg from "@/assets/icu-facility.jpg";
import doctorImg from "@/assets/reception.jpg";
import founderImg from "@/assets/WhatsApp Image 2025-01-06 at 20.30.09_0aea704c.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Medstar Multispeciality Hospital & ICU — Modern Care in Mulund West" },
      { name: "description", content: "35-bed multispeciality hospital & ICU in Mulund West, Mumbai. Advanced OT, pathology, sonography, in-house pharmacy and 24×7 specialist care." },
      { property: "og:title", content: "Medstar Multispeciality Hospital & ICU" },
      { property: "og:description", content: "Compassionate care. Advanced medicine. Mulund West, Mumbai." },
    ],
  }),
  component: Home,
});

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Bone, Ribbon, HeartPulse, Brain, Activity, Ear, Eye, Scissors, Sparkles, Baby,
  Flower2, Droplets, Waves, Siren, Dumbbell, Stethoscope, PersonStanding, Zap,
};

const REASONS = [
  { icon: HeartPulse, tag: "Human", title: "Care that listens", body: "Doctors who explain, staff who remember your name, and time given without a rush." },
  { icon: ShieldCheck, tag: "Trust", title: "Simple & clear", body: "Empanelled with major insurers with transparent, upfront estimates for every plan." },
  { icon: Siren, tag: "Ready", title: "24×7 ICU & emergency", body: "Trained intensivists, monitored beds and ambulance-to-bed response, always on." },
  { icon: Droplets, tag: "Modern", title: "In-house diagnostics", body: "Pathology, sonography and imaging on-site — faster answers, fewer trips." },
];

const FACILITIES = [
  { icon: Building2, label: "35 In-patient Beds" },
  { icon: Siren, label: "Multi-parameter ICU" },
  { icon: Scissors, label: "Modular OT" },
  { icon: Stethoscope, label: "In-house Pathology" },
  { icon: Waves, label: "Sonography & X-ray" },
  { icon: Stethoscope, label: "24×7 Pharmacy" },
];

const DOCTORS = [
  { name: "Dr. Shailendra Nanaware", spec: "Founder & Ophthalmologist", tag: "Eye Care", exp: "20+ yrs", initial: "SN", isFounder: true },
  { name: "Dr. Prafulla Herode", spec: "Orthopaedic Surgeon", tag: "Bone & Joint", exp: "22 yrs", initial: "PH", isFounder: false },
  { name: "Dr. Anagha Adulkar", spec: "Gynaecologist & Obstetrician", tag: "Women's Health", exp: "16 yrs", initial: "AA", isFounder: false },
  { name: "Dr. Ankit Mehta", spec: "Consultant Cardiologist", tag: "Heart Care", exp: "18 yrs", initial: "AM", isFounder: false },
];

const TESTIMONIALS = [
  { name: "Aparna Jhangiani",  body: "My mother-in-law was admitted to Medstar Hospital for 14 days. The services at this hospital are good, and the nurses and doctors are excellent. Dr. Shailendra is a polite man; the way he talks and communicates with patients' relatives is very good, making them feel comfortable. The doctor and RMO are good and explain the situation very well. Overall, it's been a good experience with the operations." },
  { name: "yogita panchal",  body: "Had a very positive experience . The staff was polite, supportive, and well-organized, and the facilities were clean and comfortable. Special thanks to Dr. Shailendra for the excellent care and guidance. He was patient, professional, and explained everything clearly, which made us feel confident and reassured. Truly grateful for the dedication and compassionate service." },
  { name: "Ganesh Ram",  body:  "It is really one of the best and underrated hospital in Mulund and nearby area. Because of its lack of advertisement it falls back but on a scale of 1 to 10 it surpasses major hospitals in Mulund like Fortis. Treatment wise the doctors Dr. Shridar Radhakrishnan and Dr Shailendra Nanaware both were very patient in explaining the details and took utmost care when my father got admitted. Would rate it 8/10 and it would be really great if people start preferring this one when in need." },
  { name: "Chandan Kumar",  body: "I had a wonderful experience at Medstar Multispeciality Hospital. The staff was extremely professional and compassionate, always ready to assist with a smile. The facilities are top-notch, and the hospital maintains excellent hygiene standards. The doctors and nurses went above and beyond to provide me with the best possible care. I’m so grateful for their dedication and expertise." },
  { name: "shivam Pal",  body: "Medstar Multispecialty Hospital has modern and clean facilities, ensuring a comfortable and safe environment for patients and visitors. The waiting areas are spacious and well-organized, patient rooms are clean and well-equipped" },
  { name: "shiva singh",  body: "I had an excellent experience at MEDSTAR MULTISPECIALITY HOSPITAL AND ICU. The facilities were top-notch, clean, and well-maintained. The staff was professional, courteous, and always available to assist with any concerns. The rooms were spacious, with modern equipment and comfortable seating for visitors. What stood out most was the attention to detail everything from the seamless check-in process to the quality of the meals exceeded expectations. The medical team was highly skilled and attentive, making me feel confident and cared for throughout my stay. I highly recommend this hospital for anyone seeking quality healthcare!" },
  { name: "Jitesh katewa",  body: "The facilities here are top-notch. The rooms are clean, well-maintained, and equipped with modern amenities. The staff is very professional and caring. Highly recommend this hospital for anyone seeking quality healthcare." },
  { name: "Lloyd Rego",  body: "New Hospital with excellent service. Rare to find a doctor like Dr. Shailendra Nanaware who is a practical doctor, always keeping the patient's interest in mind. Rates charged are also fair. Truly satisfied with the staff and overall experience. I would go a step further to say, with such a team in place Medstar Hospital may perhaps be a much better place to have your loved ones cured, than take them to some of the large corporate hospitals in our vicinity." },
];

const INSURERS = [
  "Mediassist",
  "Tata AIG",
  "ACKO",
  "Bajaj Allianz",
  "Health Insurance",
  "Care Health",
  "Heritage",
  "MJPJAY & AB-PMJAY",
];

function EKG() {
  return (
    <svg viewBox="0 0 600 80" className="w-full h-12" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="ekg" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.22 0.06 255)" />
          <stop offset="50%" stopColor="oklch(0.58 0.12 200)" />
          <stop offset="100%" stopColor="oklch(0.6 0.22 25)" />
        </linearGradient>
      </defs>
      <path
        d="M0 40 L120 40 L140 40 L150 20 L160 60 L170 10 L180 70 L200 40 L320 40 L340 25 L355 55 L370 15 L385 65 L400 40 L600 40"
        fill="none" stroke="url(#ekg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ strokeDasharray: 1400, strokeDashoffset: 1400, animation: "shimmer 2.4s linear infinite, fade-in 0.4s ease" }}
      />
    </svg>
  );
}

function Home() {
  const [activeDept, setActiveDept] = useState(DEPARTMENTS[0].slug);
  const dept = DEPARTMENTS.find((d) => d.slug === activeDept) ?? DEPARTMENTS[0];
  const featured = DEPARTMENTS.filter((d) =>
    ["cardiology", "orthopaedics", "neurology", "gynecology", "pediatrics", "general-surgery"].includes(d.slug)
  );

  return (
    <div className="overflow-hidden">
      {/* ============ HERO ============ */}
      <section className="relative bg-hero">
        <div className="absolute inset-0 grid-lines opacity-70 pointer-events-none" />
        <div className="absolute -top-20 -right-20 size-[520px] rounded-full bg-teal/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-20 size-[520px] rounded-full bg-purple/10 blur-3xl pointer-events-none" />

        <div className="container-px mx-auto max-w-7xl relative pt-10 pb-24 md:pt-20 md:pb-32">
          {/* Eyebrow row */}
          <Reveal className="flex flex-wrap items-center gap-3 mb-10">
            <span className="eyebrow">
              <span className="size-2 rounded-full bg-green animate-pulse-soft" />
              {SITE.tagline}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <MapPin className="size-3.5" /> {SITE.shortAddress || "Mulund West, Mumbai"}
            </span>
          </Reveal>

          {/* Large Medstar Logo spanning one end to another */}
          <Reveal className="w-full mb-14">
            <img
              src={medstarLogo}
              alt="Medstar Multispeciality Hospital & ICU Logo"
              className="w-full h-auto max-h-[160px] md:max-h-[220px] object-contain hover:scale-[1.01] transition-transform duration-300"
            />
          </Reveal>

          {/* Editorial headline */}
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <Reveal>
                <h1 className="font-display text-[44px] sm:text-6xl lg:text-[92px] leading-[0.95] tracking-[-0.04em] text-navy">
                  Compassionate care.
                  <br />
                  <span className="italic font-normal text-teal">Modern</span>{" "}
                  <span className="gradient-text">medicine.</span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-8 max-w-xl text-lg text-foreground/70 leading-relaxed">
                  Medstar Multispeciality Hospital and ICU brings together expert specialists, advanced technology and warm, patient-first care — right in the heart of Mulund West, Mumbai.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    Book Appointment
                    <span className="grid place-items-center size-5 rounded-full bg-white/15"><ArrowUpRight className="size-3" /></span>
                  </Link>
                  <a href={SITE.phoneLink} className="btn-ghost">
                    <Phone className="size-4" /> {SITE.phone}
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right column — emergency card */}
            <div className="lg:col-span-4 relative">
              <Reveal delay={200}>
                <div className="relative rounded-3xl bg-white shadow-elegant p-6 border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="eyebrow"><Siren className="size-3 text-red animate-pulse-soft" /> Emergency</span>
                    <span className="text-xs text-muted-foreground">24 × 7</span>
                  </div>
                  <div className="font-display text-3xl text-navy leading-tight">
                    ICU · OT · Ambulance
                  </div>
                  <div className="mt-4 pt-3 border-t">
                    <EKG />
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Rapid response with trained intensivists and in-house diagnostic backup.
                  </p>
                  <a href={SITE.phoneLink} className="mt-5 btn-red w-full justify-center">
                    <Phone className="size-4" /> Call {SITE.phone}
                  </a>

                  {/* Mini stats */}
                  <div className="mt-5 grid grid-cols-3 gap-2 pt-5 border-t">
                    {[
                      { k: "35", v: "Beds" },
                      { k: "18", v: "Depts" },
                      { k: "1000+", v: "Treated" },
                    ].map((s) => (
                      <div key={s.v} className="text-center">
                        <div className="font-display text-xl text-navy">{s.k}</div>
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Floating badge */}
              <Reveal delay={380}>
                <div className="absolute -top-5 -left-5 hidden md:flex items-center gap-2 rounded-full bg-navy text-white px-4 py-2 shadow-elegant">
                  <Star className="size-3.5 text-yellow fill-yellow" />
                  <span className="text-xs font-semibold">4.9 · Google reviews</span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom facilities ticker */}
          <Reveal delay={300}>
            <div className="mt-20 pt-8 border-t border-navy/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {FACILITIES.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <span className="grid place-items-center size-9 rounded-lg bg-white shadow-soft border">
                    <f.icon className="size-4 text-teal" />
                  </span>
                  <span className="text-sm font-medium text-navy">{f.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ INSURANCE PARTNERS MARQUEE ============ */}
      <section className="border-y bg-white/60 backdrop-blur py-5 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl flex items-center gap-6">
          <span className="shrink-0 text-[11px] uppercase tracking-widest font-bold text-muted-foreground">Cashless Insurers</span>
          <div className="flex-1 overflow-hidden relative" style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
            <div className="flex gap-10 animate-marquee whitespace-nowrap font-display font-bold text-lg text-foreground/70">
              {[...INSURERS, ...INSURERS, ...INSURERS].map((n, i) => (
                <span key={i} className="inline-flex items-center gap-2"><Plus className="size-4 text-teal" strokeWidth={3} />{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ INTERACTIVE DEPARTMENT EXPLORER ============ */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <span className="eyebrow mb-4"><Stethoscope className="size-3 text-teal" /> 17 Specialties</span>
              <h2 className="font-display text-4xl lg:text-5xl text-navy tracking-tight">
                One hospital.<br /><span className="gradient-text">Every specialty you need.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Tap or hover a specialty on the right to preview the clinical team, treatments, and highlights — then book instantly.
              </p>
              <div className="mt-8 rounded-3xl border bg-white p-6 shadow-card hover:shadow-soft transition-all duration-300">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center size-11 rounded-xl bg-navy/5 text-navy">
                    <DepartmentIcon name={dept.icon} className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl text-navy font-bold">{dept.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-3 italic">"{dept.tagline}"</p>
                <p className="text-sm mt-3 leading-relaxed text-foreground/75">{dept.description}</p>
                <ul className="mt-4 grid grid-cols-1 gap-2 pt-4 border-t border-dashed">
                  {dept.services.slice(0, 4).map((s) => (
                    <li key={s} className="text-sm flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-teal shrink-0" />
                      <span className="text-navy font-medium">{s}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services/$slug" params={{ slug: dept.slug }} className="mt-6 btn-primary w-full justify-center">
                  Explore {dept.name} <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {DEPARTMENTS.map((d, i) => {
              const active = d.slug === activeDept;
              return (
                <button
                  key={d.slug}
                  onMouseEnter={() => setActiveDept(d.slug)}
                  onFocus={() => setActiveDept(d.slug)}
                  onClick={() => setActiveDept(d.slug)}
                  className={`flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all ${
                    active
                      ? "bg-navy text-white shadow-soft border-navy"
                      : "bg-card text-foreground hover:bg-accent border-border"
                  }`}
                >
                  <DepartmentIcon
                    name={d.icon}
                    className={`size-6 mb-2.5 transition-colors ${active ? "text-white" : "text-teal"}`}
                  />
                  <span className="text-xs font-semibold">{d.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ ABOUT / OUR STORY PREVIEW ============ */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <Reveal className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <span className="eyebrow"><span className="size-1.5 rounded-full bg-purple" /> Our Story</span>
              <h2 className="mt-5 font-display text-4xl md:text-6xl text-navy tracking-[-0.03em] leading-[1.02]">
                A hospital designed around
                <span className="italic text-purple font-normal"> the patient.</span>
              </h2>
              <p className="mt-6 text-foreground/70 leading-relaxed max-w-md">
                Located in Mulund West, Mumbai, Medstar Multispeciality Hospital and ICU is built on a simple promise — outstanding clinical care delivered with empathy. Every part of Medstar is built to make a difficult day easier.
              </p>
              <Link to="/about" className="mt-8 btn-ghost">
                Read our story <ArrowRight className="size-4" />
              </Link>
            </Reveal>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {REASONS.map((r, i) => (
                <Reveal key={r.title} delay={i * 80}>
                  <div className="group rounded-2xl border bg-white p-7 h-full card-lift">
                    <div className="flex items-center justify-between mb-6">
                      <span className="grid place-items-center size-11 rounded-full bg-navy text-white">
                        <r.icon className="size-5" />
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{r.tag}</span>
                    </div>
                    <h3 className="font-display text-2xl text-navy leading-tight">{r.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ DOCTORS SECTION (ACTUAL SENIOR STAFF) ============ */}
      <section className="relative py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <Reveal>
              <div>
                <span className="eyebrow"><span className="size-1.5 rounded-full bg-blue" /> Clinical Team</span>
                <h2 className="mt-5 font-display text-4xl md:text-6xl text-navy tracking-[-0.03em] leading-[1.02] max-w-2xl">
                  Senior doctors.
                  <br />
                  <span className="italic text-blue font-normal">Unhurried consults.</span>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/doctors" className="btn-ghost self-start md:self-end">
                Meet the team <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DOCTORS.map((d, i) => (
              <Reveal key={d.name} delay={i * 70}>
                <div className="group relative overflow-hidden rounded-2xl bg-white border card-lift">
                  <div className="aspect-[4/5] relative overflow-hidden bg-navy/5">
                    {d.isFounder ? (
                      <img
                        src={founderImg}
                        alt={`Portrait of ${d.name}`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-teal/10 to-purple/10 grid place-items-center">
                        <span className="font-display text-6xl text-navy/20 group-hover:scale-110 transition-transform duration-700">
                          {d.initial}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 eyebrow bg-white/90 backdrop-blur">
                      {d.exp}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-navy leading-tight">{d.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{d.spec}</p>
                    <div className="mt-4 pt-4 border-t flex items-center justify-between">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} className="size-3 text-yellow fill-yellow" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-teal">{d.tag}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ICU & CRITICAL CARE ROW ============ */}
      <section className="relative py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] ink-panel p-10 md:p-16 lg:p-20">
              <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
              <div className="absolute -top-10 -right-10 size-80 rounded-full bg-teal/25 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-10 size-96 rounded-full bg-red/15 blur-3xl pointer-events-none" />

              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <span className="eyebrow-dark">
                    <Siren className="size-3 text-red animate-pulse-soft" /> 24 × 7 Critical Care
                  </span>
                  <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[0.98]">
                    When minutes matter,
                    <br />
                    <span className="italic text-teal font-normal">we're already ready.</span>
                  </h2>
                  <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
                    Multi-parameter monitored ICU beds, trained intensivists, ventilator support and a dedicated emergency team on standby — every hour of every day.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={SITE.phoneLink} className="btn-red">
                      <Phone className="size-4" /> Emergency {SITE.phone}
                    </a>
                    <Link to="/icu" className="btn-ghost">
                      Inside our ICU <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-3 border border-white/10">
                    <img
                      src={icuImg}
                      alt="Inside Medstar's ICU"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2">
                      {[
                        { k: "< 5 min", v: "Triage" },
                        { k: "1:1", v: "ICU nursing" },
                        { k: "24 × 7", v: "Intensivist" },
                        { k: "In-house", v: "Ambulance" },
                      ].map((s) => (
                        <div key={s.v} className="rounded-xl bg-white/10 backdrop-blur border border-white/15 px-3 py-2">
                          <div className="font-display text-lg text-white leading-none">{s.k}</div>
                          <div className="text-[10px] text-white/70 mt-1 uppercase tracking-widest">{s.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FAMILY STORY ROW (RECEPTION PHOTO) ============ */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-elegant">
                <img
                  src={doctorImg}
                  alt="Medstar Hospital Lobby Care"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/25 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 eyebrow bg-white/95 backdrop-blur">
                  <HeartPulse className="size-3 text-red" /> Care, up close
                </div>
              </div>
            </Reveal>
            <div className="lg:col-span-6">
              <Reveal>
                <span className="eyebrow"><span className="size-1.5 rounded-full bg-green" /> 04 · Who We Are</span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-6 font-display text-4xl md:text-6xl text-navy tracking-[-0.03em] leading-[1.02]">
                  A neighbourhood hospital that
                  <span className="italic text-green font-normal"> feels like family.</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 text-lg text-foreground/70 leading-relaxed max-w-xl">
                  For more than a decade, Medstar has quietly cared for the families of Mulund and beyond. We built this hospital around a simple idea — that great medicine is warmer when it's close to home.
                </p>
              </Reveal>
              <Reveal delay={280}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/about" className="btn-primary">
                    About Medstar <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOUNDER'S NOTE ============ */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <Reveal className="order-2 lg:order-1 space-y-6">
            <span className="eyebrow">
              <span className="size-1.5 rounded-full bg-teal" /> Founder’s Note
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-navy tracking-[-0.03em] leading-[1.02]">
              A warm message from our founder,
              <br />
              <span className="italic text-teal font-normal">Dr. Shailendra Nanaware.</span>
            </h2>
            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-foreground/75">
              <p>
                At Medstar Multispeciality Hospital and ICU, our vision has always been to create a
                healthcare environment where compassion meets excellence. We believe that every
                patient deserves not only advanced medical treatment, but also warmth, dignity,
                trust, and personal attention during every step of their healthcare journey. From
                emergency and critical care services to multispeciality consultations and modern
                treatment facilities, our mission is to provide accessible, reliable, and
                patient-focused healthcare for the community of Mulund and beyond.
              </p>
              <p>
                Our team of dedicated doctors, specialists, nurses, and healthcare professionals
                work together with one shared commitment — to place patients and their families at
                the heart of everything we do. We continuously strive to combine modern medical
                technology with ethical healthcare practices and compassionate care to ensure the
                best possible outcomes for every individual who walks through our doors.
              </p>
              <p>
                We sincerely thank our patients and the community for their trust and support, and
                we remain committed to building a healthier future together.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="rounded-[2rem] overflow-hidden border bg-white shadow-elegant hover:-translate-y-1 transition-all duration-500">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={founderImg}
                  alt="Dr. Shailendra Nanaware"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>
              <div className="p-6 bg-gradient-to-br from-accent/20 via-muted to-white border-t">
                <div className="text-lg font-semibold text-navy">Dr. Shailendra Nanaware</div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy border">
                  Founder & Ophthalmologist
                </div>
                <div className="mt-3 text-xs text-muted-foreground">
                  Medstar Multispeciality Hospital and ICU
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS (ORIGINAL Patient Voices) ============ */}
      <section className="relative py-24 md:py-32 bg-soft">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-14">
              <div>
                <span className="eyebrow"><span className="size-1.5 rounded-full bg-yellow" /> Patient Voices</span>
                <h2 className="mt-5 font-display text-4xl md:text-6xl text-navy tracking-[-0.03em] leading-[1.02] max-w-2xl">
                stories from our patients
                  <br />
                  <span className="italic text-yellow font-normal">that make us proud</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="relative overflow-hidden w-full" style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
            <div className="flex gap-6 animate-marquee py-5 w-max">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <figure key={i} className="flex-shrink-0 w-[420px] max-w-[90vw] rounded-2xl bg-white border p-6 hover:shadow-elegant hover:-translate-y-1 transition-all duration-1000 flex flex-col gap-4">
                  {/* Top: Name & Stars */}
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="font-display font-semibold text-base text-navy leading-snug">{t.name}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Verified Patient</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="size-3.5 text-yellow fill-yellow" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom: Quote Body */}
                  <div className="border-t pt-4">
                    <Quote className="size-5 text-teal/40 mb-2" />
                    <blockquote className="text-sm text-foreground/85 leading-relaxed italic">
                      "{t.body}"
                    </blockquote>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT & MAP CTA ============ */}
      <section className="relative py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-4">
              <div className="lg:col-span-7 rounded-3xl bg-navy text-white p-10 md:p-14 relative overflow-hidden">
                <div className="absolute inset-0 grid-lines opacity-15 pointer-events-none" />
                <div className="absolute -top-16 -right-16 size-72 rounded-full bg-teal/20 blur-3xl" />
                <div className="relative">
                  <span className="eyebrow-dark">Visit us</span>
                  <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-[-0.03em] leading-[1.02]">
                    Book a consult, or just
                    <span className="italic text-teal font-normal"> drop by.</span>
                  </h2>
                  <p className="mt-5 text-white/70 max-w-lg">
                    OPD open every day. Walk-ins welcome. For appointments, call or WhatsApp us — we'll find you a time that works.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={SITE.phoneLink} className="btn-ghost bg-white text-navy">
                      <Phone className="size-4" /> {SITE.phone}
                    </a>
                    <Link to="/contact" className="btn-red">
                      Book appointment <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                  <div className="mt-10 pt-8 border-t border-white/10 grid sm:grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="text-white/50 text-xs uppercase tracking-widest mb-2">Address</div>
                      <div className="text-white/90 leading-relaxed">{SITE.address}</div>
                    </div>
                    <div>
                      <div className="text-white/50 text-xs uppercase tracking-widest mb-2">Hours</div>
                      <div className="text-white/90 leading-relaxed">
                        OPD · Mon–Sat 9am – 9pm<br />
                        Emergency & ICU · 24 × 7
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-3xl overflow-hidden border bg-white min-h-[400px] relative">
                <iframe
                  src={SITE.mapsEmbed}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Medstar Hospital Map"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
