import { Dialog, DialogContent, Divider, Typography } from '@mui/material';
import PdfIcon from '@assets/images/icons/pdf-icon.svg';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default function HeaderDetail() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const componentToPrintRef = useRef<HTMLDivElement>(null);

  const generatePDF = () => {
  if (!componentToPrintRef.current ) {
    return;
  }

  html2canvas(componentToPrintRef.current).then((canvas) => {
    const waitForRender = setInterval(() => {
      if (canvas.toDataURL) {
        clearInterval(waitForRender);
        const imgData = canvas.toDataURL(); 
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', -10, -10, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        pdf.save('vbpl.pdf');
      }
    }, 100);
  });
};

  return (
    <div ref={componentToPrintRef} className="relative">
      <Typography variant="h5" className="mb-5">
        Tên văn bản pháp luật
      </Typography>
      <div className="-ml-1 mt-1">
        <NavigateNextIcon className="text-saffron-mango-500 hover:text-saffron-mango-600 w-3 h-3" />
        <button onClick={handleClickOpen} className="text-base font-medium bg-transparent text-saffron-mango-500 hover:text-saffron-mango-600 cursor-pointer">
          Xem chi tiết
        </button>
      </div>
      <button onClick={generatePDF}  className="bg-transparent z-0">
        <img
          src={PdfIcon}
          alt="pdf-icon"
          className="absolute w-10 h-10 top-0 right-0 z-0"
        />
      </button>
      <Divider className="!mt-5" />
      <Dialog
        fullWidth={true}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <iframe 
            
            title="Văn Bản Pháp Luật"
            src="https://baohuy2k3.github.io/PhapDien/demuc/0b675c1b-8f59-429c-ac5f-cdfed4072cab.html"
            className="block w-full h-[2600vh] border-none"
          >
            Trình duyệt không hỗ trợ iframe
          </iframe>
        </DialogContent>
      </Dialog>
    </div>
  );
}