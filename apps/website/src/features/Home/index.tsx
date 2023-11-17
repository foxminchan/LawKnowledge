import TargetBox from './components/TargetBox';
import { button } from '../../mocks/home.data';
import ItemSlider from './components/ItemSlider';
import { Button, Container, Grid } from '@mui/material';
import useMetadata from '../../common/hooks/useMetadata';

type Props = {
  title: string;
};

export default function Home(props: Readonly<Props>) {
  useMetadata(props.title);

  return (
    <>
      <div className="relative items-center justify-center w-full py-10 bg-center bg-cover lg:h-60 xs:h-96 bg-hero-banner">
        <Container>
          <div className="w-11/12 h-full ml-auto mr-auto mt-9">
            <Grid container rowSpacing={4} className="px-5 mb-5">
              <Grid item xs={12} md={12}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {button.map((item) => (
                    <Grid item xs={7} md={4} key={item.id}>
                      <Button
                        variant="outlined"
                        className="w-full h-full py-2 !text-dark-moderate-blue-800 text-lg !font-medium border !border-transparent rounded !bg-light-orange-300 hover:!bg-light-orange-400"
                      >
                        {item.name}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <div className="w-full h-32 bg-right-top bg-cover bg-white-smoke-100 bg-hotnews-bg">
        <Container maxWidth="md">
          <ItemSlider />
        </Container>
      </div>
      <Container className="py-10">
        <TargetBox />
      </Container>
    </>
  );
}
