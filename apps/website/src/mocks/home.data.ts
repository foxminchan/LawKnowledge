import { IconHomeCitizen, IconHomeBusiness } from '../common/utils/image';

export const button = [
  {
    id: 1,
    name: 'Dịch vụ công trực tuyến',
    link: '/dich-vu-cong-truc-tuyen',
    current: false,
  },
  {
    id: 2,
    name: 'Kết quả đánh giá Bộ chỉ số phục vụ người dân và doanh nghiệp của bộ, ngành, địa phương',
    link: '/dich-vu-cong-truc-tuyen',
    current: false,
  },
  {
    id: 3,
    name: 'Dịch vụ công liên thông: Khai sinh, Khai tử',
    link: '/dich-vu-cong-truc-tuyen',
    current: false,
  },
];

export const targetGroupCitizen = [
  { id: 1, name: 'Có con nhỏ', icon: IconHomeCitizen.HaveChildren_Icon },
  { id: 2, name: 'Học tập', icon: IconHomeCitizen.Education_Icon },
  { id: 3, name: 'Việc làm', icon: IconHomeCitizen.Job_Icon },
  {
    id: 4,
    name: 'Cư trú và giấy tờ tuỳ thân',
    icon: IconHomeCitizen.Reside_Icon,
  },
  { id: 5, name: 'Hôn nhân và gia đình', icon: IconHomeCitizen.Marriage_Icon },
  { id: 6, name: 'Điện lực, nhà ở, đất đai', icon: IconHomeCitizen.House_Icon },
  { id: 7, name: 'Sức khoẻ và y tế', icon: IconHomeCitizen.Healthy_Icon },
  { id: 8, name: 'Phương tiện và người lái', icon: IconHomeCitizen.Media_Icon },
  { id: 9, name: 'Hưu trí', icon: IconHomeCitizen.Retirement_Icon },
  { id: 10, name: 'Người thân qua đời', icon: IconHomeCitizen.Death_Icon },
  { id: 11, name: 'Giải quyết khiếu kiện', icon: IconHomeCitizen.Balance_Icon },
];

export const targetGroupBusiness = [
  {
    id: 1,
    name: 'Khởi sự kinh doanh',
    icon: IconHomeBusiness.StartBusiness_Icon,
  },
  {
    id: 2,
    name: 'Lao động và bảo hiểm xã hội',
    icon: IconHomeBusiness.Labor_Icon,
  },
  {
    id: 3,
    name: 'Tài chính doanh nghiệp',
    icon: IconHomeBusiness.Finance_Icon,
  },
  {
    id: 4,
    name: 'Điện lực, đất đai, xây dựng',
    icon: IconHomeBusiness.Land_Icon,
  },
  {
    id: 5,
    name: 'Thương mại, quảng cáo',
    icon: IconHomeBusiness.Commerce_Icon,
  },
  {
    id: 6,
    name: 'Sở hữu trí tuệ, đăng ký tài khoản',
    icon: IconHomeBusiness.IntellectualProperty_Icon,
  },
  {
    id: 7,
    name: 'Thành lập chi nhánh, văn phong đại diện',
    icon: IconHomeBusiness.Tlcn_Icon,
  },
  {
    id: 8,
    name: 'Đấu thầu, mua sắm công',
    icon: IconHomeBusiness.Bidding_Icon,
  },
  {
    id: 9,
    name: 'Tái cấu trúc doanh nghiệp',
    icon: IconHomeBusiness.Reconstruct_Icon,
  },
  {
    id: 10,
    name: 'Giải quyết tranh chấp hợp đồng',
    icon: IconHomeBusiness.Balance_Icon,
  },
  {
    id: 11,
    name: 'Tạm dừng, chấm dứt hoạt động',
    icon: IconHomeBusiness.Pause_Icon,
  },
];

export const targetGroupOrganization = [
  { id: 1, name: 'CÔNG DÂN', link: '/cong-dan', key: 'citizen' },
  { id: 2, name: 'DOANH NGHIỆP', link: '/doanh-nghiep', key: 'business' },
];

export const hostNewsData = [
  {
    id: 1,
    content:
      'Nộp Lệ phí trước bạ và thuế cá nhân trên Cổng Dịch vụ công quốc gia',
    date: 'Ngày 09/12/2021',
  },
  {
    id: 2,
    content:
      'Cung cấp 7 dịch vụ công hỗ trợ đối tượng gặp khó khăn do đại dịch Covid-19 trên Cổng Dịch vụ công Quốc gia',
    date: 'Ngày 03/08/2021',
  },
  {
    id: 3,
    content:
      'Lợi ích 5K khi thanh toán thuế, phí trước bạ đất đai trên Cổng Dịch vụ công quốc gia',
    date: 'Ngày 09/06/2021',
  },
  {
    id: 4,
    content: 'Thông báo bảo trì, nâng cấp Hệ thống bên CSGT',
    date: 'Ngày 21/07/2023',
  },
  {
    id: 5,
    content:
      'Hướng dẫn khắc phục lỗi khi đăng ký tài khoản trên Cổng Dịch vụ công quốc gia',
    date: 'Ngày 29/07/2022',
  },
  {
    id: 6,
    content:
      "Cung cấp dịch vụ công 'Giải quyết hưởng trợ cấp thất nghiệp' trên Cổng Dịch vụ công quốc gia",
    date: 'Ngày 22/04/2022',
  },
];
