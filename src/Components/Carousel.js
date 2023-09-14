import React, { useEffect } from "react";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "./Carousel.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0,null);
  }, [data]);
};

const Carousel = ({ data, Component }) => {

  return (
    <div className="carousel">
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{Component(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
