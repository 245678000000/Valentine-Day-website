import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import PhotoViewer from "./PhotoViewer";

import photo01 from "@/assets/photo-01.jpg";
import photo02 from "@/assets/photo-02.jpg";
import photo03 from "@/assets/photo-03.jpg";
import photo04 from "@/assets/photo-04.jpg";
import photo05 from "@/assets/photo-05.jpg";
import photo06 from "@/assets/photo-06.jpg";
import photo07 from "@/assets/photo-07.jpg";
import photo08 from "@/assets/photo-08.jpg";
import photo09 from "@/assets/photo-09.jpg";
import photo10 from "@/assets/photo-10.jpg";

const photos = [
  { src: photo01, caption: "最初的心动" },
  { src: photo02, caption: "温柔的日常" },
  { src: photo03, caption: "甜蜜瞬间" },
  { src: photo04, caption: "牵手同行" },
  { src: photo05, caption: "相视而笑" },
  { src: photo06, caption: "浪漫时光" },
  { src: photo07, caption: "幸福的模样" },
  { src: photo08, caption: "美好记忆" },
  { src: photo09, caption: "爱的印记" },
  { src: photo10, caption: "永恒承诺" },
];

const GallerySection = () => {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  return (
    <>
      <section className="py-20 px-4 md:px-8">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl text-center text-gradient-rose mb-16">
            我们的故事
          </h2>
        </ScrollReveal>

        {/* Masonry grid */}
        <div className="max-w-5xl mx-auto columns-2 md:columns-3 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <ScrollReveal key={i} delay={(i % 3) * 0.1}>
              <div
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                onClick={() => setViewerIndex(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-foreground/90 text-sm font-display">{photo.caption}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {viewerIndex !== null && (
        <PhotoViewer
          photos={photos.map((p) => p.src)}
          initialIndex={viewerIndex}
          onClose={() => setViewerIndex(null)}
        />
      )}
    </>
  );
};

export default GallerySection;
