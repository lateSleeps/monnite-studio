"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TextScramble } from "@/components/ui/text-scramble";
import { PlusIcon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const WA_NUMBER = "6285111221632";

export default function ContactForm() {
  const { t } = useLanguage();
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `Hi Monnite! 👋\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative min-h-[100svh] py-16 md:py-24 flex items-center justify-center"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://cdn.prod.website-files.com/69e19dfc28bc918295d51fb4/69e1d7ccaa8c4fcef7745b03_BG.jpg")',
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/10 backdrop-blur-[2px]" />

      <div className="relative z-10 w-full px-6 md:px-8 lg:px-16 max-w-2xl mx-auto">
        <div className="relative bg-[#141414] border border-border rounded-[4px] p-8 md:p-12 shadow-2xl">
          <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-white/40" />
          <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-white/40" />
          <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-white/40" />
          <PlusIcon className="absolute -bottom-3 -right-3 h-6 w-6 text-white/40" />

          <div className="space-y-2 mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {t.contact.heading.split(" a ").map((part, i) =>
                i === 0 ? <span key={i}>{part} a<br /></span> : <span key={i}>{part}</span>
              )}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed pt-2">
              {t.contact.subheading}
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">{t.contact.nameLabel}</Label>
              <Input
                id="name"
                type="text"
                placeholder={t.contact.namePlaceholder}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">{t.contact.emailLabel}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t.contact.emailPlaceholder}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">{t.contact.messageLabel}</Label>
              <Textarea
                id="message"
                placeholder={t.contact.messagePlaceholder}
                className="min-h-[120px]"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button
              className="w-full rounded-[4px] bg-white text-black hover:bg-white/90 h-10 font-medium border-0 cursor-pointer"
              type="submit"
              onMouseEnter={() => setSubmitTrigger(true)}
            >
              <TextScramble as="span" trigger={submitTrigger} onScrambleComplete={() => setSubmitTrigger(false)} speed={0.03} duration={0.5}>
                {t.contact.cta}
              </TextScramble>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
