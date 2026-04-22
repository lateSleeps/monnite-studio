"use client";
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
  return (
    <section id="services" className="py-16 md:py-24 bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[7.5fr_3fr] gap-y-8 md:gap-20 items-start">
          <div>
            <h2 className="text-[2rem] md:text-[3.25rem] font-medium leading-[1.3] font-sans text-left">
              Most agencies either design beautifully but never ship, or ship fast but look generic. You need both.
            </h2>
          </div>

          <div className="space-y-6">
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
