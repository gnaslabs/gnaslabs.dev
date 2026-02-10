import { useEffect, useRef } from 'react';
import { Scene } from '@/components/three/Scene';
import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export function App() {
	const glowRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!glowRef.current) return;
			glowRef.current.style.left = `${e.clientX}px`;
			glowRef.current.style.top = `${e.clientY}px`;
		};
		window.addEventListener('mousemove', handleMouseMove, { passive: true });
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<div className="relative min-h-screen bg-background text-foreground">
			<div ref={glowRef} className="cursor-glow hidden md:block" />
			<Scene />
			<div className="relative z-10">
				<Navbar />
				<Hero />
				<About />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}
