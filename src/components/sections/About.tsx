import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/stores/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <SectionHeading title={t.about.heading} />
        <div className="max-w-2xl space-y-6">
          {t.about.paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: "easeOut" as const,
              }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </Container>
    </section>
  );
}
