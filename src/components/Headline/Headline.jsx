import { useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import handleAnimation from '../../animationUtils';
import './Headline.css';

export default function Headline({ textContent }) {
  const headlineInfoRef = useRef();
  const headlineTitleRef = useRef();

  const [headlineInViewRef, headlineInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div ref={headlineInViewRef} >
    <section id='headline'>
      <h2 ref={headlineTitleRef} >{textContent.headLine}</h2>
      <p ref={headlineInfoRef} >{textContent.intro}</p>
    </section>
    {handleAnimation(headlineInView, headlineTitleRef, 'slide-headline-title-bottom', 'slide-headline-title-top')}
    {handleAnimation(headlineInView, headlineInfoRef, 'slide-headline-info-left', 'slide-headline-info-right')}
  </div>
  )
}