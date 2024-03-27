import './App.css'

import BackGroundAnimation from './components/BackGroundAnimation/BackGroundAnimation';
import Nav from './components/Nav/Nav';
import changeLanguage from './changeLanguage';
import Apps from './components/Apps/Apps';
import Headline from './components/Headline/Headline';
import About from './components/About/About';

import { useState, useEffect } from 'react'
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const [textContent, setTextContent] = useState({ 
    homeButton: '', aboutButton: '', portfolioButton: '', skillsButton: '', contactButton: '', 
    headLine: '', intro: '', 
    dogsTitle: '', dogsAppType: '', dogsDescription: '', 
    forzaTitle: '', forzaAppType: '', frozaDescription: '', 
    rickAndMortyTitle: '', rickAndMortyAppType: '', rickAndMortyDescription: '', 
    countriesTitle: '', countriesAppType: '', countriesDescription: '',
    clothingStoreTitle: '', clothingStoreAppType: '', clothingStoreDescription: '', 
    gitHubButton: '', deployButton: '', 
    skills: [], 
    contactMessage: '', location: '', namePlaceholder: '', emailPlaceholder: '', subjectPlaceholder: '', messagePlaceholder: '', contactSendButton: '' });

  useEffect(() => {
    setTextContent(changeLanguage(isEnglish));
  }, [isEnglish]);


  return (
    <>
      <BackGroundAnimation />
      <Nav textContent={textContent} />
      <Headline textContent={textContent} />
      <About textContent={textContent} />
      <Apps textContent={textContent} />
      <Skills textContent={textContent} />
      <Contact textContent={textContent} />
      <Footer textContent={textContent} />
    </>
  )
}

export default App
