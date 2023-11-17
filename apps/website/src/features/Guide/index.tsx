import {
  Box,
  Grid,
  Divider,
  Container,
  Typography,
  Breadcrumbs,
} from '@mui/material';
import clsx from 'clsx';
import SubNavbar from '../../components/SubNavbar';
import useMetadata from '../../common/hooks/useMetadata';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { itemBreadcrumbs, itemGuide } from '../../mocks/guide.data';
import GuideHelpStepsContent from './components/GuideHelpStepsContent';

type Props = {
  title: string;
};

export default function Guide(props: Readonly<Props>) {
  useMetadata(props.title);
  return (
    <>
      <SubNavbar />
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
        <Grid container>
          <Grid item xs={12} sm={12}>
            <div className="mb-5 text-3xl font-bold text-center main-title">
              HƯỚNG DẪN SỬ DỤNG
            </div>
            <Box
              display="flex"
              justifyContent="space-between"
              className="text-lg text-center"
            >
              {itemGuide.map((item) => (
                <Grid
                  key={item.id}
                  className="relative px-3 py-3 item"
                  xs={3}
                  sm={12}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 pt-6 mb-5 text-2xl text-center text-white rounded-full bg-lime-700">
                      {item.number}
                    </div>
                    <div className="text-lg">{item.name}</div>
                  </div>
                </Grid>
              ))}
            </Box>
            <div className="text-lg italic text-center text-japonica-400">
              Khuyến nghị: Hệ thống chạy tốt nhất trên trình duyệt Chrome &
              Firefox
            </div>
          </Grid>
        </Grid>
        <Divider className="h-px bg-gray-300 !my-[20px]" />
        <GuideHelpStepsContent />
      </Container>
    </>
  );
}
