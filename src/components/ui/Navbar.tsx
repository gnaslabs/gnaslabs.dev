import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/stores/LanguageContext';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const { t } = useLanguage();

	const navItems = [
		{ label: t.nav.about, href: '#about' },
		{ label: t.nav.products, href: '#projects' },
		{ label: t.nav.contact, href: '#contact' },
	];

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				'fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500',
				'px-6 py-3 rounded-full border',
				scrolled
					? 'bg-background/60 backdrop-blur-xl border-border/50 shadow-2xl shadow-primary/5'
					: 'bg-transparent border-transparent'
			)}
		>
			<div className="flex items-center gap-6">
				<a href="#hero" className="flex items-center gap-2 font-bold text-sm gradient-text">
					<svg
						viewBox="0 0 64 64"
						fill="none"
						className="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<linearGradient
								id="nav-logo-g"
								x1="0"
								y1="0"
								x2="64"
								y2="64"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0%" stopColor="#06b6d4" />
								<stop offset="50%" stopColor="#8b5cf6" />
								<stop offset="100%" stopColor="#14b8a6" />
							</linearGradient>
						</defs>
						<path
							d="M32 4L58 18V46L32 60L6 46V18Z"
							fill="url(#nav-logo-g)"
							opacity="0.12"
						/>
						<path
							d="M32 4L58 18V46L32 60L6 46V18Z"
							stroke="url(#nav-logo-g)"
							strokeWidth="3.5"
							strokeLinejoin="round"
						/>
						<path
							d="M32 4L32 60M6 18L58 46M58 18L6 46"
							stroke="url(#nav-logo-g)"
							strokeWidth="1.5"
							opacity="0.3"
						/>
						<circle cx="32" cy="32" r="5" fill="url(#nav-logo-g)" />
					</svg>
					gnas.dev
				</a>
				{navItems.map(({ label, href }) => (
					<a
						key={href}
						href={href}
						className="text-sm text-muted-foreground hover:text-primary transition-colors hidden sm:block"
					>
						{label}
					</a>
				))}
				<div className="h-4 w-px bg-border/30 hidden sm:block" />
				<LanguageSwitcher />
			</div>
		</nav>
	);
}
