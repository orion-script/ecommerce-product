import React from 'react'
import { useState } from "react";
import Previous from "../assets/icon-previous.svg"
import Next from "../assets/icon-next.svg"
import {Photos} from "../utils/originalphotos"

const MobileImage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = (e: React.MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? Photos.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
    
    const goToNext = (e: React.MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      const isLastSlide = currentIndex === Photos.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  return (
    <div className="md:hidden w-full h-full relative">
      <img src={Next} alt="" onClick={goToNext} className="rightArrowStyles" />
      <img src={Previous} alt="" onClick={goToPrevious} className="leftArrowStyles" />
      <img src={Photos[currentIndex].url} alt="" className='' />
    </div>
  )
}

export default MobileImage