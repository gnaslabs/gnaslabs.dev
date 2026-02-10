import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectDetailModal } from '@/components/ui/ProjectDetailModal';
import { projects, type Project } from '@/data/projects';

export function Projects() {
	const [selected, setSelected] = useState<Project | null>(null);

	return (
		<section id="projects" className="py-24 md:py-32">
			<Container>
				<SectionHeading title="Products" />
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 30, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{
								duration: 0.6,
								delay: index * 0.12,
								ease: 'easeOut',
							}}
						>
							<ProjectCard project={project} onSelect={() => setSelected(project)} />
						</motion.div>
					))}
				</div>
			</Container>
			<ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
		</section>
	);
}
