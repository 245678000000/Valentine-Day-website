import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const ConfessionSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 text-center relative overflow-hidden">
      {/* Decorative hearts */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] text-primary pointer-events-none select-none"
      >
        ♥
      </motion.div>

      <div className="relative z-10 max-w-xl mx-auto space-y-8">
        <ScrollReveal>
          <p className="font-display text-2xl md:text-3xl text-foreground/90 leading-relaxed">
            从遇见你的那天起，<br />
            我的世界就多了一束光。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-display text-2xl md:text-3xl text-foreground/90 leading-relaxed">
            感谢每一个有你的日子，<br />
            愿余生都是你。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="pt-8 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl text-gradient-rose">
              情人节快乐
            </h2>
            <p className="text-muted-foreground text-lg tracking-widest">
              2026年2月14日
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="flex justify-center gap-3 pt-6">
            {["♥", "♥", "♥"].map((h, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                className="text-2xl text-primary"
              >
                {h}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ConfessionSection;
