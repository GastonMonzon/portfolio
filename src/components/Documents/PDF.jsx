import { Document, StyleSheet, Page, View, Text, Image, Font, Line, Svg } from '@react-pdf/renderer';
import cvImage from '../../assets/images/cvImage.jpg';

import gitHubIcon from '../../assets/images/github.jpg';
import heartIcon from '../../assets/images/heart.png';
import idIcon from '../../assets/images/id.jpg';
import linkedinIcon from '../../assets/images/linkedin.jpg';
import locationIcon from '../../assets/images/map.jpg';
import mailIcon from '../../assets/images/gmail.jpg';
import moneyIcon from '../../assets/images/financial.jpg';
import phoneIcon from '../../assets/images/phone-call.jpg';
import webIcon from '../../assets/images/website.jpg';

import educationIcon from '../../assets/images/education.png';
import projectsIcon from '../../assets/images/coding.jpg';
import skillsIcon from '../../assets/images/coding-book.png';
import suitcaseIcon from '../../assets/images/suitcase.jpg';

import cloudinaryIcon from '../../assets/images/cloudinary-icon.jpg';
import cPlusPlusIcon from '../../assets/images/c++-icon.jpg';
import cssIcon from '../../assets/images/css3-icon.jpg';
import databaseIcon from '../../assets/images/database-icon.jpg';
import expressIcon from '../../assets/images/express-icon.png';
import firebaseIcon from '../../assets/images/firebase-icon.jpg';
import firestoreIcon from '../../assets/images/firestore-icon.jpg';
import gitIcon from '../../assets/images/git-icon.png';
import htmlIcon from '../../assets/images/html5-icon.jpg';
import javaIcon from '../../assets/images/java-icon.jpg';
import javascriptIcon from '../../assets/images/javascript-icon.jpg';
import mongoIcon from '../../assets/images/mongodb-logo-icon.jpg';
import mongooseIcon from '../../assets/images/mongo-icon.jpg';
import mysqlIcon from '../../assets/images/mysql-icon.jpg';
import nodeIcon from '../../assets/images/node-icon.jpg';
import postgresqlIcon from '../../assets/images/postgresql-icon.jpg';
import pythonIcon from '../../assets/images/python-icon.png';
import railwayIcon from '../../assets/images/railway-icon.png';
import reactIcon from '../../assets/images/react-icon.jpg';
import sequelizeIcon from '../../assets/images/sequelize-icon.jpg';
import slackIcon from '../../assets/images/slack.png';
import sqliteIcon from '../../assets/images/sqlite-icon.png';
import stripeIcon from '../../assets/images/stripe-icon.png';
import trelloIcon from '../../assets/images/trello.png';
import typescriptIcon from '../../assets/images/typescript-icon.png';
import vercelIcon from '../../assets/images/vercel-icon.png';
import officeIcon from '../../assets/images/office.jpg';

import FM4Icon from '../../assets/images/FM4-image.jpg';
import ecommerceIcon from '../../assets/icons/ecommerce-logo.png';
import dogsIcon from '../../assets/images/dogs-icon.jpg';
import rickAndMortyIcon from '../../assets/images/rick_and_morty_title.jpg';

import codecademyIcon from '../../assets/images/codecademy-icon.png';
import doverIcon from '../../assets/images/dover-icon.jpg';
import entheusIcon from '../../assets/images/entheus-icon.jpg';
import farmacityIcon from '../../assets/images/farmacity-icon.png';
import ferreroIcon from '../../assets/images/ferrero-icon.jpg';
import googleIcon from '../../assets/images/google-icon.jpg';
import henryIcon from '../../assets/images/henry-icon.png';
import jetbrainsIcon from '../../assets/images/jetbrains-icon.png';
import pluralsightIcon from '../../assets/images/pluralsight-icon.png';
import rgisIcon from '../../assets/images/rgis-icon.png';
import secutecIcon from '../../assets/images/secutec-icon.png';
import udemyIcon from '../../assets/images/udemy-icon.png';
import utnIcon from '../../assets/images/utn-icon.jpg';
import xappiaIcon from '../../assets/images/xappia-icon.png';

import React from 'react';

Font.register({
  family: 'Futura',
  src: 'http://fonts.gstatic.com/s/montserrat/v10/zhcz-_WihjSQC0oHJ9TCYC3USBnSvpkopQaUR-2r7iU.ttf',
});

const styles = StyleSheet.create({
  main: {
    fontFamily: 'Futura',
  },
  page: {
    padding: 25,
    paddingTop: 18,
  },
  imageNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    borderRadius: '100%',
    width: 100,
    marginRight: 5,
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 17,
    marginBottom: 3,
    textAlign: 'center',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 3,
  },
  iconInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 3,
  },
  infoIcon: {
    width: 12,
    height: 12,
    marginRight: 3,
    objectFit: 'contain',
  },
  info: {
    marginBottom: 3,
    fontSize: 10,
  },
  abstract: {
    fontSize: 11,
    textAlign: 'justify',
    marginTop: 4,
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 12,
    marginBottom: 3,
  },
  infoLanguage: {
    fontSize: 11.5,
    marginBottom: 3,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
    marginBottom: 3,
  },
  iconInfoSkillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10.5,
    marginBottom: 3,
    width: '23%',
  },
  skillsInfoIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    objectFit: 'contain',
  },
  skillsInfo: {
    fontSize: 10.5,
  },
  projectsMainContainer: {
  },
  projectsContainer: {
    minWidth: 520,
    maxWidth: 520,
    marginBottom: 3,
  },
  experiencesContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  experienceContainer: {
    minWidth: 265,
    maxWidth: 265,
    marginRight: 20,
  },
  mainTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
  },
  mainTitleIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  mainTitle: {
    fontSize: 14,
  },
  line: {
  },
  jobsContainer: {
    marginBottom: 5,
  },
  headlinesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  logoTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: 25,
    height: 25,
    objectFit: 'contain',
    marginRight: 5,
  },
  logoLong: {
    width: 40,
    height: 15,
    objectFit: 'contain',
    marginLeft: -15,
    marginRight: 5,
  },
  titleCompanyContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  jobTitle: {
    fontSize: 11,
  },
  company: {
    fontSize: 10.5,
  },
  dates: {
    fontSize: 10,
  },
  projectDescription: {
    minWidth: 520,
    maxWidth: 520,
    fontSize: 10.5,
  },
  description: {
    fontSize: 10.5,
  },
  gitHubUrlContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  appsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    bottom: 20,
    left: 0,
    right: 20,
    textAlign: 'right',
  },
});

