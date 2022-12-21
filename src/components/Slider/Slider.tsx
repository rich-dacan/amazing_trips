import React, { ReactNode } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Container } from './styles';

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

const Slider:React.FC<SliderProps> = ({ settings, children }) => {
  return (
    <Container>
      <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
        {children}
      </Swiper>
    </Container>
  );
};

export default Slider;