import { motion } from "framer-motion";
import { Github, ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { useLanguage } from "@/stores/LanguageContext";

const nameLetters = "NS Labs".split("");

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.3 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring" as const, damping: 12, stiffness: 100 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  }),
};

export function Hero() {
  const { t } = useLanguage();
  const [before, after] = t.hero.description.split("{highlight}");

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <Container>
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="visible"
              className="text-sm md:text-base text-muted-foreground mb-4 tracking-widest uppercase"
            >
              {t.hero.subtitle}
            </motion.p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.2em]">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  className="gradient-text inline-block pr-[0.02em]"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={0.8}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
          >
            {before}
            <span className="text-primary">{t.hero.descriptionHighlight}</span>
            {after}
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={1.1}
            initial="hidden"
            animate="visible"
            className="flex gap-4"
          >
            <a
              href="#projects"
              className="glow-hover inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium hover:scale-[1.02] transition-transform"
            >
              {t.hero.viewProducts}
            </a>
            <a
              href="https://github.com/ngosangns"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:bg-card/60 transition-all hover:scale-[1.02]"
            >
              <Github className="h-5 w-5" /> GitHub
            </a>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown
          className="h-6 w-6 text-muted-foreground"
          style={{ animation: "scroll-pulse 2s ease-in-out infinite" }}
        />
      </motion.div>
    </section>
  );
}
