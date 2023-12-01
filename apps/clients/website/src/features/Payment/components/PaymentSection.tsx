import clsx from 'clsx';
import CustomText from './PaymentItem';
import { Box, Typography } from '@mui/material';

type Props = {
  title: string;
  color: string;
  border: string;
  data: { id: number; name: string; img: string }[];
};

export default function PaymentSection(props: Readonly<Props>) {
  return (
    <Box className={'box-ex px-2.5'}>
      <Typography
        variant="h5"
        className={clsx(
          'text-2xl font-black text-center py-2 px-5 uppercase border-t-4 bg-gray-100 mb-2.5',
          props.color,
          props.border
        )}
      >
        {props.title}
      </Typography>
      <Box className="body bg-gray-100 rounded-xl py-2.5 px-10 min-h-[490px] mt-2.5">
        {props.data.map((item) => (
          <CustomText key={item.id} text={item.name} imgSrc={item.img} />
        ))}
      </Box>
    </Box>
  );
}
