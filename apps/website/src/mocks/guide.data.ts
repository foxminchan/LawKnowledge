import { VideoGuide } from '../common/utils/video';
import { ImagePreviewGuide } from '../common/utils/image';

export const itemBreadcrumbs = [
  {
    id: 1,
    name: 'Trang chủ',
    link: '/',
    isActive: false,
  },
  {
    id: 2,
    name: 'Hướng dẫn sử dụng',
    link: '/huong-dan-su-dung',
    isActive: true,
  },
];

export const itemGuide = [
  {
    id: 1,
    number: '01',
    name: 'Tra cứu thủ tục hành chính, dịch vụ công',
    content:
      'Người dân, doanh nghiệp có 3 cách để tiếp cận thủ tục hành chính, dịch vụ công, đó là:\n' +
      '- Tìm kiếm theo từ khóa ở trang chủ, trang công dân, trang doanh nghiệp.\n' +
      '- Chọn thủ tục hành chính từ sự kiện của công dân, doanh nghiệp.\n' +
      '- Chọn từ danh sách dịch vụ công trực tuyến.',
    video: VideoGuide.Video1,
    img: ImagePreviewGuide.Preview1,
    isStep: true,
  },
  {
    id: 2,
    number: '02',
    name: 'Chọn cơ quan thực hiện',
    content:
      'Căn cứ vào “Cơ quan thực hiện” trong thông tin thủ tục hành chính, người dân, doanh nghiệp chọn cơ quan thực hiện tương ứng của thủ tục cần thực hiện',
    video: VideoGuide.Video2,
    img: ImagePreviewGuide.Preview2,
    isStep: false,
  },
  {
    id: 3,
    number: '03',
    name: 'Đăng ký, đăng nhập tài khoản công dân, doanh nghiệp',
    content:
      'Người dân, doanh nghiệp có thể đăng ký tài khoản bằng: Sim ký số; USB ký số; Thuê bao di động (Dành cho Công dân); Mã số BHXH (Dành cho Công dân).\n' +
      'Sau khi đăng ký tài khoản, Người dân, doanh nghiệp đăng nhập bằng 1 trong các cách sau: Sim ký số; USB ký số; CMT/CCCD.',
    video: VideoGuide.Video3,
    img: ImagePreviewGuide.Preview3,
    isStep: true,
  },
  {
    id: 4,
    number: '04',
    name: 'Nộp hồ sơ, tra cứu, theo dõi tình trạng hồ sơ',
    content:
      'Sau khi Người dân, doanh nghiệp đăng nhập thành công, Cổng Dịch vụ công Quốc gia sẽ điều hướng về Cổng của Bộ/Ngành/Địa phương nơi mà người dân, doanh nghiệp đăng ký thực hiện thủ tục để nộp hồ sơ.\n' +
      'Người dân, doanh nghiệp tra cứu tình trạng hồ sơ theo mã số hồ sơ được cấp trên Cổng Dịch vụ công Quốc gia, để theo dõi chi tiết tiến trình xử lý, quản lý dữ liệu đầu vào, đầu ra của hồ sơ thì người dân thực hiện đăng nhập để xem chi tiết.',
    video: VideoGuide.Video4,
    img: ImagePreviewGuide.Preview4,
    isStep: false,
  },
];
