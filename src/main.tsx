import { createRoot } from 'react-dom/client';
import { LanguageProvider } from '@/stores/LanguageContext';
import { App } from './App';
import './styles/globals.css';

createRoot(document.getElementById('root')!).render(
	<LanguageProvider>
		<App />
	</LanguageProvider>
);
