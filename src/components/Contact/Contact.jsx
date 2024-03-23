import './Contact.css';

import { useState, useEffect } from 'react'
export default function Contact({ textContent }) {

  const [contactInfo, setContactInfo] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactInfoErrors, setContactInfoErrors] = useState({ name: '', email: '', subject: '', message: '' });

  const handleContact = (event) => {
    event.preventDefault();
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
            <input type="text" placeholder={textContent.namePlaceholder} />
            <input type="email" placeholder={textContent.emailPlaceholder} />
          </div>
          <input type="text" placeholder={textContent.subjectPlaceholder} />
          <textarea rows={10} placeholder={textContent.messagePlaceholder}></textarea>
          <button type='Submit' >{textContent.contactSendButton}</button>
        </form>
      </div>
    </section>
  )
}