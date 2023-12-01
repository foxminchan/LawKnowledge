import { Link } from 'react-router-dom';
import HeaderDetail from './components/HeaderDetail';
import useMetadata from '@/common/hooks/useMetadata';
import ContentDetail from './components/ContentDetail';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Container, Typography } from '@mui/material';

type Props = {
  title: string;
};

export default function OnlineService(props: Readonly<Props>) {
  useMetadata(props.title);

  const breadcrumbs = [
    <Link key="1" color="inherit" to="/">
      Trang chủ
    </Link>,
    <Typography key="2" color="text.primary">
      Văn bản pháp luật
    </Typography>,
    <Typography key="3" color="text.primary">
      Chi tiết văn bản
    </Typography>,
  ];

  return (
    <main className="min-h-[calc(100vh_-_400px)]">
      <Container>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          className="py-5"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <HeaderDetail />
        <ContentDetail />
      </Container>
    </main>
  );
}
