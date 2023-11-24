import { Divider, Typography } from '@mui/material';

export default function HeaderDetail() {
  return (
    <div className="relative mt-5">
      <Typography variant="h6" className="mb-5">
        Nội dung văn bản
      </Typography>
      <div className="ml-3 mr-3 px-5 py-2">
        <iframe
          title="Văn Bản Pháp Luật"
          src="https://baohuy2k3.github.io/PhapDien/demuc/0b675c1b-8f59-429c-ac5f-cdfed4072cab.html"
          className="block w-full h-[100vh] border-none"
        >
          Trình duyệt không hỗ trợ iframe
        </iframe>
      </div>
      <Divider className="!mt-5" />
    </div>
  );
}
