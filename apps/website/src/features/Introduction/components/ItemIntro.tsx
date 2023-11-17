import { Grid } from '@mui/material';
import { itemIntroInfo } from '../../../mocks/intro.data';

export default function ItemIntro() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {itemIntroInfo.map((item) => (
        <Grid key={item.id} item xs={2} sm={4} md={4} className="p-[24px]">
          <img
            loading="lazy"
            src={item.icon}
            alt="icon"
            className="h-auto max-w-full align-middle border-0"
          />
          <br />
          <span className="mb-5">{item.name}</span>
        </Grid>
      ))}
    </Grid>
  );
}
