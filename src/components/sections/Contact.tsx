import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Mail } from 'lucide-react';

export function Contact() {
	return (
		<section id="contact" className="py-24 md:py-32">
			<Container>
				<SectionHeading title="Get in Touch" />
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="flex flex-col items-center text-center"
				>
					<p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
						Interested in collaborating or just want to say hi? Feel free to reach
						out.
					</p>
					<motion.a
						href="mailto:ngosangns@gmail.com"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						whileHover={{ scale: 1.1, y: -3 }}
						className="glow-hover flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors p-4 rounded-xl"
					>
						<Mail className="h-7 w-7" />
						<span className="text-sm font-medium">Email</span>
					</motion.a>
				</motion.div>
				<div className="mt-20 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground/60">
					&copy; {new Date().getFullYear()} ngosangns
				</div>
			</Container>
		</section>
	);
}
