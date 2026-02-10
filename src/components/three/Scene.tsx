import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Suspense } from 'react';
import { ParticleField } from './ParticleField';
import { FloatingGeo } from './FloatingGeo';

export function Scene() {
	return (
		<div className="fixed inset-0 z-0">
			<Canvas
				camera={{ position: [0, 0, 6], fov: 60 }}
				dpr={[1, 1.5]}
				gl={{ antialias: true, alpha: true }}
			>
				<Suspense fallback={null}>
					<ambientLight intensity={0.2} />
					<pointLight position={[5, 5, 5]} intensity={0.4} color="#06b6d4" />
					<pointLight position={[-5, -3, 3]} intensity={0.3} color="#8b5cf6" />
					<ParticleField />
					<FloatingGeo />
					<Preload all />
				</Suspense>
			</Canvas>
		</div>
	);
}
