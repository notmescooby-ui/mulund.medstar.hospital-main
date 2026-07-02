import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 flex flex-col gap-2.5">
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="grid place-items-center size-12 rounded-full bg-green text-white shadow-elegant hover:scale-110 transition-transform"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={SITE.phoneLink}
        aria-label="Call us"
        className="relative grid place-items-center size-12 rounded-full bg-navy text-white shadow-elegant hover:scale-110 transition-transform"
      >
        <Phone className="size-5" />
        <span className="absolute inset-0 rounded-full ring-2 ring-navy/40 animate-pulse-ring" />
      </a>
    </div>
  );
}
