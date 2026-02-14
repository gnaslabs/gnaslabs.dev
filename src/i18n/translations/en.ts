import type { UITranslations } from '../types';

export const en = {
	meta: {
		title: 'NS Labs',
		description:
			'Digital products I build and run on my own — from fashion shopping, personal finance, vocabulary learning to developer tools.',
		ogDescription:
			'Personal digital products — shopping, finance, vocabulary, cloud sync, browser debugging.',
	},
	nav: {
		about: 'About',
		products: 'Products',
		contact: 'Contact',
	},
	hero: {
		subtitle: 'Ho Chi Minh City',
		description:
			'I\u2019m a software engineer, and this is where I put together the {highlight} I build — for everyday needs from shopping, personal finance, vocabulary learning to software development.',
		descriptionHighlight: 'digital products',
		viewProducts: 'View Products',
	},
	about: {
		heading: 'About',
		paragraphs: [
			'NS Labs is where I put together my personal projects. Each product comes from a real need of mine — from idea, design, code to operations, all done by myself.',
			'I prioritize making things simple, easy to use, and solving the right problem. If you find any product useful, feel free to give it a try.',
		],
	},
	contact: {
		heading: 'Contact',
		description:
			'Want to share feedback, discuss a product, or just chat? Drop me an email.',
		emailLabel: 'Email',
		blogLabel: 'Blog',
	},
	modal: {
		close: 'Close',
		visitPrefix: 'Visit ',
	},
} satisfies UITranslations;
