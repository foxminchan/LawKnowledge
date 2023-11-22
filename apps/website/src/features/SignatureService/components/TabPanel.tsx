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
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {isVisible && <Box>{children}</Box>}
    </div>
  );
}
