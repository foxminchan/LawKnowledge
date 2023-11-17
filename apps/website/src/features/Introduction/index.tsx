import { Link } from 'react-router-dom';
import Timeline from './components/Timeline';
import ItemIntro from './components/ItemIntro';
import useMetadata from '../../common/hooks/useMetadata';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Container, Typography } from '@mui/material';
import intro from '../../assets/images/banners/gioi-thieu-slider.png';

type Props = {
  title: string;
};

export default function Intro(props: Readonly<Props>) {
  useMetadata(props.title);

  const breadcrumbs = [
    <Link key="1" color="inherit" to="/">
      Trang chủ
    </Link>,
    <Typography key="2" color="text.primary">
      Giới thiệu
    </Typography>,
  ];

  return (
    <main className="pb-8 bg-right-top bg-no-repeat bg-tien-ich-bg min-h-[calc(100vh_-_400px)]">
      <Container>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          className="py-5"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Typography variant="h5" marginBottom={'20px'} fontWeight={'500px'}>
          Giới thiệu về Cổng Dịch vụ công Quốc gia
        </Typography>
        <div className="leading-6 text-justify">
          <span className="mb-5">
            <img src={intro} alt="banner" className="border-0" loading="lazy" />
          </span>
          <div className="mb-5 text-lg leading-6 ">
            Với quan điểm công khai, minh bạch, lấy người dân, doanh nghiệp làm
            trung tâm phục vụ, Cổng Dịch vụ công Quốc gia kết nối, cung cấp
            thông tin về thủ tục hành chính và dịch vụ công trực tuyến; hỗ trợ
            thực hiện, giám sát, đánh giá việc giải quyết thủ tục hành chính,
            dịch vụ công trực tuyến và tiếp nhận, xử lý phản ánh, kiến nghị của
            cá nhân, tổ chức trên toàn quốc.
          </div>
          <div className="mb-5 text-lg leading-6">
            Cá nhân, tổ chức dễ dàng truy cập Cổng Dịch vụ công Quốc gia tại địa
            chỉ duy nhất{' '}
            <Link to="/" className="text-lg hover:text-saffron-mango-600">
              www.dichvucong.gov.vn
            </Link>{' '}
            theo nhu cầu người dùng từ máy tính, máy tính bảng hoặc điện thoại
            di động được kết nối internet để hưởng nhiều lợi ích từ Cổng Dịch vụ
            công Quốc gia, như:
          </div>
          <ItemIntro />
        </div>
        <div className="px-5 py-10 text-xl text-center bg-right-bottom bg-no-repeat bg-[length:250px_auto] rounded bg-japonica-100 mb-7 bg-slogan-bg">
          <div className="max-w-3xl m-auto">
            <div className="mb-5 text-xl leading-7 text-dark-moderate-blue-900">
              Các Bộ, ngành, địa phương nỗ lực cùng với sự tham gia tích cực của
              người dân và doanh nghiệp trong vận hành Cổng Dịch vụ công Quốc
              gia là góp phần xây dựng Chính phủ liêm chính, hành động, phát
              triển, phục vụ Nhân Dân
            </div>
            <div className="mb-5 leading-7 text-saffron-mango-500">
              Hãy truy cập{' '}
              <Link to="/" className="inline-block">
                www.dichvucong.gov.vn !
              </Link>
            </div>
          </div>
        </div>
        <div className="relative block h-auto pl-0 ">
          <span className="relative block m-0 mb-5 text-3xl font-medium text-justify ">
            Lộ trình thực hiện
          </span>
          <Timeline />
        </div>
      </Container>
    </main>
  );
}
