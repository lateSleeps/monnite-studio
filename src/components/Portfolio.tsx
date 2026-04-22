"use client";
import { useState } from "react";

const categories = [
  {
    number: "01",
    title: "Design memorable first products",
    description: "You only have one shot for a first impression. Your product doesn't have to be perfect, but it must convince users it's worth sticking around for. We help early-stage teams go beyond 'minimum viable' and create first products that truly leave a mark.",
    projects: [
      {
        name: "Corner 32",
        description: "Brand website for a health-focused café targeting remote workers. SEO-optimized to rank for 'healthy workspace café Bali' and drive foot traffic from digital nomads.",
        image: "/portfolio-01.webp",
        tags: ["Strategy", "UI Design", "UX Design", "Software Development"]
      },
      {
        name: "Tenang",
        description: "Website for Ubud's premium spa, yoga studio, and restaurant. Built to showcase three distinct services under one brand with a unified booking experience.",
        image: "/portfolio-02.webp",
        tags: ["Strategy", "UI Design", "UX Design", "Software Development"]
      }
    ]
  },
  {
    number: "02",
    title: "Reinvent iconic digital products",
    description: "Countless iconic digital products have shaped how we live and work. Yet, most product design focuses on the new. We also love to elevate what already exists preserve what makes it special, radically rethink what's broken and add what's needed to succeed in the future.",
    projects: [
      {
        name: "Sushi Tei",
        description: "Custom point-of-sale application for restaurant chain. Handles transactions, real-time inventory tracking, and service monitoring across multiple locations.",
        image: "/portfolio-03.webp",
        tags: ["Strategy", "UI Design", "UX Design", "Software Development"]
      },
      {
        name: "Fitground",
        description: "End-to-end system managing member subscriptions, trainer scheduling, class bookings, and multi-location oversight. Cut admin time by 60%.",
        image: "/portfolio-04.webp",
        tags: ["Strategy", "UI Design", "UX Design", "Software Development"]
      }
    ]
  },
  {
    number: "03",
    title: "Shape challenger brands",
    description: "We love challengers. Companies that question the norm and take on bigger competitors. Those who attack rather than defend. We help them nail their positioning, craft narratives that resonate, and design identities that stand out without being off. With strategic precision and creative imagination.",
    projects: [
      {
        name: "Lenka Studio",
        description: "Logo design for a Bali-based design and technology agency specializing in custom web applications. Visual identity built to reflect technical precision with creative craft.",
        image: "/portfolio-05.webp",
        tags: ["Strategy", "UI Design", "UX Design", "Software Development"]
      },
      {
        name: "Webstein",
        description: "Complete visual identity for an Australian digital agency focused on WordPress development and marketing. Includes logo, typography, color palette, and collateral.",
        image: "/portfolio-06.webp",
        tags: ["Strategy", "UI Design", "UX Design", "Software Development"]
      }
    ]
  }
];

export default function Portfolio() {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltip({ visible: true, x: e.clientX, y: e.clientY });
  };

  return (
    <section id="project" className="py-16 md:py-24 bg-black">
      {/* Cursor tooltip */}
      {tooltip.visible && (
        <div
          className="fixed z-[9999] pointer-events-none"
          style={{ left: tooltip.x + 16, top: tooltip.y + 16 }}
        >
          <div className="bg-white text-black text-xs font-semibold uppercase tracking-widest px-3 py-2 rounded-[4px] shadow-lg whitespace-nowrap">
            Project WIP
          </div>
        </div>
      )}

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16 space-y-24 md:space-y-40">
        {categories.map((cat) => (
          <div key={cat.number} className="space-y-16">
            <div className="max-w-5xl space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black font-semibold flex items-center justify-center shrink-0">
                  <span className="text-base md:text-[18px] leading-none">{cat.number}</span>
                </div>
                <h3 className="text-3xl md:text-[36px] font-semibold leading-[1.2] font-sans">{cat.title}</h3>
              </div>
              <p className="text-base md:text-[16px] text-text-secondary leading-relaxed max-w-4xl">
                {cat.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-4">
              {cat.projects.map((project) => (
                <div key={project.name} className="group flex flex-col gap-6">
                  <div
                    className="relative aspect-[4/3] rounded-[4px] overflow-hidden bg-[#1a1a1a] border-0 cursor-none"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setTooltip(t => ({ ...t, visible: false }))}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-xl md:text-[24px] font-semibold font-sans">{project.name}</h5>
                    <p className="text-sm md:text-[16px] text-text-secondary leading-relaxed w-full">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map(tag => (
                        <div key={tag} className="px-3 py-1 bg-[#1A1A1A] rounded-[4px] text-[10px] uppercase font-medium tracking-widest text-text-muted border-0">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
