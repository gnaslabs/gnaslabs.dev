import type { ProjectTranslation } from '../types';

export const projectsVi: ProjectTranslation[] = [
	{
		title: 'NS Shop',
		description:
			'Trang mua sắm thời trang online. Người dùng có thể tìm kiếm sản phẩm theo nhiều tiêu chí, xem chi tiết biến thể, đặt hàng và theo dõi trạng thái đơn hàng. Hỗ trợ thanh toán COD và chuyển khoản.',
		tagline: 'Mua sắm thời trang online.',
		highlights: ['Tìm kiếm & lọc sản phẩm', 'Đặt hàng & theo dõi đơn'],
		featureGroups: [
			{
				heading: 'Mua sắm',
				features: [
					{
						title: 'Tìm kiếm & lọc',
						description:
							'Lọc theo danh mục, kích cỡ, màu sắc, thương hiệu hoặc tìm bằng từ khóa. Kết quả cập nhật nhanh, không cần tải lại trang.',
					},
					{
						title: 'Biến thể sản phẩm',
						description:
							'Mỗi sản phẩm có đầy đủ tùy chọn size và màu sắc. Giá và tồn kho được cập nhật realtime khi chọn biến thể.',
					},
					{
						title: 'Đánh giá sản phẩm',
						description:
							'Người mua có thể để lại đánh giá và xếp hạng. Giúp người mua sau tham khảo trước khi quyết định.',
					},
					{
						title: 'Danh sách yêu thích',
						description:
							'Lưu lại sản phẩm quan tâm để xem lại sau, không lo quên khi chưa muốn mua ngay.',
					},
				],
			},
			{
				heading: 'Giỏ hàng & thanh toán',
				features: [
					{
						title: 'Mua không cần tài khoản',
						description:
							'Thêm vào giỏ hàng ngay mà không cần đăng ký. Giỏ hàng được lưu tự động, sẵn sàng khi bạn quay lại.',
					},
					{
						title: 'Thanh toán linh hoạt',
						description:
							'Hỗ trợ thanh toán khi nhận hàng (COD) hoặc chuyển khoản ngân hàng.',
					},
					{
						title: 'Quản lý địa chỉ',
						description:
							'Lưu nhiều địa chỉ giao hàng và đặt mặc định. Lần sau đặt hàng nhanh hơn.',
					},
					{
						title: 'Theo dõi đơn hàng',
						description:
							'Xem trạng thái đơn hàng realtime và nhận email thông báo tự động ở mỗi bước.',
					},
				],
			},
		],
	},
	{
		title: 'NS Money',
		description:
			'Ứng dụng quản lý thu chi cá nhân. Hỗ trợ nhập giao dịch bằng ngôn ngữ tự nhiên qua AI, ghi chép nhanh qua Telegram bot, và xem thống kê chi tiêu trực quan qua biểu đồ.',
		tagline: 'Quản lý tài chính cá nhân.',
		highlights: ['AI nhập liệu', 'Telegram bot', 'Biểu đồ thống kê'],
		featureGroups: [
			{
				heading: 'Quản lý thu chi',
				features: [
					{
						title: 'Nhiều ví',
						description:
							'Tách riêng tiết kiệm, chi tiêu hàng ngày, kinh doanh — mỗi ví phục vụ một mục đích riêng.',
					},
					{
						title: 'Phân loại giao dịch',
						description:
							'Tùy chỉnh danh mục thu chi và thêm ghi chú cho mỗi giao dịch để dễ tra cứu sau.',
					},
					{
						title: 'Lịch sử giao dịch',
						description:
							'Tra cứu giao dịch theo ngày, số tiền, ví hoặc danh mục. Dữ liệu luôn sẵn sàng khi cần.',
					},
					{
						title: 'Đa tiền tệ',
						description:
							'Hỗ trợ VND, USD và các đơn vị tiền tệ khác. Phù hợp nếu bạn có giao dịch quốc tế.',
					},
				],
			},
			{
				heading: 'AI hỗ trợ',
				features: [
					{
						title: 'Quét hóa đơn',
						description:
							'Chụp ảnh hóa đơn, AI tự động đọc số tiền và chi tiết. Không cần nhập liệu thủ công.',
					},
					{
						title: 'Nhập bằng ngôn ngữ tự nhiên',
						description:
							'Gõ "cà phê 50k" hay "lương 15 triệu" — AI hiểu ngay và tạo giao dịch tương ứng.',
					},
					{
						title: 'Xử lý linh hoạt',
						description:
							'Viết tắt, nhiều giao dịch trong một câu, định dạng tiền tệ khác nhau — AI đều xử lý được.',
					},
					{
						title: 'Tự động phân loại',
						description:
							'Mô tả chi tiêu bằng ngôn ngữ thường ngày, AI tự gán danh mục phù hợp.',
					},
				],
			},
			{
				heading: 'Telegram bot',
				features: [
					{
						title: 'Ghi chép nhanh',
						description:
							'Gửi tin nhắn cho bot để ghi chi tiêu ngay lập tức. Tiện khi đang di chuyển, không cần mở app.',
					},
					{
						title: 'Tra cứu qua tin nhắn',
						description:
							'Kiểm tra số dư, xem giao dịch gần đây, thống kê chi tiêu — chỉ cần nhắn tin cho bot.',
					},
					{
						title: 'Báo cáo định kỳ',
						description:
							'Tổng kết thu chi theo ngày, tuần, tháng hoặc năm ngay trong Telegram.',
					},
					{
						title: 'Bảo mật',
						description:
							'Liên kết tài khoản bằng mã xác thực dùng một lần. Chỉ bạn mới truy cập được dữ liệu.',
					},
				],
			},
			{
				heading: 'Thống kê',
				features: [
					{
						title: 'Biểu đồ thu chi',
						description:
							'Thu nhập và chi tiêu hiển thị trực quan qua biểu đồ. So sánh được theo bất kỳ khoảng thời gian nào.',
					},
					{
						title: 'Chi tiêu theo danh mục',
						description:
							'Phân tích chi tiết tiền đi đâu — xem tỷ trọng từng danh mục trong tổng chi tiêu.',
					},
					{
						title: 'Bản đồ nhiệt',
						description:
							'Nhận ra quy luật chi tiêu theo ngày trong tuần và tháng qua heatmap.',
					},
					{
						title: 'Số dư tích lũy',
						description:
							'Theo dõi số dư và tỷ lệ tiết kiệm theo thời gian qua biểu đồ tích lũy.',
					},
				],
			},
		],
	},
	{
		title: 'Vocab',
		description:
			'Ứng dụng học từ vựng tiếng Anh. Sử dụng thuật toán spaced repetition để ôn tập hiệu quả, AI tạo bài tập và chấm điểm tự động, có bảng xếp hạng để thi đua với người học khác.',
		tagline: 'Học từ vựng tiếng Anh.',
		highlights: ['Spaced repetition', 'AI tạo bài tập', 'Bảng xếp hạng'],
		featureGroups: [
			{
				heading: 'Ôn tập',
				features: [
					{
						title: 'Spaced repetition',
						description:
							'Thuật toán tính thời điểm ôn tập tối ưu cho từng từ, giúp ghi nhớ lâu dài thay vì học rồi quên.',
					},
					{
						title: 'Độ khó tự điều chỉnh',
						description:
							'Tự động điều chỉnh mức độ khó theo trình độ thực tế. Luôn đủ thử thách mà không quá tải.',
					},
					{
						title: 'Phiên ôn tập sẵn sàng',
						description:
							'Phiên ôn tập được tính toán sẵn ở nền. Mở app là bắt đầu học được ngay, không phải chờ.',
					},
					{
						title: 'Tỷ lệ 60/40',
						description:
							'Cân bằng giữa từ mới (60%) và ôn tập (40%) để tối ưu khả năng ghi nhớ.',
					},
				],
			},
			{
				heading: 'Luyện tập',
				features: [
					{
						title: 'Từ vựng',
						description:
							'Học từ mới với định nghĩa chi tiết, cách phát âm và ví dụ trong ngữ cảnh thực tế.',
					},
					{
						title: 'Ngữ pháp',
						description:
							'Bài tập phát hiện lỗi ngữ pháp — từ thì, hòa hợp chủ vị đến cấu trúc câu phức tạp.',
					},
					{
						title: 'Đọc hiểu',
						description:
							'Đoạn văn kèm câu hỏi đúng/sai và trả lời ngắn. Nâng cao khả năng đọc hiểu dần dần.',
					},
					{
						title: 'Trắc nghiệm AI',
						description:
							'Câu hỏi do AI tạo ra, nhiều cấp độ khó, nội dung luôn mới và không lặp lại.',
					},
				],
			},
			{
				heading: 'AI hỗ trợ',
				features: [
					{
						title: 'Từ điển AI',
						description:
							'Định nghĩa chi tiết kèm ví dụ, từ đồng nghĩa, trái nghĩa — tất cả do AI tổng hợp chuyên sâu.',
					},
					{
						title: 'Song ngữ Anh-Việt',
						description:
							'Mỗi định nghĩa có cả tiếng Anh và tiếng Việt, giúp hiểu sâu hơn và ghi nhớ nhanh hơn.',
					},
					{
						title: 'Bài tập cá nhân hóa',
						description:
							'AI tạo bài tập mới dựa trên từ khóa và mức độ khó bạn chọn. Nội dung luôn phù hợp với trình độ.',
					},
					{
						title: 'Chấm điểm tự động',
						description:
							'Viết câu trả lời tự do, AI chấm điểm và phản hồi chi tiết chỗ đúng, chỗ cần cải thiện.',
					},
				],
			},
			{
				heading: 'Thi đua',
				features: [
					{
						title: 'Heatmap học tập',
						description:
							'Bản đồ nhiệt kiểu GitHub hiển thị từng ngày bạn học. Chuỗi ngày càng dài, động lực càng lớn.',
					},
					{
						title: 'Xếp hạng kỹ năng',
						description:
							'Điểm MMR riêng cho từ vựng, ngữ pháp và đọc hiểu. Leo hạng từ Đồng lên Cao Thủ.',
					},
					{
						title: 'Bảng xếp hạng',
						description:
							'So sánh tiến độ với người học khác trên bảng xếp hạng. Lọc được theo ngôn ngữ và kỹ năng.',
					},
					{
						title: 'Thống kê cá nhân',
						description:
							'Theo dõi chuỗi học tập, tỷ lệ chính xác, số từ đã nắm vững qua thời gian.',
					},
				],
			},
			{
				heading: 'Sắp xếp',
				features: [
					{
						title: 'Bộ sưu tập',
						description:
							'Tạo bộ sưu tập tùy chỉnh để nhóm từ vựng, bài tập, nội dung theo chủ đề riêng.',
					},
					{
						title: 'Lưu khi học',
						description:
							'Gặp từ mới trong lúc luyện tập? Một chạm lưu lại kèm ngữ cảnh, không sợ bỏ sót.',
					},
					{
						title: 'Kho từ khóa',
						description:
							'Xây dựng từ điển từ khóa cá nhân — theo dõi từng từ xuất hiện ở đâu và nghĩa gì.',
					},
					{
						title: 'Đánh dấu',
						description:
							'Đánh dấu từ vựng, ngữ pháp, trắc nghiệm, đọc hiểu — tổ chức gọn gàng tại một nơi.',
					},
				],
			},
		],
	},
	{
		title: 'NS Drive',
		description:
			'Ứng dụng desktop đồng bộ file giữa nhiều dịch vụ cloud. Kết nối Google Drive, Dropbox, OneDrive và nhiều dịch vụ khác vào một giao diện duy nhất. Thiết kế workflow đồng bộ bằng kéo thả, lập lịch tự động, mã hóa AES-256.',
		tagline: 'Đồng bộ nhiều cloud trong một app.',
		highlights: ['Kết nối nhiều cloud', 'Workflow kéo thả', 'Mã hóa AES-256'],
		featureGroups: [
			{
				heading: 'Kết nối cloud',
				features: [
					{
						title: 'Nhiều dịch vụ',
						description:
							'Google Drive, Dropbox, OneDrive, iCloud và hàng chục dịch vụ khác — tất cả gom vào một giao diện duy nhất.',
					},
					{
						title: 'Chế độ đồng bộ',
						description:
							'Một chiều, hai chiều hoặc sao chép. Xung đột file được xử lý tự động theo quy tắc bạn chọn.',
					},
					{
						title: 'Cấu hình chi tiết',
						description:
							'Hơn 60 tùy chọn: giới hạn băng thông, bộ lọc tệp theo tên/kích thước, kiểm soát an toàn.',
					},
					{
						title: 'Chạy song song',
						description:
							'Nhiều tác vụ đồng bộ chạy cùng lúc, mỗi tác vụ có tiến độ và log riêng biệt.',
					},
				],
			},
			{
				heading: 'Workflow',
				features: [
					{
						title: 'Canvas kéo thả',
						description:
							'Thiết kế quy trình đồng bộ nhiều bước trên canvas trực quan. Kết nối các nguồn dữ liệu bằng kéo và thả.',
					},
					{
						title: 'Thực thi theo DAG',
						description:
							'Workflow chạy theo đồ thị có hướng — tự động giải quyết phụ thuộc giữa các bước và phát hiện vòng lặp.',
					},
					{
						title: 'Lập lịch cron',
						description:
							'Tự động hóa bất kỳ workflow nào theo lịch cron. Xem được lần chạy trước, lần tiếp theo và kết quả.',
					},
					{
						title: 'Chạy từ system tray',
						description:
							'Khởi động workflow trực tiếp từ khay hệ thống mà không cần mở cửa sổ ứng dụng.',
					},
				],
			},
			{
				heading: 'Quản lý file',
				features: [
					{
						title: 'Duyệt file',
						description:
							'Truy cập file trên bất kỳ dịch vụ nào từ một giao diện — duyệt, tạo thư mục, xóa, di chuyển.',
					},
					{
						title: 'Chuyển file',
						description:
							'Di chuyển file giữa các dịch vụ cloud hoặc từ/đến máy tính, với tiến độ cập nhật realtime.',
					},
					{
						title: 'Dọn dẹp',
						description:
							'Phát hiện file trùng lặp, kiểm tra tính toàn vẹn dữ liệu, tính dung lượng đã sử dụng.',
					},
					{
						title: 'Lịch sử',
						description:
							'Log đầy đủ mọi thao tác đồng bộ và quản lý file — thống kê truyền tải, thời lượng và trạng thái.',
					},
				],
			},
			{
				heading: 'Bảo mật',
				features: [
					{
						title: 'Mã hóa AES-256',
						description:
							'Mọi dữ liệu nhạy cảm được mã hóa AES-256-GCM. Token, cơ sở dữ liệu đều được bảo vệ kín.',
					},
					{
						title: 'Master password',
						description:
							'Thiết lập mật khẩu chính với thuật toán Argon2id. Giới hạn số lần thử mở khóa để chống brute-force.',
					},
					{
						title: 'Sao lưu cấu hình',
						description:
							'Xuất toàn bộ cấu hình — board, nguồn dữ liệu, cài đặt — ra một file nén gọn nhẹ để backup hoặc chia sẻ.',
					},
					{
						title: 'Đa nền tảng',
						description:
							'Ứng dụng desktop native cho macOS, Linux và Windows. Tích hợp system tray, khởi động cùng máy.',
					},
				],
			},
		],
	},
	{
		title: 'NS Tracing',
		description:
			'Bộ công cụ debug cho trình duyệt. Extension ghi lại phiên debug gồm video màn hình, console log, network request và WebSocket frame. Server phát lại bản ghi với timeline đồng bộ, đánh dấu lỗi và request để nhảy thẳng đến vấn đề. Hỗ trợ source map để giải mã code minify.',
		tagline: 'Ghi lại và phát lại phiên debug trình duyệt.',
		highlights: ['Ghi hình + log', 'Phát lại đồng bộ', 'Source map'],
		featureGroups: [
			{
				heading: 'Thu thập (Extension)',
				features: [
					{
						title: 'Ghi hình màn hình',
						description:
							'Quay video tab trình duyệt ở VP9/VP8 có âm thanh. Bấm nút là bắt đầu ghi, không cần cấu hình phức tạp.',
					},
					{
						title: 'Console log',
						description:
							'Ghi lại mọi log, warning, error kèm chi tiết object — như có DevTools chạy nền suốt phiên debug.',
					},
					{
						title: 'Network request',
						description:
							'Lưu toàn bộ network activity: header, body, timing, status code cho mỗi request và response.',
					},
					{
						title: 'WebSocket frame',
						description:
							'Bắt trọn mọi frame gửi và nhận trên kết nối WebSocket, phục vụ debug giao thức realtime.',
					},
				],
			},
			{
				heading: 'Xuất & chia sẻ',
				features: [
					{
						title: 'Source map',
						description:
							'Stack trace từ code minify được giải mã về source gốc — tìm lỗi đúng file, đúng dòng.',
					},
					{
						title: 'Tải ZIP',
						description:
							'Toàn bộ phiên debug — video, log, network — đóng gói trong một file ZIP sẵn sàng chia sẻ.',
					},
					{
						title: 'Upload lên server',
						description:
							'Đẩy bản ghi lên NS Tracing Server để lưu trữ tập trung và chia sẻ với team.',
					},
					{
						title: 'Link chia sẻ',
						description:
							'Tạo URL xem ngay sau khi upload. Đồng nghiệp mở link là xem được, không cần cài đặt gì.',
					},
				],
			},
			{
				heading: 'Phát lại (Server)',
				features: [
					{
						title: 'Video + log đồng bộ',
						description:
							'Video và log chạy đồng bộ — thấy chính xác điều gì xảy ra trên màn hình khi lỗi phát sinh.',
					},
					{
						title: 'Timeline thông minh',
						description:
							'Thanh timeline với marker tự động. Marker đỏ cho lỗi, marker xanh cho network request — nhảy đến bất kỳ thời điểm nào bằng một click.',
					},
					{
						title: 'Console chi tiết',
						description:
							'Duyệt log với timestamp, mức độ nghiêm trọng và stack trace. Source map trỏ về đúng dòng code gốc.',
					},
					{
						title: 'Phân tích network & WebSocket',
						description:
							'Kiểm tra từng HTTP request và WebSocket frame — header, status code, payload, thời gian phản hồi.',
					},
				],
			},
		],
	},
];
