import './Footer.css';

import linkedInIcon from '../../assets/icons/linkedin-icon.svg';
import githubNameIcon from '../../assets/icons/github-name-icon.svg';
import githubIcon from '../../assets/icons/github-icon.svg';
import whatsappNameIcon from '../../assets/icons/whatsapp-name-icon.svg';
import whatsappIcon from '../../assets/icons/whatsapp-app-icon.svg';
import telegramIcon from '../../assets/icons/telegram-icon.svg';
import cvIcon2 from '../../assets/icons/cv-icon2.svg';
import cvIcon3 from '../../assets/icons/cv-icon3.svg';
import { useEffect, useState } from 'react';

export default function Footer() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer id='footer' >
      <a href='https://www.linkedin.com/in/gaston-monzon' rel='noreferrer' target='_blank'  >
        <button className='linked-in-container' >
          <img src={linkedInIcon} alt='LinkedIn link' />
        </button>
      </a>
      <a href='https://github.com/GastonMonzon' rel='noreferrer' target='_blank' >
        <button className='footer-icon-container github-container' >
          <img src={githubNameIcon} alt='Github name link' />
        </button>
        <button className='footer-icon-container' >
          <img src={githubIcon} alt='Github link' />
        </button>
      </a>
      <a href={isMobile ? 'https://web.whatsapp.com/send?phone=+5491131449224' : 'https://wa.me/+5491131449224'} rel='noreferrer' target='_blank' >
        <button className='whatsapp-container' >
          <img src={whatsappNameIcon} alt='WhatsApp name link' />
        </button>
        <button className='footer-icon-container' >
          <img src={whatsappIcon} alt='WhatsApp link' />
        </button>
      </a>
      <a href='https://t.me/gastonmonzon' rel='noreferrer' target='_blank' >
        <button className='telegram-container' >
          Telegram
        </button>
        <button className='footer-icon-container' >
          <img src={telegramIcon} alt='Telegram link' />
        </button>
      </a>
      {/* <a className='cv-link-contianer' href='https://github.com/GastonMonzon' rel='noreferrer' target='_blank' >
        <button className='cv-link-button' >
          CV
        </button>
        <button className='cv-link-icon' >
          <img src={cvIcon3} alt='Github link' />
        </button>
      </a> */}
    </footer>
  )
}