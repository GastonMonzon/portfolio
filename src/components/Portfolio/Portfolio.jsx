import './Portfolio.css';

import cPlusPlusIcon from '../../assets/icons/c++-icon.svg';
import cloudinaryIcon from '../../assets/icons/cloudinary-icon.svg';
import css3Icon from '../../assets/icons/css3-icon.svg';
import databaseIcon from '../../assets/icons/database-icon.svg';
import expressIcon from '../../assets/icons/express-icon.svg';
import firebaseIcon from '../../assets/icons/firebase-icon.svg';
import firestoreIcon from '../../assets/icons/firestore-icon.svg';
import gitIcon from '../../assets/icons/git-icon.svg';
import githubIcon from '../../assets/icons/github-icon.svg';
import html5Icon from '../../assets/icons/html5-icon.svg';
import javaIcon from '../../assets/icons/java-icon.svg';
import javascriptIcon from '../../assets/icons/javascript-icon.svg';
import mongoIcon from '../../assets/icons/mongo-icon.svg';
import mongodbIcon from '../../assets/icons/mongodb-logo-icon.svg';
import mysqlIcon from '../../assets/icons/mysql-icon.svg';
import nodeIcon from '../../assets/icons/node-icon.svg';
import postgresqlIcon from '../../assets/icons/postgresql-icon.svg';
import pythonIcon from '../../assets/icons/python-icon.svg';
import railwayIcon from '../../assets/icons/railway-icon.svg';
import reactIcon from '../../assets/icons/react-icon.svg';
import react from '../../assets/icons/react.svg';
import reduxIcon from '../../assets/icons/redux-icon.svg';
import sequelizeIcon from '../../assets/icons/sequelize-icon.svg';
import stripeIcon from '../../assets/icons/stripe-icon2.svg';
import typescriptIcon from '../../assets/icons/typescript-icon.svg';
import vercelIcon from '../../assets/icons/vercel-icon.svg';
import viteIcon from '../../assets/icons/vite-icon.svg';

// import ecommerceTitleIcon from '../../assets/icons/ecommerce-logo-cropped.webp';
import ecommerceTitleIcon from '../../assets/icons/ecommerce-name-icon.png';
import ecommerceImage1 from '../../assets/images/e-commerce-web-picture-1.png';
import ecommerceImage2 from '../../assets/images/e-commerce-web-picture-2.png';
import ecommerceImage3 from '../../assets/images/e-commerce-web-picture-3.png';
import ecommerceImage4 from '../../assets/images/e-commerce-web-picture-4.png';
import ecommerceImage5 from '../../assets/images/e-commerce-web-picture-5.png';
import ecommerceImage6 from '../../assets/images/e-commerce-web-picture-6.png';
import ecommerceImage7 from '../../assets/images/e-commerce-web-picture-7.png';
import rickAndMortyTitleIcon from '../../assets/icons/rick_and_morty_title.svg';
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
import dogsTitleIcon from '../../assets/icons/dogs-icon.svg';
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

