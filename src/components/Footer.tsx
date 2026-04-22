"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatedUnderline } from "@/components/ui/animated-underline";
import { TextGlitch } from "@/components/ui/text-glitch-effect";
import { useLanguage } from "@/lib/language-context";

function smoothScrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  const { t } = useLanguage();
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
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 items-start">
          <div className="flex flex-wrap gap-x-[60px] gap-y-8 items-start">
            <div className="space-y-6">
              <h5 className="text-[#8a8a8a] text-[16px] font-medium font-sans">{t.footer.contact}</h5>
              <ul className="space-y-4 font-medium text-[16px] font-sans text-white/90">
                <li><Link href="#" className="hover:text-white transition-colors"><AnimatedUnderline>{t.footer.links.email}</AnimatedUnderline></Link></li>
                <li><Link href="#" className="hover:text-white transition-colors"><AnimatedUnderline>{t.footer.links.linkedin}</AnimatedUnderline></Link></li>
                <li><Link href="#" className="hover:text-white transition-colors"><AnimatedUnderline>{t.footer.links.threads}</AnimatedUnderline></Link></li>
                <li><Link href="#" className="hover:text-white transition-colors"><AnimatedUnderline>{t.footer.links.facebook}</AnimatedUnderline></Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="text-[#8a8a8a] text-[16px] font-medium font-sans">{t.footer.navigation}</h5>
              <ul className="space-y-4 font-medium text-[16px] font-sans text-white/90">
                <li><Link href="#project" onClick={(e) => { e.preventDefault(); smoothScrollTo("#project"); }} className="hover:text-white transition-colors"><AnimatedUnderline>{t.footer.nav.project}</AnimatedUnderline></Link></li>
                <li><Link href="#about" onClick={(e) => { e.preventDefault(); smoothScrollTo("#about"); }} className="hover:text-white transition-colors"><AnimatedUnderline>{t.footer.nav.about}</AnimatedUnderline></Link></li>
                <li><Link href="#services" onClick={(e) => { e.preventDefault(); smoothScrollTo("#services"); }} className="hover:text-white transition-colors"><AnimatedUnderline>{t.footer.nav.services}</AnimatedUnderline></Link></li>
                <li><Link href="#approach" onClick={(e) => { e.preventDefault(); smoothScrollTo("#approach"); }} className="hover:text-white transition-colors"><AnimatedUnderline>{t.footer.nav.question}</AnimatedUnderline></Link></li>
              </ul>
            </div>

            <div className="mt-11">
              <ul className="space-y-4 font-medium text-[16px] font-sans">
                <li><span className="text-white/90">{t.footer.blog}<span className="text-[#8a8a8a] ml-1">{t.footer.comingSoon}</span></span></li>
                <li><span className="text-white/90">{t.footer.creativeSpace}<span className="text-[#8a8a8a] ml-1">{t.footer.comingSoon}</span></span></li>
              </ul>
            </div>
          </div>

          <div className="shrink-0 max-w-[320px] space-y-6">
            <h5 className="text-[#8a8a8a] text-[16px] font-medium font-sans">{t.footer.studioName}</h5>
            <div className="space-y-4">
              <p className="text-[16px] font-medium leading-relaxed font-sans text-white/90">
                {t.footer.studioDesc}
              </p>
              <div className="text-white/90 text-[16px] font-medium font-sans">
                <span>{time}</span> — {t.footer.location}
              </div>
            </div>
          </div>
        </div>

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
            <span className="text-[16px] text-white/90 font-medium tracking-wide">{t.footer.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
