import {
  Box,
  Button,
  TextField,
  Container,
  Typography,
  Breadcrumbs,
  ThemeProvider,
} from '@mui/material';
import clsx from 'clsx';
import CustomTheme from './components/CustomTheme';
import CustomTable from './components/CustomTable';
import SearchIcon from '@mui/icons-material/Search';
import useMetadata from '@common/hooks/useMetadata';
import { itemBreadcrumbs } from '@mocks/searchResult.data';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import useQuery from '@/common/hooks/useQuery';

type Props = {
  title: string;
};

export default function SearchResult(props: Readonly<Props>) {
  const param = useQuery();
  useMetadata(props.title);

  return (
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
      <Box className="flex w-full mt-3 mb-10">
        <ThemeProvider theme={CustomTheme}>
          <TextField
            InputProps={{
              className:
                'h-11 !font-medium text-lg !text-dark-moderate-blue-800 bg-white border-0 !focus:border-japonica-400 !mr-1',
            }}
            value={param.get('keyword')}
            variant="outlined"
            className="w-full"
            placeholder="Nhập từ khoá tìm kiếm"
          />
        </ThemeProvider>
        <Button className="!w-44 !rounded-md !h-11 !bg-japonica-400 !text-white !ml-1">
          <SearchIcon className="!text-lg" /> Tìm kiếm
        </Button>
      </Box>
      <Typography className="!font-medium !text-xl mb-5 text-justify leading-7 text-dark-moderate-blue-800">
        Danh sách văn bản pháp luật
      </Typography>
      <CustomTable />
    </Container>
  );
}
