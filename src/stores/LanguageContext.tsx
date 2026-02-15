import {
	createContext,
	useContext,
	useState,
	useEffect,
	useMemo,
	type ReactNode,
} from 'react';
import type { Locale, UITranslations } from '@/i18n/types';
import type { Project } from '@/data/projects';
import { getTranslations, getLocalizedProjects } from '@/i18n';

const STORAGE_KEY = 'ns-lang';

function getLocaleFromPath(): Locale | null {
	const path = window.location.pathname;
	if (path === '/en' || path.startsWith('/en/')) return 'en';
	if (path === '/vi' || path.startsWith('/vi/')) return 'vi';
	return null;
}

function detectLocale(): Locale {
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'en' || stored === 'vi') return stored;
	const browserLang = navigator.language.toLowerCase();
	return browserLang.startsWith('vi') ? 'vi' : 'en';
}

function getInitialLocale(): Locale {
	const pathLocale = getLocaleFromPath();
	if (pathLocale) return pathLocale;
	return detectLocale();
}

interface LanguageContextValue {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: UITranslations;
	projects: Project[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

	// Redirect `/` to `/<locale>`, preserving hash
	useEffect(() => {
		if (!getLocaleFromPath()) {
			window.history.replaceState(null, '', `/${locale}${window.location.hash}`);
		}
	}, []);

	const setLocale = (newLocale: Locale) => {
		setLocaleState(newLocale);
		localStorage.setItem(STORAGE_KEY, newLocale);
		window.history.replaceState(null, '', `/${newLocale}${window.location.hash}`);
	};

	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);

	const value = useMemo<LanguageContextValue>(() => {
		const t = getTranslations(locale);
		const projects = getLocalizedProjects(locale);
		return { locale, setLocale, t, projects };
	}, [locale]);

	useEffect(() => {
		const { t } = value;
		document.title = t.meta.title;
		const metaDesc = document.querySelector('meta[name="description"]');
		if (metaDesc) metaDesc.setAttribute('content', t.meta.description);
		const ogTitle = document.querySelector('meta[property="og:title"]');
		if (ogTitle) ogTitle.setAttribute('content', t.meta.title);
		const ogDesc = document.querySelector('meta[property="og:description"]');
		if (ogDesc) ogDesc.setAttribute('content', t.meta.ogDescription);
	}, [value]);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage(): LanguageContextValue {
	const ctx = useContext(LanguageContext);
	if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
	return ctx;
}
