import './App.css'

import cPlusPlusIcon from '../src/assets/icons/c++-icon.svg';
import css3Icon from '../src/assets/icons/css3-icon.svg';
import databaseIcon from '../src/assets/icons/database-icon.svg';
import expressIcon from '../src/assets/icons/express-icon.svg';
import firebaseIcon from '../src/assets/icons/firebase-icon.svg';
import firestoreIcon from '../src/assets/icons/firestore-icon.svg';
import gitIcon from '../src/assets/icons/git-icon.svg';
import githubIcon from '../src/assets/icons/github-icon.svg';
import html5Icon from '../src/assets/icons/html5-icon.svg';
import javaIcon from '../src/assets/icons/java-icon.svg';
import javascriptIcon from '../src/assets/icons/javascript-icon.svg';
import mongoIcon from '../src/assets/icons/mongo-icon.svg';
import mongodbIcon from '../src/assets/icons/mongodb-logo-icon.svg';
import mysqlIcon from '../src/assets/icons/mysql-icon.svg';
import nodeIcon from '../src/assets/icons/node-icon.svg';
import postgresqlIcon from '../src/assets/icons/postgresql-icon.svg';
import pythonIcon from '../src/assets/icons/python-icon.svg';
import railwayIcon from '../src/assets/icons/railway-icon.svg';
import reactIcon from '../src/assets/icons/react-icon.svg';
import react from '../src/assets/icons/react.svg';
import reduxIcon from '../src/assets/icons/redux-icon.svg';
import sequelizeIcon from '../src/assets/icons/sequelize-icon.svg';
import typescriptIcon from '../src/assets/icons/typescript-icon.svg';
import viteIcon from '../src/assets/icons/vite-icon.svg';

import { useRef, useState } from 'react'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from './components/Card/Card';

