import type { ProjectTranslation } from '../types';

export const projectsEn: ProjectTranslation[] = [
	{
		title: 'NS Shop',
		description:
			'An online fashion store. Users can search products by multiple criteria, view variant details, place orders, and track delivery status. Supports COD and bank transfer payments.',
		tagline: 'Online fashion shopping.',
		highlights: ['Product search & filter', 'Order & tracking'],
		featureGroups: [
			{
				heading: 'Shopping',
				features: [
					{
						title: 'Search & filter',
						description:
							'Filter by category, size, color, brand, or search by keyword. Results update instantly without page reload.',
					},
					{
						title: 'Product variants',
						description:
							'Each product has full size and color options. Price and stock update in real time when selecting a variant.',
					},
					{
						title: 'Product reviews',
						description:
							'Buyers can leave ratings and reviews. Helps future buyers make informed decisions.',
					},
					{
						title: 'Wishlist',
						description:
							'Save products you like to revisit later, so you don\u2019t lose track when you\u2019re not ready to buy yet.',
					},
				],
			},
			{
				heading: 'Cart & checkout',
				features: [
					{
						title: 'Shop without an account',
						description:
							'Add to cart without signing up. Your cart is saved automatically, ready when you come back.',
					},
					{
						title: 'Flexible payment',
						description:
							'Pay with cash on delivery (COD) or bank transfer.',
					},
					{
						title: 'Address management',
						description:
							'Save multiple delivery addresses and set a default. Faster checkout next time.',
					},
					{
						title: 'Order tracking',
						description:
							'View order status in real time and receive automatic email notifications at each step.',
					},
				],
			},
		],
	},
	{
		title: 'NS Money',
		description:
			'A personal finance tracker. Supports transaction input via natural language AI, quick logging via Telegram bot, and visual spending analytics through charts.',
		tagline: 'Personal finance management.',
		highlights: ['AI input', 'Telegram bot', 'Charts & analytics'],
		featureGroups: [
			{
				heading: 'Income & expenses',
				features: [
					{
						title: 'Multiple wallets',
						description:
							'Separate savings, daily spending, business — each wallet serves a different purpose.',
					},
					{
						title: 'Transaction categories',
						description:
							'Customize income/expense categories and add notes to each transaction for easy lookup later.',
					},
					{
						title: 'Transaction history',
						description:
							'Look up transactions by date, amount, wallet, or category. Data is always ready when you need it.',
					},
					{
						title: 'Multi-currency',
						description:
							'Supports VND, USD, and other currencies. Suitable if you have international transactions.',
					},
				],
			},
			{
				heading: 'AI assistant',
				features: [
					{
						title: 'Receipt scanning',
						description:
							'Take a photo of a receipt, AI automatically reads the amount and details. No manual entry needed.',
					},
					{
						title: 'Natural language input',
						description:
							'Type "coffee 50k" or "salary 15M" — AI understands immediately and creates the corresponding transaction.',
					},
					{
						title: 'Flexible parsing',
						description:
							'Abbreviations, multiple transactions in one sentence, different currency formats — AI handles them all.',
					},
					{
						title: 'Auto-categorize',
						description:
							'Describe expenses in everyday language, AI automatically assigns the appropriate category.',
					},
				],
			},
			{
				heading: 'Telegram bot',
				features: [
					{
						title: 'Quick logging',
						description:
							'Send a message to the bot to log expenses instantly. Handy when on the go, no need to open the app.',
					},
					{
						title: 'Query via message',
						description:
							'Check balances, view recent transactions, get spending stats — just message the bot.',
					},
					{
						title: 'Periodic reports',
						description:
							'Get income/expense summaries by day, week, month, or year right in Telegram.',
					},
					{
						title: 'Security',
						description:
							'Link your account with a one-time verification code. Only you can access your data.',
					},
				],
			},
			{
				heading: 'Analytics',
				features: [
					{
						title: 'Income & expense charts',
						description:
							'Income and spending displayed visually through charts. Compare across any time period.',
					},
					{
						title: 'Spending by category',
						description:
							'Detailed breakdown of where your money goes — see each category\u2019s share of total spending.',
					},
					{
						title: 'Heatmap',
						description:
							'Spot spending patterns by day of week and month through a heatmap.',
					},
					{
						title: 'Cumulative balance',
						description:
							'Track balance and savings rate over time through a cumulative chart.',
					},
				],
			},
		],
	},
	{
		title: 'Vocab',
		description:
			'An English vocabulary learning app. Uses spaced repetition algorithms for effective review, AI generates exercises and auto-grades answers, with a leaderboard to compete with other learners.',
		tagline: 'English vocabulary learning.',
		highlights: ['Spaced repetition', 'AI exercises', 'Leaderboard'],
		featureGroups: [
			{
				heading: 'Review',
				features: [
					{
						title: 'Spaced repetition',
						description:
							'Algorithm calculates optimal review timing for each word, helping with long-term retention instead of learn-and-forget.',
					},
					{
						title: 'Adaptive difficulty',
						description:
							'Automatically adjusts difficulty to your actual level. Always challenging enough without being overwhelming.',
					},
					{
						title: 'Sessions ready to go',
						description:
							'Review sessions are pre-computed in the background. Open the app and start learning right away, no waiting.',
					},
					{
						title: '60/40 ratio',
						description:
							'Balances new words (60%) and reviews (40%) to optimize retention.',
					},
				],
			},
			{
				heading: 'Practice',
				features: [
					{
						title: 'Vocabulary',
						description:
							'Learn new words with detailed definitions, pronunciation, and examples in real-world context.',
					},
					{
						title: 'Grammar',
						description:
							'Error-spotting exercises — from tenses, subject-verb agreement to complex sentence structures.',
					},
					{
						title: 'Reading comprehension',
						description:
							'Passages with true/false and short-answer questions. Gradually improve reading skills.',
					},
					{
						title: 'AI quizzes',
						description:
							'Questions generated by AI, multiple difficulty levels, content always fresh and never repetitive.',
					},
				],
			},
			{
				heading: 'AI assistant',
				features: [
					{
						title: 'AI dictionary',
						description:
							'Detailed definitions with examples, synonyms, antonyms — all deeply curated by AI.',
					},
					{
						title: 'Bilingual English-Vietnamese',
						description:
							'Every definition available in both English and Vietnamese, helping deeper understanding and faster recall.',
					},
					{
						title: 'Personalized exercises',
						description:
							'AI creates new exercises based on your keywords and chosen difficulty. Content always matches your level.',
					},
					{
						title: 'Auto-grading',
						description:
							'Write free-form answers, AI scores and gives detailed feedback on what\u2019s correct and what needs improvement.',
					},
				],
			},
			{
				heading: 'Competition',
				features: [
					{
						title: 'Learning heatmap',
						description:
							'A GitHub-style heatmap showing each day you studied. The longer the streak, the stronger the motivation.',
					},
					{
						title: 'Skill rankings',
						description:
							'Separate MMR scores for vocabulary, grammar, and reading. Climb from Bronze to Master.',
					},
					{
						title: 'Leaderboard',
						description:
							'Compare progress with other learners on the leaderboard. Filter by language and skill type.',
					},
					{
						title: 'Personal stats',
						description:
							'Track learning streaks, accuracy rate, and words mastered over time.',
					},
				],
			},
			{
				heading: 'Organization',
				features: [
					{
						title: 'Collections',
						description:
							'Create custom collections to group vocabulary, exercises, and content by your own topics.',
					},
					{
						title: 'Save while learning',
						description:
							'Spot a new word during practice? One tap to save it with context, nothing gets missed.',
					},
					{
						title: 'Keyword vault',
						description:
							'Build your own personal keyword dictionary — track where each word appears and what it means.',
					},
					{
						title: 'Bookmarks',
						description:
							'Bookmark vocabulary, grammar, quizzes, reading passages — all neatly organized in one place.',
					},
				],
			},
		],
	},
	{
		title: 'NS Drive',
		description:
			'A desktop app for syncing files across multiple cloud services. Connect Google Drive, Dropbox, OneDrive, and more into a single interface. Design sync workflows with drag-and-drop, schedule automation, AES-256 encryption.',
		tagline: 'Sync multiple clouds in one app.',
		highlights: ['Multiple clouds', 'Drag-and-drop workflows', 'AES-256 encryption'],
		featureGroups: [
			{
				heading: 'Cloud connections',
				features: [
					{
						title: 'Multiple services',
						description:
							'Google Drive, Dropbox, OneDrive, iCloud, and dozens more — all in a single interface.',
					},
					{
						title: 'Sync modes',
						description:
							'One-way, two-way, or copy. File conflicts are resolved automatically based on rules you choose.',
					},
					{
						title: 'Detailed configuration',
						description:
							'Over 60 options: bandwidth limits, file filters by name/size, safety controls.',
					},
					{
						title: 'Parallel execution',
						description:
							'Multiple sync tasks run simultaneously, each with its own progress tracking and logs.',
					},
				],
			},
			{
				heading: 'Workflows',
				features: [
					{
						title: 'Drag & drop canvas',
						description:
							'Design multi-step sync workflows on a visual canvas. Connect data sources by dragging and dropping.',
					},
					{
						title: 'DAG execution',
						description:
							'Workflows run as directed acyclic graphs — automatic dependency resolution between steps and cycle detection.',
					},
					{
						title: 'Cron scheduling',
						description:
							'Automate any workflow on a cron schedule. View previous runs, next runs, and results.',
					},
					{
						title: 'Launch from system tray',
						description:
							'Start workflows directly from the system tray without opening the app window.',
					},
				],
			},
			{
				heading: 'File management',
				features: [
					{
						title: 'Browse files',
						description:
							'Access files on any service from one interface — browse, create folders, delete, move.',
					},
					{
						title: 'Transfer files',
						description:
							'Move files between cloud services or to/from your computer, with real-time progress updates.',
					},
					{
						title: 'Cleanup',
						description:
							'Detect duplicate files, verify data integrity, calculate storage usage.',
					},
					{
						title: 'History',
						description:
							'Full log of all sync and file operations — transfer stats, duration, and status.',
					},
				],
			},
			{
				heading: 'Security',
				features: [
					{
						title: 'AES-256 encryption',
						description:
							'All sensitive data encrypted with AES-256-GCM. Tokens and database are fully protected.',
					},
					{
						title: 'Master password',
						description:
							'Set a master password with Argon2id hashing. Rate-limited unlock attempts to prevent brute-force.',
					},
					{
						title: 'Config backup',
						description:
							'Export your entire configuration — boards, data sources, settings — to a single compressed file for backup or sharing.',
					},
					{
						title: 'Cross-platform',
						description:
							'Native desktop app for macOS, Linux, and Windows. System tray integration, starts with your machine.',
					},
				],
			},
		],
	},
	{
		title: 'NS Tracing',
		description:
			'A browser debugging toolkit. The extension records debug sessions including screen video, console logs, network requests, and WebSocket frames. The server replays recordings with a synced timeline, marking errors and requests so you can jump straight to the problem. Supports source maps to decode minified code.',
		tagline: 'Record and replay browser debug sessions.',
		highlights: ['Recording + logs', 'Synced replay', 'Source maps'],
		featureGroups: [
			{
				heading: 'Capture (Extension)',
				features: [
					{
						title: 'Screen recording',
						description:
							'Record browser tab video in VP9/VP8 with audio. Click a button to start, no complex setup needed.',
					},
					{
						title: 'Console logs',
						description:
							'Capture all logs, warnings, errors with full object details — like having DevTools running in the background throughout the debug session.',
					},
					{
						title: 'Network requests',
						description:
							'Save all network activity: headers, bodies, timing, status codes for each request and response.',
					},
					{
						title: 'WebSocket frames',
						description:
							'Capture every frame sent and received on WebSocket connections, for debugging real-time protocols.',
					},
				],
			},
			{
				heading: 'Export & share',
				features: [
					{
						title: 'Source maps',
						description:
							'Stack traces from minified code are decoded back to original source — find errors at the right file and line.',
					},
					{
						title: 'Download ZIP',
						description:
							'Entire debug session — video, logs, network — packed into a single ZIP file ready to share.',
					},
					{
						title: 'Upload to server',
						description:
							'Push recordings to NS Tracing Server for centralized storage and team sharing.',
					},
					{
						title: 'Share link',
						description:
							'Generate a view URL right after upload. Teammates open the link and watch, no setup required.',
					},
				],
			},
			{
				heading: 'Replay (Server)',
				features: [
					{
						title: 'Synced video + logs',
						description:
							'Video and logs play in sync — see exactly what happened on screen when the error occurred.',
					},
					{
						title: 'Smart timeline',
						description:
							'Timeline bar with automatic markers. Red for errors, blue for network requests — jump to any moment with one click.',
					},
					{
						title: 'Detailed console',
						description:
							'Browse logs with timestamps, severity levels, and stack traces. Source maps point to the exact line in original code.',
					},
					{
						title: 'Network & WebSocket analysis',
						description:
							'Inspect each HTTP request and WebSocket frame — headers, status codes, payloads, response times.',
					},
				],
			},
		],
	},
];
