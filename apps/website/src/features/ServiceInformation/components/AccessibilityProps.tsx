import clsx from 'clsx';

export default function a11yProps(index: number) {
  return {
    id: clsx('simple-tab-' + index),
    'aria-controls': clsx('simple-tabpanel-' + index),
  };
}
