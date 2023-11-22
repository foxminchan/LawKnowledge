import {
  Box,
  Tab,
  Tabs,
  Grid,
  Container,
  Typography,
  Breadcrumbs,
} from '@mui/material';
import {
  itemContent,
  itemBreadcrumbs,
  itemCitizenCatalog,
  itemEnterpriseCatalog,
} from '@mocks/signatureService.data';
import clsx from 'clsx';
import { SyntheticEvent, useState } from 'react';
import CustomText from './components/CustomText';
import MenuBottom from './components/MenuBottom';
import CustomTabPanel from './components/TabPanel';
import useMetadata from '@common/hooks/useMetadata';
import a11yProps from './components/AccessibilityProps';
import { IconServiceInformation } from '@common/utils/image';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type Props = {
  title: string;
};

export default function SignatureService(props: Readonly<Props>) {
  useMetadata(props.title);
  const [value, setValue] = useState(0);
  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
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
          <Box className="flex items-center w-full p-0 m-0 text-2xl font-light leading-8">
            <Box className="p-6 rounded-md w-25 h-25 bg-japonica-400">
              <img
                loading="lazy"
                alt="Laptop Icon"
                className="w-16 h-16"
                src={IconServiceInformation.LaptopIcon}
              />
            </Box>
            <Box className="w-full min-h-full px-5 py-8 ml-5 text-left bg-yellow-300 bg-opacity-25 bg-right bg-no-repeat bg-auto rounded-md bg-slogan-bg">
              <Typography className="!m-2 !text-2xl !font-medium text-dark-moderate-blue-800">
                Dịch vụ công nổi bật
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Box className="mt-4 mb-10">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {itemContent.map((item) => (
              <Tab
                key={item.id}
                label={item.name}
                {...a11yProps(item.value)}
                className={clsx(
                  'px-5 py-4 !text-lg !font-semibold !border-b-4',
                  value === item.id
                    ? 'text-japonica-400 border-japonica-400'
                    : 'text-dark-moderate-blue-800 hover:text-japonica-400 border-gray-200'
                )}
              />
            ))}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <CustomText data={itemCitizenCatalog} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CustomText data={itemEnterpriseCatalog} />
        </CustomTabPanel>
      </Container>
      <MenuBottom />
    </>
  );
}