export default function PDF() {

  const isEnglish = false;

  const textData = isEnglish ? {
    mainTitle: 'Full Stack Junior Developer React | Javascript | Node JS | HTML | CSS | SQL',
    contactInfo: [
      {
        icon: phoneIcon,
        title: '+54 9 11 3144 9224',
      },
      {
        icon: mailIcon,
        title: 'gastonmonzon3@gmail.com',
      },
      {
        icon: linkedinIcon,
        title: 'www.linkedin.com/in/gaston-monzon',
      },
      {
        icon: webIcon,
        title: 'Web Portfolio: https://gaston-monzon-portfolio.vercel.app/',
      },
      {
        icon: gitHubIcon,
        title: 'Git User: GastonMonzon',
      },
      {
        icon: locationIcon,
        title: 'Blanco Encalada 4680 4 B Capital Federal, Buenos Aires, Argentina',
      },
      {
        icon: heartIcon,
        title: '21/11/1992 , Single',
      },
      {
        icon: idIcon,
        title: 'DNI: 37246155',
      },
      {
        icon: moneyIcon,
        title: 'Intended gross salary: US$150 - US$300',
      },
    ],
    abstract: `Throughout my career I've acquired valuable experiences primarily in customer service and retail sales that helped me polish my interpersonal and comunication skills.

Currently, having graduated from a bootcamp at Henry, i've dedicated to perfecting my knowledge in programming on creating user-friendly interfaces and providing a wide range of user options using agile methodologies.

Additionally, I gained experience in database modeling, register and login authentication, use and creation of APIs, payment gateway implementation, web deployment and version control.`,
    skills: {
      mainTitleIcon: skillsIcon,
      mainTitle: 'Skills And Knowledge',
      type: [
        {
          title: 'Programming Languages:',
          info: [
            {
              icon: reactIcon,
              title: 'React: Advanced',
            },
            {
              icon: javascriptIcon,
              title: 'Javascript: Advanced',
            },
            {
              icon: typescriptIcon,
              title: 'TypeScript: Basic',
            },
            {
              icon: htmlIcon,
              title: 'HTML: Advanced',
            },
            {
              icon: cssIcon,
              title: 'CSS: Advanced',
            },
            {
              icon: pythonIcon,
              title: 'Python: Basic',
            },
            {
              icon: javaIcon,
              title: 'Java: Basic',
            },
            {
              icon: cPlusPlusIcon,
              title: 'C++: Basic',
            },
            {
              icon: databaseIcon,
              title: 'SQL: Advanced',
            },
          ]
        },
        {
          title: 'Frameworks:',
          info: [
            {
              icon: sequelizeIcon,
              title: 'Sequalize',
            },
            {
              icon: mongooseIcon,
              title: 'Mongoose',
            },
            {
              icon: sqliteIcon,
              title: 'SQLite',
            },
            {
              icon: expressIcon,
              title: 'Express',
            },
            {
              icon: cloudinaryIcon,
              title: 'Cloudinary',
            },
            {
              icon: stripeIcon,
              title: 'Stripe',
            },
            {
              icon: firebaseIcon,
              title: 'Firebase',
            },
            {
              icon: firestoreIcon,
              title: 'Firestore',
            },
            {
              icon: railwayIcon,
              title: 'Railway',
            },
            {
              icon: vercelIcon,
              title: 'Vercel',
            },
          ]
        },
        {
          title: 'Database:',
          info: [
            {
              icon: postgresqlIcon,
              title: 'PostgreSQL',
            },
            {
              icon: mysqlIcon,
              title: 'MySQL',
            },
            {
              icon: mongoIcon,
              title: 'MongoDB',
            },
          ]
        },
        {
          title: 'Herramientas: ',
          info: [
            {
              icon: nodeIcon,
              title: 'Node.js',
            },
            {
              icon: gitHubIcon,
              title: 'Github',
            },
            {
              icon: gitIcon,
              title: 'Git: Advanced',
            },
            {
              icon: slackIcon,
              title: 'Slack',
            },
            {
              icon: trelloIcon,
              title: 'Trello',
            },
            {
              icon: officeIcon,
              title: 'Office: Advanced',
            },
          ]
        },
      ],
    },
    languagesTitle: 'Languages',
    spanish: 'Spanish: Native',
    english: 'English: Advanced',
    englishCertificate: 'EF SET Certifcate In English C2 Proficient',
    projects: {
      mainTitleIcon: projectsIcon,
      mainTitle: 'Project',
      info: [
        {
          isLong: false,
          logo: ecommerceIcon,
          title: 'E-commerce Tienda De Ropa',
          dates: 'feb. 2024 - apr. 2024',
          company: 'Henry Bootcamp',
          description: `Clothes e-commerce web app with built-in category search, filters and sortings, secure user register and login on Firebase with third-party login support, cart system and payments with Stripe, reviews viewing and creation and admin functions for reviews, products, users and purchases.`,
          gitHubUrl: 'https://github.com/GastonMonzon/ecommerce-ropa',
          madeWithList: ['React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDb', 'Mongoose', 'Firebase', 'Stripe', 'Cloudinary', 'Railway', 'Vercel'],
          madeWith: [
            reactIcon,
            htmlIcon,
            cssIcon,
            javascriptIcon,
            nodeIcon,
            mongoIcon,
            mongooseIcon,
            firebaseIcon,
            stripeIcon,
            cloudinaryIcon,
            railwayIcon,
            vercelIcon,
          ],
        },
        {
          isLong: true,
          logo: dogsIcon,
          title: 'Dogs API Web Page',
          dates: 'dec. 2023 - dec. 2023',
          company: 'Henry Bootcamp',
          description: `Web application that displays detailed information about various dog breeds obtained from The Dog API, with the ability to search, sort and filter, choose the amount of data displayed per page, option to create a new breed and seamlessly switch between metric and imperial measurements.`,
          gitHubUrl: 'https://github.com/GastonMonzon/Dogs-API-web-app.git',
          madeWithList: ['React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'PostgreSQL', 'Sequelize', 'Railway', 'Vercel'],
          madeWith: [
            reactIcon,
            htmlIcon,
            cssIcon,
            javascriptIcon,
            nodeIcon,
            postgresqlIcon,
            sequelizeIcon,
            railwayIcon,
            vercelIcon,
          ],
        },
        {
          isLong: true,
          logo: FM4Icon,
          title: 'Forza Motorsport 4 Engine Setter',
          dates: 'dec. 2023 - dec. 2023',
          company: 'Henry Bootcamp',
          description: `Desktop application designed for modified versions of the Forza Motorsport 4 game, with options to view each vehicle's specifications, do custom searches with filters and sorting, and replace the engines of any car.`,
          gitHubUrl: 'https://github.com/GastonMonzon/forza-motorsport-4-engine-setter.git',
          madeWithList: ['React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL', 'SQLite', 'Railway', 'Vercel'],
          madeWith: [
            reactIcon,
            htmlIcon,
            cssIcon,
            javascriptIcon,
            nodeIcon,
            mysqlIcon,
            sqliteIcon,
            railwayIcon,
            vercelIcon,
          ],
        },
        {
          isLong: true,
          logo: rickAndMortyIcon,
          title: 'Rick And Morty',
          dates: 'sept. 2023 - nov. 2023',
          company: 'Henry Bootcamp',
          description: `Web application with Rick&Morty API with options for secure data storage and authentication, seamless combination of searching, filtering and sorting, dozens of visual customization options, detailed information for each character, wide selection of backgrounds for each page and loading and auto or manual saving of selected options.`,
          gitHubUrl: 'https://github.com/GastonMonzon/rick_and_morty_full.git',
          madeWithList: ['React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'PostgreSQL', 'Sequelize', 'Firebase', 'Firestore', 'Railway', 'Vercel'],
          madeWith: [
            reactIcon,
            htmlIcon,
            cssIcon,
            javascriptIcon,
            nodeIcon,
            postgresqlIcon,
            sequelizeIcon,
            firebaseIcon,
            firestoreIcon,
            railwayIcon,
            vercelIcon,
          ],
        },
      ],
      developedWith: 'Developed With: ',
    },
    experience: [
      {
        mainTitleIcon: educationIcon,
        mainTitle: 'Education',
        info: [
          {
            isLong: true,
            logo: henryIcon,
            title: 'Full Stack Developer',
            dates: 'aug. 2023 - apr. 2024',
            company: 'Henry - Graduated',
            description: ``,
          },
          {
            isLong: false,
            logo: pluralsightIcon,
            title: 'Python Core Course',
            dates: 'jan. 2023 - apr. 2023',
            company: 'Pluralsight - Completed',
            description: ``,
          },
          {
            isLong: false,
            logo: utnIcon,
            title: `Systems Engineering`,
            dates: 'dec. 2018 - jan. 2021',
            company: `UTN - 2° Year abandoned`,
            description: ``,
          },
          {
            isLong: false,
            logo: jetbrainsIcon,
            title: 'Java Developer Course',
            dates: 'dec. 2018 - jan. 2021',
            company: `JetBrains Academy - 
Completed`,
            description: ``,
          },
          {
            isLong: true,
            logo: codecademyIcon,
            title: 'SQL Intermediate Course',
            dates: 'feb. 2019 - apr. 2019',
            company: 'Codecademy - Completed',
            description: ``,
          },
          {
            isLong: true,
            logo: udemyIcon,
            title: 'SQL for Beginners Course',
            dates: 'feb. 2019 - apr. 2019',
            company: 'Udemy - Completed',
            description: ``,
          },
          {
            isLong: true,
            logo: udemyIcon,
            title: `Java Masterclass Course`,
            dates: 'aug. 2018 - jan. 2019',
            company: 'Udemy - Completed',
            description: ``,
          },
          {
            isLong: true,
            logo: udemyIcon,
            title: `Java Crash Course`,
            dates: 'aug. 2018 - dec. 2018',
            company: 'Udemy - Completed',
            description: ``,
          },
          {
            isLong: false,
            logo: doverIcon,
            title: `Bachelor of Humanities
and Social Sciences`,
            dates: 'jan. 1996 - jul. 2011',
            company: `Dover High School - 
Elementary and Secondary
Completed`,
            description: ``,
          },
        ],
      },
      {
        mainTitleIcon: suitcaseIcon,
        mainTitle: 'Work Experience',
        info: [
          // {
          //   isLong: true,
          //   logo: henryIcon,
          //   title: 'Estudiante Graduado',
          //   dates: 'aug.2023 - actualidad',
          //   company: 'Henry',
          //   description: 'Bootcamp especializado de 4 a 6 meses diseñado para enseñar la creación de aplicaciones web de una sola página utilizando React, junto con modelado de base de datos, autenticación de registro e inicios de sesión, uso y creación de APIs, implementación de pasarela de pagos y deploy en web de la aplicación. Utilizando y aprendiendo Javascript, CSS, HTML, SQL y demás frameworks como Firebase, Cloudinary, Stripe, Railway y Vercel entre otros.',
          // },
          {
            isLong: false,
            logo: null,
            title: 'Manufacturer',
            dates: 'apr. 2022 - current',
            company: 'Rascadores Brunito',
            description: `Cat scratchers manufacturing startup.`,
            // Las tareas incluyen trabajo de carpintería como corte de maderas, atornillado, pegado y engrapado de alfombras y/o hilo sisal, y embalado de productos para su envío.
            // `,
          },
          {
            isLong: true,
            logo: secutecIcon,
            title: 'Security Guard',
            dates: 'dec. 2020 - mar. 2022',
            company: 'Secutec Securite S.A.',
            description: ``,
            // \u25CF Control de ingreso y egreso de personas.
            // \u2022 Monitoreo de cámaras.
            // \u2022 Llenado de libro de actas.
            // \u2022 Chequeo perimetral.
            // \u2022 Jornada laboral de 12 horas turno noche, modalidad 6 x 2.
            // Referencia: Luis Gianetto, Supervisor. Tel: 11 2461 1785
            // `,
          },
          {
            isLong: true,
            logo: xappiaIcon,
            title: 'System Analist',
            dates: 'jul. 2020 - sept. 2020',
            company: 'Xappia S.R.L.',
            description: ``,
            // Trabajo remoto. Recepción de actualizaciones de sistemas con el fin de verificar los cambios realizados y, de ser necesario, corregir los errores que hubieran utilizando herramientas de programación (Ruby, Java, archivos XML). Jornada laboral tiempo completo regular.
            // `,
          },
          {
            isLong: false,
            logo: googleIcon,
            title: 'StreetView Driver',
            dates: 'mar. 2020 - sept. 2020',
            company: 'Google',
            description: ``,
            // 🔶 Conducción de un vehículo SUV con sistema de cámaras para registrar los alrededores en rutas dadas de CABA y barrios cercanos.
            // 🔶 Manejo de una computadora a bordo para el control y mantenimiento de las cámaras y sistemas
            // 🔶 Reportes diarios del progreso efectuado.
            // 🔶 Cuidado y mantención del vehículo.
            // 🔶 Jornada laboral tiempo completo regular.
            // `,
          },
          {
            isLong: true,
            logo: rgisIcon,
            title: 'Inventory Controller',
            dates: 'dec. 2019 - jul. 2020',
            company: 'RGIS',
            description: ``,
            // Control de stock manual con sistema propio en diversas empresas de consumo masivo, en góndola, exhibición y depósito.
            // Jornada laboral flexible (mayoritariamente turno noche), priorizando los días y horarios de los clientes.
            // Referencia: Cecilia Lezcano, Bayton RRHH. Tel: 11 6716 3271
            // `,
          },
          {
            isLong: true,
            logo: entheusIcon,
            title: 'Security Guard',
            dates: 'aug. 2017 - nov. 2018',
            company: 'Entheus S.R.L.',
            description: ``,
            // 🔷 Control del ingreso y egreso de personal de la empresa asegurada, proveedores y personas.
            // 🔷 Mantener el orden, prevenir infracciones y notificar de estas a las empresas.
            // 🔷 Llenado de libro de actas.
            // 🔷 Monitoreo por medio de cámaras.
            // 🔷 Chequeo perimetral.
            // 🔷 Jornada laboral de 12 horas turno noche, 2 francos cada 6 trabajados.
            // Referencia: Florencia Cosimo, RRHH. Tel: 11 4957 6000`,
            // `,
          },
          {
            isLong: true,
            logo: farmacityIcon,
            title: 'Multipurpose Employee',
            dates: 'may. 2016 - aug. 2016',
            company: 'Farmacity S.A.',
            description: ``,
            // ◽ Atención al cliente.
            // ◽ Manejo de caja con sistema de cobro propio y sistema Posnet.
            // ◽ Control de ticket fiscal.
            // ◽ Limpieza y orden general del local.
            // ◽ Reposición de mercadería en góndola, línea de cajas y depósito.
            // ◽ Control de stock con sistema propio y carga y descarga de mercadería.
            // ◽ Jornada laboral con turnos rotativos, modalidad 6 x 1.
            // `,
          },
          {
            isLong: false,
            logo: ferreroIcon,
            title: 'External Shelf Stocker',
            dates: 'mar. 2015 - jun. 2015',
            company: 'Ferrero Argentina S.A.',
            description: ``,
            // 🔘 Reposición de todos los productos de marca Ferrero en 3 supermercados por día.
            // 🔘 Limpieza y orden general de góndolas y stands de mercadería.
            // 🔘 Chequeo de stock en depósito y pedido de mercadería faltante.
            // 🔘 Jornada laboral de lunes a viernes de 6 a 14 hs. Sábados de 8 a 12 hs.
            // Referencia: Paula Fuchs, Solvens RRHH. Tel: 11 5488 9659
            // `,
          },
          {
            isLong: false,
            logo: null,
            title: 'Retail Store Clerk',
            dates: 'mar. 2012 - dec. 2015',
            company: 'Mundo Service S.R.L.',
            description: ``,
            // ◼️ Atención al cliente y venta de herramientas de ferretería.
            // ◼️ Reposición y orden y limpieza general del local.
            // ◼️ Recepción de electrodomésticos a reparar o retirar.
            // ◼️ Jornada laboral tiempo completo regular.
            // Referencia: Miguel Feijoo, Dueño. Tel: 0322 4749 0997
            // `,
          },
        ],
      },
    ],
    other: {
      mainTitleIcon: educationIcon,
      mainTitle: 'Other Skills',
      info: [
        'First Certificate in English (FCE)',
        'International Certificate of Secundary Education (ICE)',
        'Driver\'s license',
        'Glider Pilot License',
      ]
    },
    page: 'of',
  } : {
    mainTitle: 'Desarrollador Full Stack Junior React | Javascript | Node JS | HTML | CSS | SQL',
    contactInfo: [
      {
        icon: phoneIcon,
        title: '+54 9 11 3144 9224',
      },
      {
        icon: mailIcon,
        title: 'gastonmonzon3@gmail.com',
      },
      {
        icon: linkedinIcon,
        title: 'www.linkedin.com/in/gaston-monzon',
      },
      {
        icon: webIcon,
        title: 'Portfolio Web: https://gaston-monzon-portfolio.vercel.app/',
      },
      {
        icon: gitHubIcon,
        title: 'Usuario Git: GastonMonzon',
      },
      {
        icon: locationIcon,
        title: 'Blanco Encalada 4680 4 B Capital Federal, Buenos Aires, Argentina',
      },
      {
        icon: heartIcon,
        title: '21/11/1992 , Soltero',
      },
      {
        icon: idIcon,
        title: 'DNI: 37246155',
      },
      {
        icon: moneyIcon,
        title: 'Sueldo bruto pretendido: $300.000 - $500.000',
      },
    ],
    abstract: `A lo largo de mi carrera adquirí valiosas experiencias principalmente en atención al cliente y ventas minoristas que me ayudaron a pulir mis habilidades interpersonales y de comunicación.

Actualmente, habiendome graduado de un bootcamp en Henry, me dediqué a perfeccionar mis conocimientos de programación en la creación de interfaces amigables para el usuario y proporcionar una amplia gama de opciones utilizando metodologías ágiles.

Además, adquirí experiencia en modelado de base de datos, autenticación de registro e inicios de sesión, uso y creación de APIs, implementación de pasarela de pagos, despliegue en web y control de versiones.`,
    skills: {
      mainTitleIcon: skillsIcon,
      mainTitle: 'Conocimientos y Habilidades',
      type: [
        {
          title: 'Lenguajes:',
          info: [
            {
              icon: reactIcon,
              title: 'React: Avanzado',
            },
            {
              icon: javascriptIcon,
              title: 'Javascript: Avanzado',
            },
            {
              icon: typescriptIcon,
              title: 'TypeScript: Básico',
            },
            {
              icon: htmlIcon,
              title: 'HTML: Avanzado',
            },
            {
              icon: cssIcon,
              title: 'CSS: Avanzado',
            },
            {
              icon: pythonIcon,
              title: 'Python: Básico',
            },
            {
              icon: javaIcon,
              title: 'Java: Básico',
            },
            {
              icon: cPlusPlusIcon,
              title: 'C++: Básico',
            },
            {
              icon: databaseIcon,
              title: 'SQL: Avanzado',
            },
          ]
        },
        {
          title: 'Frameworks:',
          info: [
            {
              icon: sequelizeIcon,
              title: 'Sequalize',
            },
            {
              icon: mongooseIcon,
              title: 'Mongoose',
            },
            {
              icon: sqliteIcon,
              title: 'SQLite',
            },
            {
              icon: expressIcon,
              title: 'Express',
            },
            {
              icon: cloudinaryIcon,
              title: 'Cloudinary',
            },
            {
              icon: stripeIcon,
              title: 'Stripe',
            },
            {
              icon: firebaseIcon,
              title: 'Firebase',
            },
            {
              icon: firestoreIcon,
              title: 'Firestore',
            },
            {
              icon: railwayIcon,
              title: 'Railway',
            },
            {
              icon: vercelIcon,
              title: 'Vercel',
            },
          ]
        },
        {
          title: 'Base De Datos:',
          info: [
            {
              icon: postgresqlIcon,
              title: 'PostgreSQL',
            },
            {
              icon: mysqlIcon,
              title: 'MySQL',
            },
            {
              icon: mongoIcon,
              title: 'MongoDB',
            },
          ]
        },
        {
          title: 'Herramientas: ',
          info: [
            {
              icon: nodeIcon,
              title: 'Node.js',
            },
            {
              icon: gitHubIcon,
              title: 'Github',
            },
            {
              icon: gitIcon,
              title: 'Git: Avanzado',
            },
            {
              icon: slackIcon,
              title: 'Slack',
            },
            {
              icon: trelloIcon,
              title: 'Trello',
            },
            {
              icon: officeIcon,
              title: 'Office: Avanzado',
            },
          ]
        },
      ],
    },
    languagesTitle: 'Idiomas:',
    spanish: '',
    english: 'Inglés: Avanzado',
    englishCertificate: 'EF SET Certifcate En Inglés C2 Proficient',
    projects: {
      mainTitleIcon: projectsIcon,
      mainTitle: 'Proyectos',
      info: [
        {
          isLong: false,
          logo: ecommerceIcon,
          title: 'E-commerce Tienda De Ropa',
          dates: 'feb. 2024 - abr. 2024',
          company: 'Henry Bootcamp',
          description: `Aplicación web de comercio electrónico de ropa con búsqueda integrada por categoría, filtros y opciones de ordenamiento, registro e inicio de sesión con Firebase con soporte para terceros, sistema de carrito y pagos con Stripe, visualización y creación de reseñas y funciones de administrador para reseñas, productos, usuarios y compras.`,
          gitHubUrl: 'https://github.com/GastonMonzon/ecommerce-ropa',
          madeWithList: ['React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDb', 'Mongoose', 'Firebase', 'Stripe', 'Cloudinary', 'Railway', 'Vercel'],
          madeWith: [
            reactIcon,
            htmlIcon,
            cssIcon,
            javascriptIcon,
            nodeIcon,
            mongoIcon,
            mongooseIcon,
            firebaseIcon,
            stripeIcon,
            cloudinaryIcon,
            railwayIcon,
            vercelIcon,
          ],
        },
        {
          isLong: true,
          logo: dogsIcon,
          title: 'Dogs API Web Page',
          dates: 'dic. 2023 - dic. 2023',
          company: 'Henry Bootcamp',
          description: `Aplicación web que muestra información detallada sobre diversas razas de perros obtenidas de The Dog API, con la capacidad de buscar, ordenar y filtrar, elegir la cantidad de datos mostradas por página, opción de crear una nueva raza y cambiar fluidamente entre medidas métricas e imperiales.`,
          gitHubUrl: 'https://github.com/GastonMonzon/Dogs-API-web-app.git',
          madeWithList: ['React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'PostgreSQL', 'Sequelize', 'Railway', 'Vercel'],
          madeWith: [
            reactIcon,
            htmlIcon,
            cssIcon,
            javascriptIcon,
            nodeIcon,
            postgresqlIcon,
            sequelizeIcon,
            railwayIcon,
            vercelIcon,
          ],
        },
        {
          isLong: true,
          logo: FM4Icon,
          title: 'Forza Motorsport 4 Engine Setter',
          dates: 'dic. 2023 - dic. 2023',
          company: 'Henry Bootcamp',
          description: `Aplicación de escritorio diseñada para versiones modificadas del juego Forza Motorsport 4, con opciones para ver las especificaciones de cada vehículos, hacer búsquedas personalizadas con filtros y ordenamiento y reemplazar los motores de cualquier automóvil.`,
          gitHubUrl: 'https://github.com/GastonMonzon/forza-motorsport-4-engine-setter.git',
          madeWithList: ['React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'MySQL', 'SQLite', 'Railway', 'Vercel'],
          madeWith: [
            reactIcon,
            htmlIcon,
            cssIcon,
            javascriptIcon,
            nodeIcon,
            mysqlIcon,
            sqliteIcon,
            railwayIcon,
            vercelIcon,
          ],
        },
        {
          isLong: true,
          logo: rickAndMortyIcon,
          title: 'Rick And Morty',
          dates: 'sept. 2023 - nov. 2023',
          company: 'Henry Bootcamp',
          description: `Aplicación web con Rick&Morty API con opciones para almacenamiento seguro de datos y autenticación, combinación fluida de búsqueda, filtrado y ordenación, decenas de opciones visuales de personalización, información detallada para cada personaje, amplia selección de fondos para cada página y carga y guardado automático o manual de opciones seleccionadas.`,
          gitHubUrl: 'https://github.com/GastonMonzon/rick_and_morty_full.git',
          madeWithList: ['React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'PostgreSQL', 'Sequelize', 'Firebase', 'Firestore', 'Railway', 'Vercel'],
          madeWith: [
            reactIcon,
            htmlIcon,
            cssIcon,
            javascriptIcon,
            nodeIcon,
            postgresqlIcon,
            sequelizeIcon,
            firebaseIcon,
            firestoreIcon,
            railwayIcon,
            vercelIcon,
          ],
        },
      ],
      developedWith: 'Desarrollado Con: ',
    },
    experience: [
      {
        mainTitleIcon: educationIcon,
        mainTitle: 'Educación',
        info: [
          {
            isLong: true,
            logo: henryIcon,
            title: 'Desarrollador Full Stack',
            dates: 'ago. 2023 - abr. 2024',
            company: 'Henry - Graduado',
            description: ``,
          },
          {
            isLong: false,
            logo: pluralsightIcon,
            title: 'Curso Python Core',
            dates: 'ene. 2023 - abr. 2023',
            company: 'Pluralsight - Completado',
            description: ``,
          },
          {
            isLong: false,
            logo: utnIcon,
            title: `Ingeniería en Sistemas`,
            dates: 'dic. 2018 - ene. 2021',
            company: `UTN - 2° Año abandonado`,
            description: ``,
          },
          {
            isLong: false,
            logo: jetbrainsIcon,
            title: 'Curso Java Developer',
            dates: 'dic. 2018 - ene. 2021',
            company: `JetBrains Academy - 
Completado`,
            description: ``,
          },
          {
            isLong: true,
            logo: codecademyIcon,
            title: 'Curso SQL Intermediate',
            dates: 'feb. 2019 - abr. 2019',
            company: 'Codecademy - Completado',
            description: ``,
          },
          {
            isLong: true,
            logo: udemyIcon,
            title: 'Curso SQL for Beginners',
            dates: 'feb. 2019 - abr. 2019',
            company: 'Udemy - Completado',
            description: ``,
          },
          {
            isLong: true,
            logo: udemyIcon,
            title: `Curso Java Masterclass`,
            dates: 'ago. 2018 - ene. 2019',
            company: 'Udemy - Completado',
            description: ``,
          },
          {
            isLong: true,
            logo: udemyIcon,
            title: `Curso Java Crash`,
            dates: 'ago. 2018 - dic. 2018',
            company: 'Udemy - Completado',
            description: ``,
          },
          {
            isLong: false,
            logo: doverIcon,
            title: `Bachiller en Humanidades 
y Ciencias Sociales`,
            dates: 'ene. 1996 - jul. 2011',
            company: `Dover High School - 
Primario y Secundario
Completado`,
            description: ``,
          },
        ],
      },
      {
        mainTitleIcon: suitcaseIcon,
        mainTitle: 'Experiencia Laboral',
        info: [
          // {
          //   isLong: true,
          //   logo: henryIcon,
          //   title: 'Estudiante Graduado',
          //   dates: 'ago.2023 - actualidad',
          //   company: 'Henry',
          //   description: 'Bootcamp especializado de 4 a 6 meses diseñado para enseñar la creación de aplicaciones web de una sola página utilizando React, junto con modelado de base de datos, autenticación de registro e inicios de sesión, uso y creación de APIs, implementación de pasarela de pagos y deploy en web de la aplicación. Utilizando y aprendiendo Javascript, CSS, HTML, SQL y demás frameworks como Firebase, Cloudinary, Stripe, Railway y Vercel entre otros.',
          // },
          {
            isLong: false,
            logo: null,
            title: 'Fabricante',
            dates: 'abr. 2022 - actualidad',
            company: 'Rascadores Brunito',
            description: `Startup de fabricación de 
rascadores para gatos.`,
            // Las tareas incluyen trabajo de carpintería como corte de maderas, atornillado, pegado y engrapado de alfombras y/o hilo sisal, y embalado de productos para su envío.
            // `,
          },
          {
            isLong: true,
            logo: secutecIcon,
            title: 'Vigilador General',
            dates: 'dic. 2020 - mar. 2022',
            company: 'Secutec Securite S.A.',
            description: ``,
            // \u25CF Control de ingreso y egreso de personas.
            // \u2022 Monitoreo de cámaras.
            // \u2022 Llenado de libro de actas.
            // \u2022 Chequeo perimetral.
            // \u2022 Jornada laboral de 12 horas turno noche, modalidad 6 x 2.
            // Referencia: Luis Gianetto, Supervisor. Tel: 11 2461 1785
            // `,
          },
          {
            isLong: true,
            logo: xappiaIcon,
            title: 'Analista De Sistemas',
            dates: 'jul. 2020 - sept. 2020',
            company: 'Xappia S.R.L.',
            description: ``,
            // Trabajo remoto. Recepción de actualizaciones de sistemas con el fin de verificar los cambios realizados y, de ser necesario, corregir los errores que hubieran utilizando herramientas de programación (Ruby, Java, archivos XML). Jornada laboral tiempo completo regular.
            // `,
          },
          {
            isLong: false,
            logo: googleIcon,
            title: 'Conductor StreetView',
            dates: 'mar. 2020 - sept. 2020',
            company: 'Google',
            description: ``,
            // 🔶 Conducción de un vehículo SUV con sistema de cámaras para registrar los alrededores en rutas dadas de CABA y barrios cercanos.
            // 🔶 Manejo de una computadora a bordo para el control y mantenimiento de las cámaras y sistemas
            // 🔶 Reportes diarios del progreso efectuado.
            // 🔶 Cuidado y mantención del vehículo.
            // 🔶 Jornada laboral tiempo completo regular.
            // `,
          },
          {
            isLong: true,
            logo: rgisIcon,
            title: 'Control de Inventario',
            dates: 'dic. 2019 - jul. 2020',
            company: 'RGIS',
            description: ``,
            // Control de stock manual con sistema propio en diversas empresas de consumo masivo, en góndola, exhibición y depósito.
            // Jornada laboral flexible (mayoritariamente turno noche), priorizando los días y horarios de los clientes.
            // Referencia: Cecilia Lezcano, Bayton RRHH. Tel: 11 6716 3271
            // `,
          },
          {
            isLong: true,
            logo: entheusIcon,
            title: 'Vigilador General',
            dates: 'ago. 2017 - nov. 2018',
            company: 'Entheus S.R.L.',
            description: ``,
            // 🔷 Control del ingreso y egreso de personal de la empresa asegurada, proveedores y personas.
            // 🔷 Mantener el orden, prevenir infracciones y notificar de estas a las empresas.
            // 🔷 Llenado de libro de actas.
            // 🔷 Monitoreo por medio de cámaras.
            // 🔷 Chequeo perimetral.
            // 🔷 Jornada laboral de 12 horas turno noche, 2 francos cada 6 trabajados.
            // Referencia: Florencia Cosimo, RRHH. Tel: 11 4957 6000`,
            // `,
          },
          {
            isLong: true,
            logo: farmacityIcon,
            title: 'Empleado Polivalente',
            dates: 'may. 2016 - ago. 2016',
            company: 'Farmacity S.A.',
            description: ``,
            // ◽ Atención al cliente.
            // ◽ Manejo de caja con sistema de cobro propio y sistema Posnet.
            // ◽ Control de ticket fiscal.
            // ◽ Limpieza y orden general del local.
            // ◽ Reposición de mercadería en góndola, línea de cajas y depósito.
            // ◽ Control de stock con sistema propio y carga y descarga de mercadería.
            // ◽ Jornada laboral con turnos rotativos, modalidad 6 x 1.
            // `,
          },
          {
            isLong: false,
            logo: ferreroIcon,
            title: 'Repositor Externo',
            dates: 'mar. 2015 - jun. 2015',
            company: 'Ferrero Argentina S.A.',
            description: ``,
            // 🔘 Reposición de todos los productos de marca Ferrero en 3 supermercados por día.
            // 🔘 Limpieza y orden general de góndolas y stands de mercadería.
            // 🔘 Chequeo de stock en depósito y pedido de mercadería faltante.
            // 🔘 Jornada laboral de lunes a viernes de 6 a 14 hs. Sábados de 8 a 12 hs.
            // Referencia: Paula Fuchs, Solvens RRHH. Tel: 11 5488 9659
            // `,
          },
          {
            isLong: false,
            logo: null,
            title: 'Vendedor de Local',
            dates: 'mar. 2012 - dic. 2015',
            company: 'Mundo Service S.R.L.',
            description: ``,
            // ◼️ Atención al cliente y venta de herramientas de ferretería.
            // ◼️ Reposición y orden y limpieza general del local.
            // ◼️ Recepción de electrodomésticos a reparar o retirar.
            // ◼️ Jornada laboral tiempo completo regular.
            // Referencia: Miguel Feijoo, Dueño. Tel: 0322 4749 0997
            // `,
          },
        ],
      },
    ],
    other: {
      mainTitleIcon: educationIcon,
      mainTitle: 'Otros Conocimientos',
      info: [
        'First Certificate in English (FCE)',
        'International Certificate of Secundary Education (ICE)',
        'Licencia de Conducir',
        'Licencia de Piloto de Planeador',
      ]
    },
    page: 'de',
  };

  return (
    <Document style={styles.main} >
      <Page size='A4' style={styles.page}>
        <View style={styles.imageNameContainer} >
          {/* <Image style={styles.image} src={cvImage} /> */}
          <Text style={styles.name} >Gaston Exequiel Monzon</Text>
        </View>
        <Text style={styles.title} >{textData.mainTitle}</Text>
        <View style={styles.infoContainer}>
          {textData.contactInfo.map(info => (
            <View style={styles.iconInfoContainer} key={info.title}>
              <Image style={styles.infoIcon} source={info.icon} />
              <Text style={styles.info}>{info.title}</Text>
            </View>
          ))}
        </View>
        <Svg width={550} height={2} >
          <Line
            x1='0'
            y1='0'
            x2='100%'
            y2='0'
            strokeWidth={2}
            stroke='rgb(39, 39, 60)'
          />
        </Svg>
        <Text style={styles.abstract} >{textData.abstract}</Text>
        <View style={styles.mainTitleContainer} >
          <Image style={styles.mainTitleIcon} src={textData.skills.mainTitleIcon} />
          <View>
            <Text style={styles.mainTitle}>{textData.skills.mainTitle}</Text>
            <Svg style={styles.line} width={520} height={5} >
              <Line
                x1='0'
                y1='0'
                x2='100%'
                y2='0'
                strokeWidth={5}
                stroke='red'
              />
            </Svg>
          </View>
        </View>
        {textData.skills.type.map((type) => (
          <React.Fragment key={type.title}>
            <Text style={styles.subTitle}>{type.title}</Text>
            <View style={styles.skillsContainer}>
              {type.info.map((info) => (
                <View style={styles.iconInfoSkillsContainer} key={info.title}>
                  <Image style={styles.skillsInfoIcon} source={info.icon} />
                  <Text style={styles.skillsInfo}>{info.title}</Text>
                </View>
              ))}
            </View>
          </React.Fragment>
        ))}
        <Text style={styles.subTitle} >{textData.languagesTitle}</Text>
        {/* <Text style={styles.infoLanguage} >{textData.spanish}</Text> */}
        <Text style={styles.infoLanguage} >{textData.english}</Text>
        <Text style={styles.infoLanguage} >{textData.englishCertificate}</Text>
        <View style={styles.projectsMainContainer} >
          <View style={styles.mainTitleContainer} >
            <Image style={styles.mainTitleIcon} src={textData.projects.mainTitleIcon} />
            <View>
              <Text style={styles.mainTitle}>{textData.projects.mainTitle}</Text>
              <Svg style={styles.line} width={520} height={5} >
                <Line
                  x1='0'
                  y1='0'
                  x2='100%'
                  y2='0'
                  strokeWidth={5}
                  stroke='rgb(0, 255, 0)'
                />
              </Svg>
            </View>
          </View>
          {textData.projects.info.map((project, index) => (
            <View key={`project-${index}`} style={styles.projectsContainer}>
              <View style={styles.headlinesContainer}>
                <View style={styles.logoTitleContainer} >
                  {project.logo &&
                    <Image style={project.isLong ? styles.logoLong : styles.logo} src={project.logo} />
                  }
                  <View style={styles.titleCompanyContainer}>
                    <Text style={styles.subTitle}>{project.title}</Text>
                    <Text style={styles.projectDescription}>{project.description}</Text>
                    <View style={styles.gitHubUrlContainer} >
                      <Image style={styles.skillsInfoIcon} src={gitHubIcon} />
                      <Text style={styles.skillsInfo}>{project.gitHubUrl}</Text>
                    </View>
                    <View style={styles.appsContainer} >
                      <Text style={styles.jobTitle} >{textData.developedWith}{/* {project.madeWithList.join(', ')} */}</Text>
                      {project.madeWith.map((app, index) => (
                        <View key={`app-${index}`}>
                          <Image style={styles.skillsInfoIcon} src={app} />
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.dates}>{project.dates}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.experiencesContainer} >
          {textData.experience.map((xp, index) => (
            <View style={styles.experienceContainer} key={`experience-${index}`}>
              <View style={styles.mainTitleContainer} >
                <Image style={styles.mainTitleIcon} src={xp.mainTitleIcon} />
                <View>
                  <Text style={styles.mainTitle}>{xp.mainTitle}</Text>
                  <Svg style={styles.line} width={240} height={5} >
                    <Line
                      x1='0'
                      y1='0'
                      x2='100%'
                      y2='0'
                      strokeWidth={5}
                      stroke={index === 0 ? 'orange' : 'rgb(39, 39, 60)'}
                    />
                  </Svg>
                </View>
              </View>
              {xp.info.map((job, index) => (
                <View key={`job-${index}`} style={styles.jobsContainer}>
                  <View style={styles.headlinesContainer}>
                    <View style={styles.logoTitleContainer} >
                      {job.logo &&
                        <Image style={job.isLong ? styles.logoLong : styles.logo} src={job.logo} />
                      }
                      <View style={styles.titleCompanyContainer}>
                        <Text style={styles.jobTitle}>{job.title}</Text>
                        <Text style={styles.company}>{job.company}</Text>
                        <Text style={styles.description}>{job.description}</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.dates}>{job.dates}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
        {/* <View style={styles.mainTitleContainer} >
          <Image style={styles.mainTitleIcon} src={textData.other.mainTitleIcon} />
          <View>
            <Text style={styles.mainTitle}>{textData.other.mainTitle}</Text>
            <Svg style={styles.line} width={520} height={5} >
              <Line
                x1='0'
                y1='0'
                x2='100%'
                y2='0'
                strokeWidth={5}
                stroke='rgb(39, 39, 60)'
              />
            </Svg>
          </View>
        </View>
        {textData.other.info.map((other, index) => (
          <Text style={styles.info} key={`other-${index}`}>
            {other}
          </Text>
        ))} */}
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} ${textData.page} ${totalPages}`
        )} fixed />
      </Page>
    </Document>
  );
}