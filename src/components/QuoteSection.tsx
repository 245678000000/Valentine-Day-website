import ScrollReveal from "./ScrollReveal";

const quotes = [
  "遇见你是最美丽的意外",
  "你是我写过最美的情书",
  "余生请多指教",
];

const QuoteSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 flex items-center justify-center">
      <div className="max-w-2xl text-center space-y-10">
        {quotes.map((q, i) => (
          <ScrollReveal key={i} delay={i * 0.2}>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground/90 leading-relaxed">
              「{q}」
            </p>
            {i < quotes.length - 1 && (
              <div className="mt-8 flex justify-center gap-2">
                {[0, 1, 2].map((d) => (
                  <span key={d} className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                ))}
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default QuoteSection;
