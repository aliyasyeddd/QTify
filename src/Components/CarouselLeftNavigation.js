import React, { useEffect, useState } from 'react';
import {useSwiper} from 'swiper/react';
import  { ReactComponent as LeftArrow}  from "../Assests/left-navigation.svg";
import './CarouselLeftNavigation.css'


const CarouselLeftNavigation = () => {
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange",function()  {
        setIsBeginning(swiper.isBeginning);
    })
  },[])


  return (
    <div className='leftNavigation'>
        {isBeginning  && <LeftArrow onClick={() => swiper.slidePrev()} />}  
    </div>
  )
}

export default CarouselLeftNavigation;
