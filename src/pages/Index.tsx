import FallingHearts from "@/components/FallingHearts";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import GallerySection from "@/components/GallerySection";
import TimelineSection from "@/components/TimelineSection";
import ConfessionSection from "@/components/ConfessionSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <FallingHearts />
      <HeroSection />
      <QuoteSection />
      <GallerySection />
      <TimelineSection />
      <ConfessionSection />
    </main>
  );
};

export default Index;
