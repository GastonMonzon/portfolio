import './Contact.css';

import { useState } from 'react'
import emailjs from 'emailjs-com';

const { VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_PUBLIC_ID, VITE_EMAIL_PRIVATE_ID } = import.meta.env;

export default function Contact({ textContent }) {

  const [contactInfo, setContactInfo] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactInfoErrorToggle, setContactInfoErrorToggle] = useState({ name: true, email: true, subject: false, message: true });
  const [wordCounts, setWordCounts] = useState({ name: 0, email: 0, subject: 0, message: 0 });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalInfo, setContactModalInfo] = useState({ errorClassName: '', title: '', subtitle: '', message: '' });

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
        // Do not allow headless browsers
        blockHeadless: true,
        limitRate: {
          // Set the limit rate for the application
          id: 'app',
          // Allow 1 request per 10s
          throttle: 10000,
        },
      });
      console.log(VITE_EMAIL_SERVICE_ID, VITE_EMAIL_TEMPLATE_ID, VITE_EMAIL_PUBLIC_ID);
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
    <section id='contact' >
      <h2>{textContent.contactButton}</h2>
      <p>{textContent.contactMessage}</p>
      <div className='contact-container' >
        <div>
          <h3>INFO</h3>
          <h4>{textContent.location}</h4>
          <p>Capital Federal, Buenos Aires, Argentina</p>
          <h4>Email:</h4>
          <p>gastonmonzon3@gmail.com</p>
        </div>
        <form onSubmit={handleContact} >
          <div className='name-email-container' >
            <input
              type='text'
              name='name'
              maxLength={50}
              placeholder={textContent.namePlaceholder}
              value={contactInfo.name}
              onChange={handleContactChange}
            />
            <input
              type='email'
              name='email'
              maxLength={50}
              placeholder={textContent.emailPlaceholder}
              value={contactInfo.email}
              onChange={handleContactChange}
            />
          </div>
          <input
            type='text'
            name='subject'
            maxLength={50}
            placeholder={textContent.subjectPlaceholder}
            value={contactInfo.subject}
            onChange={handleContactChange}
          />
          <textarea
            name='message'
            rows={10}
            maxLength={500}
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
            <div className='wordcount-send-container' >
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
      </div>}
    </section >
  )
}