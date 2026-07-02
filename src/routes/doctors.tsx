import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DEPARTMENTS } from "@/lib/site";
import founderImg from "@/assets/WhatsApp Image 2025-01-06 at 20.30.09_0aea704c.jpg";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Medstar Hospital Mulund" },
      { name: "description", content: "Meet the specialists at Medstar Multispeciality Hospital & ICU in Mulund West, Mumbai." },
    ],
  }),
  component: Doctors,
});

// Helper to get initials
function getInitials(name: string) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const AVATAR_GRADIENTS = [
  "from-teal via-primary/80 to-blue/80",
  "from-blue via-navy/80 to-purple/80",
  "from-teal via-green/80 to-teal/70",
  "from-purple via-teal/80 to-blue/85",
];

function Doctors() {
  // Dynamically extract all unique doctors from departments
  const docList = DEPARTMENTS.reduce<Array<{ name: string; spec: string; tag: string; initials: string; slug: string; isFounder: boolean }>>((acc, dept) => {
    if (dept.doctors) {
      dept.doctors.forEach((doc) => {
        if (!acc.some((item) => item.name === doc.name)) {
          const initials = getInitials(doc.name);
          const isFounder = doc.name === "Dr. Shailendra Nanaware";
          acc.push({
            name: doc.name,
            spec: doc.role || `${dept.name} Specialist`,
            tag: dept.name,
            initials,
            slug: dept.slug,
            isFounder,
          });
        }
      });
    }
    return acc;
  }, []);

  const sortedDocList = [...docList].sort((a, b) => {
    if (a.name === "Dr. Shailendra Nanaware") return -1;
    if (b.name === "Dr. Shailendra Nanaware") return 1;
    return a.tag.localeCompare(b.tag);
  });

  return (
    <div className="overflow-x-hidden">
      {/* Header section */}
      <section className="bg-hero">
        <div className="container-px mx-auto max-w-7xl py-16 lg:py-24 text-center space-y-5">
          <span className="eyebrow">
            <span className="size-2 rounded-full bg-teal animate-pulse-soft" /> Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-navy tracking-tight leading-tight">
            Specialists who <span className="italic font-normal text-teal">take the time</span>.
          </h1>
          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed">
            Senior consultants across every major discipline — available for consults, second opinions and long-term care in Mulund West.
          </p>
        </div>
      </section>

      {/* Grid section */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedDocList.map((d, i) => {
            const gradient = AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length];
            return (
              <Reveal key={d.name} delay={(i % 4) * 60}>
                <div className="group relative overflow-hidden rounded-2xl bg-white border card-lift">
                  {/* Doctor Avatar */}
                  <div className="aspect-[4/5] relative bg-navy/5 overflow-hidden">
                    {d.isFounder ? (
                      <img
                        src={founderImg}
                        alt="Dr. Shailendra Nanaware"
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} grid place-items-center`}>
                        <span className="font-display text-6xl text-white/20 group-hover:scale-110 transition-transform duration-700">
                          {d.initials}
                        </span>
                      </div>
                    )}
                    <span className="absolute bottom-3 left-3 eyebrow bg-white/90">{d.tag}</span>
                  </div>

                  {/* Doctor details */}
                  <div className="p-5">
                    <h3 className="font-display text-lg text-navy leading-tight">{d.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 min-h-[32px]">{d.spec}</p>
                    <div className="mt-4 pt-4 border-t flex items-center justify-between">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} className="size-3 text-yellow fill-yellow" />
                        ))}
                      </div>
                      {d.slug === "ophthalmology" ? (
                        <a
                          href="https://mulundeyecare.com/contact"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-navy hover:text-teal inline-flex items-center gap-1"
                        >
                          Book <ArrowUpRight className="size-3" />
                        </a>
                      ) : (
                        <Link
                          to="/contact"
                          className="text-xs font-semibold text-navy hover:text-teal inline-flex items-center gap-1"
                        >
                          Book <ArrowUpRight className="size-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
