import clsx from 'clsx';
import { Box } from '@mui/material';

type Props = {
  children?: React.ReactNode;
  value: number;
  index: number;
};

export default function CustomTabPanel(props: Readonly<Props>) {
  const { children, value, index } = props;
  const isVisible = value === index;

  return (
    <div
      role="tabpanel"
      hidden={!isVisible}
      id={clsx('tabpanel-' + index)}
      aria-labelledby={clsx('tab-' + index)}
    >
      {isVisible && <Box>{children}</Box>}
    </div>
  );
}
