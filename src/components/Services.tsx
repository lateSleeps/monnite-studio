"use client";
import { useEffect, useRef, useState } from "react";
import { TextGlitch } from "@/components/ui/text-glitch-effect";

const services = [
  "Software systems",
  "Design system",
  "Product websites",
  "Brand strategies",
  "E-commerce",
  "Consultation",
];

export default function Services() {
  const [visible, setVisible] = useState(false);
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

  return (
    <section id="services" className="py-16 md:py-24 bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16">
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-[7.5fr_3fr] gap-y-8 md:gap-20 items-start">

          {/* Left — heading */}
          <div
            style={{
              transform: visible ? "translateY(0)" : "translateY(40px)",
              opacity: visible ? 1 : 0,
              transition: "transform 1.1s cubic-bezier(0.25,1,0.5,1) 0ms, opacity 1s ease 0ms",
            }}
          >
            <h2 className="text-[2rem] md:text-[3.25rem] font-medium leading-[1.3] font-sans text-left">
              Most agencies either design beautifully but never ship, or ship fast but look generic. You need both.
            </h2>
          </div>

          {/* Right — services list */}
          <div
            className="space-y-6"
            style={{
              transform: visible ? "translateY(0)" : "translateY(40px)",
              opacity: visible ? 1 : 0,
              transition: "transform 1.1s cubic-bezier(0.25,1,0.5,1) 220ms, opacity 1s ease 220ms",
            }}
          >
            <div>
              <h4 className="text-[1.5rem] md:text-[2rem] text-text-secondary mb-6 font-semibold font-sans text-left">We design + build</h4>
              <div className="space-y-8">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-4">
                    <div className="w-[2.625rem] h-[2.625rem] rounded-full border-[0.375rem] border-white bg-transparent shrink-0" />
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
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
