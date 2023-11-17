import {
  targetGroupCitizen,
  targetGroupBusiness,
  targetGroupOrganization,
} from '../../../mocks/home.data';
import { Container, Grid } from '@mui/material';

export default function TargetBox() {
  const allCitizenItems = targetGroupCitizen.map((item) => (
    <span
      className="relative block px-5 py-3 mb-2 text-lg font-medium rounded-lg cursor-pointer bg-white-smoke-100 pl-14 text-dark-moderate-blue-400 hover:text-japonica-400"
      key={item.id}
    >
      <span className="absolute inline-block w-8 top-2 left-4">
        <img src={item.icon} alt="icon" loading="lazy" className="h-6" />
      </span>
      <span className="inline">{item.name}</span>
    </span>
  ));

  const allBusinessItems = targetGroupBusiness.map((item) => (
    <span
      className="relative block px-5 py-3 mb-2 text-lg font-medium rounded-lg cursor-pointer bg-white-smoke-100 pl-14 text-dark-moderate-blue-400 hover:text-japonica-400"
      key={item.id}
    >
      <span className="absolute inline-block w-8 top-2 left-4">
        <img src={item.icon} alt="cocon" loading="lazy" className="h-6" />
      </span>
      <span className="inline">{item.name}</span>
    </span>
  ));

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 4, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        className="items-center mb-3 "
      >
        {targetGroupOrganization.map((item) => (
          <Grid md={6} item xs={6} key={item.id}>
            <Grid container className="justify-center">
              <Grid item xs={10} className="items-center">
                <div className="relative items-center pb-4 mb-4 text-base text-center rounded-l rounded-r cursor-pointer text-japonica-400">
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-japonica-400 rounded-3xl"></div>
                  <span className="inline-block text-lg font-medium align-middle">
                    <span className="text-2xl">{item.name}</span>
                  </span>
                </div>
                <div className="relative text-lg">
                  {item.key === 'citizen' && allCitizenItems}
                  {item.key === 'business' && allBusinessItems}
                </div>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
