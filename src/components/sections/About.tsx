import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const paragraphs = [
  "As an indie developer, I handle everything end-to-end: product vision, design, development, and deployment. This means lean, focused products that ship fast and evolve based on real usage.",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <SectionHeading title="About" />
        <div className="max-w-2xl space-y-6">
          {paragraphs.map((text, i) => (
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
