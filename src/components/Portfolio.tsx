"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

const projectImages = [
  ["/portfolio-01.webp", "/portfolio-02.webp"],
  ["/portfolio-03.webp", "/portfolio-04.webp"],
  ["/portfolio-05.webp", "/portfolio-06.webp"],
];

const categoryNumbers = ["01", "02", "03"];

function ProjectRow({ catIndex, visible }: { catIndex: number; visible: boolean }) {
  const { t } = useLanguage();
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });
  const cat = t.portfolio.categories[catIndex];

  return (
    <>
      {tooltip.visible && (
        <div className="fixed z-[9999] pointer-events-none" style={{ left: tooltip.x + 16, top: tooltip.y + 16 }}>
          <div className="bg-white text-black text-xs font-semibold uppercase tracking-widest px-3 py-2 rounded-[4px] shadow-lg whitespace-nowrap">
            {t.portfolio.tooltip}
          </div>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-8 md:gap-4">
        {cat.projects.map((project, i) => (
          <div
            key={project.name}
            className="group flex flex-col gap-6"
            style={{
              transform: visible ? "translateY(0)" : "translateY(40px)",
              opacity: visible ? 1 : 0,
              transition: `transform 1.1s cubic-bezier(0.25,1,0.5,1) ${i * 220}ms, opacity 1s ease ${i * 220}ms`,
            }}
          >
            <div
              className="relative aspect-[4/3] rounded-[4px] overflow-hidden bg-[#1a1a1a] cursor-none"
              onMouseMove={(e) => setTooltip({ visible: true, x: e.clientX, y: e.clientY })}
              onMouseLeave={() => setTooltip(tp => ({ ...tp, visible: false }))}
            >
              <Image
                src={projectImages[catIndex][i]}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-2">
              <h5 className="text-xl md:text-[24px] font-semibold font-sans">{project.name}</h5>
              <p className="text-sm md:text-[16px] text-text-secondary leading-relaxed w-full">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {t.portfolio.tags.map(tag => (
                  <div key={tag} className="px-3 py-1 bg-[#1A1A1A] rounded-[4px] text-[10px] uppercase font-medium tracking-widest text-text-muted border-0">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function CategoryBlock({ catIndex }: { catIndex: number }) {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const cat = t.portfolio.categories[catIndex];

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rowRef} className="space-y-16">
      <div className="max-w-5xl space-y-8">
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black font-semibold flex items-center justify-center shrink-0">
            <span className="text-base md:text-[18px] leading-none">{categoryNumbers[catIndex]}</span>
          </div>
          <h3 className="text-3xl md:text-[36px] font-semibold leading-[1.2] font-sans">{cat.title}</h3>
        </div>
        <p className="text-base md:text-[16px] text-text-secondary leading-relaxed max-w-4xl">
          {cat.description}
        </p>
      </div>
      <ProjectRow catIndex={catIndex} visible={visible} />
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="project" className="py-16 md:py-24 bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16 space-y-24 md:space-y-40">
        {categoryNumbers.map((_, i) => (
          <CategoryBlock key={i} catIndex={i} />
        ))}
      </div>
    </section>
  );
}
