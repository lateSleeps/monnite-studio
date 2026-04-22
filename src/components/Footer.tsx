"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatedUnderline } from "@/components/ui/animated-underline";
import { TextGlitch } from "@/components/ui/text-glitch-effect";

function smoothScrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const timeString = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Makassar',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date());
      setTime(timeString.replace(':', '.') + " WITA");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <footer className="bg-black pt-16 pb-8 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16 space-y-16">
        {/* Top row: left links + right studio info */}
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 items-start">
          {/* Left: Contact + Navigation + Blog */}
          <div className="flex flex-wrap gap-x-[60px] gap-y-8 items-start">
            <div className="space-y-6">
              <h5 className="text-[#8a8a8a] text-[16px] font-medium font-sans">Contact</h5>
              <ul className="space-y-4 font-medium text-[16px] font-sans text-white/90">
                <li><Link href="#" className="hover:text-white transition-colors"><AnimatedUnderline>Email</AnimatedUnderline></Link></li>
                <li><Link href="#" className="hover:text-white transition-colors"><AnimatedUnderline>LinkedIn</AnimatedUnderline></Link></li>
                <li><Link href="#" className="hover:text-white transition-colors"><AnimatedUnderline>Threads</AnimatedUnderline></Link></li>
                <li><Link href="#" className="hover:text-white transition-colors"><AnimatedUnderline>Facebook</AnimatedUnderline></Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="text-[#8a8a8a] text-[16px] font-medium font-sans">Navigation</h5>
              <ul className="space-y-4 font-medium text-[16px] font-sans text-white/90">
                <li><Link href="#project" onClick={(e) => { e.preventDefault(); smoothScrollTo("#project"); }} className="hover:text-white transition-colors"><AnimatedUnderline>Project</AnimatedUnderline></Link></li>
                <li><Link href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo("#about"); }} className="hover:text-white transition-colors"><AnimatedUnderline>About</AnimatedUnderline></Link></li>
                <li><Link href="#services" onClick={(e) => { e.preventDefault(); smoothScrollTo("#services"); }} className="hover:text-white transition-colors"><AnimatedUnderline>Services</AnimatedUnderline></Link></li>
                <li><Link href="#approach" onClick={(e) => { e.preventDefault(); smoothScrollTo("#approach"); }} className="hover:text-white transition-colors"><AnimatedUnderline>Question</AnimatedUnderline></Link></li>
              </ul>
            </div>

            <div className="mt-11">
              <ul className="space-y-4 font-medium text-[16px] font-sans">
                <li><span className="text-white/90">Blog<span className="text-[#8a8a8a] ml-1">(Coming Soon)</span></span></li>
                <li><span className="text-white/90">Creative Space<span className="text-[#8a8a8a] ml-1">(Coming Soon)</span></span></li>
              </ul>
            </div>
          </div>

          {/* Right: Monnite Studio (aligned with Book a Call button position) */}
          <div className="shrink-0 max-w-[320px] space-y-6">
            <h5 className="text-[#8a8a8a] text-[16px] font-medium font-sans">Monnite Studio</h5>
            <div className="space-y-4">
              <p className="text-[16px] font-medium leading-relaxed font-sans text-white/90">
                We help companies explore product opportunities, build products from scratch or elevate them to new levels.
              </p>
              <div className="text-white/90 text-[16px] font-medium font-sans">
                <span>{time}</span> — Tabanan, Bali, Indonesia.
              </div>
            </div>
          </div>
        </div>

        {/* Brand Bottom */}
        <div className="relative pt-12">
          <TextGlitch
            text="Monnite."
            hoverText="Monnite."
            as="h1"
            overlayBg="#ffffff"
            overlayTextColor="#000000"
            className="text-[clamp(5rem,18vw,20rem)] font-bold tracking-tighter leading-[0.8] -translate-x-[0.05em] text-white"
          />
          <div className="flex justify-start md:justify-end mt-2 md:mt-0 md:absolute md:bottom-0 md:right-0 pb-2 md:pb-4 lg:pb-8">
            <span className="text-[16px] text-white/90 font-medium tracking-wide">©2026 Monnite Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
