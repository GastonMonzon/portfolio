import './Apps.css';

import dogsImage1 from '../../assets/images/dogs-web-picture-1.jpg'
import dogsImage2 from '../../assets/images/dogs-web-picture-2.jpg'
import dogsImage3 from '../../assets/images/dogs-web-picture-3.jpg'
import dogsImage4 from '../../assets/images/dogs-web-picture-4.jpg'
import dogsImage5 from '../../assets/images/dogs-web-picture-5.jpg'
import dogsImage6 from '../../assets/images/dogs-web-picture-6.jpg'
import forzaImage1 from '../../assets/images/forza-web-picture-1.jpg'
import forzaImage2 from '../../assets/images/forza-web-picture-2.jpg'
import forzaImage3 from '../../assets/images/forza-web-picture-3.jpg'

import Carousel from '../Carousel/Carousel';
import handleAnimation from '../../animationUtils';

import { useInView } from 'react-intersection-observer';

export default function Apps({ textContent }) {

  const appImages = {
    dogs: {
      title: textContent.dogsTitle,
      description: textContent.dogsDescription,
      images: [
        dogsImage6,
        dogsImage1,
        dogsImage2,
        dogsImage3,
        dogsImage4,
        dogsImage5,
      ]
    },
    forza: {
      title: textContent.forzaTitle,
      description: textContent.dogsDescription,
      images: [
        forzaImage1,
        forzaImage2,
        forzaImage3,
      ]
    },
    rickAndMorty: {
      title: textContent.rickAndMortyTitle,
      description: textContent.rickAndMortyDescription,
      images: [
        dogsImage1,
        dogsImage2,
        dogsImage3,
      ]
    },
    countries: {
      title: textContent.countriesTitle,
      description: textContent.countriesDescription,
      images: [
        forzaImage1,
        forzaImage2,
        forzaImage3,
      ]
    },
  };

  const [portfolioInViewRef, portfolioInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  return (
    <div ref={portfolioInViewRef} >
    <section id='portfolio' >
      <h2>{textContent.portfolioButton}</h2>
      <div className='apps' >
        {Object.entries(appImages).map(([key, app]) => (
          <div key={key} >
            <h3>{app.title} <span>Full Stack</span> </h3>
            <div className='app-card-container' >
              <div className='app-card-info-container' >
                <p>{app.description}</p>
                <button className='deploy-button' >{textContent.deployButton}</button>
              </div>
              <div style={{ width: '150px', height: '150px' }} ></div>
              <div className='app-images-container' >
                <Carousel images={app.images} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section >
    {/* {handleAnimation()} */}
  </div>
  )
}