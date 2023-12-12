import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Coa from '@assets/images/coat_of_arms.svg';

export default function Footer() {
  return (
    <footer className="left-0 hidden w-full px-10 mt-auto text-center bg-japonica-700 lg:block">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link to="/" className="inline-block">
            <Image
              src={Coa}
              alt="Coat of arms"
              preview={false}
              loading="lazy"
              className="lg:max-w-[378px] ml-1 lg:h-auto"
            />
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
          Tri thức pháp luật là một dự án phi lợi nhuận, được xây
          dựng và phát triển trên nền tảng mã nguồn mở.
        </p>

        <div className="flex flex-col justify-center mt-6 sm:flex-row">
          <p className="text-sm text-white sm:mr-4 sm:mb-0">
            © {new Date().getFullYear()} Tri thức pháp luật
          </p>
        </div>
      </div>
    </footer>
  );
}
