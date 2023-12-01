import { Box, Typography } from '@mui/material';

type Props = {
  text: string;
  imgSrc: string;
};

export default function CustomText(props: Readonly<Props>) {
  return (
    <Box className="flex items-center mt-5">
      <Box className="mr-2.5">
        <img
          loading="lazy"
          src={props.imgSrc}
          alt="icon"
          className="text-green-500 w-9 h-9"
        />
      </Box>
      <Typography
        variant="body1"
        className="text-lg text-black hover:text-japonica-500"
      >
        {props.text}
      </Typography>
    </Box>
  );
}
