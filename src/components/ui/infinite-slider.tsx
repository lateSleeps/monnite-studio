'use client';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 25,
  speedOnHover,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (speedOnHover && trackRef.current) {
      trackRef.current.style.animationDuration = `${speedOnHover}s`;
    }
  };

  const handleMouseLeave = () => {
    if (speedOnHover && trackRef.current) {
      trackRef.current.style.animationDuration = `${speed}s`;
    }
  };

  return (
    <div
      className={cn('overflow-hidden', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes infinite-scroll-left  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes infinite-scroll-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      `}</style>
      <div
        ref={trackRef}
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          animation: `${reverse ? 'infinite-scroll-right' : 'infinite-scroll-left'} ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
