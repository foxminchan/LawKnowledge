import { Divider, Typography } from '@mui/material';
import PdfIcon from '@assets/images/icons/pdf-icon.svg';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function HeaderDetail() {
  return (
    <div className="relative">
      <Typography variant="h5" className="mb-5">
        Tên văn bản pháp luật
      </Typography>
      <div className="-ml-1 mt-1">
        <NavigateNextIcon className="text-saffron-mango-500 hover:text-saffron-mango-600 w-3 h-3" />
        <span className="text-base font-medium text-saffron-mango-500 hover:text-saffron-mango-600 cursor-pointer">
          Xem chi tiết
        </span>
      </div>
      <img
        src={PdfIcon}
        alt="pdf-icon"
        className="absolute w-10 h-10 top-0 right-0"
      />
      <Divider className="!mt-5" />
    </div>
  );
}
