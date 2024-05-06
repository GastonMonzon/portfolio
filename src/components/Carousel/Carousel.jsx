
import './Carousel.css';

import nextIcon from './Carrousel icons/next.svg';
import perviousIcon from './Carrousel icons/previous.svg';

import { useEffect, useRef, useState } from 'react'
export default function Carousel({ images, viewportWidth }) {

  const [imageIndex, setImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  let autoScrollIntervalRef = useRef(null);
  const isAutoScrollActiveRef = useRef(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isFullscreen && !isAutoScrollActiveRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        showNextImage();
      }, 4000);
      isAutoScrollActiveRef.current = true;
      return () => {
        clearInterval(autoScrollIntervalRef.current);
        isAutoScrollActiveRef.current = false;
      };
    }
  }, [isFullscreen]);

  const stopAutoScroll = () => {
    clearInterval(autoScrollIntervalRef.current);
    isAutoScrollActiveRef.current = false;
  };

  const resumeAutoScroll = () => {
    if (!isAutoScrollActiveRef.current) {
      autoScrollIntervalRef.current = setInterval(() => {
        showNextImage();
      }, 4000);
      isAutoScrollActiveRef.current = true;
      return () => {
        clearInterval(autoScrollIntervalRef.current);
        isAutoScrollActiveRef.current = false;
      };
    }
  };

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
      if (viewportWidth < 1000) {
        const container = containerRef.current;
        if (container.requestFullscreen) {
          container.requestFullscreen();
        } else if (container.mozRequestFullScreen) {
          container.mozRequestFullScreen();
        } else if (container.webkitRequestFullscreen) {
          container.webkitRequestFullscreen();
        } else if (container.msRequestFullscreen) {
          container.msRequestFullscreen();
        }
      } else {
        setIsFullscreen(true);
      }
      stopAutoScroll();
      document.documentElement.style.overflow = 'hidden';
    }
  }
  const exitFullscreen = () => {
    setIsFullscreen(false);
    stopAutoScroll();
    document.documentElement.style.overflow = '';
  }

  return (
    <>
      <div ref={containerRef} className={`${isFullscreen ? 'fullscreen-container' : 'hero-images-bar-container'}`} >
        <div className={`${isFullscreen ? 'fullscreen-image' : 'hero-images-container'}`} >
          {images.map((image, index) => (
            <img
              key={index}
              id={image.id}
              src={image}
              alt={`Image ${index + 1}`}
              className='hero-image'
              style={{ cursor: isFullscreen ? 'default' : 'pointer', translate: `${-100 * imageIndex}%` }}
              onClick={handleHeroImageClick}
              onMouseEnter={stopAutoScroll}
              onMouseLeave={isFullscreen ? null : resumeAutoScroll}
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
              onChange={() => setImageIndex(index)}
              checked={index === imageIndex} />
          ))}
        </div>
      </div>
      {isFullscreen &&
        <div className='fullscreen-overlay' >
          <button className='contact-modal-close-button' onClick={exitFullscreen} >
            <svg viewBox='0 0 24 24'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                <path className='close-svg-outer-path' d='M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z' >
                </path>
                <path className='close-svg-inner-path' d='M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z'>
                </path>
              </g>
            </svg>
          </button>
        </div>
      }
    </>
  )
}