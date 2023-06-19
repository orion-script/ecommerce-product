import React from 'react'
import { useState } from "react";
import { Photos } from '../utils/originalphotos'
import { TPhotos } from '../utils/thumbnailphotos'

const DesktopImage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (id:number) => {
    const photo = Photos.find((photo) => photo.id === id);
    if (photo) {
      setCurrentIndex(photo.id - 1);
    }
  };
    
  return (
    <div className="hidden md:flex flex-col w-2/5 h-[27rem]">
      <img src={Photos[currentIndex].url} alt="" className='w-full h-[20rem] rounded-xl' />
      <div className="flex h-[5rem] w-full justify-between mt-[2rem]">
      {TPhotos.map((photo, id) => (
      <img
        key={photo.id}
        src={photo.url}
        alt={`Product ${photo.id}`}
        className={`w-[20%] rounded-lg cursor-pointer hover:opacity-50 hover:border-4 hover:border-Orange ${id === currentIndex ? "opacity-50" : ""}`}
        onClick={() => handleClick(photo.id)}
      />
      ))}
      </div>
    </div>
  )
}

export default DesktopImage