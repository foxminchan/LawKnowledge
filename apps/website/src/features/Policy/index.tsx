import {
  unshareSection,
  itemBreadcrumbs,
  behaviourSection,
  responsibilitySection,
} from '../../mocks/policy.data';
import clsx from 'clsx';
import SubNavbar from '../../components/SubNavbar';
import { support } from '../../mocks/navSupport.data';
import ContentSection from './components/ContentSection';
import useMetadata from '../../common/hooks/useMetadata';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Container, Divider, Breadcrumbs, Typography } from '@mui/material';

type Props = {
  title: string;
};

export default function SupportPolicy(props: Readonly<Props>) {
  useMetadata(props.title);

  return (
    <>
      <SubNavbar data={support} />
      <Container>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          className="py-5"
        >
          {itemBreadcrumbs.map((item) => (
            <Typography
              key={item.id}
              variant="subtitle1"
              component="a"
              href={item.isActive ? undefined : item.link}
              className={clsx(
                item.isActive
                  ? 'text-dark-moderate-blue-800 font-bold'
                  : 'font-normal'
              )}
            >
              {item.name}
            </Typography>
          ))}
        </Breadcrumbs>
        <Typography className="!mb-[20px] !text-[28px] font-semibold text-center text-black main-title">
          Điều khoản và điều kiện sử dụng Cổng Dịch vụ công Quốc gia
        </Typography>
        <Typography className="mb-5 text-lg text-black text-justify">
          {' '}
          Bằng việc sử dụng các Dịch vụ trên Cổng Dịch vụ công Quốc gia, tổ
          chức, cá nhân sử dụng mặc nhiên chấp thuận và cam kết thực hiện các
          điều khoản và điều kiện sử dụng sau đây:{' '}
        </Typography>
        <Divider className="h-px bg-gray-300 !my-[10px]" />
        <Typography
          variant="h6"
          className="flex items-start mb-5 text-2xl font-semibold text-justify text-black "
        >
          1. Tổ chức, cá nhân sử dụng Dịch vụ trên cổng Dịch vụ công quốc gia có
          trách nhiệm:
        </Typography>
        <ContentSection data={responsibilitySection} />
        <Divider className="h-px !my-[10px] bg-gray-300" />
        <Typography
          variant="h6"
          className="flex items-start mb-5 text-2xl font-semibold text-justify text-black"
        >
          2. Tổ chức, cá nhân sử dụng Dịch vụ trên cổng Dịch vụ công quốc gia
          không được thực hiện một trong các hành vi sau:
        </Typography>
        <ContentSection data={behaviourSection} />
        <Divider className="h-px bg-gray-300 !my-[10px]" />
        <Typography
          variant="h6"
          className="flex items-start mb-5 text-2xl font-semibold text-justify text-black"
        >
          3. Cổng Dịch vụ công quốc gia có quyền Tạm dừng, Khoá, Huỷ các tài
          khoản trên cổng có các hành vi vi phạm pháp luật, gian lận hoặc không
          tuân thủ các điều khoản sử dụng đã nêu ở trên mà không cần thông báo
          cũng như bồi thường
        </Typography>
        <Divider className="h-px bg-gray-300 !my-[10px]" />
        <Typography
          variant="h6"
          className="flex items-start mb-5 text-2xl font-semibold text-justify text-black"
        >
          4. Cổng Dịch vụ công Quốc gia không chia sẻ thông tin về người sử dụng
          với các cơ quan khác mà không có sự cho phép của người sử dụng, trừ
          các trường hợp:
        </Typography>
        <ContentSection data={unshareSection} />
        <Divider className="h-px bg-gray-300 !my-[10px]" />
        <Typography
          variant="h6"
          className="flex items-start !mb-5 text-2xl font-semibold text-justify text-black"
        >
          5. Trong trường hợp sửa đổi nội dung các điều khoản và điều kiện sử
          dụng Cổng Dịch vụ công Quốc gia, các nội dung sửa đổi sẽ được thông
          báo trên Cổng. Người sử dụng tiếp tục sử dụng và tiếp tục thực hiện
          các yêu cầu dịch vụ trên Cổng có nghĩa là đã chấp nhận các sửa đổi đó.
        </Typography>
      </Container>
    </>
  );
}
