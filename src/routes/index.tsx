import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ShieldCheck, Clock, Siren, Phone, Quote, Star,
  Activity, CalendarCheck, Stethoscope, MapPin, ChevronRight, CheckCircle2, Plus,
} from "lucide-react";
import heroImg from "@/assets/WhatsApp Image 2026-05-12 at 6.50.14 AM.jpeg";
import icuImg from "@/assets/icu-facility.jpg";
import doctorImg from "@/assets/reception.jpg";
import founderImg from "@/assets/WhatsApp Image 2025-01-06 at 20.30.09_0aea704c.jpg";
import { DEPARTMENTS, SITE, STATS, INSURERS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { DepartmentIcon } from "@/components/DepartmentIcon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Medstar Multispeciality Hospital and ICU — Mulund West, Mumbai" },
      { name: "description", content: "Trusted multispeciality hospital with 24×7 ICU & emergency care in Mulund West, Mumbai. Book appointments online with expert specialists." },
    ],
  }),
  component: HomePage,
});

const TESTIMONIALS = [
  { name: "Priya S.", text: "The doctors and ICU team were exceptional during my father's recovery. Calm, kind and incredibly skilled.", role: "Patient family" },
  { name: "Rahul M.", text: "From admission to discharge, every step felt organised and reassuring. Truly patient-first care.", role: "Orthopaedic patient" },
  { name: "Anjali K.", text: "Modern facilities and warm staff. The pediatric team made my daughter feel completely at ease.", role: "Pediatric care" },
];

const STEPS = [
  { n: "01", title: "Book online", body: "Pick a department and slot in under a minute.", icon: CalendarCheck },
  { n: "02", title: "Meet your specialist", body: "Detailed consultation, diagnostics on the same floor.", icon: Stethoscope },
  { n: "03", title: "Recover with care", body: "Day-care, surgical or ICU pathways, fully guided.", icon: Activity },
];

function EKG() {
  return (
    <svg viewBox="0 0 600 80" className="w-full h-12" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="ekg" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.68 0.13 190)" />
          <stop offset="50%" stopColor="oklch(0.5 0.2 260)" />
          <stop offset="100%" stopColor="oklch(0.64 0.22 25)" />
        </linearGradient>
      </defs>
      <path
        d="M0 40 L120 40 L140 40 L150 20 L160 60 L170 10 L180 70 L200 40 L320 40 L340 25 L355 55 L370 15 L385 65 L400 40 L600 40"
        fill="none" stroke="url(#ekg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ strokeDasharray: 1400, strokeDashoffset: 1400, animation: "shimmer 2.4s ease-out forwards, fade-in 0.4s ease" }}
      />
    </svg>
  );
}

