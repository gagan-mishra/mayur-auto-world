import React, { useEffect, useState } from "react";
import { container } from "../shared/layout";
import MagneticButton from "../components/MagneticButton";

export default function AboutPage() {
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  useEffect(() => {
    if (!isNoteOpen) return;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, [isNoteOpen]);

  return (
    <main className="bg-[#070707] pb-20">
      <section className="relative overflow-hidden border-b border-borderSubtle/60 bg-black">
        <div className="relative">
          <img
            src="/assets/hero-bg.jpeg"
            alt="Workshop exterior"
            className="h-[260px] sm:h-[420px] lg:h-[520px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/80" />
        </div>
        <div className={`${container} pt-6 pb-10 space-y-4`}>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-wide text-accent">
            About Us
          </h1>
        </div>
      </section>

      <section className="pb-12 pt-2">
        <div className={`${container} grid gap-6`}>
          <div className="rounded-3xl border border-borderSubtle/60 bg-soft/60 p-6 space-y-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-accent">
                How we got here
              </p>
            </div>
            <div className="space-y-3 text-text-muted text-[16px] sm:text-base">
              <p>
                Mayur Auto World was established in January 2020 in Sangamner.
                We are an authorized dealer of Autoform India, Indias leading
                car seat cover manufacturer.
              </p>
              <p>
                We have one of the largest car accessories and detailing setups
                in Maharashtra and have successfully served 20,000+ happy
                customers. Our focus is on delivering reliable car care services
                with proper workmanship and genuine products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className={`${container}`}>
          <div className="rounded-3xl border border-borderSubtle/60 bg-[#0a0a0a] p-6 sm:p-8">
            <div className="grid gap-8 md:grid-cols-[0.45fr,1fr] items-start">
              <div className="w-full max-w-sm">
                <div className="relative rounded-3xl overflow-hidden border border-borderSubtle shadow-card">
                  <img
                    src="/assets/about-us-owner.jpeg"
                    alt="Founder portrait"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">
                    Founder
                  </p>
                  <p className="text-2xl sm:text-3xl font-black text-text">
                    Mayur Pawar
                  </p>
                </div>
                <p className="text-text-muted leading-relaxed">
                  Mayur Pawar is the founder of Mayur Auto World with 6+ years
                  of hands-on experience in professional car care. He holds
                  multiple industry certifications and follows proper, approved
                  methods for every service. Along with detailing and protection
                  services, he specializes in car seat covers, car body covers,
                  and genuine auto accessories, ensuring correct fitment and
                  quality installation. His focus is simple: no shortcuts, clean
                  work, and reliable results.
                </p>
                <p className="text-text-muted leading-relaxed">
                  What We Specialize In We specialize in customized Autoform
                  seat covers, car interior makeovers, and professional car
                  detailing. Our work follows a simple and effective formula:
                  Clean → Restore → Protect This approach helps maintain your
                  car’s appearance, comfort, and long-term value.
                </p>
                <MagneticButton
                  className="rounded-full border border-accent text-text px-6 py-2.5 font-semibold hover:bg-accent/10 transition-colors"
                  onClick={() => setIsNoteOpen(true)}
                >
                  View signed note
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className={`${container} space-y-4`}>
          <p className="text-xs uppercase tracking-[0.24em] text-accent">
            Interior craft, live
          </p>
          <div className="relative overflow-hidden rounded-3xl border border-borderSubtle shadow-card">
            <img
              src="/assets/gallery/about-studio.jpeg"
              alt="Workshop"
              className="h-[280px] sm:h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          </div>
        </div>
      </section>

      {isNoteOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setIsNoteOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[96vh] rounded-2xl overflow-hidden border border-borderSubtle shadow-card bg-black p-3">
            <button
              type="button"
              onClick={() => setIsNoteOpen(false)}
              className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/10 text-text hover:bg-white/20 transition"
            >
              Close
            </button>
            <div className="flex items-center justify-center h-full w-full">
              <img
                src="/assets/founder-note.jpeg"
                alt="Founder note"
                className="max-h-[90vh] max-w-full w-auto h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
