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
import Documents from './components/Documents/Documents';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const [textContent, setTextContent] = useState(changeLanguage(true));
  const [viewportWidth, setViewportwidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setViewportwidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setTextContent(changeLanguage(isEnglish));
  }, [isEnglish]);

  const handleLanguageChange = () => {
    setIsEnglish(!isEnglish);
  }

  return (
    <>
      <BackGroundAnimation />
      <Nav textContent={textContent} isEnglish={isEnglish} handleLanguageChange={handleLanguageChange} viewportWidth={viewportWidth} />
      <Headline textContent={textContent} viewportWidth={viewportWidth} />
      <About textContent={textContent} viewportWidth={viewportWidth} />
      <Apps textContent={textContent} viewportWidth={viewportWidth} />
      <Skills textContent={textContent} viewportWidth={viewportWidth} />
      <Documents textContent={textContent} viewportWidth={viewportWidth} />
      <Contact textContent={textContent} viewportWidth={viewportWidth} />
      <Footer textContent={textContent} viewportWidth={viewportWidth} />
    </>
  )
}

export default App
