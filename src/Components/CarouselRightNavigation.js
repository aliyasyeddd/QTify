import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import  { ReactComponent as RightArrow}  from "../Assests/right-Navigation.svg";
import "./CarouselRightNavigation.css"

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function()  {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className="rightNavigation">
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNavigation;
