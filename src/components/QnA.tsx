"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export default function QnA() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="approach" className="py-16 md:py-24 bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div className="space-y-6">
            <h2 className="text-[2rem] md:text-[52px] font-semibold leading-[1.2] font-sans text-left">
              {t.qna.heading}
            </h2>
            <p className="text-base md:text-[16px] text-text-secondary leading-relaxed font-sans max-w-md">
              {t.qna.subheading}
            </p>
          </div>

          <div className="w-full">
            {t.qna.faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-b border-white/10">
                  <button
                    className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span className={`text-xl md:text-[24px] font-semibold font-sans transition-colors duration-300 ${isOpen ? "text-white" : "text-text-secondary"}`}>
                      {faq.question}
                    </span>
                    <span className="relative shrink-0 ml-4 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                      <span className="block w-3 h-px bg-white transition-transform duration-300" />
                      <span
                        className="absolute block w-3 h-px bg-white transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(90deg) scaleX(0)" : "rotate(90deg)" }}
                      />
                    </span>
                  </button>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.45s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    <div style={{ overflow: "hidden" }}>
                      <p className="text-base md:text-[16px] text-text-secondary leading-relaxed font-sans pb-8 max-w-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
