import clsx from 'clsx';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { itemBoxData, subItemBoxData } from '@mocks/onlineService.data';

export default function ItemBoxStatic() {
  const subItemBox = (
    <div className="px-1 py-[18px]">
      <Grid
        container
        columnSpacing={{ xs: 1, md: 1 }}
        className="justify-center"
      >
        {subItemBoxData.map((item) => (
          <Grid item key={item.id} xs={12} sm={6}>
            <CardContent className="relative text-center align-top">
              <Typography
                className={clsx('!text-3xl !font-medium !mb-5', item.style)}
              >
                {item.title}
              </Typography>
              <Typography
                className={clsx(
                  '!text-5xl !font-bold  !mt-5 cursor-pointer',
                  item.style
                )}
              >
                {item.value}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
  return (
    <section className="mt-0 mb-0 -ml-1 -mr-1 bg-transparent">
      <Grid
        container
        columnSpacing={{ xs: 1, md: 1 }}
        className="justify-center"
      >
        {itemBoxData.map((item) => (
          <Grid item key={item.id} xs={12} sm={6}>
            <Card
              className={clsx(
                ' bg-right-top bg-no-repeat bg-[length:250px_auto] overflow-hidden p-2 ',
                item.bg
              )}
            >
              {item.id === 3 ? (
                subItemBox
              ) : (
                <CardContent className="relative text-center align-top">
                  <Typography className="!text-3xl !font-medium !mb-5">
                    {item.title}
                  </Typography>
                  <Typography className="!text-5xl !font-bold text-rose-700 !mt-5 hover:text-japonica-600 cursor-pointer">
                    {item.value}
                  </Typography>
                </CardContent>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
