import { LogoCloud } from "@/components/ui/logo-cloud-4";

const logos = [
  { src: "/brand 01.svg", alt: "Brand 01" },
  { src: "/brand 02.svg", alt: "Brand 02" },
  { src: "/brand 03.svg", alt: "Brand 03" },
  { src: "/brand 04.svg", alt: "Brand 04" },
  { src: "/brand 05.svg", alt: "Brand 05" },
  { src: "/brand 06.svg", alt: "Brand 06" },
];

export default function ClientLogos() {
  return (
    <section className="py-20 md:py-28 bg-black overflow-hidden">
      <LogoCloud logos={logos} />
    </section>
  );
}
