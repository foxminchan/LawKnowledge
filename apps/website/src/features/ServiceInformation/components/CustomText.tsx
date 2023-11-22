import { Box, Typography } from '@mui/material';
import { IconServiceInformation } from '../../../common/utils/image';

type Props = {
  data: { id: number; name: string }[];
};

export default function CustomText(props: Readonly<Props>) {
  return (
    <>
      {props.data.map((item) => (
        <Box className="flex mt-5 py-2 w-full text-lg" key={item.id}>
          <Box className="mr-4 w-5 h-5 flex-shrink-0">
            <img
              alt="icon"
              loading="lazy"
              src={IconServiceInformation.Document}
            />
          </Box>
          <Typography className="text-lg text-black hover:text-japonica-500 text-justify">
            {item.name}
          </Typography>
        </Box>
      ))}
    </>
  );
}
