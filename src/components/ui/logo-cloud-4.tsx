import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = { src: string; alt: string };

type LogoCloudProps = { logos: Logo[] };

function LogoImg({ logo }: { logo: Logo }) {
  return (
    <img
      alt={logo.alt}
      className="h-16 md:h-24 select-none brightness-0 invert opacity-50"
      height="auto"
      width="auto"
      loading="lazy"
      src={logo.src}
      draggable={false}
    />
  );
}

export function LogoCloud({ logos }: LogoCloudProps) {
  const half = Math.ceil(logos.length / 2);
  const row1 = logos.slice(0, half);
  const row2 = logos.slice(half);

  return (
    <div className="relative mx-auto w-full py-6 select-none">

      {/* Desktop: single row */}
      <div className="hidden md:block">
        <InfiniteSlider gap={64} reverse speed={60}>
          {logos.map((logo) => <LogoImg key={logo.alt} logo={logo} />)}
        </InfiniteSlider>
      </div>

      {/* Mobile: two rows */}
      <div className="flex md:hidden flex-col gap-6">
        <InfiniteSlider gap={40} speed={40}>
          {row1.map((logo) => <LogoImg key={logo.alt} logo={logo} />)}
        </InfiniteSlider>
        <InfiniteSlider gap={40} reverse speed={40}>
          {row2.map((logo) => <LogoImg key={logo.alt} logo={logo} />)}
        </InfiniteSlider>
      </div>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[80px] md:w-[120px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[80px] md:w-[120px]"
        direction="right"
      />
    </div>
  );
}
