"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How much does a project cost?",
    answer: "It depends on scope and complexity. We work with fixed-price packages, not hourly rates. Book a 15-min call and we'll give you an exact quote based on your needs.",
  },
  {
    question: "How long does it take?",
    answer: "Most projects ship in 4-8 weeks. Brand websites take 4-6 weeks, e-commerce 6-8 weeks, custom products 8-12 weeks. Timeline confirmed during kickoff.",
  },
  {
    question: "How does the process work?",
    answer: "We kick off with a discovery call, then build in weekly sprints so you're never left guessing. After launch, we stick around for 30 days to make sure everything runs smooth.",
  },
  {
    question: "What if the scope needs to change midway?",
    answer: "We reassess and adjust pricing if needed. Small tweaks are included. Major scope changes require a brief amendment to timeline and budget. We keep you in the loop before proceeding.",
  },
  {
    question: "Is there maintenance after the project?",
    answer: "All projects include 30 days of post-launch support. After that, you can opt for a monthly retainer or pay per request. No vendor lock-in — you own the code.",
  },
];

export default function QnA() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="approach" className="py-16 md:py-24 bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div className="space-y-6">
            <h2 className="text-[2rem] md:text-[52px] font-semibold leading-[1.2] font-sans text-left">
              Questions we often get.
            </h2>
            <p className="text-base md:text-[16px] text-text-secondary leading-relaxed font-sans max-w-md">
              Everything you need to know about partnering with Monnite Studio.
            </p>
          </div>

          <div className="w-full">
            {faqs.map((faq, i) => {
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
                    <span className="shrink-0 ml-4 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                      <span
                        className="block w-3 h-px bg-white transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(0deg)" : "rotate(0deg)" }}
                      />
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
