export type Locale = 'en' | 'vi';

export interface UITranslations {
	meta: {
		title: string;
		description: string;
		ogDescription: string;
	};
	nav: {
		about: string;
		products: string;
		contact: string;
	};
	hero: {
		subtitle: string;
		description: string;
		descriptionHighlight: string;
		viewProducts: string;
	};
	about: {
		heading: string;
		paragraphs: string[];
	};
	contact: {
		heading: string;
		description: string;
		emailLabel: string;
		blogLabel: string;
	};
	modal: {
		close: string;
		visitPrefix: string;
	};
}

export interface ProjectFeatureTranslation {
	title: string;
	description: string;
}

export interface ProjectFeatureGroupTranslation {
	heading: string;
	features: ProjectFeatureTranslation[];
}

export interface ProjectTranslation {
	title: string;
	description: string;
	tagline: string;
	highlights: string[];
	featureGroups: ProjectFeatureGroupTranslation[];
}
