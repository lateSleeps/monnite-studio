"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextScramble } from "@/components/ui/text-scramble";
import { AnimatedUnderline } from "@/components/ui/animated-underline";

const links = [
  { name: "Project", href: "#project", num: "01" },
  { name: "About", href: "#about", num: "02" },
  { name: "Services", href: "#services", num: "03" },
  { name: "Question", href: "#approach", num: "04" },
];

function smoothScrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navBtnTrigger, setNavBtnTrigger] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setAnimateIn(true), 10);
    } else {
      setAnimateIn(false);
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[9999] transition-colors duration-300 ${
        isScrolled || mobileOpen ? "bg-black" : "bg-transparent"
      }`}>
        <div className="w-full px-6 h-20 flex items-center justify-between">
          <Link href="/" className="shrink-0 text-white font-semibold text-[20px] tracking-tight relative z-[9999]">
            Monnite Studio
          </Link>

          {/* Desktop Links & CTA */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); smoothScrollTo(link.href); }}
                  className="text-sm font-medium text-white hover:text-white transition-colors py-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]"
                >
                  <AnimatedUnderline>{link.name}</AnimatedUnderline>
                </Link>
              ))}
            </div>
            <div className="h-4 w-px bg-white/20 mx-2" />
            <a href="https://cal.com/monnite-house/secret" target="_blank" rel="noopener noreferrer">
              <Button
                className="rounded-[4px] bg-white text-black hover:bg-white/90 text-[16px] px-[24px] py-[12px] h-auto font-medium border-0 cursor-pointer"
                onMouseEnter={() => setNavBtnTrigger(true)}
              >
                <TextScramble as="span" trigger={navBtnTrigger} onScrambleComplete={() => setNavBtnTrigger(false)} speed={0.03} duration={0.5}>
                  Book a 15 min Call
                </TextScramble>
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-[9999] flex items-center gap-2 cursor-pointer"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className="text-white text-[14px] font-medium tracking-widest uppercase">
              {mobileOpen ? "Close" : "Menu"}
            </span>
            <div className="flex flex-col justify-center gap-[5px] w-5">
              <div className={`w-full h-px bg-white transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <div className={`w-full h-px bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <div className={`w-full h-px bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div
        className="md:hidden fixed inset-0 bg-black z-[9998] flex flex-col px-6 pt-28 pb-12 pointer-events-none"
        style={{
          clipPath: mobileOpen
            ? animateIn ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)"
            : "inset(0% 0% 100% 0%)",
          transition: "clip-path 0.7s cubic-bezier(0.76,0,0.24,1)",
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        {/* Nav Links */}
        <nav className="flex flex-col gap-0 flex-1">
          {links.map((link, i) => (
            <div
              key={link.name}
              className="border-b border-white/10 py-5 overflow-hidden"
            >
              <div
                style={{
                  transform: animateIn ? "translateY(0)" : "translateY(100%)",
                  transition: `transform 0.7s cubic-bezier(0.76,0,0.24,1) ${i * 80 + 200}ms`,
                }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); smoothScrollTo(link.href); setMobileOpen(false); }}
                  className="flex items-baseline justify-between group"
                >
                  <span className="text-[13vw] font-bold leading-none tracking-tight text-white group-hover:text-white/60 transition-colors duration-300">
                    {link.name}
                  </span>
                  <span className="text-[14px] text-white/40 font-medium">{link.num}</span>
                </Link>
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom CTA */}
        <div
          style={{
            transform: animateIn ? "translateY(0)" : "translateY(20px)",
            opacity: animateIn ? 1 : 0,
            transition: "transform 0.6s ease 600ms, opacity 0.6s ease 600ms",
          }}
        >
          <a href="https://cal.com/monnite-house/secret" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
            <Button className="w-full rounded-[4px] bg-white text-black text-[16px] px-[24px] py-[14px] h-auto font-medium border-0">
              Book a 15 min Call
            </Button>
          </a>
          <p className="text-white/30 text-[12px] text-center mt-4 tracking-widest uppercase">Monnite Studio © 2026</p>
        </div>
      </div>
    </>
  );
}
