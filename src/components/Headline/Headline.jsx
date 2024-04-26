import { useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import handleAnimation from '../../animationUtils';
import './Headline.css';

export default function Headline({ textContent }) {
  const headlineInfoRef = useRef();
  const headlineTitleRef = useRef();

  const [headlineInViewRef, headlineInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <div ref={headlineInViewRef} >
    <section id='headline'>
      <h2 ref={headlineTitleRef} >{textContent.headLine}</h2>
      <p ref={headlineInfoRef} >{textContent.intro}</p>
    </section>
    {handleAnimation(headlineInView, headlineTitleRef, 'slide-bottom', 'teleport-top')}
    {handleAnimation(headlineInView, headlineInfoRef, 'slide-left', 'teleport-right')}
  </div>
  )
}