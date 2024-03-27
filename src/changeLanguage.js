import cPlusPlusIcon from '../src/assets/icons/c++-icon.svg';
import cloudinaryIcon from '../src/assets/icons/cloudinary-icon.svg';
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
import vercelIcon from '../src/assets/icons/vercel-icon.svg';
import viteIcon from '../src/assets/icons/vite-icon.svg';

export default function changeLanguage(isEnglish) {
  if (isEnglish) {
    return {
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
      dogsTitle: 'Dogs',
      dogsAppType: 'Desktop Only',
      dogsDescription: `Web App showcasing detailed information about various dog breeds with the ability to search, sort and filter by multiple parameters simultaneously and chose the amount of data cards displayed per page. Additionally, it provides the option to create a new dog breed with the information of your preference and seamlessly switch between metric and imperial measurements for the entire site's input and output.`,
      forzaTitle: 'Forza',
      forzaAppType: 'Desktop Only',
      frozaDescription: `Desktop application designed specifically for modded versions of the popular game Forza Motorsport 4 on the Xbox 360 console. Features include a full rundown of all in-game vehicle specifications including dlcs, custom searches, filters and sorting methods and the ability to engine swap any car engine to any other car. Works by upon confirmation editing the correct game database and on submit run various scripts to package the data in xbox readable format for transfering.`,
      rickAndMortyTitle: 'Rick And Morty',
      rickAndMortyAppType: 'Web App Responsive | Desktop | Tablet | Mobile',
      rickAndMortyDescription: `Feature-packed web app with a multitude of functionalities:
       Secure data storage for sensitive information and authentication for register and loging in using various platforms. 
       Seamless combination of advanced searching, filtering and sorting. 
      Dozens of customizeable card viewing options for both home and favorites for amount of cards per page, shape, info positioning, text alignment and more.
      Detail information for each character.
      Extensive background selection for each page.
      Load and save functionality with manual and autosave options for each aformentioned feature. 
      Personal info and email and password editing.`,
      countriesTitle: 'Countries Comming Soon',
      countriesAppType: 'Responsive | Desktop | Tablet | Mobile',
      countriesDescription: 'A full stack application that allows users to search for countries and view their information.',
      clothingStoreTitle: 'Clothing Store Comming Soon',
      clothingStoreAppType: '',
      clothingStoreDescription: '',
      gitHubButton: 'Check Code',
      deployButton: 'Deploy App',
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
          description: `Firebase is a service that simplifies user authentication in web and mobile apps in a secure and reliable way offering integration with external identity providers.`,
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
          name: 'Vercel',
          description: 'Vercel is a cloud-based platform that simplifies deployment and hosting of web applications.',
          icon: vercelIcon
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
        {
          name: 'MongoDB',
          description: `MongoDB is a popular NoSQL document database known for its scalability and flexibility in handling unstructured data, well-suited for rapidly evolving data requirements.`,
          icon: mongoIcon
        },
        {
          name: 'Cloudinary',
          description: 'Cloudinary is a cloud-based media management platform that provides a comprehensive solution for storing, optimizing, managing, and delivering images and videos on the web.',
          icon: cloudinaryIcon
        },
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
    }
  }
}