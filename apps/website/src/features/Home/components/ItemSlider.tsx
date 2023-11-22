import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { LegacyRef, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import { hostNewsData } from '@mocks/home.data';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function ItemSlider() {
  const [sliderRef, setSliderRef] = useState<LegacyRef<Slider> | null>(null);

  const updateSliderRef = (slider: Slider | null) => {
    if (slider) {
      setSliderRef(() => slider);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="box-border relative block h-full py-5 px-7">
      <button
        onClick={() => (sliderRef as unknown as Slider)?.slickPrev()}
        className="absolute top-0 bottom-0 left-0 w-10 h-10 m-auto text-center border-0"
      >
        <ChevronLeftIcon className="w-5 h-5 text-dark-moderate-blue-500 hover:text-japonica-500" />
      </button>
      <div className="relative block p-0 m-0 overflow-hidden">
        <Slider ref={updateSliderRef} {...settings}>
          {hostNewsData.map((card) => (
            <div
              key={card.id}
              className="px-4 py-0 border-r-[1px] border-solid border-white-smoke-300"
            >
              <span className="text-[14px] font-semibold text-dark-moderate-blue-800 line-clamp-2 mb-3">
                {card.content}
              </span>
              <p className="text-[14px] font-normal text-white-smoke-900">
                {card.date}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <button
        onClick={() => (sliderRef as unknown as Slider)?.slickNext()}
        className="absolute top-0 bottom-0 right-0 m-auto text-center border-0 w-7 h-7"
      >
        <ChevronRightIcon className="w-5 h-5 text-dark-moderate-blue-500 hover:text-japonica-500" />
      </button>
    </div>
  );
}
