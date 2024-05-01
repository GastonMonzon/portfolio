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
import stripeIcon from '../src/assets/icons/stripe-icon2.svg';
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
      documentsButton: 'Documents',
      contactButton: 'Contact',
      headLine: 'Full Stack Junior Developer',
      intro: `Welcome to my web portfolio!

        I'm thrilled to showcase my work in creating web applications with React and also share my studies on different programming languages and frameworks.

        Explore my portfolio to learn more about my work and approach to programming. You'll find all my deployed projects, which are the result of my dedication, creativity, and continuous learning.`,
      about: `I was born and currently reside in Capital Federal, Buenos Aires, Argentina. Throughout my career, I have gained valuable experience in various regular jobs, primarily in customer service and retail sales. These experiences have polished my interpersonal skills and taught me the importance of effective communication.

        However, it was not until recently that I discovered my true passion when I embarked on the journey of programming and web development. While on a React bootcamp over the past few months i've dedicated myself to honing my skills in programming with a specific focus on creating user-friendly interfaces and providing a wide range of user options.
        
        I am a hardworking, organized, and problem-solving person. My goal is to create innovative solutions that enhance the user experience, while meeting technical requirements and offering intuitive design. I value reliability and credibility in my work, and I strive to be someone others can trust, by meeting deadlines and delivering high-quality results.
        
        Currently, I am seeking opportunities to grow both professionally and personally in this dynamic field. I am excited to be part of the developer community and look forward to continuing my growth in this exciting discipline.`,
      dogsTitle: 'Dogs',
      dogsAppType: 'Desktop Only',
      dogsDescription: `Web App showcasing detailed information about various dog breeds with the ability to search, sort and filter by multiple parameters simultaneously and chose the amount of data cards displayed per page. Additionally, it provides the option to create a new dog breed with the information of your preference and seamlessly switch between metric and imperial measurements for the entire site's input and output.`,
      forzaTitle: 'Forza',
      forzaAppType: 'Desktop Only',
      forzaDescription: `Desktop application designed specifically for modded versions of the popular game Forza Motorsport 4 on the Xbox 360 console. Features include a full rundown of all in-game vehicle specifications including dlcs, custom searches, filters and sorting methods and the ability to engine swap any car engine to any other car. Works by upon confirmation editing the correct game database and on submit run various scripts to package the data in xbox readable format for transfering.`,
      rickAndMortyTitle: 'Rick And Morty',
      rickAndMortyAppType: 'Desktop Only',
      rickAndMortyDescription: `Feature-packed web app with a multitude of functionalities:
       Secure data storage for sensitive information and authentication for register and loging in using various platforms. 
       Seamless combination of advanced searching, filtering and sorting. 
      Dozens of customizeable card viewing options for both home and favorites for amount of cards per page, shape, info positioning, text alignment and more.
      Detail information for each character.
      Extensive background selection for each page.
      Load and save functionality with manual and autosave options for each aformentioned feature. 
      Personal info and email and password editing.`,
      countriesTitle: 'Countries Comming Soon',
      countriesAppType: '',
      countriesDescription: 'A full stack application that allows users to search for countries and view their information.',
      clothingStoreTitle: 'Clothing Store Comming Soon',
      clothingStoreAppType: 'Desktop Only',
      clothingStoreDescription: 'Clothes and footwear e-commerce web app, with built-in category search, filters and sortings. Secure user register and login on Firebase with third-party login support and access to personal info, favorites and purchases. Seamlessly add items to your cart and securely checkout using trusted payment methods with Stripe. View others reviews and create your own for purchased items. Featuring admin functions such as accept, cancel reviews, create or edit products and managing users and purchases.',
      madeWith: 'Made with:',
      gitHubButton: 'Check Code',
      deployButton: 'Deploy App',
      skills: [
        {
          name: 'HTML5',
          description: 'HTML, short for HyperText Markup Language, is a markup language used to create the structure of web pages.',
          icon: html5Icon,
          link: 'https://developer.mozilla.org/es/docs/Web/HTML',
        },
        {
          name: 'CSS3',
          description: 'CSS, short for Cascading Style Sheets, is a graphic design language used to define and create the presentation of a structured document written in a markup language.',
          icon: css3Icon,
          link: 'https://developer.mozilla.org/es/docs/Web/CSS',
        },
        {
          name: 'JavaScript',
          description: 'JavaScript is an object-oriented interpreted programming language defined as imperative and weakly typed, primarily used for adding interactivity and dynamic behavior to web applications.',
          icon: javascriptIcon,
          link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
        },
        {
          name: 'TypeScript',
          description: 'TypeScript is a superset of JavaScript that adds static typing and additional features to enhance the development process.',
          icon: typescriptIcon,
          link: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Node.js',
          description: 'Node.js is an open source server-side runtime environment for running JavaScript code outside of web browsers.',
          icon: nodeIcon,
          link: 'https://nodejs.org',
        },
        {
          name: 'React',
          description: 'React is an open-source Javascript library designed to create user interfaces and simplify the development of single-page applications.',
          icon: react,
          link: 'https://es.react.dev/',
        },
        {
          name: 'SQL',
          description: `SQL, short for Structured Query Language, is a programming language used for managing and manipulating relational databases.`,
          icon: databaseIcon,
          link: 'https://es.wikipedia.org/wiki/SQL',
        },
        {
          name: 'Git',
          description: 'Git is an open-source version control system that allows multiple developers to work on a project simultaneously, maintaining a history of modifications and facilitating code merging.',
          icon: gitIcon,
          link: 'https://git-scm.com/',
        },
        {
          name: 'Firebase',
          description: `Firebase is a service that simplifies user authentication in web and mobile apps in a secure and reliable way offering integration with external identity providers.`,
          icon: firebaseIcon,
          link: 'https://firebase.google.com',
        },
        {
          name: 'Firestore',
          description: `Firestore is a flexible and scalable cloud-based NoSQL document database designed to store and synchronize data for web, mobile, and server applications in real-time.`,
          icon: firestoreIcon,
          link: 'https://firebase.google.com/docs/firestore',
        },
        {
          name: 'Railway',
          description: 'Railway is a cloud service for building, shipping, monitoring and deploying applications on the web.',
          icon: railwayIcon,
          link: 'https://railway.app/',
        },
        {
          name: 'Vercel',
          description: 'Vercel is a cloud-based platform that simplifies deployment and hosting of web applications.',
          icon: vercelIcon,
          link: 'https://vercel.com',
        },
        {
          name: 'PostgreSQL',
          description: 'PostgreSQL is an open-source object-oriented relational database management system known for robust data integrity, reliability, scalability and advanced features.',
          icon: postgresqlIcon,
          link: 'https://vercel.com',
        },
        {
          name: 'MySQL',
          description: 'MySQL is an open-source relational database management system that offers a simpler and more user-friendly approach, prioritizing ease of use and availability.',
          icon: mysqlIcon,
          link: 'https://www.mysql.com/',
        },
        {
          name: 'MongoDB',
          description: `MongoDB is a popular NoSQL document database known for its scalability and flexibility in handling unstructured data, well-suited for rapidly evolving data requirements.`,
          icon: mongoIcon,
          link: 'https://www.mongodb.com',
        },
        {
          name: 'Cloudinary',
          description: 'Cloudinary is a cloud-based media management platform that provides a comprehensive solution for storing, optimizing, managing, and delivering images and videos on the web.',
          icon: cloudinaryIcon,
          link: 'https://cloudinary.com/',
        },
        {
          name: 'Stripe',
          description: 'Stripe is an popular online payment processing company that offers businesses and individuals tools and APIs to accept and manage online payments, including credit cards, debit cards, and digital wallets.',
          icon: stripeIcon,
          link: 'https://stripe.com',
        },
        {
          name: 'C++',
          description: 'C++ is a high-level programming language which provides low-level access to memory and hardware, suitable for developing operating systems, embedded systems, and performance-critical apps.',
          icon: cPlusPlusIcon,
          link: 'https://es.wikipedia.org/wiki/C%2B%2B',
        },
        {
          name: 'Java',
          description: 'Java is a popular object-oriented programming language known for its platform independence and robustness widely used for building enterprise-level applications.',
          icon: javaIcon,
          link: 'https://www.java.com',
        },
        {
          name: 'Python',
          description: 'Python is a interpreted high-level programming language which emphasizes in simplicity and versatility, popular for tasks ranging from web development, data analysis to AI, machine-learning and automation.',
          icon: pythonIcon,
          link: 'https://www.python.org/',
        },
        // {
        //   name: 'Sequalize',
        //   description: 'Sequelize is an open-source Object-Relational Mapping (ORM) library for Node.js that simplifies database operations by mapping tables to JavaScript objects and providing an intuitive API for interacting.',
        //   icon: sequelizeIcon,
        // },
        // {
        //   name: 'Express',
        //   description: 'Express is a fast and minimalist web application framework for Node.js that simplifies the process of building robust and scalable web applications.',
        //   icon: expressIcon,
        // },
      ],
      contactMessage: `Have any interests or questions?
        Feel free to contact me by filling the form below or reaching out using the contact information provided`,
      location: 'Current Location:',
      phoneNumber: 'Phone Number:',
      copyLocation: 'Copy Location',
      copyLocationSuccess: '✅ Location Copied!',
      copyLocationError: '❌ Error Copying Location',
      copyEmail: 'Copy Email',
      copyEmailSuccess: '✅ Email Copied!',
      copyEmailError: '❌ Error Copying Email',
      copyNumber: 'Copy Phone Number',
      copyNumberSuccess: '✅ Phone Number Copied!',
      copyNumberError: '❌ Error Copying Phone Number',
      linksBelow: 'Check Out The Links Below For More',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Email',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Message',
      contactSendButton: 'Send',
      nameError: 'Must be a valid name.',
      emailError: 'Must be a valid email.',
      subjectError: '',
      messageError: 'The message must have between 50 and 500 characters',
      contactModalSuccessTitle: 'Success',
      contactModalSuccessSubtitle: 'Your message has been sent succesfully!',
      contactModalSuccessMessage: `Thank you for reaching out, i appreciate your interest in my work and will get back to you as soon as possible. Your contact and inquiries are important to me and i look forward to connecting with you.

      If you have any important matters please don't hesitate to call me directly at the provided phone number.

      Again, thank you for sending me you message, and have a wonderful day!

      Best regards,
      Gaston Monzon Full Stack Junior Developer`,
      contactModalErrorTitle: 'Error',
      contactModalErrorSubtitle: 'Message not sent',
      contactModalErrorMessage: `There was an issue while attempting to send your message, i apologize for the inconvenience and assure you that I will address it very soon.
      
      If the problem persists, please contact me using the information provided or call me directly at the given phone number.

      Nevertheless, i appreciate your interest in my work and for reaching out, your contact and inquiries are important to me. Have a wonderful day i look forward to connecting with you!.
      
      Best regards,
      Gaston Monzon Full Stack Junior Developer`,
    }
  } else {
    return {
      homeButton: 'Inicio',
      aboutButton: 'Sobre Mi',
      portfolioButton: 'Portfolio',
      skillsButton: 'Habilidades',
      documentsButton: 'Documentos',
      contactButton: 'Contacto',
      headLine: 'Desarrollador Full Stack Junior',
      intro: `¡Bienvenido/a a mi portafolio web!

      Estoy encantado de exhibir mi trabajo en la creación de aplicaciones web con React y también compartir mis estudios sobre diferentes lenguajes de programación y frameworks.
      
      Explora mi portafolio para conocer más sobre mi trabajo y enfoque en la programación. Encontrarás todos mis proyectos desplegados, que son el resultado de mi dedicación, creatividad y aprendizaje continuo.`,
      about: `Nací y actualmente resido en Capital Federal, Buenos Aires, Argentina. A lo largo de mi carrera, he adquirido valiosas experiencias en diversos empleos regulares, principalmente en atención al cliente y ventas minoristas. Estas experiencias han pulido mis habilidades interpersonales y me han enseñado la importancia de la comunicación efectiva.

      Sin embargo, no fue hasta hace poco que descubrí mi verdadera pasión cuando me embarqué en el viaje de la programación y el desarrollo web. Durante un bootcamp de React en los últimos meses, me he dedicado a perfeccionar mis habilidades en programación, con un enfoque específico en la creación de interfaces amigables para el usuario y proporcionar una amplia gama de opciones.
      
      Soy una persona trabajadora, organizada y buena para resolver problemas. Mi objetivo es crear soluciones innovadoras que potencien la experiencia del usuario, cumpliendo con los requisitos técnicos y ofreciendo un diseño intuitivo. Valoro la confiabilidad y la credibilidad en mi trabajo y me esfuerzo por ser una persona en la que los demás puedan confiar, cumpliendo con los plazos establecidos y entregando resultados de calidad.
      
      Actualmente, estoy buscando oportunidades para crecer tanto profesional como personalmente en este ámbito dinámico. Estoy emocionado de ser parte de la comunidad de desarrolladores y espero seguir creciendo en esta emocionante disciplina.`,
      dogsTitle: 'Dogs',
      dogsAppType: 'Solo Computadora',
      dogsDescription: `Aplicación web que muestra información detallada sobre diversas razas de perros obtenidas de The Dog API, con la capacidad de buscar, ordenar y filtrar por múltiples parámetros simultáneamente y elegir la cantidad de tarjetas de datos mostradas por página. Adicionalmente, proporciona la opción de crear una nueva raza de perro con la información de tu preferencia y cambiar fluidamente entre medidas métricas e imperiales para toda la entrada y salida del sitio.`,
      forzaTitle: 'Forza Motorsport 4 Engine Setter',
      forzaAppType: 'Solo Computadora',
      forzaDescription: `Aplicación de escritorio diseñada específicamente para versiones modificadas del popular juego Forza Motorsport 4 en la consola Xbox 360. Sus características incluyen una descripción completa de todas las especificaciones de los vehículos del juego, incluyendo contenido descargable (DLC), búsquedas personalizadas, filtros y métodos de ordenamiento, y la capacidad de reemplazar el motor de cualquier automóvil por el por el de cualquier otro. Funciona tras la confirmación, editando la base de datos del juego correcta, y al aceptar ejecutando varios programas para empaquetar los datos en un formato legible por Xbox para su transferencia.`,
      rickAndMortyTitle: 'Rick And Morty',
      rickAndMortyAppType: 'Solo Computadora',
      rickAndMortyDescription: `Aplicación web repleta de funciones:
      Almacenamiento seguro de datos para información sensible y autenticación para registro e inicio de sesión utilizando diversas plataformas.
      Combinación fluida de búsqueda avanzada, filtrado y ordenación.
      Decenas de opciones personalizables para visualizar tarjetas, tanto en página principal como en favoritos, como la cantidad de tarjetas por página, forma, posición de la información, alineación del texto y más.
      Información detallada para cada personaje.
      Amplia selección de fondos para cada página.
      Funcionalidad de carga y guardado con opciones de guardado automático y manual para cada una de las características mencionadas anteriormente.
      Edición de información personal, correo electrónico y contraseña.`,
      countriesTitle: 'Países Proximamente',
      countriesAppType: 'Web App Responsive | Desktop | Tablet | Mobile',
      countriesDescription: 'Una aplicación full stack que permite a los usuarios buscar países y ver su información.',
      clothingStoreTitle: 'Tienda De Ropa Proximamente',
      clothingStoreAppType: '',
      clothingStoreDescription: 'Aplicación web de comercio electrónico de ropa y calzado con búsqueda integrada por categoría, filtros y opciones de ordenamiento. Registro y inicio de sesión de usuarios seguros en Firebase con soporte para inicio de sesión de terceros y acceso a información personal, favoritos y compras. Agrega artículos fácilmente a tu carrito y realiza el pago de forma segura utilizando métodos de pago confiables con Stripe. Visualiza las reseñas de otros usuarios y crea tus propias reseñas para los artículos comprados. Incluye funciones de administrador como aceptar o cancelar reseñas, crear o editar productos, y administrar usuarios y compras.',
      madeWith: 'Hecho con:',
      gitHubButton: 'Ver Código',
      deployButton: 'Desplegar App',
      skills: [
        {
          name: 'HTML5',
          description: 'HTML, abreviatura de HyperText Markup Language, es un lenguaje de marcado utilizado para crear la estructura de páginas web.',
          icon: html5Icon,
          link: 'https://developer.mozilla.org/es/docs/Web/HTML',
        },
        {
          name: 'CSS3',
          description: 'CSS, abreviatura de Cascading Style Sheets, es un lenguaje de diseño gráfico utilizado para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.',
          icon: css3Icon,
          link: 'https://developer.mozilla.org/es/docs/Web/CSS',
        },
        {
          name: 'JavaScript',
          description: 'JavaScript es un lenguaje de programación interpretado orientado a objetos definido como imperativo y débilmente tipado, utilizado principalmente para agregar interactividad y comportamiento dinámico a las aplicaciones web.',
          icon: javascriptIcon,
          link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
        },
        {
          name: 'TypeScript',
          description: 'TypeScript es un superset de JavaScript que agrega tipado estático y características adicionales para mejorar el proceso de desarrollo.',
          icon: typescriptIcon,
          link: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Node.js',
          description: 'Node.js es un entorno de ejecución en el lado del servidor de código abierto para ejecutar código JavaScript fuera de los navegadores web.',
          icon: nodeIcon,
          link: 'https://nodejs.org',
        },
        {
          name: 'React',
          description: 'React es una biblioteca de JavaScript de código abierto diseñada para crear interfaces de usuario y simplificar el desarrollo de aplicaciones de una sola página.',
          icon: react,
          link: 'https://es.react.dev/',
        },
        {
          name: 'SQL',
          description: `SQL abreviatura de Structured Query Language, es un lenguaje de programación utilizado para administrar y manipular bases de datos relacionales.`,
          icon: databaseIcon,
          link: 'https://es.wikipedia.org/wiki/SQL',
        },
        {
          name: 'Git',
          description: 'Git es un sistema de control de versiones de código abierto que permite a múltiples desarrolladores trabajar en un proyecto de manera simultánea, manteniendo un historial de modificaciones y facilitando la fusión de código.',
          icon: gitIcon,
          link: 'https://git-scm.com/',
        },
        {
          name: 'Firebase',
          description: `Firebase es un servicio que simplifica la autenticación de usuarios en aplicaciones web y móviles de manera segura y confiable, ofreciendo integración con proveedores de identidad externos.`,
          icon: firebaseIcon,
          link: 'https://firebase.google.com',
        },
        {
          name: 'Firestore',
          description: `Firestore es una base de datos de documentos NoSQL basada en la nube, flexible y escalable, diseñada para almacenar y sincronizar datos en tiempo real para aplicaciones web, móviles y de servidor.`,
          icon: firestoreIcon,
          link: 'https://firebase.google.com/docs/firestore',
        },
        {
          name: 'Railway',
          description: 'Railway es un servicio en la nube para construir, enviar, monitorear y implementar aplicaciones en la web.',
          icon: railwayIcon,
          link: 'https://railway.app/',
        },
        {
          name: 'Vercel',
          description: 'Vercel es una plataforma basada en la nube que simplifica la implementación y el alojamiento de aplicaciones web.',
          icon: vercelIcon,
          link: 'https://vercel.com',
        },
        {
          name: 'PostgreSQL',
          description: 'PostgreSQL es un sistema de gestión de bases de datos relacional orientado a objetos de código abierto conocido por su sólida integridad de datos, confiabilidad, escalabilidad y características avanzadas.',
          icon: postgresqlIcon,
          link: 'https://vercel.com',
        },
        {
          name: 'MySQL',
          description: 'MySQL es un sistema de gestión de bases de datos relacional de código abierto que ofrece un enfoque más simple y amigable para el usuario, priorizando la facilidad de uso y la disponibilidad.',
          icon: mysqlIcon,
          link: 'https://www.mysql.com/',
        },
        {
          name: 'MongoDB',
          description: `MongoDB es una popular base de datos de documentos NoSQL conocida por su escalabilidad y flexibilidad en el manejo de datos no estructurados, ideal para requisitos de datos en constante evolución.`,
          icon: mongoIcon,
          link: 'https://www.mongodb.com',
        },
        {
          name: 'Cloudinary',
          description: 'Cloudinary es una plataforma de gestión de medios basada en la nube que brinda una solución integral para almacenar, optimizar, administrar y entregar imágenes y videos en la web.',
          icon: cloudinaryIcon,
          link: 'https://cloudinary.com/',
        },
        {
          name: 'Stripe',
          description: 'Stripe es una popular empresa de procesamiento de pagos en línea que ofrece a empresas y particulares herramientas y APIs para aceptar y gestionar pagos en línea, incluyendo tarjetas de crédito, tarjetas de débito y billeteras digitales.',
          icon: stripeIcon,
          link: 'https://stripe.com',
        },
        {
          name: 'C++',
          description: 'C++ es un lenguaje de programación de alto nivel que proporciona acceso de bajo nivel a la memoria y al hardware, adecuado para desarrollar sistemas operativos, sistemas integrados y aplicaciones de alto rendimiento.',
          icon: cPlusPlusIcon,
          link: 'https://es.wikipedia.org/wiki/C%2B%2B',
        },
        {
          name: 'Java',
          description: 'Java es un popular lenguaje de programación orientado a objetos conocido por su independencia de plataforma y robustez, ampliamente utilizado para construir aplicaciones a nivel empresarial.',
          icon: javaIcon,
          link: 'https://www.java.com',
        },
        {
          name: 'Python',
          description: 'Python es un lenguaje de programación interpretado de alto nivel que se destaca por su simplicidad y versatilidad. Es popular para una amplia gama de tareas, que van desde el desarrollo web y el análisis de datos hasta la inteligencia artificial, el aprendizaje automático y la automatización.',
          icon: pythonIcon,
          link: 'https://www.python.org/',
        },
        // {
        //   name: 'Sequalize',
        //   description: 'Sequelize is an open-source Object-Relational Mapping (ORM) library for Node.js that simplifies database operations by mapping tables to JavaScript objects and providing an intuitive API for interacting.',
        //   icon: sequelizeIcon,
        // },
        // {
        //   name: 'Express',
        //   description: 'Express is a fast and minimalist web application framework for Node.js that simplifies the process of building robust and scalable web applications.',
        //   icon: expressIcon,
        // },
      ],
      contactMessage: `¿Tienes algún interés o alguna pregunta?
      No dude en ponerse en contacto conmigo completando el formulario a continuación o comunicándose utilizando la información de contacto proporcionada.`,
      location: 'Localidad Actual',
      phoneNumber: 'Teléfono:',
      copyLocation: 'Copiar Localidad',
      copyLocationSuccess: '¡✅ Localidad Copiada!',
      copyLocationError: '❌ Error Copiando Localidad',
      copyEmail: 'Copiar Email',
      copyEmailSuccess: '¡✅ Email Copiado!',
      copyEmailError: '❌ Error Copiando Email',
      copyNumber: 'Copiar Teléfono',
      copyNumberSuccess: '¡✅ Teléfono Copiado!',
      copyNumberError: '❌ Error Copiando Teléfono',
      linksBelow: 'Echa un vistazo a los enlaces debajo para más',
      namePlaceholder: 'Su nombre',
      emailPlaceholder: 'Email',
      subjectPlaceholder: 'Asunto',
      messagePlaceholder: 'Mensaje',
      contactSendButton: 'Enviar',
      nameError: 'Debe ser un nombre válido.',
      emailError: 'Debe ser un Email válido.',
      subjectError: '',
      messageError: 'El mensaje debe tener entre 50 y 500 caracteres',
      contactModalSuccessTitle: 'Éxito',
      contactModalSuccessSubtitle: '¡Tu mensaje fue enviado exitosamente!',
      contactModalSuccessMessage: `Gracias por contactarme, aprecio tu interés en mi trabajo y voy a responderte lo antes posible. Tu contacto y consultas son importantes para mí y espero comunicarme con vos.

      Si tenes un asunto importante por favor no dudes en llamarme directamente al número de teléfono provisto.
      
      Una vez más, gracias por enviarme tu mensaje y ¡que tengas un maravilloso día!
      
      Saludos cordiales,
      Gaston Monzon
      Desarrollador Full Stack Junior`,
      contactModalErrorTitle: 'Error',
      contactModalErrorSubtitle: 'Mensaje no enviado',
      contactModalErrorMessage: `Hubo un problema al intentar enviar tu mensaje, me disculpo por las molestias y puedo asegurar que lo voy a resolver pronto.

      Si el problema persiste, por favor contactame utilizando la información proporcionada o llamame directamente al número de teléfono provisto.
      
      De todas maneras, aprecio tu interés en mi trabajo y por intentar enviar este mensaje, tu contacto y consultas son importantes para mí. ¡Que tengas un maravilloso día y espero comunicarme con vos!
      
      Saludos cordiales,
      Gaston Monzon
      Desarrollador Full Stack Junior`,
    }
  }
}