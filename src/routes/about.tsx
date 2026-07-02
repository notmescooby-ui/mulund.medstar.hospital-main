import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Award,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import deluxeRoomImg from "@/assets/deluxe-gallery.png";
import icuImg from "@/assets/iccu 2.jpg";
import hospitalImg from "@/assets/opd 1.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Medstar Hospital — Mulund West, Mumbai" },
      {
        name: "description",
        content:
          "Learn about Medstar Multispeciality Hospital and ICU — our story, founder, vision, mission and patient-first approach in Mulund West, Mumbai.",
      },
      { property: "og:title", content: "About Medstar Hospital" },
      {
        property: "og:description",
        content:
          "Our story, vision, mission and commitment to patient-first care in Mulund West, Mumbai.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-hero">
        <div className="container-px mx-auto max-w-7xl py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-7 space-y-5">
            <span className="eyebrow">
              {t("about.aboutUs")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-navy tracking-tight leading-tight">
              {t("about.title")} <span className="italic font-normal text-teal">{t("about.titleGradient")}</span>.
            </h1>
            <p className="text-foreground/70 max-w-2xl leading-relaxed">{t("about.description")}</p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-elegant border bg-white">
              <img
                src={deluxeRoomImg}
                alt={t("about.imgAltDeluxe")}
                loading="lazy"
                className="w-full h-[400px] object-cover"
                width={1200}
                height={1400}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision, Mission, Promise Cards */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            {
              icon: Sparkles,
              title: t("about.visionTitle"),
              body: t("about.visionBody"),
            },
            {
              icon: HeartHandshake,
              title: t("about.missionTitle"),
              body: t("about.missionBody"),
            },
            {
              icon: ShieldCheck,
              title: t("about.promiseTitle"),
              body: t("about.promiseBody"),
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="rounded-2xl border bg-card p-7 h-full card-lift">
                <div className="grid place-items-center size-12 rounded-xl bg-navy text-white mb-5 shadow-soft">
                  <c.icon className="size-5" />
                </div>
                <h3 className="font-display text-xl text-navy mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ICU & Clinicians Section */}
      <section className="container-px mx-auto max-w-7xl py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border bg-white">
              <img
                src={icuImg}
                alt={t("about.imgAltIcu")}
                loading="lazy"
                className="w-full h-[440px] object-cover"
                width={1600}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 space-y-5">
            <span className="eyebrow">
              {t("about.icuTitle")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy tracking-tight leading-tight">{t("about.icuHeading")}</h2>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/75">
              <p>{t("about.icuBody1")}</p>
              <p>{t("about.icuBody2")}</p>
              <p>{t("about.icuBody3")}</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: Users, label: t("about.icuLabelPatientFirst") },
                { icon: Award, label: t("about.icuLabelEthical") },
                { icon: Stethoscope, label: t("about.icuLabelExpert") },
              ].map((b) => (
                <div
                  key={b.label}
                  className="rounded-xl border bg-card p-4 flex items-center gap-3 shadow-card"
                >
                  <b.icon className="size-5 text-teal" />
                  <span className="text-sm font-semibold text-navy">{b.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-soft py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-7 space-y-5">
              <span className="eyebrow">
                {t("about.whoWeAre")}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-navy tracking-tight leading-tight">
                {t("about.compassionateCare")}{" "}
                <span className="italic font-normal text-teal">{t("about.closeToHome")}</span>.
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground/75">
                <p>{t("about.whoWeAreBody1")}</p>
                <p>{t("about.whoWeAreBody2")}</p>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant border bg-white">
                <img
                  src={hospitalImg}
                  alt={t("about.imgAltCare")}
                  loading="lazy"
                  className="w-full h-[440px] object-cover"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="rounded-[2rem] bg-navy text-white p-10 sm:p-14 text-center shadow-elegant relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative space-y-5 max-w-xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight leading-tight">{t("about.careTitle")}</h2>
            <p className="opacity-90 max-w-md mx-auto text-sm leading-relaxed">{t("about.careSubtitle")}</p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Link
                to="/contact"
                className="btn-ghost bg-white text-navy"
              >
                {t("about.bookAppointment")} <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="btn-primary bg-white/10 hover:bg-white/20 text-white border-white/20 border"
              >
                {t("about.viewServices")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
