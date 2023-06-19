import React from "react";
import MobileImage from "./MobileImage";
import DesktopImage from "./DesktopImage";
import MainText from "./MainText";

const Main: React.FC = () => {

  return (
    <div className='md:flex justify-between w-11/12 md:w-10/12 m-auto mt-10 md:mt-14'>
        <MobileImage />
        <DesktopImage />
        <MainText />
    </div>
  )
}

export default Main