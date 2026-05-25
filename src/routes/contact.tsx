import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, MessageCircle, Phone, Send, Siren } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment — Medstar Hospital, Mulund West" },
      {
        name: "description",
        content:
          "Contact Medstar Multispeciality Hospital and ICU in Mulund West, Mumbai. Book appointments, request callbacks or reach our 24×7 emergency line.",
      },
      { property: "og:title", content: "Contact Medstar Hospital" },
      {
        property: "og:description",
        content: "Reach Medstar Hospital — call, WhatsApp or visit us in Mulund West, Mumbai.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const phone = data.get("phone");
    const dept = data.get("department");
    const msg = data.get("message");
    const text = `Hi Medstar, I'd like to book an appointment.%0A%0AName: ${name}%0APhone: ${phone}%0ADepartment: ${dept}%0AMessage: ${msg}`;
    window.open(`${SITE.whatsapp}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <div className="overflow-x-hidden">
      <section className="bg-hero">
        <div className="container-px mx-auto max-w-7xl py-16 lg:py-24 text-center space-y-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-primary">
            {t("contact.getInTouch")}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {t("contact.wereHere")}{" "}
            <span className="gradient-text">{t("contact.wheneverNeeded")}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <Reveal className="lg:col-span-7">
            <div className="rounded-3xl border bg-card p-7 sm:p-10 shadow-elegant">
              <h2 className="text-2xl sm:text-3xl font-bold">{t("contact.bookAppointment")}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                {t("contact.formSubtitle")}
              </p>
              <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field
                  label={t("contact.fields.fullName")}
                  name="name"
                  required
                  placeholder={t("contact.placeholders.fullName")}
                />
                <Field
                  label={t("contact.fields.phone")}
                  name="phone"
                  required
                  placeholder={t("contact.placeholders.phone")}
                  type="tel"
                />
                <Field
                  label={t("contact.fields.email")}
                  name="email"
                  type="email"
                  placeholder={t("contact.placeholders.email")}
                />
                <Field
                  label={t("contact.fields.department")}
                  name="department"
                  placeholder={t("contact.placeholders.department")}
                />
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t("contact.fields.message")}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={t("contact.placeholders.message")}
                    className="w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-xs text-muted-foreground">
                    {t("contact.consentText")}
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary-gradient text-primary-foreground px-6 py-3 rounded-2xl font-semibold shadow-soft hover:shadow-glow transition hover:-translate-y-0.5"
                  >
                    <Send className="size-4" /> {t("contact.sendRequest")}
                  </button>
                </div>
                {sent && (
                  <p className="sm:col-span-2 text-sm text-primary font-medium">
                    {t("contact.openingWhatsApp")}
                  </p>
                )}
              </form>
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={120} className="lg:col-span-5 space-y-5">
            <a
              href={SITE.phoneLink}
              className="block rounded-3xl bg-destructive text-destructive-foreground p-6 shadow-elegant hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="grid place-items-center size-12 rounded-2xl bg-white/20">
                  <Siren className="size-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider opacity-90">
                    {t("contact.emergency247")}
                  </div>
                  <div className="text-xl font-bold">{SITE.phone}</div>
                </div>
              </div>
            </a>
            <InfoCard
              icon={Phone}
              title={t("contact.callUs")}
              body={SITE.phone}
              href={SITE.phoneLink}
            />
            <InfoCard
              icon={MessageCircle}
              title={t("contact.whatsapp")}
              body={t("contact.chatWithTeam")}
              href={SITE.whatsapp}
              external
            />
            <InfoCard
              icon={Mail}
              title={t("contact.email")}
              body={SITE.email}
              href={`mailto:${SITE.email}`}
            />
            <InfoCard
              icon={MapPin}
              title={t("contact.visitUs")}
              body={SITE.address}
              href={SITE.mapsLink}
              external
            />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="container-px mx-auto max-w-7xl pb-20">
        <Reveal>
          <div className="rounded-3xl overflow-hidden border shadow-elegant aspect-[16/9] sm:aspect-[21/9] bg-muted">
            <iframe
              title="Medstar Hospital location map"
              src={SITE.mapsEmbed}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
        {required && " *"}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block rounded-2xl border bg-card p-5 shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-all"
    >
      <div className="flex gap-4">
        <div className="grid place-items-center size-12 rounded-xl bg-primary-gradient text-primary-foreground shadow-soft shrink-0">
          <Icon className="size-5" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
          <div className="text-sm font-semibold mt-0.5 leading-snug">{body}</div>
        </div>
      </div>
    </a>
  );
}
