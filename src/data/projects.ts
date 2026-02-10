import type { LucideIcon } from 'lucide-react';
import {
	ShoppingBag,
	Search,
	Star,
	Heart,
	ShoppingCart,
	CreditCard,
	MapPin,
	Truck,
	LayoutDashboard,
	Package,
	ClipboardList,
	Users,
	Mail,
	FileText,
	BarChart3,
	TrendingUp,
	Wallet,
	ArrowUpDown,
	Receipt,
	Coins,
	Sparkles,
	Camera,
	MessageSquare,
	Bot,
	Send,
	MessageCircle,
	PieChart,
	Calendar,
	Flame,
	Brain,
	BookOpen,
	GraduationCap,
	Puzzle,
	Target,
	Trophy,
	Zap,
	Bookmark,
	Languages,
} from 'lucide-react';

export interface ProjectFeature {
	icon: LucideIcon;
	title: string;
	description: string;
}

export interface ProjectFeatureGroup {
	heading: string;
	features: ProjectFeature[];
}

export interface Project {
	title: string;
	description: string;
	tagline: string;
	highlights: string[];
	url: string;
	featureGroups: ProjectFeatureGroup[];
}

export const projects: Project[] = [
	{
		title: 'NS Shop',
		description:
			'Online fashion store with a seamless shopping experience — from browsing and searching products to managing your cart and checking out with COD or bank transfer. Includes a full admin dashboard for store owners to manage products, orders, and customers.',
		tagline: 'Fashion e-commerce, simplified.',
		highlights: ['Product catalog & search', 'Cart & checkout', 'Admin dashboard'],
		url: 'https://shop.ns.id.vn',
		featureGroups: [
			{
				heading: 'Shopping Experience',
				features: [
					{
						icon: ShoppingBag,
						title: 'Product Catalog',
						description:
							'Browse products by categories, search by keywords, and filter by size, color, or brand.',
					},
					{
						icon: Package,
						title: 'Multi-Variant Products',
						description:
							'Each product supports multiple sizes and colors with individual pricing and stock tracking.',
					},
					{
						icon: Star,
						title: 'Reviews & Ratings',
						description:
							'Read and write product reviews with star ratings to help make informed purchase decisions.',
					},
					{
						icon: Heart,
						title: 'Wishlist',
						description: 'Save your favorite items for later and never miss a product you love.',
					},
				],
			},
			{
				heading: 'Cart & Checkout',
				features: [
					{
						icon: ShoppingCart,
						title: 'Guest-Friendly Cart',
						description:
							'Start shopping without creating an account — your cart is saved automatically.',
					},
					{
						icon: CreditCard,
						title: 'Flexible Payments',
						description:
							'Pay with cash on delivery (COD) or bank transfer — whichever works best for you.',
					},
					{
						icon: MapPin,
						title: 'Saved Addresses',
						description:
							'Save multiple delivery addresses and set a default for faster checkout.',
					},
					{
						icon: Truck,
						title: 'Order Tracking',
						description:
							'Track your order status in real time and receive email notifications at every step.',
					},
				],
			},
			{
				heading: 'Store Management',
				features: [
					{
						icon: LayoutDashboard,
						title: 'Admin Dashboard',
						description:
							'A full dashboard with sales analytics, revenue trends, and key business metrics at a glance.',
					},
					{
						icon: ClipboardList,
						title: 'Order Processing',
						description:
							'Manage orders through a clear workflow — from pending to confirmed, shipped, and delivered.',
					},
					{
						icon: Users,
						title: 'Customer Management',
						description:
							'View customer profiles, order histories, and account statuses in one place.',
					},
					{
						icon: Search,
						title: 'Inventory Control',
						description:
							'Track stock levels per variant, manage product statuses, and publish with validation.',
					},
				],
			},
			{
				heading: 'Marketing & Content',
				features: [
					{
						icon: Mail,
						title: 'Email Campaigns',
						description:
							'Create, schedule, and send marketing emails with templates and performance tracking.',
					},
					{
						icon: FileText,
						title: 'Blog & CMS',
						description:
							'Publish blog posts and static pages to engage customers and boost SEO.',
					},
					{
						icon: BarChart3,
						title: 'Sales Reports',
						description:
							'Detailed revenue reports, product performance, and customer analytics with date filtering.',
					},
					{
						icon: TrendingUp,
						title: 'Growth Metrics',
						description:
							'Track revenue growth, order trends, and new customer acquisition over time.',
					},
				],
			},
		],
	},
	{
		title: 'NS Money',
		description:
			'Personal finance companion that helps you track spending, manage budgets, and gain insights into your financial habits. Features AI-powered analysis and a Telegram bot for quick expense logging on the go.',
		tagline: 'Your personal finance companion.',
		highlights: ['Expense tracking', 'AI insights', 'Telegram bot'],
		url: 'https://money.ns.id.vn',
		featureGroups: [
			{
				heading: 'Expense Tracking',
				features: [
					{
						icon: Wallet,
						title: 'Multi-Wallet Support',
						description:
							'Create separate wallets for different accounts — savings, daily spending, business, and more.',
					},
					{
						icon: ArrowUpDown,
						title: 'Income & Expenses',
						description:
							'Categorize every transaction as income or expense with custom categories and notes.',
					},
					{
						icon: Receipt,
						title: 'Transaction History',
						description:
							'Full searchable history of all transactions with dates, amounts, and wallet details.',
					},
					{
						icon: Coins,
						title: 'Multi-Currency',
						description:
							'Track expenses in VND and USD — perfect for international transactions.',
					},
				],
			},
			{
				heading: 'AI-Powered Features',
				features: [
					{
						icon: Camera,
						title: 'Receipt Scanning',
						description:
							'Snap a photo of any receipt or invoice — AI automatically extracts the amount and details.',
					},
					{
						icon: MessageSquare,
						title: 'Natural Language Input',
						description:
							'Type "coffee 50k" or "salary 15M" — AI understands and creates the transaction for you.',
					},
					{
						icon: Sparkles,
						title: 'Smart Parsing',
						description:
							'AI handles currency formats, abbreviations, and multiple transactions in a single message.',
					},
					{
						icon: Bot,
						title: 'AI Transaction Creation',
						description:
							'Describe your expenses naturally and let AI categorize and log them automatically.',
					},
				],
			},
			{
				heading: 'Telegram Bot',
				features: [
					{
						icon: Send,
						title: 'Log on the Go',
						description:
							'Send a quick message to the Telegram bot to log expenses anytime, anywhere.',
					},
					{
						icon: MessageCircle,
						title: 'Chat Commands',
						description:
							'Check wallet balances, view recent transactions, and get spending stats — all via chat.',
					},
					{
						icon: PieChart,
						title: 'Period Statistics',
						description:
							'View spending summaries by day, week, month, or year directly in Telegram.',
					},
					{
						icon: CreditCard,
						title: 'Secure Linking',
						description:
							'Link your Telegram account securely with a one-time secret key — your data stays private.',
					},
				],
			},
			{
				heading: 'Analytics Dashboard',
				features: [
					{
						icon: BarChart3,
						title: 'Income vs. Expense Charts',
						description:
							'Visual bar charts comparing your income and expenses over any time period.',
					},
					{
						icon: PieChart,
						title: 'Category Breakdown',
						description:
							'See exactly where your money goes with detailed category-level spending charts.',
					},
					{
						icon: Calendar,
						title: 'Spending Heatmap',
						description:
							'Discover your spending patterns with a heatmap showing activity by day of the week.',
					},
					{
						icon: TrendingUp,
						title: 'Savings Rate',
						description:
							'Track your cumulative balance and savings rate to stay on top of your financial goals.',
					},
				],
			},
		],
	},
	{
		title: 'Vocab',
		description:
			'Smart vocabulary learning app that adapts to your pace using spaced repetition. AI suggests definitions and example sentences, while progress tracking keeps you motivated to reach your language goals.',
		tagline: 'Learn vocabulary the smart way.',
		highlights: ['Spaced repetition', 'AI-powered suggestions', 'Progress tracking'],
		url: 'https://vocab.ns.id.vn',
		featureGroups: [
			{
				heading: 'Adaptive Learning',
				features: [
					{
						icon: Brain,
						title: 'Spaced Repetition',
						description:
							'An intelligent algorithm schedules reviews at optimal intervals so you remember words long-term.',
					},
					{
						icon: Target,
						title: 'Adaptive Difficulty',
						description:
							'Content difficulty adjusts automatically based on your performance — always challenging, never overwhelming.',
					},
					{
						icon: Zap,
						title: 'Optimized Sessions',
						description:
							'Review sessions are pre-computed in the background for instant, zero-wait starts.',
					},
					{
						icon: Flame,
						title: 'Retention-Focused',
						description:
							'The system balances new words with due reviews using a 60/40 strategy for maximum retention.',
					},
				],
			},
			{
				heading: 'Practice Modes',
				features: [
					{
						icon: BookOpen,
						title: 'Vocabulary Exercises',
						description:
							'Learn new words with detailed definitions, pronunciations, and real-world examples.',
					},
					{
						icon: GraduationCap,
						title: 'Grammar Exercises',
						description:
							'Practice grammar with error detection exercises across topics like tenses and agreement.',
					},
					{
						icon: FileText,
						title: 'Reading Comprehension',
						description:
							'Improve understanding with passage-based Q&A including true/false and short answer questions.',
					},
					{
						icon: Puzzle,
						title: 'Multiple Choice',
						description:
							'Test your knowledge with AI-generated multiple choice questions at varying difficulty levels.',
					},
				],
			},
			{
				heading: 'AI Assistant',
				features: [
					{
						icon: Sparkles,
						title: 'AI Definitions',
						description:
							'Get detailed definitions with examples, synonyms, antonyms, and related words — all AI-generated.',
					},
					{
						icon: Languages,
						title: 'Bilingual Support',
						description:
							'Definitions available in both English and Vietnamese for better comprehension.',
					},
					{
						icon: MessageSquare,
						title: 'Content Generation',
						description:
							'AI creates fresh exercises based on your keywords and preferred difficulty level.',
					},
					{
						icon: ClipboardList,
						title: 'Answer Evaluation',
						description:
							'Submit free-form answers and receive AI-powered scoring with detailed feedback.',
					},
				],
			},
			{
				heading: 'Progress & Competition',
				features: [
					{
						icon: Calendar,
						title: 'Activity Heatmap',
						description:
							'A GitHub-style heatmap that visualizes your daily learning activity across weeks and months.',
					},
					{
						icon: Trophy,
						title: 'MMR Rating System',
						description:
							'Earn a skill rating for vocabulary, grammar, and reading — with tier badges from Bronze to Master.',
					},
					{
						icon: BarChart3,
						title: 'Global Leaderboards',
						description:
							'Compete with other learners on leaderboards filtered by language and skill type.',
					},
					{
						icon: TrendingUp,
						title: 'Streak & Accuracy',
						description:
							'Track your learning streaks, accuracy rates, and words learned to stay motivated.',
					},
				],
			},
			{
				heading: 'Organization',
				features: [
					{
						icon: Bookmark,
						title: 'Bookmark Collections',
						description:
							'Create custom collections to organize words, exercises, and content you want to revisit.',
					},
					{
						icon: BookOpen,
						title: 'Save from Practice',
						description:
							'Encounter a new word during practice? Save it with context to your bookmarks instantly.',
					},
					{
						icon: Search,
						title: 'Keyword Dictionary',
						description:
							'Build a personal keyword dictionary with meanings and track which content uses each keyword.',
					},
					{
						icon: Heart,
						title: 'Cross-Type Bookmarks',
						description:
							'Bookmark vocabulary, grammar exercises, MCQs, and reading passages — all in one place.',
					},
				],
			},
		],
	},
];
