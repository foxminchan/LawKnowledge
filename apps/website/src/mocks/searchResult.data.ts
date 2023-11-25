export const itemBreadcrumbs = [
    {
      id: 1,
      name: 'Trang chủ',
      link: '/',
      isActive: false,
    },
    {
      id: 2,
      name: 'Thủ tục hành chính',
      link: '/thu-tuc-hanh-chinh',
      isActive: true,
    },
];

interface Column {
  id: 'code' | 'name' | 'topic' | 'theme' | 'indexing';
  label: string;
  minWidth?: number;
  align?: 'right' | 'left' | 'center' | 'justify';
  color?: '!text-japonica-400' | '!text-dark-moderate-blue-800';
  format?: (value: number) => string;
  font_weight?: '!font-medium';
}

export const columns: readonly Column[] = [
  {
    id: 'code',
    label: 'Mã số',
    minWidth: 120,
    align: 'center',
    color: '!text-japonica-400',
    font_weight: '!font-medium',
  },
  {
    id: 'name',
    label: 'Tên',
    minWidth: 300,
    align: 'justify',
    color: '!text-dark-moderate-blue-800',
  },
  {
    id: 'topic',
    label: 'Đề mục',
    minWidth: 120,
    align: 'left',
    color: '!text-dark-moderate-blue-800',
  },
  {
    id: 'theme',
    label: 'Chủ đề',
    minWidth: 120,
    align: 'left',
    color: '!text-dark-moderate-blue-800',
  },
  {
    id: 'indexing',
    label: 'Chỉ mục',
    minWidth: 120,
    align: 'left',
    color: '!text-dark-moderate-blue-800',
  },
];

interface Data {
  code: string;
  name: string;
  topic: string;
  theme: string;
  indexing: string;
}

function createData(
  code: string,
  name: string,
  topic: string,
  theme: string,
  indexing: string
): Data {
  return { code, name, topic, theme, indexing };
}

