import './About.css';

import { useInView } from 'react-intersection-observer';
import { useRef } from 'react'

import profilePicture from '../../assets/images/profile-picture.jpg';
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
            <img src={profilePicture} alt='My Picture' />
          </div>
          <div className='about-me-info' >
            <h2 ref={aboutTitleRef} >{textContent.aboutButton}</h2>
            <p ref={aboutInfoRef} >{textContent.about}</p>
          </div>
        </section>
        {handleAnimation(aboutInView, aboutTitleRef, 'slide-left', 'teleport-right')}
        {handleAnimation(aboutInView, aboutImageRef, 'slide-right-longer', 'teleport-left')}
        {handleAnimation(aboutInView, aboutInfoRef, 'slide-right', 'teleport-left')}
      </div>
  )
}