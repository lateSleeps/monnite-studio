"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextScramble } from "@/components/ui/text-scramble";
import { AnimatedUnderline } from "@/components/ui/animated-underline";

const links = [
  { name: "Project", href: "#project" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Question", href: "#approach" },
];

function smoothScrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navBtnTrigger, setNavBtnTrigger] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent border-transparent"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="shrink-0 text-white font-semibold text-[24px] tracking-tight">
          Monnite Studio
        </Link>
        
        {/* Links & CTA */}
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
              <TextScramble
                as="span"
                trigger={navBtnTrigger}
                onScrambleComplete={() => setNavBtnTrigger(false)}
                speed={0.03}
                duration={0.5}
              >
                Book a 15 min Call
              </TextScramble>
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5 cursor-pointer"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <div className={`w-full h-px bg-white transition-transform duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <div className={`w-full h-px bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <div className={`w-full h-px bg-white transition-transform duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); smoothScrollTo(link.href); setMobileOpen(false); }}
              className="text-[1.25rem] font-medium text-white/90 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a href="https://cal.com/monnite-house/secret" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
            <Button className="w-full rounded-[4px] bg-white text-black hover:bg-white/90 text-[16px] px-[24px] py-[12px] h-auto font-medium border-0">
              Book a 15 min Call
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
