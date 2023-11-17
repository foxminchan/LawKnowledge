import { Grid } from '@mui/material';

type Props = {
  img: string;
  video: string;
};

export default function GuideVideo(props: Readonly<Props>) {
  return (
    <Grid item xs={12} sm={6}>
      <video controls loop muted width="100%" height="auto" poster={props.img}>
        <source src={props.video} type="video/mp4" />
      </video>
    </Grid>
  );
}
