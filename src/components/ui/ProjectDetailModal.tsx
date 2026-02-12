import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useLanguage } from '@/stores/LanguageContext';

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
	visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const featureVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.35, ease: 'easeOut' as const },
	},
};

export function ProjectDetailModal({
	project,
	onClose,
}: {
	project: Project | null;
	onClose: () => void;
}) {
	const { t } = useLanguage();

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
						className="relative w-full max-w-4xl bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl shadow-primary/5 my-auto"
					>
						{/* Close button */}
						<button
							onClick={onClose}
							className="absolute top-5 right-5 z-20 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
							aria-label={t.modal.close}
						>
							<X className="h-5 w-5" />
						</button>

						{/* Hero header */}
						<div className="px-8 md:px-10 pt-8 md:pt-10 pb-6">
							<h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
								{project.title}
							</h2>
							<p className="text-base text-muted-foreground italic mb-4">
								{project.tagline}
							</p>
							<p className="text-base text-foreground/80 leading-relaxed max-w-2xl">
								{project.description}
							</p>
							{project.highlights.length > 0 && (
								<div className="flex flex-wrap gap-2 mt-5">
									{project.highlights.map((h) => (
										<span
											key={h}
											className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
										>
											{h}
										</span>
									))}
								</div>
							)}
						</div>

						<div className="h-px bg-border/40 mx-8 md:mx-10" />

						{/* Feature groups */}
						<motion.div
							variants={groupVariants}
							initial="hidden"
							animate="visible"
							className="px-8 md:px-10 py-8 space-y-10"
						>
							{project.featureGroups.map((group) => (
								<div key={group.heading}>
									<h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-5">
										{group.heading}
									</h3>
									<div className="grid gap-4 sm:grid-cols-2">
										{group.features.map((feature) => {
											const Icon = feature.icon;
											return (
												<motion.div
													key={feature.title}
													variants={featureVariants}
													className="group flex gap-4 p-4 rounded-xl bg-muted/20 border border-border/15 hover:bg-muted/35 transition-colors"
												>
													<div className="shrink-0 flex items-center justify-center h-9 w-9 rounded-lg bg-primary/10 border border-primary/15">
														<Icon className="h-4 w-4 text-primary" />
													</div>
													<div className="min-w-0">
														<p className="text-sm font-semibold text-foreground mb-1">
															{feature.title}
														</p>
														<p className="text-sm text-muted-foreground leading-relaxed">
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

						{/* Footer */}
						<div className="flex items-center justify-between gap-4 px-8 md:px-10 py-5 border-t border-border/30 rounded-b-2xl">
							<button
								onClick={onClose}
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								{t.modal.close}
							</button>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="glow-hover inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:scale-[1.02] transition-transform"
							>
								{t.modal.visitPrefix}{project.title} <ExternalLink className="h-4 w-4" />
							</a>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
