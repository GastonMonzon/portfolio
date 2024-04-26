import './Contact.css';

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import argentinaIcon from '../../assets/icons/argentina-icon.svg';
import nextIcon from '../Carousel/Carrousel icons/next.svg';

import emailjs from 'emailjs-com';
import handleAnimation from '../../animationUtils';

const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_PUBLIC_ID, VITE_EMAIL_PRIVATE_ID } = import.meta.env;

export default function Contact({ textContent }) {

  const [copyModal, setCopyModal] = useState({ 
    location: { text: textContent.copyLocation, isCopied: false }, 
    email: { text: textContent.copyEmail, isCopied: false }, 
    phone: { text: textContent.copyNumber, isCopied: false } });

  const [isAtBottom, setIsAtBottom] = useState(false);
  const [contactInfo, setContactInfo] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' });

  const [contactInfoErrorToggle, setContactInfoErrorToggle] = useState({ 
    name: true, 
    email: true, 
    subject: false, 
    message: true });

  const [wordCounts, setWordCounts] = useState({ 
    name: 0, 
    email: 0, 
    subject: 0, 
    message: 0 });

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalInfo, setContactModalInfo] = useState({ 
    errorClassName: '', 
    title: '', 
    subtitle: '', 
    message: '' });

  const contactSubitleRef = useRef();
  const contactInfoRef = useRef();
  const contactNameRef = useRef();
  const contactEmailRef = useRef();
  const contactSubjectRef = useRef();
  const contactMessageRef = useRef();
  const contactButtonRef = useRef();

  const [contactInViewRef, contactInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  useEffect(() => {
    setCopyModal((prevCopyModal) => ({
      location: { ...prevCopyModal.location, text: textContent.copyLocation },
      email: { ...prevCopyModal.email, text: textContent.copyEmail },
      phone: { ...prevCopyModal.phone, text: textContent.copyNumber }
    }));
  }, [textContent]);

  const handleCopyClick = async (name) => {
    try {
      switch (name) {
        case 'location':
          await navigator.clipboard.writeText('Capital Federal, Buenos Aires, Argentina');
          setCopyModal({
            ...copyModal,
            location: { text: textContent.copyLocationSuccess, isCopied: true }
          });
          break;
        case 'email':
          await navigator.clipboard.writeText('gastonmonzon3@gmail.com');
          setCopyModal({
            ...copyModal,
            email: { text: textContent.copyEmailSuccess, isCopied: true }
          });
          break;
        case 'phone':
          await navigator.clipboard.writeText('+5491131449224');
          setCopyModal({
            ...copyModal,
            phone: { text: textContent.copyNumberSuccess, isCopied: true }
          });
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error);
      switch (name) {
        case 'location':
          setCopyModal({
            ...copyModal,
            location: { text: textContent.copyLocationError, isCopied: true }
          });
          break;
        case 'email':
          setCopyModal({
            ...copyModal,
            email: { text: textContent.copyEmailError, isCopied: true }
          });
          break;
        case 'phone':
          setCopyModal({
            ...copyModal,
            phone: { text: textContent.copyNumberError, isCopied: true }
          });
          break;
        default:
          break;
      }
    }
  }
  const handleCopyTextReset = (name) => {
    if (copyModal[name].isCopied) {
      switch (name) {
        case 'location':
          setCopyModal({
            ...copyModal,
            location: { text: textContent.copyLocation, isCopied: false }
          });
          break;
        case 'email':
          setCopyModal({
            ...copyModal,
            email: { text: textContent.copyEmail, isCopied: false }
          });
          break;
        case 'phone':
          setCopyModal({
            ...copyModal,
            phone: { text: textContent.copyNumber, isCopied: false }
          });
          break;
        default:
          break;
      }
    }
  }
  const handleScroll = () => {
    const isBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    setIsAtBottom(isBottom);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactInfo({ ...contactInfo, [name]: value });
    setWordCounts({ ...wordCounts, [name]: value.length });
    setContactInfoErrorToggle(validation({
      ...contactInfo,
      [name]: value,
    }));
  }
  const validation = (contact) => {
    const errors = {};
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;

    if (contact.name && !nameRegex.test(contact.name)) {
      errors.name = true;
    }
    if (!contact.name) {
      errors.name = true;
    }
    if (contact.email && !emailRegex.test(contact.email)) {
      errors.email = true;
    }
    if (!contact.email) {
      errors.email = true;
    }
    if (contact.subject.length > 50) {
      errors.subject = true;
    }
    if (contact.message.length < 50) {
      errors.message = true;
    }
    return errors
  }
  const handleContact = async (event) => {
    event.preventDefault();
    try {
      const { name, email, subject, message } = contactInfo;
      emailjs.init({
        publicKey: VITE_EMAIL_PUBLIC_ID,
        privateKey: VITE_EMAIL_PRIVATE_ID,
        blockHeadless: true, // Do not allow headless browsers
        limitRate: { // Set the limit rate for the application
          id: 'app',
          throttle: 10000, // Allow 1 request per 10s
        },
      });
      await emailjs.send(
        VITE_EMAIL_SERVICE_ID,
        VITE_EMAIL_TEMPLATE_ID,
        {
          name,
          email,
          subject,
          message,
        },
        VITE_EMAIL_PUBLIC_ID,
        VITE_EMAIL_PRIVATE_ID,
      );
      setContactInfo({ name: '', email: '', subject: '', message: '' });
      setContactInfoErrorToggle({ name: true, email: true, subject: false, message: true });
      setWordCounts({ name: 0, email: 0, subject: 0, message: 0 });
      setContactModalInfo({ errorClassName: '', title: textContent.contactModalSuccessTitle, subtitle: textContent.contactModalSuccessSubtitle, message: textContent.contactModalSuccessMessage });
      setIsContactModalOpen(true);
    } catch (error) {
      console.error(error);
      setContactModalInfo({ errorClassName: 'error', title: textContent.contactModalErrorTitle, subtitle: textContent.contactModalErrorSubtitle, message: textContent.contactModalErrorMessage });
      setIsContactModalOpen(true);
    }
  }
  const handleCloseModal = () => {
    const modal = document.getElementById('modal-overlay')
    modal?.classList.toggle('fade-out');
    setTimeout(() => {
      setIsContactModalOpen(false);
    }, 500);
    setTimeout(() => {
      modal?.classList.toggle('fade-out');
    }, 1000);
  }

  return (
    <section id='contact' ref={contactInViewRef} >
      <h2>{textContent.contactButton}</h2>
      <p ref={contactSubitleRef} >{textContent.contactMessage}</p>
      <div className='contact-container' >
        <div ref={contactInfoRef} className='contact-info-container' >
          <h3>INFO</h3>
          <h4>{textContent.location}</h4>
          <p
            className='contact-text-copy'
            onClick={() => handleCopyClick('location')}
            onMouseLeave={() => handleCopyTextReset('location')}
          >
            Capital Federal, Buenos Aires, Argentina
            <p className='copy-modal' >{copyModal.location.text}</p>
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.8514767034!2d-58.7286831392918!3d-34.61528163000272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3d05457fbb%3A0xe160f4fce7f7c017!2sCdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1714128248338!5m2!1ses-419!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <h4>Email:</h4>
          <p
            className='contact-text-copy'
            onClick={() => handleCopyClick('email')}
            onMouseLeave={() => handleCopyTextReset('email')}
          >
            gastonmonzon3@gmail.com
            <p className='copy-modal' >{copyModal.email.text}</p>
          </p>
          <h4>{textContent.phoneNumber}</h4>
          <p
            className='argentina-icon-container contact-text-copy'
            onClick={() => handleCopyClick('phone')}
            onMouseLeave={() => handleCopyTextReset('phone')}
          >
            <img src={argentinaIcon} alt='Argentina Icon' />
            +54 9 11 3144 9224
            <p className='copy-modal' >{copyModal.phone.text}</p>
          </p>
          <div className='links-below-container' >
            <p>{textContent.linksBelow}</p>
            <button className='links-below-button' onClick={() => window.scrollTo({top: document.documentElement.scrollHeight, behavior: 'smooth'})} >
              <img src={nextIcon} alt='nextIcon' className={!isAtBottom ? 'links-below-button-bounce' : ''} />
            </button>
          </div>
        </div>
        <form onSubmit={handleContact} >
          <div className='name-email-container' >
            <input
              type='text'
              name='name'
              maxLength={50}
              ref={contactNameRef}
              placeholder={textContent.namePlaceholder}
              value={contactInfo.name}
              onChange={handleContactChange}
            />
            <input
              type='email'
              name='email'
              maxLength={50}
              ref={contactEmailRef}
              placeholder={textContent.emailPlaceholder}
              value={contactInfo.email}
              onChange={handleContactChange}
            />
          </div>
          <input
            type='text'
            name='subject'
            maxLength={50}
            ref={contactSubjectRef}
            placeholder={textContent.subjectPlaceholder}
            value={contactInfo.subject}
            onChange={handleContactChange}
          />
          <textarea
            name='message'
            rows={10}
            maxLength={500}
            ref={contactMessageRef}
            placeholder={textContent.messagePlaceholder}
            value={contactInfo.message}
            onChange={handleContactChange}
          >
          </textarea>
          <div className='send-errors-container' >
            <div>
              <p className={(!contactInfo.name && !contactInfo.email && !contactInfo.message) ? 'invisible' : contactInfoErrorToggle.name ? 'incorrect' : 'correct'} >
                {contactInfoErrorToggle.name ? '❌' : '✅'} {textContent.nameError}
              </p>
              <p className={(!contactInfo.name && !contactInfo.email && !contactInfo.message) ? 'invisible' : contactInfoErrorToggle.email ? 'incorrect' : 'correct'} >
                {contactInfoErrorToggle.email ? '❌' : '✅'} {textContent.emailError}
              </p>
              <p className={!contactInfo.subject ? 'invisible' : contactInfoErrorToggle.subject ? 'incorrect' : 'correct'} >
                {contactInfoErrorToggle.subject ? '❌' : /*✅*/''} {textContent.subjectError}
              </p>
              <p className={!contactInfo.message ? 'invisible' : contactInfoErrorToggle.message ? 'incorrect' : 'correct'} >
                {contactInfoErrorToggle.message ? '❌' : '✅'} {textContent.messageError}
              </p>
            </div>
            <div className='wordcount-send-container' ref={contactButtonRef} >
              <label>{wordCounts.message} / 500</label>
              <div className={`button-background-container ${(!contactInfo.name || !contactInfo.email || !contactInfo.message || contactInfoErrorToggle.name || contactInfoErrorToggle.email || contactInfoErrorToggle.subject || contactInfoErrorToggle.message) ? 'disabled-container' : ''}`} >
                <button
                  type='Submit'
                  className='deploy-button'
                  disabled={!contactInfo.name || !contactInfo.email || !contactInfo.message || contactInfoErrorToggle.name || contactInfoErrorToggle.email || contactInfoErrorToggle.subject || contactInfoErrorToggle.message} >
                  {textContent.contactSendButton}
                </button>
                <div className={`button-background ${(!contactInfo.name || !contactInfo.email || !contactInfo.message || contactInfoErrorToggle.name || contactInfoErrorToggle.email || contactInfoErrorToggle.subject || contactInfoErrorToggle.message) ? 'disabled' : ''}`} >
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {isContactModalOpen && <div id='modal-overlay' >
        <div className={`modal ${contactModalInfo.errorClassName}`}>
          <h3>{contactModalInfo.title}</h3>
          <p>{contactModalInfo.subtitle}</p>
          <p>{contactModalInfo.message}</p>
          <button className='contact-modal-close-button' onClick={handleCloseModal} >
            <svg viewBox='0 0 24 24'>
              <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
              <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
              <g id='SVGRepo_iconCarrier'>
                <path className='close-svg-outer-path' d='M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z' >
                </path>
                <path className='close-svg-inner-path' d='M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z'>
                </path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      }
      {handleAnimation(contactInView, contactSubitleRef, 'slide-left', 'teleport-right')}
      {handleAnimation(contactInView, contactInfoRef, 'slide-right', 'teleport-left')}
      {handleAnimation(contactInView, contactNameRef, 'slide-left', 'teleport-right')}
      {handleAnimation(contactInView, contactEmailRef, 'slide-right', 'teleport-left')}
      {handleAnimation(contactInView, contactSubjectRef, 'slide-left', 'teleport-right')}
      {handleAnimation(contactInView, contactMessageRef, 'slide-right', 'teleport-left')}
      {handleAnimation(contactInView, contactButtonRef, 'slide-left', 'teleport-right')}
    </section >
  )
}