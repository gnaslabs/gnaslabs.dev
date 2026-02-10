import { motion } from 'framer-motion';

export function SectionHeading({ title }: { title: string }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.6 }}
			className="mb-14"
		>
			<h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text inline-block">
				{title}
			</h2>
			<div className="mt-3 h-px w-16 bg-linear-to-r from-primary to-secondary" />
		</motion.div>
	);
}