export const rows = [
  createData(
    '2.000001',
    'Đăng ký sửa đổi, bổ sung nội dung tổ chức hội chợ, triển lãm thương mại tại Việt Nam',
    'Bộ Công thương',
    'Sở Công thương',
    'Xúc tiến thương mại'
  ),
  createData(
    '2.000002',
    'Đăng ký sửa đổi, bổ sung nội dung chương trình khuyến mại đối với chương trình khuyến mại mang tính may rủi thực hiện trên địa bàn 1 tỉnh, thành phố trực thuộc Trung ương',
    'Bộ Công thương',
    'Sở Công thương',
    'Xúc tiến thương mại'
  ),
  createData(
    '1.000004',
    'Chấp thuận bố trí mặt bằng tổng thể hình sát hạch trung tâm sát hạch loại 1, loại 2',
    'Bộ Giao thông vận tải',
    'Cục Đường bộ Việt Nam; Cục Đường bộ Việt Nam',
    'Đường bộ'
  ),
  createData(
    '1.000005',
    'Thủ tục hải quan đối với khí, nguyên liệu xuất khẩu, nhập khẩu bằng đường ống chuyên dụng',
    'Bộ Tài chính',
    'Chi cục Hải quan',
    'Hải quan'
  ),
  createData(
    '1.000006',
    'Thủ tục thông báo về việc giải thể cơ sở đào tạo tôn giáo theo quyết định của tổ chức tôn giáo',
    'Bộ Nội vụ',
    'Ban Tôn giáo Chính phủ - Bộ Nội vụ',
    'Tôn giáo Chính phủ'
  ),
  createData(
    '2.000003',
    'Đăng ký lần đầu đối với tổ chức hỗ trợ nghiên cứu có hoạt động phân tích thống kê và quản lý dữ liệu nghiên cứu thử nghiệm lâm sàng',
    'Bộ Y tế',
    'Bộ Y tế; Bộ Y tế',
    'Đào tạo và Nghiên cứu khoa học'
  ),
  createData(
    '2.000004',
    'Đăng ký hoạt động khuyến mại đối với chương trình khuyến mại mang tính may rủi thực hiện trên địa bàn 1 tỉnh, thành phố trực thuộc Trung ương',
    'Bộ Công thương',
    'Sở Công thương',
    'Xúc tiến thương mại'
  ),
  createData(
    '2.000005',
    'Thông báo gia hạn thời gian hoạt động quỹ đầu tư khởi nghiệp sáng tạo (cấp tỉnh)',
    'Bộ Kế hoạch và Đầu tư',
    'Sở Kế hoạch và Đầu tư',
    'Hỗ trợ doanh nghiệp nhỏ và vừa'
  ),
  createData(
    '1.000009',
    'Cấp ấn phẩm Chứng chỉ CITES xuất khẩu mẫu vật lưu niệm',
    'Bộ Nông nghiệp và Phát triển nông thôn',
    'Cơ quan Quản lý CITES Việt Nam - Bộ NN-PTNT',
    'Lâm nghiệp'
  ),
  createData(
    '1.000010',
    'Đánh giá, chứng nhận năng lực cơ sở thử nghiệm, cung cấp dịch vụ kiểm tra, thử trang thiết bị an toàn và cơ sở chế tạo liên quan đến chất lượng an toàn kỹ thuật và phòng ngừa ô nhiễm môi trường tàu biển',
    'Bộ Giao thông vận tải',
    'Chi cục Đăng kiểm; Chi cục Đăng kiểm',
    'Đăng kiểm'
  ),
  createData(
    '2.000006',
    'Cấp phép quá cảnh hàng hoá của Công hoà dân chủ nhân dân Lào qua lãnh thổ Việt Nam',
    'Bộ Công thương',
    'Phòng Quản lý xuất nhập khẩu khu vực Hà Nội - Bộ Công Thương; Phòng Quản lý xuất nhập khẩu khu vực Đà Nẵng - Bộ Công Thương',
    'Xuất nhập khẩu'
  ),
  createData(
    '1.000014',
    'Thủ tục hải quan đối với xăng dầu, hóa chất, khí chuyển tiêu thụ nội địa',
    'Bộ Tài chính',
    'Chi cục Hải quan',
    'Hải quan'
  ),
  createData(
    '1.000016',
    'Thông báo tăng, giảm vốn góp của quỹ đầu tư khởi nghiệp sáng tạo (cấp tỉnh)',
    'Bộ Kế hoạch và Đầu tư',
    'Sở Kế hoạch và Đầu tư',
    'Hỗ trợ doanh nghiệp nhỏ và vừa'
  ),
  createData(
    '2.000007',
    'Công nhận tương đương đối với người được đào tạo nghề công chứng ở nước ngoài',
    'Bộ Tư pháp',
    'Bộ Tư pháp; Bộ Tư pháp',
    'Công chứng'
  ),
  createData(
    '2.000008',
    'Miễn kiểm tra giám sát đối với cơ sở kiểm nghiệm thực phẩm đã được tổ chức công nhận hợp pháp của Việt Nam hoặc tổ chức công nhận nước ngoài là thành viên tham gia thỏa thuận lẫn nhau của Hiệp hội công nhận phòng thí nhiệm Quốc tế, Hiệp hội công nhận phòng thí nghiệm Châu Á- Thái Bình Dương đánh giá và cấp chứng chỉ công nhận theo Tiêu chuẩn quốc gia TCVN ISO/IEC 17025: 2007 hoặc Tiêu chuẩn quốc tế ISO/IEC 17025:2005',
    'Bộ Y tế',
    'Cục An toàn thực phẩm - Bộ Y tế; Cục An toàn thực phẩm - Bộ Y tế',
    'An toàn thực phẩm và Dinh dưỡng'
  ),
  createData(
    '1.000017',
    '	Cấp lại Giấy chứng nhận, tem kiểm định chất lượng, an toàn kỹ thuật và bảo vệ môi trường phương tiện giao thông đường sắt',
    'Bộ Giao thông vận tải',
    'Cục Đăng kiểm Việt Nam',
    'Đăng kiểm'
  ),
  createData(
    '1.000018',
    'Thủ tục đăng ký chủ trì, thực hiện dự án hỗ trợ tổ chức KH&CN công lập thực hiện cơ chế tự chủ, tự chịu trách nhiệm thuộc Chương trình hỗ trợ phát triển doanh nghiệp KH&CN và tổ chức KH&CN công lập thực hiện cơ chế tự chủ, tự chịu trách nhiệm',
    'Bộ Khoa học và Công nghệ',
    'Vụ Tổ chức cán bộ; Văn phòng các Chương trình khoa học và công nghệ quốc gia - bộ Khoa học và Công nghệ; Vụ Tổ chức cán bộ; Văn phòng các Chương trình khoa học và công nghệ quốc gia - bộ Khoa học và Công nghệ',
    'Hoạt động khoa học và công nghệ'
  ),
  createData(
    '2.000009',
    'Kiểm định và chứng nhận chất lượng an toàn kỹ thuật và phòng ngừa ô nhiễm môi trường cho công-te-nơ, máy, vật liệu, trang thiết bị sử dụng cho tàu biển trong chế tạo, lắp ráp, nhập khẩu, sửa chữa phục hồi, hoán cải',
    'Bộ Giao thông vận tải',
    'Công nhận huyện đạt chuẩn phổ cập giáo dục, xóa mù chữ',
    'Đăng kiểm'
  ),
  createData(
    '2.000011',
    '	Công nhận huyện đạt chuẩn phổ cập giáo dục, xóa mù chữ',
    'Bộ Giáo dục và Đào tạo',
    'Chủ tịch ủy ban nhân dân cấp tỉnh; Chủ tịch ủy ban nhân dân cấp tỉnh',
    'Giáo dục và Đào tạo thuộc hệ thống giáo dục quốc dân'
  ),
  createData(
    '2.000020',
    'Thủ tục hải quan đối với xăng dầu, hóa chất, khí, nguyên liệu xuất khẩu, tái xuất',
    'Bộ Tài chính',
    'Chi cục Hải quan',
    'Hải quan'
  ),
  createData(
    '2.000022',
    'Thủ tục Phong tặng danh hiệu Chiến sĩ thi đua toàn quốc',
    'Bộ Nội vụ',
    'Ban Thi đua - Khen thưởng Trung ương - Bộ Nội vụ',
    'Thi đua - khen thưởng'
  ),
  createData(
    '2.000025',
    'Phê duyệt Đề án sắp xếp, đổi mới công ty nông, lâm nghiệp',
    'Bộ Nông nghiệp và Phát triển nông thôn',
    'Cơ quan chủ quản',
    'Quản lý doanh nghiệp'
  ),
  createData(
    '2.000026',
    'Đánh giá, cấp giấy chứng nhận quản lý an toàn cho tàu biển theo Bộ luật quản lý an toàn quốc tế cho tàu biển (Bộ luật ISM)',
    'Bộ Giao thông vận tải',
    'Trung tâm Chứng nhận hệ thống quản lý chất lượng và an toàn; Trung tâm Chứng nhận hệ thống quản lý chất lượng và an toàn',
    'Đăng kiểm'
  ),
  createData(
    '2.000012',
    'Thủ tục hải quan đối với xăng dầu, hóa chất, khí, nguyên liệu nhập khẩu, tạm nhập',
    'Bộ Tài chính',
    'Chi cục Hải quan',
    'Hải quan'
  ),
  createData(
    '2.000028',
    'Cấp Giấy phép lưu hành xe quá tải trọng, xe quá khổ giới hạn, xe bánh xích, xe vận chuyển hàng siêu trường, siêu trọng trên đường bộ',
    'Bộ Giao thông vận tải',
    'Cục Đường bộ Việt Nam; Sở Giao thông vận tải; Khu Quản lý đường bộ',
    'Đường bộ'
  ),
  createData(
    '2.000030',
    'Sửa đổi, bổ sung giấy phép biên tập kênh chương trình nước ngoài trên dịch vụ phát thanh, truyền hình trả tiền',
    'Bộ Thông tin và Truyền thông',
    'Cục Phát thanh, truyền hình và thông tin điện tử; Cục Phát thanh, truyền hình và thông tin điện tử',
    'Phát thanh, truyền hình và thông tin điện tử'
  ),
  createData(
    '2.000013',
    'Thủ tục tặng thưởng Bằng khen của Thủ tướng Chính phủ cho tập thể, cá nhân theo công trạng và thành tích đạt được',
    'Bộ Nội vụ',
    'Ban Thi đua - Khen thưởng Trung ương - Bộ Nội vụ',
    'Thi đua - khen thưởng'
  ),
  createData(
    '2.000031',
    'Đổi tên trung tâm giáo dục nghề nghiệp, trường trung cấp công lập trực thuộc tỉnh, thành phố trực thuộc trung ương và trung tâm giáo dục nghề nghiệp, trường trung cấp tư thục trên địa bàn tỉnh, thành phố trực thuộc trung ương',
    'Bộ Lao động - Thương binh và Xã hội',
    'Sở Lao động-Thương binh và Xã hội; Sở Lao động-Thương binh và Xã hội',
    'Giáo dục nghề nghiệp'
  ),
  createData(
    '2.000014',
    'Chỉ định cơ sở kiểm nghiệm thực phẩm đã được tổ chức công nhận hợp pháp của Việt Nam hoặc tổ chức công nhận nước ngoài là thành viên tham gia thỏa thuận lẫn nhau của Hiệp hội công nhận phòng thí nhiệm Quốc tế, Hiệp hội công nhận phòng thí nghiệm Châu Á- Thái Bình Dương đánh giá và cấp chứng chỉ công nhận theo Tiêu chuẩn quốc gia TCVN ISO/IEC 17025: 2007 hoặc Tiêu chuẩn quốc tế ISO/IEC 17025:2005',
    'Bộ Y tế',
    'Cục An toàn thực phẩm - Bộ Y tế; Cục An toàn thực phẩm - Bộ Y tế',
    'An toàn thực phẩm và Dinh dưỡng'
  ),
  createData(
    '2.000034',
    'Thủ tục hải quan đối với xăng dầu cung ứng xuất khẩu, tái xuất cho máy bay',
    'Bộ Tài chính',
    'Chi cục Hải quan',
    'Hải quan'
  ),
  createData(
    '2.000039',
    'Thủ tục gia hạn tạm trú, cấp thị thực mới cho người nước ngoài đang tạm trú ở Việt Nam tại cơ quan có thẩm quyền ở trong nước của Bộ Ngoại giao',
    'Bộ Ngoại giao',
    'Cục Lãnh sự - Bộ Ngoại giao; Sở Ngoại vụ Thành phố Hồ Chí Minh - Bộ Ngoại giao',
    'Công tác lãnh sự'
  ),
  createData(
    '2.000040',
    'Cấp giấy phép triển lãm mỹ thuật (thẩm quyền của Bộ Văn hóa, Thể thao và Du lịch)',
    'Bộ Văn hóa, Thể thao và Du lịch',
    'Cục Mỹ thuật, Nhiếp ảnh và Triển lãm - Bộ Văn hóa, Thể thao và Du lịch; Cục Mỹ thuật, Nhiếp ảnh và Triển lãm - Bộ Văn hóa, Thể thao và Du lịch',
    'Mỹ thuật, nhiếp ảnh, triển lãm'
  ),
  createData(
    '2.000041',
    'Thủ tục đăng ký chủ trì, thực hiện dự án hỗ trợ phát triển doanh nghiệp KH&CN thuộc Chương trình hỗ trợ phát triển doanh nghiệp KH&CN và tổ chức KH&CN công lập thực hiện cơ chế tự chủ, tự chịu trách nhiệm',
    'Bộ Khoa học và Công nghệ',
    'Vụ Tổ chức cán bộ; Văn phòng các Chương trình khoa học và công nghệ quốc gia - bộ Khoa học và Công nghệ; Vụ Tổ chức cán bộ; Văn phòng các Chương trình khoa học và công nghệ quốc gia - bộ Khoa học và Công nghệ',
    'Hoạt động khoa học và công nghệ'
  ),
  createData(
    '2.000015',
    'Thủ tục hải quan đối với xuất khẩu, tái xuất xăng dầu cho tàu biển',
    'Bộ Tài chính',
    'Chi cục Hải quan',
    'Hải quan'
  ),
  createData(
    '1.000042',
    'Thủ tục tặng Cờ thi đua của Chính phủ theo công trạng và thành tích đạt được',
    'Bộ Nội vụ',
    'Ban Thi đua - Khen thưởng Trung ương - Bộ Nội vụ',
    'Thi đua - khen thưởng'
  ),
  createData(
    '1.000044',
    'Cấp lại giấy tiếp nhận bản công bố hợp quy và giấy xác nhận công bố phù hợp quy định đối với thuốc lá',
    'Bộ Y tế',
    'Cục An toàn thực phẩm - Bộ Y tế; Cục An toàn thực phẩm - Bộ Y tế',
    'An toàn thực phẩm và Dinh dưỡng'
  ),
  createData(
    '1.000045',
    'Xác nhận bảng kê lâm sản.',
    'Bộ Nông nghiệp và Phát triển nông thôn',
    'Chi cục Kiểm lâm; Chi cục Kiểm lâm',
    'Kiểm lâm'
  ),
  createData(
    '1.000047',
    'Phê duyệt phương án khai thác động vật rừng thông thường từ tự nhiên',
    'Bộ Nông nghiệp và Phát triển nông thôn',
    'Chi cục Kiểm lâm; Chi cục Kiểm lâm',
    'Kiểm lâm'
  ),
  createData(
    '2.000018',
    'Gia hạn/điều chỉnh giấy phép khai thác, sử dụng nước mặt đối với hồ chứa, đập dâng thủy lợi có dung tích toàn bộ từ 20 triệu m3 trở lên; hồ chứa, đập dâng thủy lợi khai thác, sử dụng nước mặt cho sản xuất nông nghiệp, nuôi trồng thủy sản với lưu lượng từ 2m3/giây trở lên và có dung tích toàn bộ từ 03 triệu m3 trở lên; công trình khai thác, sử dụng nước khác cấp cho sản xuất nông nghiệp, nuôi trồng thủy sản với lưu lượng khai thác từ 5m3/giây trở lên; phát điện với công suất lắp máy từ 2.000 kw trở lên; cho các mục đích khác với lưu lượng từ 50.000m3/ngày đêm trở lên; cấp giấy phép khai thác, sử dụng nước biển cho mục đích sản xuất bao gồm cả nuôi trồng thủy sản, kinh doanh, dịch vụ trên đất liền với lưu lượng từ 1.000.000 m3/ngày đêm trở lên',
    'Bộ Tài nguyên và Môi trường',
    'Cục Quản lý tài nguyên nước - Bộ Tài nguyên và Môi trường; Cục Quản lý tài nguyên nước - Bộ Tài nguyên và Môi trường',
    'Tài nguyên nước'
  ),
  createData(
    '2.000019',
    'Thủ tục thông báo về việc giải thể tổ chức tôn giáo trực thuộc có địa bàn hoạt động ở nhiều tỉnh theo quy định của hiến chương của tổ chức tôn giáo',
    'Bộ Nội vụ',
    'Ban Tôn giáo Chính phủ - Bộ Nội vụ',
    'Tôn giáo Chính phủ'
  ),
  createData(
    '1.000049',
    'Cấp, gia hạn, cấp lại, cấp đổi chứng chỉ hành nghề đo đạc và bản đồ hạng II',
    'Bộ Tài nguyên và Môi trường',
    'Sở Tài nguyên và Môi trường; Sở Tài nguyên và Môi trường',
    'Đo đạc, bản đồ và thông tin địa lý'
  ),
  createData(
    '1.000050',
    'Thủ tục cấp lại Giấy xác nhận đủ điều kiện tư vấn, đánh giá Hệ thống quản lý chất lượng theo tiêu chuẩn quốc gia TCVN ISO 9001:2008 đối với cơ quan, tổ chức thuộc hệ thống hành chính nhà nước cho tổ chức tư vấn, chuyên gia tư vấn độc lập, tổ chức chứng nhận và thẻ cho chuyên gia trong trường hợp bị mất, hỏng hoặc thay đổi tên, địa chỉ liên lạc',
    'Bộ Khoa học và Công nghệ',
    'Tổng cục Tiêu chuẩn Đo lường Chất lượng - Bộ Khoa học và Công nghệ; Tổng cục Tiêu chuẩn Đo lường Chất lượng - Bộ Khoa học và Công nghệ',
    'Tiêu chuẩn đo lường chất lượng'
  ),
  createData(
    '1.000051',
    'Báo cáo định kỳ của thành viên mạng lưới về hoạt động ứng cứu sự cố',
    'Bộ Thông tin và Truyền thông',
    'Cục An toàn thông tin',
    'Công nghệ thông tin, điện tử'
  ),
  createData(
    '2.000020',
    'Thủ tục điện tử đối với tàu biển đã nhập cảnh ở một cảng biển của Việt Nam sau đó đến cảng biển, cảng thủy nội địa khác và phương tiện thủy nội địa Việt Nam, Campuchia nhập cảnh, xuất cảnh tại cảng biển, cảng thủy nội địa Việt Nam',
    'Bộ Tài chính',
    'Chi cục Hải quan',
    'Hải quan'
  ),
  createData(
    '2.000021',
    'Cấp giấy phép khai thác, sử dụng nước mặt đối với hồ chứa, đập dâng thủy lợi có dung tích toàn bộ từ 20 triệu m3 trở lên; hồ chứa, đập dâng thủy lợi khai thác, sử dụng nước mặt cho sản xuất nông nghiệp, nuôi trồng thủy sản với lưu lượng từ 2m3/giây trở lên và có dung tích toàn bộ từ 03 triệu m3 trở lên; công trình khai thác, sử dụng nước khác cấp cho sản xuất nông nghiệp, nuôi trồng thủy sản với lưu lượng khai thác từ 5m3/giây trở lên; phát điện với công suất lắp máy từ 2.000 kw trở lên; cho các mục đích khác với lưu lượng từ 50.000m3/ngày đêm trở lên; cấp giấy phép khai thác, sử dụng nước biển cho mục đích sản xuất bao gồm cả nuôi trồng thủy sản, kinh doanh, dịch vụ trên đất liền với lưu lượng từ 1.000.000 m3/ngày đêm trở lên',
    'Bộ Tài nguyên và Môi trường',
    'Cục Quản lý tài nguyên nước - Bộ Tài nguyên và Môi trường; Cục Quản lý tài nguyên nước - Bộ Tài nguyên và Môi trường',
    'Tài nguyên nước'
  ),
  createData(
    '1.000054',
    'Thủ tục thông báo về việc thay đổi trụ sở của tổ chức tôn giáo, tổ chức tôn giáo trực thuộc có địa bàn hoạt động ở nhiều tỉnh (thuộc thẩm quyền tiếp nhận của 2 cơ quan)',
    'Bộ Nội vụ',
    'Ban Tôn giáo Chính phủ - Bộ Nội vụ; Sở Nội vụ',
    'Tôn giáo Chính phủ'
  ),
  createData(
    '1.000055',
    'Phê duyệt phương án quản lý rừng bền vững của chủ rừng là tổ chức',
    'Bộ Nông nghiệp và Phát triển nông thôn',
    'Sở Nông nghiệp và Phát triển Nông thôn',
    'Lâm nghiệp'
  ),
  createData(
    '1.000056',
    'Cấp Giấy Xác nhận công bố phù hợp quy định đối với thuốc lá',
    'Bộ Y tế',
    'Cục An toàn thực phẩm - Bộ Y tế; Cục An toàn thực phẩm - Bộ Y tế',
    'An toàn thực phẩm và Dinh dưỡng'
  ),
  createData(
    '2.000022',
    'Thủ tục cấp Thẻ nhân viên tư vấn phòng, chống bạo lực gia đình',
    'Bộ Văn hóa, Thể thao và Du lịch',
    'Sở Văn hóa, Thể thao và Du lịch; Sở Văn hóa, Thể thao và Du lịch',
    'Gia đình'
  ),
  createData(
    '2.000023',
    'Thủ tục đề nghị thay đổi tên của tổ chức tôn giáo, tổ chức tôn giáo trực thuộc có địa bàn hoạt động ở nhiều tỉnh',
    'Bộ Nội vụ',
    'Ban Tôn giáo Chính phủ - Bộ Nội vụ',
    'Tôn giáo Chính phủ'
  ),
  createData(
    '2.000023',
    'Thủ tục đề nghị thay đổi tên của tổ chức tôn giáo, tổ chức tôn giáo trực thuộc có địa bàn hoạt động ở nhiều tỉnh',
    'Bộ Nội vụ',
    'Ban Tôn giáo Chính phủ - Bộ Nội vụ',
    'Tôn giáo Chính phủ'
  ),
  createData(
    '2.000023',
    'Thủ tục đề nghị thay đổi tên của tổ chức tôn giáo, tổ chức tôn giáo trực thuộc có địa bàn hoạt động ở nhiều tỉnh',
    'Bộ Nội vụ',
    'Ban Tôn giáo Chính phủ - Bộ Nội vụ',
    'Tôn giáo Chính phủ'
  ),
];