import { Divider, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function HeaderDetail() {
  return (
    <div className="relative">
      <Typography variant="h5" className="mb-5">
        Tên văn bản pháp luật
      </Typography>
      <div className="-ml-1 mt-1">
        <NavigateNextIcon className="text-saffron-mango-500 w-3 h-3" />
        <span className="text-base font-medium text-saffron-mango-500 cursor-pointer">
          Xem chi tiết
        </span>
      </div>
      <div>
        <DescriptionIcon className="absolute text-saffron-mango-500 !w-10 !h-10 top-0 right-10" />
      </div>
      <Divider className="!mt-5" />
    </div>
  );
}
