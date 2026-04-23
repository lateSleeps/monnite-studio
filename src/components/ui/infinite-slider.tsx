'use client';
import { cn } from '@/lib/utils';
import { memo } from 'react';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  reverse?: boolean;
  className?: string;
};

export const InfiniteSlider = memo(function InfiniteSlider({
  children,
  gap = 16,
  speed = 25,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className="flex w-max will-change-transform pointer-events-none"
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
});
