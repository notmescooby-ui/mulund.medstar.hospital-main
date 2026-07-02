import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Building2, Clock, HeartHandshake, ShieldCheck, Wallet } from "lucide-react";
import { INSURERS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance & Cashless — Medstar Hospital" },
      { name: "description", content: "Cashless insurance at Medstar Hospital with Mediassist, Tata AIG, Bajaj Allianz, ACKO, Care Health, Heritage and more." },
      { property: "og:title", content: "Insurance Partners — Medstar Hospital" },
      { property: "og:description", content: "Cashless treatment, faster admission and stress-free claims with our insurance network." },
    ],
  }),
  component: InsurancePage,
});

const BENEFITS = [
  { icon: Wallet, title: "Cashless treatment", body: "Get treated without paying upfront. We coordinate directly with your insurer for approvals." },
  { icon: Clock, title: "Faster admission", body: "Pre-authorisation handled by our dedicated TPA desk for quick, smooth admission." },
  { icon: HeartHandshake, title: "Less financial stress", body: "Focus on recovery while we manage paperwork, follow-ups and claim documentation." },
  { icon: ShieldCheck, title: "Emergency coverage", body: "24×7 ICU and emergency care with insurance support, even at odd hours." },
  { icon: Building2, title: "Better accessibility", body: "Accessible quality healthcare for working families and senior citizens alike." },
  { icon: BadgeCheck, title: "Network expertise", body: "Years of experience working with leading insurers to ensure smooth approvals." },
];

function InsurancePage() {
  return (
    <div className="overflow-x-hidden">
      <section className="bg-hero">
        <div className="container-px mx-auto max-w-7xl py-16 lg:py-24 text-center space-y-5">
          <span className="eyebrow">Insurance & Cashless</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-navy tracking-tight leading-tight">Quality care, <span className="italic font-normal text-teal">stress-free billing</span>.</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">We're empanelled with India's leading health insurers and TPAs to bring you genuine cashless treatment.</p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-display text-navy tracking-tight leading-tight">Our insurance partners</h2>
          <p className="text-muted-foreground">Some of the leading providers we work with for cashless and reimbursement claims.</p>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {INSURERS.map((name, i) => (
            <Reveal key={name} delay={(i % 4) * 70}>
              <div className="group rounded-2xl border bg-card p-6 text-center shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute inset-0 bg-hero opacity-0 group-hover:opacity-60 transition-opacity" />
                <div className="relative">
                  <div className="grid place-items-center mx-auto size-14 rounded-2xl bg-navy/5 text-navy group-hover:bg-navy group-hover:text-white transition-all mb-3">
                    <ShieldCheck className="size-6" />
                  </div>
                  <div className="font-display font-semibold text-navy">{name}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">Cashless approved</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-soft py-20">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="text-center mb-12 space-y-3">
            <span className="eyebrow">Patient Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-display text-navy tracking-tight leading-tight">Why use insurance at Medstar?</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="grid place-items-center size-12 rounded-xl bg-navy text-white shadow-soft mb-4"><b.icon className="size-5" /></div>
                  <h3 className="font-display font-semibold text-navy">{b.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="rounded-[2rem] bg-navy p-10 sm:p-14 text-white text-center shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative space-y-5 max-w-xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight leading-tight">Need help with your claim?</h2>
            <p className="opacity-90 max-w-md mx-auto text-sm leading-relaxed">Our TPA desk will guide you through the process — from pre-authorisation to final settlement.</p>
            <div className="pt-2">
              <Link to="/contact" className="btn-ghost bg-white text-navy">Contact our TPA desk <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
