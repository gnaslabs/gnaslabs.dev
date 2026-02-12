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
	key: string;
	title: string;
	description: string;
	tagline: string;
	highlights: string[];
	url: string;
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
	url: string;
	featureGroups: ProjectStructureGroup[];
}

export const projectStructures: ProjectStructure[] = [
	{
		key: 'ns-shop',
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
		url: 'https://github.com/ngosangns/ns-drive',
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
];
