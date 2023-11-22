import { Link } from 'react-router-dom';
import useMetadata from '../../common/hooks/useMetadata';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import ItemBoxStatic from './components/ItemBoxStatic';
import { itemTab } from '@/mocks/onlineservice.data';
import TabContent from './components/TabContent';
import SectionBottom from './components/SectionBottom';

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
    <main className="pb-8 min-h-[calc(100vh_-_400px)] mb-12">
      <Container>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          className="py-5"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <ItemBoxStatic />
        <div className="mt-10 -ml-1 -mr-1 rounded py-5 ">
          <Grid
            container
            columnSpacing={{ xs: 0, md: 0 }}
            className="flex justify-around"
          >
            {itemTab.map((item) => (
              <Grid item className="w-1/2 rounded">
                <Card className=" overflow-hidden bg-japonica-400">
                  <CardContent className="relative text-center  bg-japonica-400">
                    <Button className="bg-japonica-400">
                      <span className="text-2xl text-white font-semibold">
                        {item.title}
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <TabContent />
      </Container>
      <SectionBottom />
    </main>
  );
}
