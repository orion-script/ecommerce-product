import React, { useState } from 'react';
import { Photos } from '../utils/originalphotos';
import { TPhotos } from '../utils/thumbnailphotos';
import Close from "../assets/icon-close.svg"
import Next from "../assets/icon-next.svg"
import Previous from "../assets/icon-previous.svg"

const DesktopImage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setLightboxOpen] = useState(false);

  const handleClick = (id: number) => {
    setCurrentIndex(id - 1);
  };

  const handleOpenLightbox = () => {
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Photos.length);
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Photos.length) % Photos.length);
  };

  const handleLightboxClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleCloseLightbox();
    }
  };

  return (
    <div className="hidden md:flex flex-col w-2/5 h-[27rem]">
      <img src={Photos[currentIndex].url} alt="" className="w-full h-[20rem] rounded-xl" onClick={handleOpenLightbox} />

      <div className="flex h-[5rem] w-full justify-between mt-[2rem]">
        {TPhotos.map((photo, id) => (
          <img
            key={photo.id}
            src={photo.url}
            alt={`Product ${photo.id}`}
            className={`w-[20%] rounded-lg cursor-pointer hover:opacity-50 hover:border-4 hover:border-Orange ${
              id === currentIndex ? 'opacity-50' : ''
            }`}
            onClick={() => handleClick(photo.id)}
          />
        ))}
      </div>

      {isLightboxOpen && (
        <div className="fixed w-screen h-screen inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75" onClick={handleLightboxClick}>
          <div className="relative w-2/5 h-4/6">
            <img src={Previous} alt="" className="absolute top-1/2 -translate-y-1/2 left-0 m-4 cursor-pointer" onClick={handlePreviousImage} />

            <img src={Close} alt="" className="absolute top-0 right-0 m-4 cursor-pointer" onClick={handleCloseLightbox} />

            <img src={Next} alt="" className="absolute top-1/2 -translate-y-1/2 right-0 m-4 cursor-pointer" onClick={handleNextImage} />
        
            <img src={Photos[currentIndex].url} alt="" className="w-full h-full rounded-xl" />
          </div>

          <div className="flex h-[5rem] w-2/5 justify-between mt-[2rem]">
            {TPhotos.map((photo, id) => (
              <img
                key={photo.id}
                src={photo.url}
                alt={`Product ${photo.id}`}
                className={`w-[20%] rounded-lg cursor-pointer hover:opacity-50 hover:border-4 hover:border-Orange ${
                  id === currentIndex ? 'opacity-50' : ''
                }`}
                onClick={() => handleClick(photo.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopImage;
