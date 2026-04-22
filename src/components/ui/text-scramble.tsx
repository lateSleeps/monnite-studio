'use client';
import { useEffect, useState } from 'react';

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
};

const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);

  const scramble = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      const progress = step / steps;
      let scrambled = '';

      for (let i = 0; i < children.length; i++) {
        if (children[i] === ' ') { scrambled += ' '; continue; }
        if (progress * children.length > i) {
          scrambled += children[i];
        } else {
          scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(children);
        setIsAnimating(false);
        onScrambleComplete?.();
      }
    }, speed * 1000);
  };

  useEffect(() => {
    if (!trigger) return;
    scramble();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  // Sync display text when children change (language switch)
  useEffect(() => {
    if (!isAnimating) setDisplayText(children);
  }, [children, isAnimating]);

  return (
    <Component className={`relative inline-block ${className ?? ''}`}>
      <span aria-hidden className="invisible">{children}</span>
      <span className="absolute inset-0 flex items-center justify-center">{displayText}</span>
    </Component>
  );
}
