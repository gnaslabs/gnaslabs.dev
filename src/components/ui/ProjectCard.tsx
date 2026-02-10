import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';

export function ProjectCard({
	project,
	onSelect,
}: {
	project: Project;
	onSelect: () => void;
}) {
	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;
		const rect = cardRef.current.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		cardRef.current.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
	};

	const handleMouseLeave = () => {
		if (!cardRef.current) return;
		cardRef.current.style.transform =
			'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';
	};

	return (
		<div
			role="button"
			tabIndex={0}
			ref={cardRef}
			onClick={onSelect}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					onSelect();
				}
			}}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="block cursor-pointer gradient-border rounded-xl p-6 bg-card/40 backdrop-blur-sm border border-border/30 transition-[transform] duration-200 ease-out will-change-transform"
		>
			<div className="flex items-start justify-between mb-4">
				<h3 className="text-lg font-semibold gradient-text">{project.title}</h3>
				<ExternalLink className="h-4 w-4 text-muted-foreground" />
			</div>
			<p className="text-sm text-muted-foreground mb-5 leading-relaxed">
				{project.description}
			</p>
			<div className="flex flex-wrap gap-1.5">
				{project.highlights.map((h) => (
					<span
						key={h}
						className="text-xs px-2.5 py-1 rounded-full bg-accent/80 text-accent-foreground border border-border/30"
					>
						{h}
					</span>
				))}
			</div>
		</div>
	);
}
