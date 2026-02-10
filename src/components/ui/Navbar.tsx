import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
	{ label: 'About', href: '#about' },
	{ label: 'Products', href: '#projects' },
	{ label: 'Contact', href: '#contact' },
];

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);

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
				<a href="#hero" className="font-bold text-sm gradient-text">
					ns
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
			</div>
		</nav>
	);
}
