import './Footer.css';

import linkedInIcon from '../../assets/icons/linkedin-icon.svg'
import githubNameIcon from '../../assets/icons/github-name-icon.svg'
import githubIcon from '../../assets/icons/github-icon.svg'
import cvIcon from '../../assets/icons/cv-icon.svg'
import cvIcon2 from '../../assets/icons/cv-icon2.svg'
import cvIcon3 from '../../assets/icons/cv-icon3.svg'

export default function Footer() {
  return (
    <footer id='footer' >
      <a href='https://www.linkedin.com/in/gaston-monzon' rel='noreferrer' target='_blank'  >
        <button className='linked-in-container' >
          <img src={linkedInIcon} alt='LinkedIn link' />
        </button>
      </a>
      <a href='https://github.com/GastonMonzon' rel='noreferrer' target='_blank' >
        <button className='github-container' >
          <img src={githubNameIcon} alt='Github name link' />
        </button>
        <button className='github-container' >
          <img src={githubIcon} alt='Github link' />
        </button>
      </a>
      <a className='cv-link-contianer' href='https://github.com/GastonMonzon' rel='noreferrer' target='_blank' >
        <button className='cv-link-button' >
          CV
        </button>
        <button className='cv-link-icon' >
          <img src={cvIcon3} alt='Github link' />
        </button>
      </a>
    </footer>
  )
}