import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";
import pmjayLogo from "@/assets/pmjay-logo.png";
import mjpjayLogo from "@/assets/mjpjay-logo.png";
import pmjaysite from "@/assets/pmjay-site.png";

export const Route = createFileRoute("/pmjay")({
  head: () => ({
    meta: [
      { title: "PMJAY & MJPJAY Scheme Benefits - Medstar Hospital Mulund" },
      {
        name: "description",
        content:
          "Avail scheme benefits for treatment under Ayushman Bharat PMJAY & Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY) at Medstar Hospital, Mulund West.",
      },
      { property: "og:title", content: "PMJAY & MJPJAY Scheme Benefits — Medstar Hospital" },
      {
        property: "og:description",
        content: "100% cashless healthcare for orange/yellow ration card holders. Fully empanelled hospital in Mumbai.",
      },
    ],
  }),
  component: PmjayPage,
});



function PmjayPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Header */}
      <section className="relative bg-hero">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
        <div className="container-px mx-auto max-w-7xl py-16 lg:py-24 text-center space-y-6 relative">
          
          {/* Logo container */}
          <Reveal className="flex justify-center items-center gap-4 sm:gap-6 mb-2">
            <div className="bg-white rounded-2xl p-2.5 shadow-soft border size-40 sm:size-48 flex items-center justify-center transition-transform hover:scale-105 duration-300">
              <img src={pmjayLogo} alt="AB-PMJAY Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-2xl p-2.5 shadow-soft border size-40 sm:size-48 flex items-center justify-center transition-transform hover:scale-105 duration-300">
              <img src={mjpjayLogo} alt="MJPJAY Logo" className="max-h-full max-w-full object-contain" />
            </div>
          </Reveal>
              
          <span className="eyebrow bg-teal/15 text-navy inline-flex">
            <span className="size-2 rounded-full bg-teal animate-pulse-soft" /> Cashless Government Schemes
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display text-navy tracking-tight leading-tight max-w-4xl mx-auto">
            Quality healthcare, <span className="italic font-normal text-teal">scheme benefits</span> under PMJAY & MJPJAY.
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg">
            Medstar Multispeciality Hospital and ICU is proudly empanelled to deliver free, high-quality medical and surgical treatments to eligible beneficiaries.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <a href={SITE.phoneLink} className="btn-primary">
              Call Help Desk <ArrowRight className="size-4" />
            </a>
            <Link to="/contact" className="btn-ghost">
              Visit Hospital
            </Link>
          </div>
        </div>
      </section>
      <Reveal className="flex justify-center items-center mb-12 px-4">
        <img
          src={pmjaysite}
          alt="Available at our hospital"
          className="w-full max-w-xl rounded-3xl shadow-elegant border transition-transform hover:scale-[1.01] duration-300"
        />
      </Reveal>


      {/* Checklist & Document Guides */}
      <section className="bg-soft py-16 md:py-24">
        <div className="container-px mx-auto max-w-7xl">
          <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="eyebrow">Admission Checklist</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy leading-tight">How to avail this tension free treatment</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Follow these simple steps when preparing for planned surgeries or emergency admissions under MJPJAY/PMJAY.
            </p>
          </Reveal>
          

          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <div className="rounded-2xl bg-white border p-7 h-full flex flex-col justify-between shadow-card">
                <div>
                  <div className="font-display text-4xl text-teal/40 font-bold mb-4">01</div>
                  <h3 className="font-semibold text-lg text-navy">Document Check</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Ensure your family Orange/Yellow Ration Card and Aadhar Card are active.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t text-xs text-muted-foreground">
                  Original documents are mandatory.
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-2xl bg-white border p-7 h-full flex flex-col justify-between shadow-card">
                <div>
                  <div className="font-display text-4xl text-teal/40 font-bold mb-4">02</div>
                  <h3 className="font-semibold text-lg text-navy">Specialist Consult</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Our consulting doctors will examine the patient and diagnose if the required surgery or ICU package is listed in the scheme catalog.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t text-xs text-teal font-semibold">
                    Our hospital is part of the empanelled list of this scheme
                </div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-2xl bg-white border p-7 h-full flex flex-col justify-between shadow-card">
                <div>
                  <div className="font-display text-4xl text-teal/40 font-bold mb-4">03</div>
                  <h3 className="font-semibold text-lg text-navy">TPA Pre-Auth</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Medstar's in-house Arogyamitra coordinators will take biometrics, submit documentation, and gain instant cashless pre-authorization.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t text-xs text-muted-foreground">
                  Processed on-site at the hospital.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

     
           



      {/* Contact Helpline Call-to-action */}
      <section className="container-px mx-auto max-w-7xl pb-16 md:pb-24">
        <div className="rounded-[2.5rem] bg-navy text-white p-10 sm:p-14 text-center shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative space-y-6 max-w-xl mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl tracking-tight leading-tight">Empanelled and ready to assist you.</h2>
            <p className="opacity-90 max-w-md mx-auto text-sm leading-relaxed">
              We stand by our patients. If you or your loved ones are seeking admission under Ayushman Bharat (AB-PMJAY) or MJPJAY, reach out to our team directly.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <a href={SITE.phoneLink} className="btn-ghost bg-white text-navy inline-flex items-center gap-2">
                <Phone className="size-4" /> Call Help Desk: {SITE.phone}
              </a>
              <Link to="/contact" className="btn-primary bg-white/10 hover:bg-white/20 text-white border-white/20 border">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

