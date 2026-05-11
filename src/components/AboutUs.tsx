"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language-context";

export default function AboutUs() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = videoContainerRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoVisible && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [videoVisible]);

  return (
    <section id="about" className="py-16 md:py-24 bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20 items-center">
          <div ref={videoContainerRef} className="w-full aspect-[3/4] rounded-[4px] overflow-hidden bg-[#111]">
            {videoVisible && (
              <video
                ref={videoRef}
                src="/Video monnite.mp4"
                loop
                muted
                playsInline
                preload="none"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div
            ref={textRef}
            className="space-y-6"
            style={{
              transform: visible ? "translateY(0)" : "translateY(40px)",
              opacity: visible ? 1 : 0,
              transition: "transform 1.1s cubic-bezier(0.25,1,0.5,1) 0ms, opacity 1s ease 0ms",
            }}
          >
            <h2 className="text-[2rem] md:text-[52px] font-semibold leading-[1.2] font-sans text-left">
              {t.about.heading}
            </h2>
            <div className="space-y-4 text-base md:text-[16px] text-text-secondary leading-relaxed font-sans max-w-2xl">
              <p>{t.about.body1}</p>
              <p>{t.about.body2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
