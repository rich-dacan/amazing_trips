import React from 'react';
import { TopicCard } from '../../Cards/TopicCards/Index';
import { CardType } from '../../Cards/TopicCards/types';
import { Slide, Slider, SliderProps } from '../../Slider';

import 'swiper/css/autoplay';
import 'swiper/css/bundle';
import useWindowSize from '../../../hooks/useWindowSize';

interface Props {
  data: CardType[];
}

const CardSlider: React.FC<Props> = (props) => {

  const mobile = useWindowSize().width;

  if (props.data.length === 1) {
    return (
      <TopicCard data={props.data[0]} />
    )
  };

  const settings: SliderProps = {
    spaceBetween: 50,
    // slidesPerView: props.data.length < 3 ? props.data.length : 3,
    slidesPerView: mobile < 800 ? 1 : mobile < 1000 ? 2 : 3,
    navigation: props.data.length > 2 && true,
    draggable: props.data.length > 2 && true,
    loop: true,
    pagination: {
      clickable: true,
    },
    autoplay: true,
    speed: 1500,
  };

  return (
    <Slider settings={settings}>
      {props.data.map((card, index) => (
        <Slide key={index}>
        <TopicCard data={card} />
      </Slide>
      ))}
    </Slider>
  );
};

export default CardSlider;