export default function Portfolio({ textContent, viewportWidth }) {
  const ecommerceTitleRef = useRef();
  const ecommerceInfoRef = useRef();
  const ecommerceAppTypeRef = useRef();
  const ecommerceImagesRef = useRef();
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

  const [ecommerceInViewRef, ecommerceInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
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
    ecommerce: {
      index: 0,
      viewRef: ecommerceInViewRef,
      titleRef: ecommerceTitleRef,
      appTypeRef: ecommerceAppTypeRef,
      infoRef: ecommerceInfoRef,
      imagesRef: ecommerceImagesRef,
      viewValue: ecommerceInView,
      title: textContent.clothingStoreTitle,
      titleIcon: ecommerceTitleIcon,
      appType: textContent.clothingStoreAppType,
      description: textContent.clothingStoreDescription,
      madeWith: [
        reactIcon,
        html5Icon,
        css3Icon,
        javascriptIcon,
        nodeIcon,
        mongoIcon,
        firebaseIcon,
        stripeIcon,
        cloudinaryIcon,
        gitIcon,
        railwayIcon,
        vercelIcon,
      ],
      gitHubUrl: 'https://github.com/GastonMonzon/ecommerce-ropa',
      deployUrl: 'https://ecommerce-ropa-six.vercel.app/',
      images: [
        ecommerceImage1,
        ecommerceImage2,
        ecommerceImage3,
        ecommerceImage4,
        ecommerceImage5,
        ecommerceImage6,
        ecommerceImage7,
      ]
    },
    rickAndMorty: {
      index: 1,
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
      madeWith: [
        reactIcon,
        html5Icon,
        css3Icon,
        javascriptIcon,
        nodeIcon,
        postgresqlIcon,
        gitIcon,
        firebaseIcon,
        firestoreIcon,
        railwayIcon,
        vercelIcon,
      ],
      gitHubUrl: 'https://github.com/GastonMonzon/rick_and_morty_full.git',
      deployUrl: 'https://forza-motorsport-4-engine-setter-client.vercel.app/',
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
      index: 2,
      viewRef: dogsInViewRef,
      viewValue: dogsInView,
      titleRef: dogsTitleRef,
      appTypeRef: dogsAppTypeRef,
      infoRef: dogsInfoRef,
      imagesRef: dogsImagesRef,
      title: textContent.dogsTitle,
      titleIcon: dogsTitleIcon,
      appType: textContent.dogsAppType,
      description: textContent.dogsDescription,
      madeWith: [
        reactIcon,
        html5Icon,
        css3Icon,
        javascriptIcon,
        nodeIcon,
        postgresqlIcon,
        gitIcon,
        railwayIcon,
        vercelIcon,
      ],
      gitHubUrl: 'https://github.com/GastonMonzon/Dogs-API-web-app.git',
      deployUrl: 'https://dogs-api-web-app.vercel.app/',
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
      index: 3,
      viewRef: forzaInViewRef,
      viewValue: forzaInView,
      titleRef: forzaTitleRef,
      appTypeRef: forzaAppTypeRef,
      infoRef: forzaInfoRef,
      imagesRef: forzaImagesRef,
      title: textContent.forzaTitle,
      titleIcon: forzaTitleIcon,
      appType: textContent.forzaAppType,
      description: textContent.forzaDescription,
      madeWith: [
        reactIcon,
        html5Icon,
        css3Icon,
        javascriptIcon,
        nodeIcon,
        mysqlIcon,
        gitIcon,
        railwayIcon,
        vercelIcon,
      ],
      gitHubUrl: 'https://github.com/GastonMonzon/forza-motorsport-4-engine-setter.git',
      deployUrl: 'https://forza-motorsport-4-engine-setter-client.vercel.app/',
      images: [
        forzaImage1,
        forzaImage2,
        forzaImage3,
      ]
    },
    countries: {
      index: 4,
      viewRef: countriesInViewRef,
      viewValue: countriesInView,
      titleRef: countriesTitleRef,
      appTypeRef: countriesAppTypeRef,
      infoRef: countriesInfoRef,
      imagesRef: countriesImagesRef,
      title: textContent.countriesTitle,
      appType: textContent.countriesAppType,
      description: textContent.countriesDescription,
      madeWith: [
        html5Icon,
        css3Icon,
        javascriptIcon,
        reactIcon,
        nodeIcon,
        railwayIcon,
        vercelIcon,
        gitIcon,
      ],
      gitHubUrl: 'https://github.com/GastonMonzon/Dogs-API-web-app.git',
      deployUrl: '',
      images: [
      ]
    },
  };

  return (
    <div >
      <section id='portfolio' >
        <h2>{textContent.portfolioButton}</h2>
        <div className='apps' >
          {Object.entries(apps).map(([key, app]) => (
            <div className='app-container' key={key} ref={app.viewRef} >
              {app.titleIcon
                ? (
                  <>
                    <img src={app.titleIcon} alt={app.title} className='titleIcon' ref={app.titleRef} />
                    <h3 ref={app.appTypeRef} >{app.appType}</h3>
                  </>
                ) : <h3 ref={app.titleRef} >{app.title} <span ref={app.appTypeRef} >{app.appType}</span></h3>
              }
              <div className={`app-card-container ${app.index % 2 !== 0 ? 'reverse' : ''}`} >
                <div className={`app-card-info-container`} ref={app.infoRef} >
                  <p>{app.description}</p>
                  <h3>{textContent.madeWith}</h3>
                  <a href='#skills'>
                    <div className='app-icons-container' >
                      {app.madeWith.map((icon, index) => (
                        <img className='made-with-icon' key={index} src={icon} alt={app.title} />
                      ))}
                    </div>
                  </a>
                  {app.deployUrl &&
                    <div className='app-buttons-container' >
                      <div className='button-background-container' >
                        <a href={app.gitHubUrl} rel='noreferrer' target='_blank'>
                          <button className='deploy-button' >
                            {textContent.gitHubButton}
                          </button>
                        </a>
                        <div className='button-background' >
                        </div>
                      </div>
                      <div className='button-background-container' >
                        <a href={app.deployUrl} rel='noreferrer' target='_blank'>
                          <button className='deploy-button' >
                            {textContent.deployButton}
                          </button>
                        </a>
                        <div className='button-background' >
                        </div>
                      </div>
                    </div>
                  }
                </div>
                <div className='app-separator-div' ></div>
                <div className='app-images-container' ref={app.imagesRef} >
                  <Carousel images={app.images} viewportWidth={viewportWidth} />
                </div>
              </div>
              {handleAnimation(app.viewValue, app.titleRef, 'blur-appear-app-title', 'nothing')}
              {handleAnimation(app.viewValue, app.appTypeRef, 'slide-right', 'teleport-left')}
              {handleAnimation(app.viewValue, app.infoRef, 'slide-left', 'teleport-right')}
              {/* {handleAnimation(app.viewValue, app.imagesRef, 'slide-right', 'nothing')} */}
            </div>
          ))}
        </div>
      </section >
    </div>
  )
}