
import './Carousel.css';

import nextIcon from './Carrousel icons/next.svg';
import perviousIcon from './Carrousel icons/previous.svg';

import { useEffect, useRef, useState } from 'react'
export default function Carousel({ images }) {

  const [imageIndex, setImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  let autoScrollIntervalRef = useRef(null);

  useEffect(() => {
    if (!isFullscreen) {
      autoScrollIntervalRef.current = setInterval(() => {
        showNextImage();
      }, 4000);

      return () => {
        clearInterval(autoScrollIntervalRef.current);
      };
    }
  });

  const stopAutoScroll = () => {
    console.log('Stop');
    clearInterval(autoScrollIntervalRef.current);
  }

  const resumeAutoScroll = () => {
    console.log('Resume');
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

  const handleHeroImageClick = () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
      stopAutoScroll();
    }
  }
  const exitFullscreen = () => {
    setIsFullscreen(false);
    stopAutoScroll();
  }

  return (
    <>
      <div className={`hero-images-bar-container ${isFullscreen ? 'fullscreen-container' : ''}`} >
        <div className={`hero-images-container ${isFullscreen ? 'fullscreen-image' : ''}`} >
          {images.map((image, index) => (
            <img
              key={index}
              id={image.id}
              src={image}
              alt={`Image ${index + 1}`}
              className='hero-image'
              style={{ cursor: 'pointer', translate: `${-100 * imageIndex}%` }}
              onClick={handleHeroImageClick}
              onMouseEnter={stopAutoScroll}
              onMouseLeave={resumeAutoScroll}
            />
          ))}
          <button
            className={`hero-image-button ${isFullscreen ? 'fullscreen-button' : ''}`}
            onClick={showPrevImage}
            style={{ left: isFullscreen ? '-10%' : '0' }} >
            <img src={perviousIcon} alt='previousIcon' />
          </button>
        </div>
        <button
          onClick={showNextImage}
          className={`hero-image-button ${isFullscreen ? 'fullscreen-button' : ''}`}
          style={{ right: isFullscreen ? '-10%' : '0' }} >
          <img src={nextIcon} alt='nextIcon' />
        </button>
        <div className={`hero-image-radio-container ${isFullscreen ? 'fullscreen-radio' : ''}`} >
          {images.map((_, index) => (
            <input
              type='radio'
              key={index}
              className={`hero-image-radio-button ${isFullscreen ? 'fullscreen-radio' : ''}`}
              onClick={() => setImageIndex(index)}
              checked={index === imageIndex} />
          ))}
        </div>
      </div>
      {isFullscreen &&
        <div className='fullscreen-overlay' >
          {console.log('here')}
          <button onClick={exitFullscreen} >X</button>
        </div>
      }
    </>
  )
}