import { Link } from 'react-router-dom';
import TabContent from './components/TabContent';
import useMetadata from '@common/hooks/useMetadata';
import SectionBottom from './components/SectionBottom';
import ItemBoxStatic from './components/ItemBoxStatic';
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
      Dịch vụ công trực tuyến
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
        <ItemBoxStatic />
        <TabContent />
      </Container>
      <SectionBottom />
    </main>
  );
}
