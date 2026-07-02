import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import medstarLogo from "@/assets/Green Minimalistic Gift Circle Sticker - 1.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/icu", label: "ICU" },
  { to: "/insurance", label: "Insurance" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  return (
    <header className={`fixed inset-x-0 z-50 transition-all duration-500 ${scrolled ? "top-3" : "top-5"}`}>
      <div className="container-px mx-auto max-w-[95rem]">
        <div className="glass-nav rounded-full pl-3 pr-2 py-2 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 pl-2 pr-3 shrink-0 group">
            <span className="relative grid place-items-center size-9 rounded-full bg-white overflow-hidden shadow-soft border transition-transform duration-300 group-hover:scale-105 shrink-0">
              <img
                src={medstarLogo}
                alt="Medstar Hospital logo"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 rounded-full ring-1 ring-teal/40 animate-pulse-ring" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-[15px] font-semibold text-navy tracking-tight">Medstar</span>
              <span className="text-[9px] font-medium text-muted-foreground uppercase tracking-[0.22em] -mt-0.5">Hospital · ICU</span>
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {NAV.map((n) => {
              const active = n.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-3 py-1.5 text-[13px] font-medium rounded-full transition-colors ${
                    active ? "text-navy font-semibold" : "text-foreground/60 hover:text-navy"
                  }`}
                >
                  {active && <span className="absolute inset-0 rounded-full bg-navy/5" />}
                  <span className="relative">{n.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href={SITE.phoneLink}
              className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 text-[13px] font-semibold text-navy hover:text-teal transition"
            >
              <Phone className="size-3.5" /> {SITE.phone}
            </a>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-navy text-white pl-4 pr-3 py-2 rounded-full text-[13px] font-semibold hover:bg-teal transition-colors group"
            >
              Book Appointment
              <span className="grid place-items-center size-5 rounded-full bg-white/15 group-hover:bg-white/25 transition">
                <ArrowUpRight className="size-3" />
              </span>
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="xl:hidden grid place-items-center size-9 rounded-full bg-navy text-white"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="xl:hidden mt-2 glass-nav rounded-3xl p-4 animate-fade-in">
            <div className="flex flex-col">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} className="px-2 py-3 text-sm font-medium text-navy border-b border-border/60 last:border-0">
                  {n.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-3">
                <a href={SITE.phoneLink} className="flex-1 btn-ghost justify-center"><Phone className="size-4" /> Call</a>
                <Link to="/contact" className="flex-1 btn-primary justify-center">Book</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
