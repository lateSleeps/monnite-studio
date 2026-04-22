"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { TextScramble } from "@/components/ui/text-scramble";
import { TextGlitch } from "@/components/ui/text-glitch-effect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const valueBrands = [
  { name: "Unlimited request", icon: "https://cdn.prod.website-files.com/69e19dfc28bc918295d51fb4/69e1a7a1e2705d8ee68c6f72_Unlimited%20request.svg" },
  { name: "Fast Delivery", icon: "https://cdn.prod.website-files.com/69e19dfc28bc918295d51fb4/69e1a7a159cc7a1064b0c6e4_Fast%20Delivery.svg" },
  { name: "Expert Designer", icon: "https://cdn.prod.website-files.com/69e19dfc28bc918295d51fb4/69e1a7a196e599e8efc32fb3_Expert%20Designer.svg" },
  { name: "Easy Management", icon: "https://cdn.prod.website-files.com/69e19dfc28bc918295d51fb4/69e1a7a11353b66869abd132_Easy%20Management.svg" },
];

export default function Hero() {
  const [bookTrigger, setBookTrigger] = useState(false);
  const [waTrigger, setWaTrigger] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen flex flex-col bg-black overflow-hidden">
      {/* Background Image Overlay like legacy */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://cdn.prod.website-files.com/69e19dfc28bc918295d51fb4/69e1ac3cc26268b88480d698_BG.webp")'
        }}
      />


      {/* Overlay to improve text readability */}
      {/* Removed overlay to match Image 4 where left side of earth provides natural contrast */}

      <div className="relative z-10 w-full px-6 md:px-8 lg:px-16 max-w-[1440px] mx-auto flex-grow flex flex-col pt-[calc(5rem+2rem)] md:pt-[calc(5rem+4rem)] pb-8 justify-end md:justify-start">
        <div className="max-w-4xl space-y-8">
          <h1
            className="text-[2.625rem] md:text-[64px] font-semibold leading-[1.1] tracking-tight font-sans text-left"
            style={{
              transform: visible ? "translateY(0)" : "translateY(40px)",
              opacity: visible ? 1 : 0,
              transition: "transform 1.1s cubic-bezier(0.25,1,0.5,1) 0ms, opacity 1s ease 0ms",
            }}
          >
            We build{" "}
            <TextGlitch
              text="digital products"
              hoverText="digital products"
              as="span"
              overlayBg="#ffffff"
              overlayTextColor="#000000"
            />
            <br className="hidden md:block"/>
            that grow as you do.
          </h1>
          <p
            className="text-[1rem] md:text-[20px] text-text-secondary max-w-2xl leading-relaxed"
            style={{
              transform: visible ? "translateY(0)" : "translateY(40px)",
              opacity: visible ? 1 : 0,
              transition: "transform 1.1s cubic-bezier(0.25,1,0.5,1) 150ms, opacity 1s ease 150ms",
            }}
          >
            Building digital products that scale with your business,<br className="hidden md:block"/>from first launch to enterprise level.
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
                  Book a 15 min Call
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
                    <AvatarImage src="/avatar.jpeg" alt="Monnite" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border-2 border-[#343434]" />
                </div>
                <TextScramble as="span" trigger={waTrigger} onScrambleComplete={() => setWaTrigger(false)} speed={0.03} duration={0.5}>
                  Message via WhatsApp
                </TextScramble>
              </Button>
            </a>
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-20 mt-auto">
          {valueBrands.map((item, i) => (
            <div
              key={item.name}
              className="flex items-center gap-3 border-b border-white/20 pb-4"
              style={{
                transform: visible ? "translateY(0)" : "translateY(40px)",
                opacity: visible ? 1 : 0,
                transition: `transform 1.1s cubic-bezier(0.25,1,0.5,1) ${i * 220}ms, opacity 1s ease ${i * 220}ms`,
              }}
            >
              <div className="shrink-0 w-6 h-6 relative opacity-70">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-[1.25rem] lg:text-[14px] font-medium tracking-wide text-[#8a8a8a] capitalize">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
