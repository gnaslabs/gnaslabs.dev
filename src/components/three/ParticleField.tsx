import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 400;
const SPREAD_X = 25;
const SPREAD_Y = 20;
const SPREAD_Z = 15;

function createParticleData() {
	const geo = new THREE.BufferGeometry();
	const positions = new Float32Array(PARTICLE_COUNT * 3);
	const colors = new Float32Array(PARTICLE_COUNT * 3);
	const vels = new Float32Array(PARTICLE_COUNT);
	const offs = new Float32Array(PARTICLE_COUNT);

	const cyan = new THREE.Color('#06b6d4');
	const purple = new THREE.Color('#8b5cf6');
	const teal = new THREE.Color('#14b8a6');
	const palette = [cyan, purple, teal];

	for (let i = 0; i < PARTICLE_COUNT; i++) {
		positions[i * 3] = (Math.random() - 0.5) * SPREAD_X;
		positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD_Y;
		positions[i * 3 + 2] = (Math.random() - 0.5) * SPREAD_Z;

		vels[i] = Math.random() * 0.3 + 0.1;
		offs[i] = Math.random() * Math.PI * 2;

		const color = palette[Math.floor(Math.random() * palette.length)];
		const variation = 0.8 + Math.random() * 0.4;
		colors[i * 3] = color.r * variation;
		colors[i * 3 + 1] = color.g * variation;
		colors[i * 3 + 2] = color.b * variation;
	}

	geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
	geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

	return { geometry: geo, velocities: vels, offsets: offs };
}

const initialParticleData = createParticleData();

export function ParticleField() {
	const pointsRef = useRef<THREE.Points>(null);

	const { geometry, velocities, offsets } = initialParticleData;

	useFrame((state) => {
		if (!pointsRef.current) return;
		const positions = pointsRef.current.geometry.attributes.position
			.array as Float32Array;
		const time = state.clock.elapsedTime;

		for (let i = 0; i < PARTICLE_COUNT; i++) {
			// Float upward like bioluminescent plankton
			positions[i * 3 + 1] += velocities[i] * 0.008;

			// Gentle horizontal drift (sine wave current)
			positions[i * 3] += Math.sin(time * 0.3 + offsets[i]) * 0.003;
			positions[i * 3 + 2] += Math.cos(time * 0.2 + offsets[i]) * 0.002;

			// Reset to bottom when reaching top
			if (positions[i * 3 + 1] > SPREAD_Y / 2) {
				positions[i * 3 + 1] = -SPREAD_Y / 2;
				positions[i * 3] = (Math.random() - 0.5) * SPREAD_X;
				positions[i * 3 + 2] = (Math.random() - 0.5) * SPREAD_Z;
			}
		}

		pointsRef.current.geometry.attributes.position.needsUpdate = true;
		pointsRef.current.rotation.y = time * 0.01;
	});

	return (
		<points ref={pointsRef} geometry={geometry}>
			<pointsMaterial
				size={0.06}
				vertexColors
				transparent
				opacity={0.7}
				sizeAttenuation
				blending={THREE.AdditiveBlending}
				depthWrite={false}
			/>
		</points>
	);
}
