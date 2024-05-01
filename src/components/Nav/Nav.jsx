import './Nav.css';
import { useEffect, useState } from 'react';
import menuIcon from '../../assets/icons/menu-icon.svg';

export default function Nav({ textContent, isEnglish, handleLanguageChange, viewportWidth }) {
  const [isScrollHome, setIsScrollHome] = useState(false);
  const [isScrollAbout, setIsScrollAbout] = useState(false);
  const [isScrollPortfolio, setIsScrollPortfolio] = useState(false);
  const [isScrollSkills, setIsScrollSkills] = useState(false);
  const [isScrollDocuments, setIsScrollDocuments] = useState(false);
  const [isScrollContact, setIsScrollContact] = useState(false);
  const [isMenuFocused, setIsMenuFocused] = useState(false);
  const navButtons = [
    { id: 1, name: textContent.homeButton, href: '#headline', isScrolled: isScrollHome },
    { id: 2, name: textContent.aboutButton, href: '#about', isScrolled: isScrollAbout },
    { id: 3, name: textContent.portfolioButton, href: '#portfolio', isScrolled: isScrollPortfolio },
    { id: 4, name: textContent.skillsButton, href: '#skills', isScrolled: isScrollSkills },
    { id: 5, name: textContent.documentsButton, href: '#documents', isScrolled: isScrollDocuments },
    { id: 6, name: textContent.contactButton, href: '#contact', isScrolled: isScrollContact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv = document.getElementById('headline');
      const rect = targetDiv.getBoundingClientRect();
      const isInView = rect.top <= 50 && rect.bottom >= 50;
      setIsScrollHome(isInView);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv = document.getElementById('about');
      const rect = targetDiv.getBoundingClientRect();
      const isInView = rect.top <= 50 && rect.bottom >= 50;
      setIsScrollAbout(isInView);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv = document.getElementById('portfolio');
      const rect = targetDiv.getBoundingClientRect();
      const isInView = rect.top <= 50 && rect.bottom >= 50;
      setIsScrollPortfolio(isInView);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv = document.getElementById('skills');
      const rect = targetDiv.getBoundingClientRect();
      const isInView = rect.top <= 50 && rect.bottom >= 50;
      setIsScrollSkills(isInView);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv = document.getElementById('documents');
      const rect = targetDiv.getBoundingClientRect();
      const isInView = rect.top <= 50 && rect.bottom >= 50;
      setIsScrollDocuments(isInView);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const targetDiv = document.getElementById('contact');
      const rect = targetDiv.getBoundingClientRect();
      const isInView = rect.top <= 50 && rect.bottom >= 0;
      setIsScrollContact(isInView);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenMenu = () => {
    setIsMenuFocused(!isMenuFocused);
  }
  const handleMenuBlur = () => {
    setIsMenuFocused(false);
  }

  return (
    <>
      <nav id='nav'>
        <h2>Gaston Monzon</h2>
        {viewportWidth < 900 &&
          <button
            className='menu-button'
            onClick={handleOpenMenu}
            onBlur={() => setTimeout(handleMenuBlur, 100)}
          >
            <img src={menuIcon} alt='Menu Icon' />
          </button>}
        {viewportWidth > 900 ?
          <div>
            {navButtons.map((button) => {
              return (
                <button key={button.id} className={button.isScrolled ? 'button-scrolled' : ''} >
                  <a href={button.href}>{button.name}</a>
                </button>
              )
            })}
            <button onClick={handleLanguageChange} >
              {isEnglish ? 'Español' : 'English'}
            </button>
          </div>
          : null}
      </nav>
      {isMenuFocused &&
        <div className='menu' >
          {navButtons.map((button) => {
            return (
              <button key={button.id} className={button.isScrolled ? 'button-scrolled' : ''} >
                <a href={button.href}>{button.name}</a>
              </button>
            )
          })}
          <button onClick={handleLanguageChange} >
            {isEnglish ? 'Español' : 'English'}
          </button>
        </div>}
    </>
  )
}