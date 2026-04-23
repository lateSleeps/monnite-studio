"use client";
import { useEffect, useRef, useState } from "react";
import { TextGlitch } from "@/components/ui/text-glitch-effect";
import { TextScramble } from "@/components/ui/text-scramble";
import { useLanguage } from "@/lib/language-context";

function smoothScrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Services() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [btnHovered, setBtnHovered] = useState(false);
  const [btnTrigger, setBtnTrigger] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (i: number) => {
    setSelected(i === selected ? null : i);
    setBtnTrigger(true);
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16">
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-[7.5fr_3fr] gap-y-8 md:gap-20 items-start">

          <div
            style={{
              transform: visible ? "translateY(0)" : "translateY(40px)",
              opacity: visible ? 1 : 0,
              transition: "transform 1.1s cubic-bezier(0.25,1,0.5,1) 0ms, opacity 1s ease 0ms",
            }}
          >
            <h2 className="text-[2rem] md:text-[3.25rem] font-medium leading-[1.3] font-sans text-left">
              {t.services.heading}
            </h2>
          </div>

          <div
            className="space-y-6"
            style={{
              transform: visible ? "translateY(0)" : "translateY(40px)",
              opacity: visible ? 1 : 0,
              transition: "transform 1.1s cubic-bezier(0.25,1,0.5,1) 220ms, opacity 1s ease 220ms",
            }}
          >
            <div>
              <h4 className="text-[1.5rem] md:text-[2rem] text-text-secondary mb-6 font-semibold font-sans text-left">
                {t.services.subheading}
              </h4>

              {/* Service list */}
              <div className="space-y-8">
                {t.services.items.map((service, i) => (
                  <div
                    key={service}
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => handleServiceClick(i)}
                  >
                    {/* Radio — fills on click */}
                    <div className={`relative w-[2.625rem] h-[2.625rem] rounded-full border-[0.375rem] border-white shrink-0 transition-colors duration-300 ${
                      selected === i ? "bg-white" : "bg-transparent"
                    }`}>
                      <div className={`absolute inset-0 rounded-full bg-black transition-transform duration-300 ${
                        selected === i ? "scale-[0.42]" : "scale-0"
                      }`} />
                    </div>
                    {/* Text glitch still on hover */}
                    <TextGlitch
                      text={service}
                      hoverText={service}
                      overlayBg="#ffffff"
                      overlayTextColor="#000000"
                      className="text-[1.5rem] md:text-[2rem] font-bold font-sans text-white leading-tight whitespace-nowrap"
                    />
                  </div>
                ))}
              </div>

              {/* Select Service button — 64px gap */}
              <button
                className="mt-16 w-full flex items-center justify-between border-b border-white/30 pb-4 group cursor-pointer"
                onClick={() => smoothScrollTo("#contact")}
                onMouseEnter={() => { setBtnHovered(true); setBtnTrigger(true); }}
                onMouseLeave={() => setBtnHovered(false)}
              >
                <TextScramble
                  as="span"
                  trigger={btnTrigger}
                  onScrambleComplete={() => setBtnTrigger(false)}
                  speed={0.03}
                  duration={0.5}
                  className={`text-[1.375rem] font-semibold font-sans whitespace-nowrap transition-colors duration-300 ${btnHovered ? "text-white" : "text-white/60"}`}
                >
                  {t.services.selectService}
                </TextScramble>
                <span className={`text-[1.375rem] shrink-0 ml-4 transition-all duration-300 ${btnHovered ? "translate-x-1 -translate-y-1 text-white" : "text-white/60"}`}>
                  ↗
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
