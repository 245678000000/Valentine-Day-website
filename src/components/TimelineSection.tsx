import ScrollReveal from "./ScrollReveal";
import photo03 from "@/assets/photo-03.jpg";
import photo05 from "@/assets/photo-05.jpg";
import photo07 from "@/assets/photo-07.jpg";
import photo09 from "@/assets/photo-09.jpg";

const moments = [
  { img: photo03, title: "初次相遇", desc: "命运让我们在最美的时刻相遇" },
  { img: photo05, title: "心动瞬间", desc: "那一刻，我知道你就是对的人" },
  { img: photo07, title: "携手同行", desc: "从此山高水长，都不及你在身旁" },
  { img: photo09, title: "许下承诺", desc: "往后余生，风雪是你，平淡是你" },
];

const TimelineSection = () => {
  return (
    <section className="py-20 px-6">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl text-center text-gradient-rose mb-20">
          甜蜜时刻
        </h2>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden md:block" />

        {moments.map((m, i) => {
          const isLeft = i % 2 === 0;
          return (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`flex flex-col md:flex-row items-center gap-6 mb-16 ${isLeft ? "" : "md:flex-row-reverse"}`}>
                {/* Image */}
                <div className="w-full md:w-5/12">
                  <img
                    src={m.img}
                    alt={m.title}
                    className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg shadow-primary/10"
                    loading="lazy"
                  />
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse-glow" />
                </div>

                {/* Text */}
                <div className={`w-full md:w-5/12 ${isLeft ? "md:text-left" : "md:text-right"} text-center`}>
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">{m.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default TimelineSection;
