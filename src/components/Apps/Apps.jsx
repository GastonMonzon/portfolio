import './Apps.css';

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
import dogsImage1 from '../../assets/images/dogs-web-picture-1.jpg';
import dogsImage2 from '../../assets/images/dogs-web-picture-2.jpg';
import dogsImage3 from '../../assets/images/dogs-web-picture-3.jpg';
import dogsImage4 from '../../assets/images/dogs-web-picture-4.jpg';
import dogsImage5 from '../../assets/images/dogs-web-picture-5.jpg';
import dogsImage6 from '../../assets/images/dogs-web-picture-6.jpg';
import forzaTitleIcon from '../../assets/images/FM4-image.png';
import forzaImage1 from '../../assets/images/forza-web-picture-1.jpg';
import forzaImage2 from '../../assets/images/forza-web-picture-2.jpg';
import forzaImage3 from '../../assets/images/forza-web-picture-3.jpg';

import Carousel from '../Carousel/Carousel';
import handleAnimation from '../../animationUtils';

import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

export default function Apps({ textContent }) {
  const rickAndMortyTitleRef = useRef();
  const rickAndMortyInfoRef = useRef();
  const rickAndMortyAppTypeRef = useRef();
  const rickAndMortyImagesRef = useRef();
  const dogsTitleRef = useRef();
  const dogsInfoRef = useRef();
  const dogsAppTypeRef = useRef();
  const dogsImagesRef = useRef();
  const forzaTitleRef = useRef();
  const forzaInfoRef = useRef();
  const forzaAppTypeRef = useRef();
  const forzaImagesRef = useRef();
  const countriesTitleRef = useRef();
  const countriesInfoRef = useRef();
  const countriesAppTypeRef = useRef();
  const countriesImagesRef = useRef();

  const [rickAndMortyInViewRef, rickAndMortyInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  const [dogsInViewRef, dogsInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  const [forzaInViewRef, forzaInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  const [countriesInViewRef, countriesInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const apps = {
    rickAndMorty: {
      index: 0,
      viewRef: rickAndMortyInViewRef,
      titleRef: rickAndMortyTitleRef,
      appTypeRef: rickAndMortyAppTypeRef,
      infoRef: rickAndMortyInfoRef,
      imagesRef: rickAndMortyImagesRef,
      viewValue: rickAndMortyInView,
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
      viewRef: dogsInViewRef,
      viewValue: dogsInView,
      titleRef: dogsTitleRef,
      appTypeRef: dogsAppTypeRef,
      infoRef: dogsInfoRef,
      imagesRef: dogsImagesRef,
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
      viewRef: forzaInViewRef,
      viewValue: forzaInView,
      titleRef: forzaTitleRef,
      appTypeRef: forzaAppTypeRef,
      infoRef: forzaInfoRef,
      imagesRef: forzaImagesRef,
      title: textContent.forzaTitle,
      titleIcon: forzaTitleIcon,
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
      viewRef: countriesInViewRef,
      viewValue: countriesInView,
      titleRef: countriesTitleRef,
      appTypeRef: countriesAppTypeRef,
      infoRef: countriesInfoRef,
      imagesRef: countriesImagesRef,
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

  return (
    <div >
      <section id='portfolio' >
        <h2>{textContent.portfolioButton}</h2>
        <div className='apps' >
          {Object.entries(apps).map(([key, app]) => (
            <div key={key} ref={app.viewRef} >
              {app.titleIcon
                ? (
                  <>
                    <img src={app.titleIcon} alt={app.title} className='titleIcon' ref={app.titleRef} />
                    <h3 ref={app.appTypeRef} >{app.appType}</h3>
                  </>
                ) : <h3 ref={app.titleRef} >{app.title} <span ref={app.appTypeRef} >{app.appType}</span></h3>
              }
              <div className={`app-card-container ${app.index % 2 !== 0 ? 'reverse' : ''}`} >
                <div className={`app-card-info-container ${app.index % 2 !== 0 ? 'align-left' : ''}`} ref={app.infoRef} >
                  <p>{app.description}</p>
                  <button className='deploy-button' >{textContent.deployButton}</button>
                </div>
                <div className='app-separator-div' ></div>
                <div className='app-images-container' ref={app.imagesRef} >
                  <Carousel images={app.images} />
                </div>
              </div>
              {handleAnimation(app.viewValue, app.titleRef, 'blur-appear-app-title', 'nothing')}
              {handleAnimation(app.viewValue, app.appTypeRef, 'slide-about-title-right', 'slide-about-title-left')}
              {handleAnimation(app.viewValue, app.infoRef, 'slide-app-info-middle', 'slide-app-info-out')}
              {handleAnimation(app.viewValue, app.imagesRef, 'slide-app-images-left', 'slide-app-images-right')}
            </div>
          ))}
        </div>
      </section >
    </div>
  )
}