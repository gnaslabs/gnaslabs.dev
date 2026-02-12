import type { UITranslations } from '../types';

export const en = {
	meta: {
		title: 'NS Labs - Research & Development',
		description:
			'NS Labs is a research and development team from Ho Chi Minh City, building digital products that support everyday life.',
		ogDescription:
			'Building digital products that support everyday life and optimize user experience.',
	},
	nav: {
		about: 'About',
		products: 'Products',
		contact: 'Contact',
	},
	hero: {
		subtitle: 'Research & Development \u2022 Ho Chi Minh City',
		description:
			'We research and develop {highlight} that support everyday life \u2014 optimizing user experience from e-commerce to personal finance to education.',
		descriptionHighlight: 'digital products',
		viewProducts: 'View Products',
	},
	about: {
		heading: 'About',
		paragraphs: [
			'NS Labs is a research and development team dedicated to building digital solutions that support everyday life. We focus on optimizing user experience across every product we create.',
			'From concept to deployment, we handle everything end-to-end \u2014 product vision, design, development, and operations. This means lean, focused products that ship fast and evolve based on real usage.',
		],
	},
	contact: {
		heading: 'Get in Touch',
		description: 'Interested in collaborating or just want to say hi? Feel free to reach out.',
		emailLabel: 'Email',
		blogLabel: 'Blog',
	},
	modal: {
		close: 'Close',
		visitPrefix: 'Visit ',
	},
} satisfies UITranslations;
