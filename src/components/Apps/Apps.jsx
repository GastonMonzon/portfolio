import './Apps.css';

import dogsImage1 from '../../assets/images/dogs-web-picture-1.jpg';
import dogsImage2 from '../../assets/images/dogs-web-picture-2.jpg';
import dogsImage3 from '../../assets/images/dogs-web-picture-3.jpg';
import dogsImage4 from '../../assets/images/dogs-web-picture-4.jpg';
import dogsImage5 from '../../assets/images/dogs-web-picture-5.jpg';
import dogsImage6 from '../../assets/images/dogs-web-picture-6.jpg';
import forzaImage1 from '../../assets/images/forza-web-picture-1.jpg';
import forzaImage2 from '../../assets/images/forza-web-picture-2.jpg';
import forzaImage3 from '../../assets/images/forza-web-picture-3.jpg';
import rickAndMortyImage1 from '../../assets/images/rickandmorty-image-1.jpg';
import rickAndMortyImage2 from '../../assets/images/rickandmorty-image-2.jpg';
import rickAndMortyImage3 from '../../assets/images/rickandmorty-image-3.jpg';
import rickAndMortyImage4 from '../../assets/images/rickandmorty-image-4.jpg';
import rickAndMortyImage5 from '../../assets/images/rickandmorty-image-5.jpg';
import rickAndMortyImage6 from '../../assets/images/rickandmorty-image-6.jpg';
import rickAndMortyImage7 from '../../assets/images/rickandmorty-image-7.jpg';
import rickAndMortyImage8 from '../../assets/images/rickandmorty-image-8.jpg';
import rickAndMortyImage9 from '../../assets/images/rickandmorty-image-9.jpg';
import rickAndMortyImage10 from '../../assets/images/rickandmorty-image-10.jpg';
import rickAndMortyImage11 from '../../assets/images/rickandmorty-image-11.jpg';
import rickAndMortyImage12 from '../../assets/images/rickandmorty-image-12.jpg';
import rickAndMortyTitleIcon from '../../assets/icons/rick_and_morty_title.svg';

import Carousel from '../Carousel/Carousel';
import handleAnimation from '../../animationUtils';

import { useInView } from 'react-intersection-observer';

export default function Apps({ textContent }) {

  const apps = {
    rickAndMorty: {
      index: 0,
      title: textContent.rickAndMortyTitle,
      titleIcon: rickAndMortyTitleIcon,
      appType: textContent.rickAndMortyAppType,
      description: textContent.rickAndMortyDescription,
      images: [
        rickAndMortyImage1,
        rickAndMortyImage2,
        rickAndMortyImage3,
        rickAndMortyImage4,
        rickAndMortyImage5,
        rickAndMortyImage6,
        rickAndMortyImage7,
        rickAndMortyImage8,
        rickAndMortyImage9,
        rickAndMortyImage10,
        rickAndMortyImage11,
        rickAndMortyImage12,
      ]
    },
    dogs: {
      index: 1,
      title: textContent.dogsTitle,
      appType: textContent.dogsAppType,
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
      index: 2,
      title: textContent.forzaTitle,
      appType: textContent.forzaAppType,
      description: textContent.dogsDescription,
      images: [
        forzaImage1,
        forzaImage2,
        forzaImage3,
      ]
    },
    countries: {
      index: 3,
      title: textContent.countriesTitle,
      appType: textContent.countriesAppType,
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
          {Object.entries(apps).map(([key, app]) => (
            <div key={key} >
              {app.titleIcon
                ? (
                <>
                  <img src={app.titleIcon} alt={app.title} className='titleIcon' />
                  <span>{app.appType}</span>
                </>
                ) : <h3>{app.title} <span>{app.appType}</span></h3>
              }
              <div className={`app-card-container ${app.index % 2 !== 0 ? 'reverse' : ''}`} >
                <div className={`app-card-info-container ${app.index % 2 !== 0 ? 'align-left' : ''}`} >
                  <p>{app.description}</p>
                  <button className='deploy-button' >{textContent.deployButton}</button>
                </div>
                <div  style={{ marginRight: '1vw' }} ></div>
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