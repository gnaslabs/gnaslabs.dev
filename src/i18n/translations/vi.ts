import type { UITranslations } from '../types';

export const vi = {
	meta: {
		title: 'NS Labs',
		description:
			'Các sản phẩm số mình tự xây dựng và vận hành — từ mua sắm thời trang, quản lý tài chính cá nhân, học từ vựng đến công cụ hỗ trợ lập trình.',
		ogDescription:
			'Sản phẩm số cá nhân — mua sắm, tài chính, học từ vựng, đồng bộ cloud, debug trình duyệt.',
	},
	nav: {
		about: 'Giới Thiệu',
		products: 'Sản Phẩm',
		contact: 'Liên Hệ',
	},
	hero: {
		subtitle: 'TP. Hồ Chí Minh',
		description:
			'Mình là một kỹ sư phần mềm, và đây là nơi mình tập hợp {highlight} mình tự xây dựng — phục vụ nhu cầu hàng ngày từ mua sắm, quản lý tài chính, học từ vựng đến hỗ trợ phát triển phần mềm.',
		descriptionHighlight: 'các sản phẩm số',
		viewProducts: 'Xem Sản Phẩm',
	},
	about: {
		heading: 'Giới Thiệu',
		paragraphs: [
			'NS Labs là nơi mình tập hợp các sản phẩm cá nhân. Mỗi sản phẩm đều xuất phát từ nhu cầu thực tế của mình — từ ý tưởng, thiết kế, code đến vận hành đều tự làm.',
			'Mình ưu tiên làm ra thứ đơn giản, dễ dùng và giải quyết đúng vấn đề. Nếu bạn thấy sản phẩm nào hữu ích thì cứ dùng thử.',
		],
	},
	contact: {
		heading: 'Liên Hệ',
		description:
			'Muốn góp ý, trao đổi về sản phẩm hay đơn giản là nói chuyện? Cứ gửi mail cho mình.',
		emailLabel: 'Email',
		blogLabel: 'Blog',
	},
	modal: {
		close: 'Đóng',
		visitPrefix: 'Truy cập ',
	},
} satisfies UITranslations;
