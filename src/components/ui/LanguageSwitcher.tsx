import { useLanguage } from '@/stores/LanguageContext';
import type { Locale } from '@/i18n/types';

const localeLabels: Record<Locale, string> = {
	en: 'EN',
	vi: 'VI',
};

export function LanguageSwitcher() {
	const { locale, setLocale } = useLanguage();
	const nextLocale: Locale = locale === 'en' ? 'vi' : 'en';

	return (
		<button
			onClick={() => setLocale(nextLocale)}
			className="text-sm text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded-md hover:bg-muted/30"
			aria-label={`Switch to ${localeLabels[nextLocale]}`}
		>
			{localeLabels[nextLocale]}
		</button>
	);
}
