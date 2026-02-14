import { ChevronDown } from "lucide-react";
import photo01 from "@/assets/photo-01.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={photo01}
          alt="封面照片"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Title */}
      <div className="relative z-20 text-center px-6">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-gradient-rose mb-6 leading-tight">
          我从来都是为你而来
        </h1>
        <p className="text-foreground/70 text-lg md:text-xl tracking-widest">
          ❤️ Happy Valentine's Day ❤️
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <ChevronDown className="w-8 h-8 text-primary animate-bounce-arrow" />
      </div>
    </section>
  );
};

export default HeroSection;
