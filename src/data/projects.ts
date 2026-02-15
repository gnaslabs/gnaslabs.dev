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
	Package,
	ClipboardList,
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
	Cloud,
	RefreshCw,
	SlidersHorizontal,
	Layers,
	LayoutGrid,
	GitBranch,
	Clock,
	FolderOpen,
	Copy,
	Shield,
	Lock,
	Download,
	Video,
	Terminal,
	Globe,
	Wifi,
	Code,
	Upload,
	Link,
	Play,
	AlertTriangle,
	Eye,
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

export type ProjectCategory = 'product' | 'open-source';

export interface ProjectLink {
	label: string;
	url: string;
}

export interface Project {
	key: string;
	category: ProjectCategory;
	title: string;
	description: string;
	tagline: string;
	highlights: string[];
	url: string | ProjectLink[];
	featureGroups: ProjectFeatureGroup[];
}

export interface ProjectStructureFeature {
	icon: LucideIcon;
}

export interface ProjectStructureGroup {
	features: ProjectStructureFeature[];
}

export interface ProjectStructure {
	key: string;
	category: ProjectCategory;
	url: string | ProjectLink[];
	featureGroups: ProjectStructureGroup[];
}

export const projectStructures: ProjectStructure[] = [
	{
		key: 'ns-shop',
		category: 'product',
		url: 'https://shop.ns.id.vn',
		featureGroups: [
			{
				features: [
					{ icon: ShoppingBag },
					{ icon: Package },
					{ icon: Star },
					{ icon: Heart },
				],
			},
			{
				features: [
					{ icon: ShoppingCart },
					{ icon: CreditCard },
					{ icon: MapPin },
					{ icon: Truck },
				],
			},
		],
	},
	{
		key: 'ns-money',
		category: 'product',
		url: 'https://money.ns.id.vn',
		featureGroups: [
			{
				features: [
					{ icon: Wallet },
					{ icon: ArrowUpDown },
					{ icon: Receipt },
					{ icon: Coins },
				],
			},
			{
				features: [
					{ icon: Camera },
					{ icon: MessageSquare },
					{ icon: Sparkles },
					{ icon: Bot },
				],
			},
			{
				features: [
					{ icon: Send },
					{ icon: MessageCircle },
					{ icon: PieChart },
					{ icon: CreditCard },
				],
			},
			{
				features: [
					{ icon: BarChart3 },
					{ icon: PieChart },
					{ icon: Calendar },
					{ icon: TrendingUp },
				],
			},
		],
	},
	{
		key: 'vocab',
		category: 'product',
		url: 'https://vocab.ns.id.vn',
		featureGroups: [
			{
				features: [
					{ icon: Brain },
					{ icon: Target },
					{ icon: Zap },
					{ icon: Flame },
				],
			},
			{
				features: [
					{ icon: BookOpen },
					{ icon: GraduationCap },
					{ icon: FileText },
					{ icon: Puzzle },
				],
			},
			{
				features: [
					{ icon: Sparkles },
					{ icon: Languages },
					{ icon: MessageSquare },
					{ icon: ClipboardList },
				],
			},
			{
				features: [
					{ icon: Calendar },
					{ icon: Trophy },
					{ icon: BarChart3 },
					{ icon: TrendingUp },
				],
			},
			{
				features: [
					{ icon: Bookmark },
					{ icon: BookOpen },
					{ icon: Search },
					{ icon: Heart },
				],
			},
		],
	},
	{
		key: 'ns-drive',
		category: 'open-source',
		url: 'https://github.com/NSLabs-HCM/ns-drive',
		featureGroups: [
			{
				features: [
					{ icon: Cloud },
					{ icon: RefreshCw },
					{ icon: SlidersHorizontal },
					{ icon: Layers },
				],
			},
			{
				features: [
					{ icon: LayoutGrid },
					{ icon: GitBranch },
					{ icon: Clock },
					{ icon: Zap },
				],
			},
			{
				features: [
					{ icon: FolderOpen },
					{ icon: Copy },
					{ icon: Search },
					{ icon: BarChart3 },
				],
			},
			{
				features: [
					{ icon: Shield },
					{ icon: Lock },
					{ icon: Download },
					{ icon: Package },
				],
			},
		],
	},
	{
		key: 'ns-tracing',
		category: 'open-source',
		url: [
			{ label: 'Extension', url: 'https://github.com/NSLabs-HCM/ns-tracing-extension' },
			{ label: 'Server', url: 'https://github.com/NSLabs-HCM/ns-tracing-server' },
		],
		featureGroups: [
			{
				features: [
					{ icon: Video },
					{ icon: Terminal },
					{ icon: Globe },
					{ icon: Wifi },
				],
			},
			{
				features: [
					{ icon: Code },
					{ icon: Download },
					{ icon: Upload },
					{ icon: Link },
				],
			},
			{
				features: [
					{ icon: Play },
					{ icon: Clock },
					{ icon: AlertTriangle },
					{ icon: Eye },
				],
			},
		],
	},
];
