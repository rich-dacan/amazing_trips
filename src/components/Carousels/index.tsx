import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { PropsCarousel } from "../../@types";
import { Card } from "../Cards/Index";
import { Container } from "./style";

interface Props {
  data: {
    title: string;
    url: string;
  }[];
}

export const Carousel: React.FC<Props> = props => {

  function SampleNextArrow(props: PropsCarousel) {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "var(--color-grey)" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: PropsCarousel) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "var(--color-grey)" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    // centerMode: true,
    // centerPadding: "100px",
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    // cssEase: "linear",
    // fade: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    // appendDots: (dots: any) => (
    //   <div
    //     style={{
    //       backgroundColor: "#ddd",
    //       borderRadius: "10px",
    //       padding: "10px",
    //       marginTop: "50px"
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i: number) => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "var(--color-primary)",
    //       border: "1px var(--color-primary) solid"
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // )
  };

  return (
    <Container>
      <h2> Our adventures </h2>
      <Slider {...settings}>
        {props.data.map((info, index) => (
          <div key={index} className="test">
            <Image
              src={info.url}
              alt={info.title}
              width={150}
              height={250}
              quality={100}
              priority
            />
            <h3>{info.title}</h3>
          </div>
        ))}
        {/* <Card data={props.data} /> */}
      </Slider>
    </Container>
  )
};