function App() {
  const [isEnglish, setIsEnglish] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isSkillsViewed, setIsSkillsViewed] = useState(false);
  const [numSkillColums, setNumSkillColumns] = useState(0);
  const [textContent, setTextContent] = useState({ homeButton: '', aboutButton: '', portfolioButton: '', skillsButton: '', contactButton: '', headLine: '', intro: '', skills: [], contactMessage: '', location: '', namePlaceholder: '', emailPlaceholder: '', subjectPlaceholder: '', messagePlaceholder: '', contactSendButton: '' });
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactInfoErrors, setContactInfoErrors] = useState({ name: '', email: '', subject: '', message: '' });
  const [isScrollHome, setIsScrollHome] = useState(false);
  const [isScrollAbout, setIsScrollAbout] = useState(false);
  const [isScrollPortfolio, setIsScrollPortfolio] = useState(false);
  const [isScrollSkills, setIsScrollSkills] = useState(false);
  const [isScrollContact, setIsScrollContact] = useState(false);
  useEffect(() => {
    if (isEnglish) {
      setTextContent({
        ...textContent,
        homeButton: 'Home',
        aboutButton: 'About Me',
        portfolioButton: 'Portfolio',
        skillsButton: 'Skills',
        contactButton: 'Contact',
        headLine: 'Full Stack Junior Developer',
        intro: `Welcome to my web portfolio!

        I'm thrilled to showcase my work in creating web applications with React and also share my studies on different programming languages and frameworks.

        Explore my portfolio to learn more about my work and approach to programming. You'll find all my deployed projects, which are the result of my dedication, creativity, and continuous learning.`,
        about: `I was born and currently reside in Capital Federal, Buenos Aires, Argentina. Throughout my career, I have gained valuable experience in various regular jobs, primarily in customer service and retail sales. These experiences have honed my interpersonal skills and taught me the importance of effective communication.

        However, it was not until recently that I discovered my true passion when I embarked on the journey of programming and web development. While on a React bootcamp over the past few months i've dedicated myself to honing my skills in programming with a specific focus on creating user-friendly interfaces and providing a wide range of user options.
        
        I'm a hard-working person, organiced and good at solving problems and finding different solutions.
        My goal is to create innovative and user-centric solutions that not only fulfill the technical requirements but also enhance the overall user experience. I am currently seeking opportunities to grow both professionally and personally in this dynamic field.
        
        I'm excited to be a part of the developer community and look forward to continuing to grow in this exciting field.`,
        skills: [
          {
            name: 'HTML5',
            description: 'HTML, short for HyperText Markup Language, is a markup language used to create the structure of web pages.',
            icon: html5Icon
          },
          {
            name: 'CSS3',
            description: 'CSS, short for Cascading Style Sheets, is a graphic design language used to define and create the presentation of a structured document written in a markup language.',
            icon: css3Icon
          },
          {
            name: 'JavaScript',
            description: 'JavaScript is an object-oriented interpreted programming language defined as imperative and weakly typed, primarily used for adding interactivity and dynamic behavior to web applications.',
            icon: javascriptIcon
          },
          {
            name: 'TypeScript',
            description: 'TypeScript is a superset of JavaScript that adds static typing and additional features to enhance the development process.',
            icon: typescriptIcon
          },
          {
            name: 'Node.js',
            description: 'Node.js is an open source server-side runtime environment for running JavaScript code outside of web browsers.',
            icon: nodeIcon
          },
          {
            name: 'React',
            description: 'React is an open-source Javascript library designed to create user interfaces and simplify the development of single-page applications.',
            icon: react
          },
          {
            name: 'Redux',
            description: 'Redux is a state management library which provides a centralized store to manage the state of a JavaScript application and facilitates predictable updates.',
            icon: reduxIcon
          },
          {
            name: 'SQL',
            description: `SQL (Structured Query Language) is a programming language used for managing and manipulating relational databases.`,
            icon: databaseIcon
          },
          {
            name: 'Git',
            description: 'Git is an open-source version control system that allows multiple developers to work on a project simultaneously, maintaining a history of modifications and facilitating code merging.',
            icon: gitIcon
          },
          {
            name: 'Firebase',
            description: `Firebase is a service that simplifies the process of user authentication in web and mobile applications in a secure and reliable way offering integration with external identity providers.`,
            icon: firebaseIcon
          },
          {
            name: 'Firestore',
            description: `Firestore is a flexible and scalable cloud-based NoSQL document database designed to store and synchronize data for web, mobile, and server applications in real-time.`,
            icon: firestoreIcon
          },
          {
            name: 'Railway',
            description: 'Railway is a cloud service for building, shipping, monitoring and deploying applications on the web.',
            icon: railwayIcon
          },
          {
            name: 'PostgreSQL',
            description: 'PostgreSQL is an open-source object-oriented relational database management system known for robust data integrity, reliability, scalability and advanced features.',
            icon: postgresqlIcon
          },
          {
            name: 'MySQL',
            description: 'MySQL is an open-source relational database management system that offers a simpler and more user-friendly approach, prioritizing ease of use and availability',
            icon: mysqlIcon
          },
          // {
          //   name: 'MongoDB',
          //   description: `MongoDB is a popular NoSQL document database known for its scalability and flexibility in handling unstructured data, well-suited for rapidly evolving data requirements.`,
          //   icon: mongoIcon
          // },
          {
            name: 'C++',
            description: 'C++ is a general-purpose high-level programming language which provides low-level access to memory and hardware, suitable for developing operating systems, embedded systems, and performance-critical applications.',
            icon: cPlusPlusIcon
          },
          {
            name: 'Java',
            description: 'Java is a popular object-oriented programming language known for its platform independence and robustness widely used for building enterprise-level applications',
            icon: javaIcon
          },
          {
            name: 'Python',
            description: 'Python is a interpreted high-level programming language which emphasizes in simplicity and versatility, popular for tasks ranging from web development, data analysis to AI, machine-learning and automation.',
            icon: pythonIcon
          },
          // {
          //   name: 'Sequalize',
          //   description: 'Sequelize is an open-source Object-Relational Mapping (ORM) library for Node.js that simplifies database operations by mapping tables to JavaScript objects and providing an intuitive API for interacting.',
          //   icon: sequelizeIcon
          // },
          // {
          //   name: 'Express',
          //   description: 'Express is a fast and minimalist web application framework for Node.js that simplifies the process of building robust and scalable web applications.',
          //   icon: expressIcon
          // },
        ],
        contactMessage: `Have any interests or questions?
        Feel free to contact me by filling the form below or reaching out using the contact information provided`,
        location: 'Current Location',
        namePlaceholder: 'Your Name',
        emailPlaceholder: 'Email',
        subjectPlaceholder: 'Subject',
        messagePlaceholder: 'Message',
        contactSendButton: 'Send'
      })
    }
  }, [isEnglish]);

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

  const handleContact = (event) => {
    event.preventDefault();
  }

  const navButtons = [
    { id: 1, name: textContent.homeButton, href: '#headline', isScrolled: isScrollHome },
    { id: 2, name: textContent.aboutButton, href: '#about', isScrolled: isScrollAbout },
    { id: 3, name: textContent.portfolioButton, href: '#portfolio', isScrolled: isScrollPortfolio },
    { id: 4, name: textContent.skillsButton, href: '#skills', isScrolled: isScrollSkills },
    { id: 5, name: textContent.contactButton, href: '#contact', isScrolled: isScrollContact },
  ];

  const headlineInfoRef = useRef();
  const headlineTitleRef = useRef();
  const aboutTitleRef = useRef();
  const aboutInfoRef = useRef();
  const aboutImageRef = useRef();
  const skillsGridRef = useRef();
  // const headlineInfoRef = useRef();
  // const headlineInfoRef = useRef();
  // const headlineInfoRef = useRef();
  const [headlineInViewRef, headlineInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [aboutInViewRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  const [portfolioInViewRef, portfolioInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });
  const [skillsInViewRef, skillsInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const handleHeadlineAnimation = (headlineInView) => {
    if (headlineInView) {
      headlineTitleRef?.current?.classList.add('slide-headline-title-bottom');
      headlineInfoRef?.current?.classList?.add('slide-headline-info-left');
      headlineInfoRef?.current?.classList?.remove('slide-headline-info-right');
      headlineTitleRef?.current?.classList.remove('slide-headline-title-top');
    } else {
      headlineTitleRef?.current?.classList.add('slide-headline-title-top');
      headlineInfoRef?.current?.classList?.add('slide-headline-info-right');
      headlineTitleRef?.current?.classList.remove('slide-headline-title-bottom');
      headlineInfoRef?.current?.classList?.remove('slide-headline-info-left');
    }
  }

  const handleAboutAnimation = (aboutInView) => {
    if (aboutInView) {
      aboutImageRef?.current?.classList?.add('slide-about-image-right');
      aboutTitleRef?.current?.classList?.add('slide-about-title-right');
      aboutInfoRef?.current?.classList?.add('slide-about-info-right');
      aboutImageRef?.current?.classList?.remove('slide-about-image-left');
      aboutTitleRef?.current?.classList?.remove('slide-about-title-left');
      aboutInfoRef?.current?.classList?.remove('slide-about-info-left');
    } else {
      aboutInfoRef?.current?.classList?.add('slide-about-info-left');
      aboutImageRef?.current?.classList?.add('slide-about-image-left');
      aboutTitleRef?.current?.classList?.add('slide-about-title-left');
      aboutInfoRef?.current?.classList?.remove('slide-about-info-right');
      aboutImageRef?.current?.classList?.remove('slide-about-image-right');
      aboutTitleRef?.current?.classList?.remove('slide-about-title-right');
    }
  }
  const handlePortfolioAnimation = () => {

  }

  const handleSkillsAnimation = () => {
    if (skillsInView && !isSkillsViewed) {
      let i = 1, delay = 0;
      textContent.skills.forEach((skill, index) => {
        const element = document.getElementById(skill.name);
        element.style.pointerEvents = 'none';
        const animation = element?.animate(
          [
            { transform: 'translateX(-120vw)' },
            { transform: 'translateX(0)' },
          ],
          {
            duration: 800,
            easing: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
            fill: 'forwards',
            delay: (((numSkillColums / i) * 80) + delay)
          }
        );
        animation.onfinish = () => {
          element.style.pointerEvents = 'auto';
          setIsSkillsViewed(true);
        };
        i++;
        if (i == numSkillColums + 1) {
          i = 1;
          delay = (numSkillColums / i) * 80 * (index / numSkillColums) + 80;
        }
      });
    } else if (!skillsInView && !isSkillsViewed) {
      textContent.skills.forEach((skill) => {
        const element = document.getElementById(skill.name);
        element?.animate(
          [
            { transform: 'translateX(0)' },
            { transform: 'translateX(120vw)' },
          ],
          {
            duration: 0,
            fill: 'forwards',
          }
        );
      });
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const newContainerWidth = skillsGridRef?.current?.offsetWidth;
      setContainerWidth(newContainerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const computedStyles = getComputedStyle(skillsGridRef.current);
    const gridTemplateColumns = computedStyles.gridTemplateColumns;
    const numColumns = gridTemplateColumns?.split(' ')?.length;
    setNumSkillColumns(numColumns);
  }, [containerWidth])

  const setSkillClassName = (i) => {
    console.log(i + 1, numSkillColums, (i + 1) % numSkillColums);
    return ((i + 1) % numSkillColums == 0 && i !== 0);
  }

  return (
    <>
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <nav id='nav'>
        <h2>Gaston Monzon</h2>
        <div>
          {navButtons.map((button) => {
            return (
              <button key={button.id} className={button.isScrolled ? 'button-scrolled' : ''} >
                <a href={button.href}>{button.name}</a>
              </button>
            )
          })}
          {/* <button className={} style={{ color: isInView ? 'red' : '' }} ><a href='#headline'>{textContent.homeButton}</a></button>
          <button><a href='#about'>{textContent.aboutButton}</a></button>
          <button><a href='#portfolio'>{textContent.portfolioButton}</a></button>
          <button><a href='#skills'>{textContent.skillsButton}</a></button>
          <button><a href='#contact'>{textContent.contactButton}</a></button>
          <button className='language-button' disabled={isEnglish} onClick={() => setIsEnglish(true)}>EN</button>
          <button className='language-button' disabled={!isEnglish} onClick={() => setIsEnglish(false)}>ES</button> */}
        </div>
      </nav>
      <div ref={headlineInViewRef} >
        <section id='headline'>
          <h2 ref={headlineTitleRef} >{textContent.headLine}</h2>
          <p ref={headlineInfoRef} >{textContent.intro}</p>
        </section>
        {handleHeadlineAnimation(headlineInView)}
      </div>
      <div ref={aboutInViewRef} >
        <section id='about' >
          <div className='image-div' ref={aboutImageRef} >
            <img src='' alt='My Picture' />
          </div>
          <div className='about-me-info' >
            <h2 ref={aboutTitleRef} >{textContent.aboutButton}</h2>
            <p ref={aboutInfoRef} >{textContent.about}</p>
          </div>
        </section>
        {handleAboutAnimation(aboutInView)}
      </div>
      <div ref={portfolioInViewRef} >
        <section id='portfolio' >
          <h2>{textContent.portfolioButton}</h2>
        </section>
        {handlePortfolioAnimation(portfolioInView)}
      </div>
      <div className='skills-in-view-container' id='skillsContainer' ref={skillsInViewRef} >
        <section id='skills' >
          <h2>{textContent.skillsButton}</h2>
          <div className='skills-container' ref={skillsGridRef} >
            {textContent.skills.map((skill, index) => {
              return (
                <Card key={skill.name} skill={skill} skillClassName={setSkillClassName(index)} />
              );
            })}
          </div>
        </section>
        {handleSkillsAnimation(skillsInView)}
      </div>
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
      <footer id='footer' >
        <button><a href="">LinckedIn</a></button>
        <button><a href="">GitHub</a></button>
        <button><a href="">Mail</a></button>
        <button><a href="">CV</a></button>
      </footer>
    </>
  )
}

export default App
