import {
  itemBreadcrumbs,
  itemCitizenCatalog,
  itemEnterpriseCatalog,
} from '../../mocks/payment.data';
import clsx from 'clsx';
import useMetadata from '../../common/hooks/useMetadata';
import PaymentSection from './components/PaymentSection';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Container, Grid, Breadcrumbs, Typography } from '@mui/material';

type Props = {
  title: string;
};

export default function PaymentOnline(props: Readonly<Props>) {
  useMetadata(props.title);

  return (
    <Container className="bg-right-top bg-no-repeat bg-crane-bg">
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
      <Grid container spacing={2}>
        <Grid container className="mt-16 mb-5 box-extend-new">
          <Grid item xs={12} sm={6}>
            <PaymentSection
              title="CÔNG DÂN"
              color="text-tradewind-500 bg-tradewind-50"
              border="border-tradewind-500"
              data={itemCitizenCatalog}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PaymentSection
              title="DOANH NGHIỆP"
              color="text-japonica-500 bg-japonica-50"
              border="border-japonica-500"
              data={itemEnterpriseCatalog}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
