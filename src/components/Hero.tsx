"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TextScramble } from "@/components/ui/text-scramble";
import { TextGlitch } from "@/components/ui/text-glitch-effect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/lib/language-context";

function BrandIcon({ index }: { index: number }) {
  const cls = "w-full h-full text-[#8a8a8a]";
  if (index === 0) return (
    <svg className={cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
  );
  if (index === 1) return (
    <svg className={cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
  );
  if (index === 2) return (
    <svg className={cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  );
  return (
    <svg className={cls} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const [bookTrigger, setBookTrigger] = useState(false);
  const [waTrigger, setWaTrigger] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col bg-black overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/hero-bg-opt.webp")'
        }}
      />

      <div className="relative z-10 w-full px-6 md:px-16 max-w-[1440px] mx-auto flex-grow flex flex-col pt-[calc(5rem+2rem)] md:pt-[calc(5rem+4rem)] pb-8 justify-end md:justify-start">
        <div className="max-w-4xl space-y-8">
          <h1
            className="text-[2.625rem] md:text-[64px] font-semibold leading-[1.1] tracking-tight font-sans text-left"
            style={{
              transform: visible ? "translateY(0)" : "translateY(40px)",
              opacity: visible ? 1 : 0,
              transition: "transform 1.1s cubic-bezier(0.25,1,0.5,1) 0ms, opacity 1s ease 0ms",
            }}
          >
            {t.hero.heading1}{" "}
            <TextGlitch
              text={t.hero.headingGlitch}
              hoverText={t.hero.headingGlitch}
              as="span"
              overlayBg="#ffffff"
              overlayTextColor="#000000"
            />
            <br className="hidden md:block"/>
            {t.hero.heading2}
          </h1>
          <p
            className="text-[1rem] md:text-[20px] text-text-secondary max-w-2xl leading-relaxed"
            style={{
              transform: visible ? "translateY(0)" : "translateY(40px)",
              opacity: visible ? 1 : 0,
              transition: "transform 1.1s cubic-bezier(0.25,1,0.5,1) 150ms, opacity 1s ease 150ms",
            }}
          >
            {t.hero.subheading.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br className="hidden md:block"/>}</span>
            ))}
          </p>
          <div
            className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4"
            style={{
              transform: visible ? "translateY(0)" : "translateY(40px)",
              opacity: visible ? 1 : 0,
              transition: "transform 1.1s cubic-bezier(0.25,1,0.5,1) 300ms, opacity 1s ease 300ms",
            }}
          >
            <a href="https://cal.com/monnite-house/secret" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                className="w-full sm:w-auto rounded-[4px] bg-white text-black hover:bg-white/90 text-[16px] px-[24px] py-[12px] h-auto font-medium border-0 cursor-pointer"
                onMouseEnter={() => setBookTrigger(true)}
              >
                <TextScramble as="span" trigger={bookTrigger} onScrambleComplete={() => setBookTrigger(false)} speed={0.03} duration={0.5}>
                  {t.hero.cta}
                </TextScramble>
              </Button>
            </a>
            <a href="https://wa.link/7s68wi" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                variant="ghost"
                className="w-full sm:w-auto rounded-[4px] bg-[#343434] text-white hover:bg-[#343434]/90 text-[16px] px-[24px] py-[12px] h-auto font-medium border-0 flex items-center justify-center gap-3 cursor-pointer"
                onMouseEnter={() => setWaTrigger(true)}
              >
                <div className="relative shrink-0">
                  <Avatar className="w-7 h-7">
                    <AvatarImage src="/profile-monnite.webp" alt="Monnite" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border-2 border-[#343434]" />
                </div>
                <TextScramble as="span" trigger={waTrigger} onScrambleComplete={() => setWaTrigger(false)} speed={0.03} duration={0.5}>
                  {t.hero.whatsapp}
                </TextScramble>
              </Button>
            </a>
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-20 mt-auto">
          {t.hero.brands.map((name, i) => (
            <div
              key={name}
              className="flex items-center gap-3 border-b border-white/20 pb-4"
              style={{
                transform: visible ? "translateY(0)" : "translateY(40px)",
                opacity: visible ? 1 : 0,
                transition: `transform 1.1s cubic-bezier(0.25,1,0.5,1) ${i * 220}ms, opacity 1s ease ${i * 220}ms`,
              }}
            >
              <div className="shrink-0 w-6 h-6 relative opacity-70">
                <BrandIcon index={i} />
              </div>
              <span className="text-[1.25rem] lg:text-[14px] font-medium tracking-wide text-[#8a8a8a] capitalize">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
