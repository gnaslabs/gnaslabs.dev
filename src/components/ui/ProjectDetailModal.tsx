import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';

const backdropVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
	exit: { opacity: 0 },
};

const panelVariants = {
	hidden: { opacity: 0, scale: 0.95, y: 20 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
	},
	exit: {
		opacity: 0,
		scale: 0.97,
		y: 10,
		transition: { duration: 0.25, ease: 'easeIn' as const },
	},
};

const groupVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const featureVariants = {
	hidden: { opacity: 0, y: 12 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: 'easeOut' as const },
	},
};

export function ProjectDetailModal({
	project,
	onClose,
}: {
	project: Project | null;
	onClose: () => void;
}) {
	useEffect(() => {
		if (!project) return;
		document.body.style.overflow = 'hidden';
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', handleKey);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleKey);
		};
	}, [project, onClose]);

	return (
		<AnimatePresence>
			{project && (
				<motion.div
					key="modal-backdrop"
					variants={backdropVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm overflow-y-auto py-8 px-4"
					onClick={(e) => {
						if (e.target === e.currentTarget) onClose();
					}}
				>
					<motion.div
						variants={panelVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="relative w-full max-w-3xl bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl shadow-primary/5 my-auto"
					>
						{/* Header */}
						<div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-8 pt-8 pb-4 bg-card/95 backdrop-blur-xl rounded-t-2xl border-b border-border/30">
							<div>
								<h2 className="text-3xl font-bold gradient-text">{project.title}</h2>
								<p className="text-muted-foreground mt-1">{project.tagline}</p>
							</div>
							<button
								onClick={onClose}
								className="shrink-0 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
								aria-label="Close"
							>
								<X className="h-5 w-5" />
							</button>
						</div>

						{/* Content */}
						<div className="px-8 py-6 space-y-8">
							<p className="text-muted-foreground leading-relaxed">{project.description}</p>

							<motion.div
								variants={groupVariants}
								initial="hidden"
								animate="visible"
								className="space-y-8"
							>
								{project.featureGroups.map((group) => (
									<div key={group.heading}>
										<h3 className="text-sm font-semibold uppercase tracking-wider text-primary/80 mb-4">
											{group.heading}
										</h3>
										<div className="grid gap-3 sm:grid-cols-2">
											{group.features.map((feature) => {
												const Icon = feature.icon;
												return (
													<motion.div
														key={feature.title}
														variants={featureVariants}
														className="flex gap-3 p-3 rounded-xl bg-muted/30 border border-border/20"
													>
														<div className="shrink-0 mt-0.5">
															<Icon className="h-4 w-4 text-primary" />
														</div>
														<div>
															<p className="text-sm font-medium text-foreground">
																{feature.title}
															</p>
															<p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
																{feature.description}
															</p>
														</div>
													</motion.div>
												);
											})}
										</div>
									</div>
								))}
							</motion.div>
						</div>

						{/* Footer */}
						<div className="sticky bottom-0 z-10 flex items-center justify-between gap-4 px-8 py-6 bg-card/95 backdrop-blur-xl rounded-b-2xl border-t border-border/30">
							<button
								onClick={onClose}
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Close
							</button>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="glow-hover inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:scale-[1.02] transition-transform"
							>
								Visit {project.title} <ExternalLink className="h-4 w-4" />
							</a>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
