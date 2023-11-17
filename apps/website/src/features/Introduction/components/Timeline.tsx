import clsx from 'clsx';
import { Grid } from '@mui/material';
import { timeLine } from '../../../mocks/intro.data';

export default function Timeline() {
  return (
    <Grid container marginLeft={'-5px'}>
      {timeLine.map((item) => (
        <Grid
          item
          key={item.id}
          className={clsx('float-left px-2', item.width)}
        >
          <div className="mb-5 text-2xl font-medium text-japonica-400 font-nunito">
            {item.year}
          </div>
          <div
            className={clsx(
              'ml-0 h-1 bg-japonica-100 relative mb-5 -mr-4',
              'before:left-0 before:w-4 before:h-4 before:absolute before:top-0 before:bottom-0 before:m-auto before:rounded-full before:bg-japonica-400',
              item.year === 'Sau năm 2020'
                ? 'after:absolute after:w-0 after:h-0 after:border-t-[10px] after:border-b-[10px] after:border-l-[15px] after:border-solid after:-right-3 after:top-0 after:bottom-0 after:m-auto after:border-l-japonica-100 after:border-t-transparent after:border-b-transparent'
                : ''
            )}
          />
          <div className="mb-5 text-lg leading-6 text-dark-moderate-blue-700">
            {item.content}
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
