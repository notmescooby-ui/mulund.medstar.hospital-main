import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Siren, ArrowRight, ShieldCheck, Activity, Stethoscope, Ambulance } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/icu")({
  head: () => ({
    meta: [
      { title: "ICU & Emergency Care — Medstar Hospital Mulund" },
      { name: "description", content: "24×7 multi-parameter ICU, trained intensivists, ventilator support and rapid emergency response at Medstar, Mulund West." },
    ],
  }),
  component: ICU,
});

const CAPABILITIES = [
  { icon: Activity, title: "Multi-parameter monitoring", body: "Every ICU bed is continuously monitored for cardiac, respiratory and haemodynamic parameters." },
  { icon: Stethoscope, title: "Intensivist-led team", body: "Round-the-clock intensivists supported by trained critical-care nurses at a 1:1 ratio." },
  { icon: ShieldCheck, title: "Ventilator & life support", body: "Invasive & non-invasive ventilators, BiPAP, high-flow oxygen and cardiac defibrillation." },
  { icon: Ambulance, title: "In-house ambulance", body: "Fully equipped ambulance service with trained paramedics for rapid pick-up and transfers." },
];

function ICU() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="container-px mx-auto max-w-7xl py-16 md:py-24">
          <div className="relative overflow-hidden rounded-[2rem] ink-panel p-10 md:p-16 lg:p-20">
            <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
            <div className="absolute -top-10 -right-10 size-80 rounded-full bg-teal/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-10 size-96 rounded-full bg-red/15 blur-3xl pointer-events-none" />
            <Reveal>
              <span className="eyebrow-dark"><Siren className="size-3 text-red animate-pulse-soft" /> Critical Care</span>
              <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl tracking-[-0.03em] leading-[0.98] max-w-4xl">
                Ready before you
                <span className="italic text-teal font-normal"> even arrive.</span>
              </h1>
              <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
                Our ICU is staffed and monitored around the clock, with rapid triage, ventilator support and specialist backup available at every hour.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={SITE.phoneLink} className="btn-red">
                  <Phone className="size-4" /> Emergency {SITE.phone}
                </a>
                <Link to="/contact" className="btn-ghost bg-white text-navy">Get directions <ArrowRight className="size-4" /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <Reveal>
          <span className="eyebrow"><span className="size-1.5 rounded-full bg-red" /> Capabilities</span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-navy tracking-[-0.03em] leading-[1.02] max-w-2xl">
            What our ICU is built to do.
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="rounded-2xl bg-white border p-7 h-full card-lift">
                <span className="grid place-items-center size-11 rounded-full bg-navy text-white"><c.icon className="size-5" /></span>
                <h3 className="mt-5 font-display text-2xl text-navy leading-tight">{c.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
