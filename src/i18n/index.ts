import type { Locale, UITranslations } from './types';
import type { Project } from '@/data/projects';
import { projectStructures } from '@/data/projects';
import { en } from './translations/en';
import { vi } from './translations/vi';
import { projectsEn } from './projects/en';
import { projectsVi } from './projects/vi';

const uiTranslations: Record<Locale, UITranslations> = { en, vi };

const projectTranslations: Record<Locale, typeof projectsEn> = {
	en: projectsEn,
	vi: projectsVi,
};

export function getTranslations(locale: Locale): UITranslations {
	return uiTranslations[locale];
}

export function getLocalizedProjects(locale: Locale): Project[] {
	const translations = projectTranslations[locale];
	return projectStructures.map((structure, i) => ({
		key: structure.key,
		category: structure.category,
		url: structure.url,
		title: translations[i].title,
		description: translations[i].description,
		tagline: translations[i].tagline,
		highlights: translations[i].highlights,
		featureGroups: structure.featureGroups.map((group, gi) => ({
			heading: translations[i].featureGroups[gi].heading,
			features: group.features.map((feature, fi) => ({
				icon: feature.icon,
				title: translations[i].featureGroups[gi].features[fi].title,
				description: translations[i].featureGroups[gi].features[fi].description,
			})),
		})),
	}));
}