function HomePage() {
  const [activeDept, setActiveDept] = useState(DEPARTMENTS[0].slug);
  const dept = DEPARTMENTS.find(d => d.slug === activeDept) ?? DEPARTMENTS[0];

  return (
    <div className="overflow-x-hidden">
      {/* HERO — asymmetric split */}
      <section className="relative">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute -top-24 -right-24 size-[420px] rounded-full bg-primary/15 blur-3xl animate-blob" />
        <div className="absolute top-40 -left-32 size-[360px] rounded-full blur-3xl animate-blob" style={{ background: "oklch(0.7 0.2 260 / 0.18)", animationDelay: "3s" }} />

        <div className="relative container-px mx-auto max-w-7xl pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left — 7 cols */}
            <div className="lg:col-span-7 space-y-7">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="chip"><span className="size-1.5 rounded-full bg-primary animate-pulse-soft" /> {SITE.tagline}</span>
                  <span className="chip-red"><Siren className="size-3" /> 24×7 ICU</span>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                  Compassionate care.<br />
                  <span className="gradient-text">Modern medicine.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Medstar Multispeciality Hospital and ICU brings together expert specialists, advanced technology and warm, patient-first care — right in the heart of Mulund West, Mumbai.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="group inline-flex items-center gap-2 bg-primary-gradient text-primary-foreground px-6 py-3.5 rounded-2xl text-sm font-bold shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5">
                    Book Appointment <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a href={SITE.phoneLink} className="inline-flex items-center gap-2 bg-red-gradient text-white px-6 py-3.5 rounded-2xl text-sm font-bold shadow-red hover:-translate-y-0.5 transition-all">
                    <Phone className="size-4" /> Emergency · {SITE.phone}
                  </a>
                </div>
              </Reveal>

              {/* Live EKG band */}
              <Reveal delay={320}>
                <div className="glass rounded-2xl p-4 flex items-center gap-4">
                  <div className="grid place-items-center size-11 rounded-xl bg-primary-gradient text-white shadow-soft">
                    <Activity className="size-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold">Live signal · vitals monitoring</div>
                    <EKG />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right — 5 cols, image + floating stat tiles */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={120}>
                <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-white/40">
                  <img src={heroImg} alt="Modern hospital lobby at Medstar Hospital" className="w-full h-[480px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest opacity-80">Now serving</div>
                      <div className="font-display text-2xl font-bold">{SITE.shortAddress || "Mulund West, Mumbai"}</div>
                    </div>
                    <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold bg-white/95 text-foreground px-3 py-1.5 rounded-full hover:bg-white transition">
                      Directions <ArrowRight className="size-3" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <div className="absolute -left-6 top-10 glass rounded-2xl p-3 shadow-soft w-44 animate-float hidden sm:block">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Happy patients</div>
                <div className="font-display text-2xl font-extrabold gradient-text"><Counter to={1000} />+</div>
              </div>
              <div className="absolute -right-4 -bottom-6 glass rounded-2xl p-3 shadow-soft w-44" style={{ animation: "float 7s ease-in-out infinite", animationDelay: "1.5s" }}>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="size-3 fill-[oklch(0.78_0.16_70)] text-[oklch(0.78_0.16_70)]" />)}
                </div>
                <div className="text-[11px] font-semibold">Rated 4.9 · Google reviews</div>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <Reveal delay={200}>
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-3">
              {STATS.map((s, i) => (
                <div key={s.label} className="tile tile-hover p-4 text-center" style={{ animationDelay: `${i * 60}ms` }}>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold gradient-text">
                    <Counter to={s.value} />{s.suffix}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE — insurance partners */}
      <section className="border-y bg-white/60 backdrop-blur py-5 overflow-hidden">
        <div className="container-px mx-auto max-w-7xl flex items-center gap-6">
          <span className="shrink-0 text-[11px] uppercase tracking-widest font-bold text-muted-foreground">Cashless with</span>
          <div className="flex-1 overflow-hidden relative" style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
            <div className="flex gap-10 animate-marquee whitespace-nowrap font-display font-bold text-lg text-foreground/70">
              {[...INSURERS, ...INSURERS, ...INSURERS].map((n, i) => (
                <span key={i} className="inline-flex items-center gap-2"><Plus className="size-4 text-primary" strokeWidth={3} />{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEPARTMENT EXPLORER */}
      <section className="container-px mx-auto max-w-7xl py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <span className="chip mb-4"><Stethoscope className="size-3" /> 17 Specialities</span>
              <h2 className="font-display text-4xl lg:text-5xl tracking-tight">
                One hospital.<br /><span className="gradient-text">Every speciality you need.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Tap a speciality on the right to preview the team, the treatments and the rooms — then book in a tap.
              </p>
              <div className="mt-6 tile p-6 bg-soft">
                <div className="flex items-center gap-3">
                  <DepartmentIcon name={dept.icon} className="size-7 text-primary" />
                  <h3 className="font-display text-xl font-bold">{dept.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-2 italic">"{dept.tagline}"</p>
                <p className="text-sm mt-3 leading-relaxed">{dept.description}</p>
                <ul className="mt-4 grid grid-cols-1 gap-1.5">
                  {dept.services.slice(0, 5).map(s => (
                    <li key={s} className="text-sm flex items-center gap-2"><CheckCircle2 className="size-4 text-primary shrink-0" />{s}</li>
                  ))}
                </ul>
                <Link to="/services/$slug" params={{ slug: dept.slug }} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
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
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all ${
                    active
                      ? "bg-primary-gradient text-white shadow-soft"
                      : "bg-card text-foreground hover:bg-accent"
                  }`}
                >
                  <DepartmentIcon
                    name={d.icon}
                    className={`size-6 mb-2 ${active ? "text-white" : "text-primary"}`}
                  />
                  <span className="text-xs font-semibold">{d.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={doctorImg}
                alt="Compassionate Medstar doctor at reception"
                loading="lazy"
                className="w-full h-[520px] object-cover"
                width={1200}
                height={1400}
              />
            </div>
            <div className="absolute -bottom-6 -right-4 glass rounded-2xl p-5 shadow-elegant w-60 hidden sm:block">
              <div className="text-3xl font-bold gradient-text">
                Trusted with patient care for years
              </div>
              <div className="text-xs text-muted-foreground mt-1">By the people of Mulund</div>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
              About Medstar
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              A modern hospital with a <span className="gradient-text">human heart</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Located in Mulund West, Mumbai, Medstar Multispeciality Hospital and ICU is built on a
              simple promise — outstanding clinical care delivered with empathy. Our experienced
              founders envisioned a place where modern medicine and warm hospitality meet, where
              patients are treated like family.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-card p-5 shadow-card hover:shadow-soft transition">
                <div className="font-semibold mb-1">Our Vision</div>
                <p className="text-sm text-muted-foreground">
                  To be Mumbai's most trusted neighbourhood multispeciality hospital — accessible,
                  expert and compassionate.
                </p>
              </div>
              <div className="rounded-2xl border bg-card p-5 shadow-card hover:shadow-soft transition">
                <div className="font-semibold mb-1">Our Mission</div>
                <p className="text-sm text-muted-foreground">
                  Deliver patient-first healthcare with modern technology, ethical practice, and
                  genuine human care, every single day.
                </p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Patient-first approach in every interaction",
                "24×7 ICU and emergency response",
                "16 specialist departments under one roof",
                "Cashless insurance & ethical pricing",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-primary" /> {t}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Read More <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STEPS — Patient Journey */}
      <section className="bg-soft py-20">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="text-center mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">Patient Journey</span>
            <h2 className="text-3xl sm:text-4xl font-bold">Your recovery, step by step</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="h-full rounded-2xl border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all relative overflow-hidden">
                  <div className="absolute right-4 top-4 font-display text-4xl font-black opacity-10 text-primary">{s.n}</div>
                  <div className="grid place-items-center size-12 rounded-xl bg-primary-gradient text-primary-foreground shadow-soft mb-4">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ICU / EMERGENCY BANNER */}
      <section className="container-px mx-auto max-w-7xl pt-20">
        <div className="relative rounded-3xl overflow-hidden shadow-elegant">
          <img
            src={icuImg}
            alt="Modern ICU at Medstar"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            width={1600}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
          <div className="relative grid lg:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-16 text-primary-foreground">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-primary-foreground">
                <Siren className="size-3.5" /> 24×7 Emergency & ICU
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                When seconds matter, we're ready.
              </h2>
              <p className="mt-4 opacity-90 max-w-lg">
                Our ICU is staffed round-the-clock by trained intensivists with advanced
                ventilators, multi-parameter monitoring and a rapid response team.
              </p>
            </Reveal>
            <Reveal delay={120} className="flex flex-col justify-end gap-4">
              <a
                href={SITE.phoneLink}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-primary px-6 py-4 rounded-2xl font-bold text-lg shadow-elegant hover:scale-[1.02] transition-transform"
              >
                <Siren className="size-5" /> Call Emergency: {SITE.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 glass text-primary-foreground px-6 py-3 rounded-2xl font-semibold text-sm hover:bg-white/20 transition"
              >
                Request a Callback
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-soft py-20 mt-20">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="text-center mb-12 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">Patient Stories</span>
            <h2 className="text-3xl sm:text-4xl font-bold">What our patients say</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="h-full rounded-2xl border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all relative">
                  <Quote className="absolute right-6 top-6 size-8 opacity-10 text-primary" />
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="size-4 fill-[oklch(0.78_0.16_70)] text-[oklch(0.78_0.16_70)]" />)}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                  <div className="mt-6 border-t pt-4">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER'S NOTE */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <Reveal className="order-2 lg:order-1 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-xs font-semibold text-primary shadow-soft">
              Founder’s Note
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-950">
              A warm message from our founder, Dr. Shailendra Nanaware.
            </h2>
            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-slate-700">
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
            <div className="rounded-[2rem] overflow-hidden border border-slate-200/80 bg-white shadow-elegant transition-all hover:-translate-y-0.5">
              <div className="relative overflow-hidden">
                <img
                  src={founderImg}
                  alt="Dr. Shailendra Nanaware"
                  loading="lazy"
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-8 bg-gradient-to-br from-accent/20 via-muted to-white border-t border-accent shadow-soft">
                <div className="text-lg font-semibold text-slate-950">Dr. Shailendra Nanaware</div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-medium text-primary shadow-sm ring-1 ring-border">
                  Founder & Ophthalmologist
                </div>
                <div className="mt-3 text-sm text-slate-600">
                  Medstar Multispeciality Hospital and ICU
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
