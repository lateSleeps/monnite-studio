"use client";
import { useEffect, useRef, useState } from "react";

const socialValues = [
  {
    title: "Projects Delivered",
    value: "25+",
    description: "From simple landing pages to complex SaaS platforms across UMKM, startups & agencies.",
  },
  {
    title: "Average Delivery",
    value: "4-8",
    suffix: "Weeks",
    description: "We work in focused sprints so you see real progress every week, not just at the end.",
  },
  {
    title: "Support Response",
    value: "24",
    suffix: "Hours",
    description: "Questions answered, bugs fixed, urgent changes deployed. We're in your timezone and always available.",
  },
  {
    title: "On-Time Delivery",
    value: "100%",
    description: "Every project delivered on schedule. We plan carefully and communicate proactively so nothing slips.",
  },
];

function Card({ item, index, visible }: { item: typeof socialValues[0]; index: number; visible: boolean }) {
  return (
    <div
      className="card-hover relative bg-[#1A1A1A] rounded-[4px] p-8 h-full flex flex-col justify-between overflow-hidden cursor-default"
      style={{
        transform: visible ? "translateY(0)" : "translateY(40px)",
        opacity: visible ? 1 : 0,
        transition: `transform 1.1s cubic-bezier(0.25,1,0.5,1) ${index * 220}ms, opacity 1s ease ${index * 220}ms`,
      }}
    >
      <div className="card-overlay absolute inset-0 bg-white pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between h-full" style={{ gap: "8rem" }}>
        <div className="flex justify-between items-start">
          <div className="flex items-baseline gap-2">
            <span className="card-text text-[72px] font-sans font-normal tracking-tighter leading-none">{item.value}</span>
            {item.suffix && <span className="card-text text-[20px] font-semibold">{item.suffix}</span>}
          </div>
          <div className="card-pin w-6 h-6 rounded-full shrink-0" />
        </div>

        <div className="space-y-2">
          <h4 className="card-text text-[16px] font-semibold uppercase tracking-tight">{item.title}</h4>
          <p className="card-desc text-[14px] leading-relaxed max-w-[240px]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SocialSection() {
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-black relative z-20">
      <style>{`
        .card-hover .card-overlay {
          clip-path: circle(0% at 88% 11%);
          transition: clip-path 0.75s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .card-hover:hover .card-overlay {
          clip-path: circle(150% at 88% 11%);
        }
        .card-hover .card-text {
          color: #ffffff;
          transition: color 0.35s ease 0.15s;
        }
        .card-hover:hover .card-text {
          color: #000000;
        }
        .card-hover .card-pin {
          background-color: #ffffff;
          transition: background-color 0.35s ease 0.15s;
        }
        .card-hover:hover .card-pin {
          background-color: #000000;
        }
        .card-hover .card-desc {
          color: #8a8a8a;
          transition: color 0.35s ease 0.15s;
        }
        .card-hover:hover .card-desc {
          color: #444444;
        }
      `}</style>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16" style={{ display: "flex", flexDirection: "column", gap: "110px" }}>
        <h2 className="text-[2rem] md:text-[52px] font-semibold text-left md:text-center max-w-4xl md:mx-auto leading-[1.2] font-sans">
          Expertly crafted projects built with design excellence
        </h2>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialValues.map((item, i) => (
            <Card key={i} item={item} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
