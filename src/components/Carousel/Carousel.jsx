
import './Carousel.css';

import nextIcon from './Carrousel icons/next.svg';
import perviousIcon from './Carrousel icons/previous.svg';

import { useEffect, useRef, useState } from 'react'
export default function Carousel({ images }) {

  const [imageIndex, setImageIndex] = useState(0);
  let autoScrollIntervalRef = useRef(null);

  useEffect(() => {
    autoScrollIntervalRef.current = setInterval(() => {
      showNextImage();
    }, 4000);

    return () => {
      clearInterval(autoScrollIntervalRef.current);
    };
  });

  const stopAutoScroll = () => {
    clearInterval(autoScrollIntervalRef.current);
  }

  const resumeAutoScroll = () => {
    autoScrollIntervalRef.current = setInterval(() => {
      showNextImage();
    }, 4000);
  }

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  const handleHeroImageClick = (event) => {
  }

  return (
    <div className='hero-images-bar-container' >
      <div className='hero-images-container' >
        {images.map((image, index) => (
          <img
            key={index}
            id={image.id}
            src={image}
            alt={`Image ${index + 1}`}
            className='hero-image'
            style={{ cursor:'pointer', translate: `${-100 * imageIndex}%` }}
            onClick={handleHeroImageClick}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={resumeAutoScroll}
          />
        ))}
      <button
        className="hero-image-button"
        onClick={showPrevImage}
        style={{ left: 0 }} >
          <img src={perviousIcon} alt='previousIcon' />
      </button>
      </div>
      <button
        onClick={showNextImage}
        className="hero-image-button"
        style={{ right: 0 }} >
          <img src={nextIcon} alt='nextIcon' />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }} >
        {images.map((_, index) => (
          <input
          type='radio'
            key={index}
            className='hero-image-radio-button'
            onClick={() => setImageIndex(index)} 
            checked={index === imageIndex} />
        ))}
      </div>
    </div>
  )
}