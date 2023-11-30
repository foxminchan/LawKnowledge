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
import { useState } from 'react';
import useQuery from '@/common/hooks/useQuery';
import CustomTheme from './components/CustomTheme';
import CustomTable from './components/CustomTable';
import SearchIcon from '@mui/icons-material/Search';
import useMetadata from '@common/hooks/useMetadata';
import useDebounce from '@/common/hooks/useDebounce';
import { itemBreadcrumbs } from '@mocks/searchResult.data';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type Props = {
  title: string;
};

export default function SearchResult(props: Readonly<Props>) {
  useMetadata(props.title);
  const param = useQuery();
  const [searchKeyword, setSearchKeyword] = useState(param.get('keyword'));
  const [debouncedSearchKeyword, loading] = useDebounce(searchKeyword);
  const handleSearch = () => {
    console.log('Searching for:', debouncedSearchKeyword);
  };

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
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            variant="outlined"
            className="w-full"
            placeholder="Nhập từ khoá tìm kiếm"
          />
        </ThemeProvider>
        <Button
          onClick={handleSearch}
          className="!w-60 !rounded-md !h-11 !bg-japonica-400 !text-white !ml-1 disabled:!cursor-not-allowed disabled:!opacity-50"
          disabled={loading}
        >
          <SearchIcon className="!text-lg" />{' '}
          {loading ? 'Đang tìm kiếm...' : 'Tìm kiếm'}
        </Button>
      </Box>
      <Typography className="!font-medium !text-xl mb-5 text-justify leading-7 text-dark-moderate-blue-800">
        Danh sách văn bản pháp luật
      </Typography>
      <CustomTable />
    </Container>
  );
}
