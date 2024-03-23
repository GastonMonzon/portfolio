import './About.css';

import { useInView } from 'react-intersection-observer';
import { useRef } from 'react'
import handleAnimation from '../../animationUtils';

export default function About({ textContent }) {
  const aboutTitleRef = useRef();
  const aboutInfoRef = useRef();
  const aboutImageRef = useRef();

  const [aboutInViewRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
      <div ref={aboutInViewRef} >
        <section id='about' >
          <div className='image-div' ref={aboutImageRef} >
            <img src='' alt='My Picture' />
          </div>
          <div className='about-me-info' >
            <h2 ref={aboutTitleRef} >{textContent.aboutButton}</h2>
            <p ref={aboutInfoRef} >{textContent.about}</p>
          </div>
        </section>
        {handleAnimation(aboutInView, aboutTitleRef, 'slide-about-title-right', 'slide-about-title-left')}
        {handleAnimation(aboutInView, aboutImageRef, 'slide-about-image-right', 'slide-about-image-left')}
        {handleAnimation(aboutInView, aboutInfoRef, 'slide-about-info-right', 'slide-about-info-left')}
      </div>
  )
}