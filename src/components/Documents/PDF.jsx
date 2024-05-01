import { Document, StyleSheet, Page, View, Text, Image, Font, Line, Svg } from '@react-pdf/renderer';
import cvImage from '../../assets/images/cvImage.jpg';


import idIcon from '../../assets/images/id.png';
import moneyIcon from '../../assets/images/financial.png';
import heartIcon from '../../assets/images/heart.png';
import locationIcon from '../../assets/images/map.png';
import gitIcon from '../../assets/images/github.png';
import mailIcon from '../../assets/images/gmail.png';
import phoneIcon from '../../assets/images/phone-call.png';
import webIcon from '../../assets/images/website.png';
import FM4Icon from '../../assets/images/FM4-image.png';
import ecommerceIcon from '../../assets/icons/ecommerce-logo.png';
import dogsIcon from '../../assets/images/dogs-icon.png';
import rickAndMortyIcon from '../../assets/images/rick_and_morty_title.png';

import cloudinaryIcon from '../../assets/images/cloudinary-icon.png';
import cPlusPlusIcon from '../../assets/images/c++-icon.png';
import cssIcon from '../../assets/images/css3-icon.png';
import databaseIcon from '../../assets/images/database-icon.png';
import expressIcon from '../../assets/images/express-icon.png';
import firebaseIcon from '../../assets/images/firebase-icon.png';
import firestoreIcon from '../../assets/images/firestore-icon.png';
import gitIcon2 from '../../assets/images/git-icon.png';
import htmlIcon from '../../assets/images/html5-icon.png';
import javaIcon from '../../assets/images/java-icon.png';
import javascriptIcon from '../../assets/images/javascript-icon.png';
import mongoIcon from '../../assets/images/mongo-icon.png';
import mysqlIcon from '../../assets/images/mysql-icon.png';
import nodeIcon from '../../assets/images/node-icon.png';
import postgresqlIcon from '../../assets/images/postgresql-icon.png';
import pythonIcon from '../../assets/images/python-icon.png';
import railwayIcon from '../../assets/images/railway-icon.png';
import reactIcon from '../../assets/images/react-icon.png';
import sequelizeIcon from '../../assets/images/sequelize-icon.png';
import slackIcon from '../../assets/images/slack.png';
import stripeIcon from '../../assets/images/stripe-icon.png';
import trelloIcon from '../../assets/images/trello.png';
import typescriptIcon from '../../assets/images/typescript-icon.png';
import vercelIcon from '../../assets/images/vercel-icon.png';
import officeIcon from '../../assets/images/office.png';

// import moneyIcon from '../../assets/images/money-icon.png';
// import mailIcon from '../../assets/images/mail-icon.png';
// import idIcon from '../../assets/images/id-icon.png';
// import locationIcon from '../../assets/images/location-icon.png';
// import heartIcon from '../../assets/images/heart-icon.png';
// import phoneIcon from '../../assets/images/phone-icon.png';
// import gitIcon from '../../assets/images/github-icon.png';
// import webIcon from '../../assets/images/web-icon.png';

import educationIcon from '../../assets/images/education.png';
import suitcaseIcon from '../../assets/images/suitcase.png';
import projectsIcon from '../../assets/images/coding.png';
import skillsIcon from '../../assets/images/coding-book.png';
import codecademyIcon from '../../assets/images/codecademy-icon.png';
import doverIcon from '../../assets/images/dover-icon.png';
import entheusIcon from '../../assets/images/entheus-icon.png';
import farmacityIcon from '../../assets/images/farmacity-icon.png';
import ferreroIcon from '../../assets/images/ferrero-icon.png';
import googleIcon from '../../assets/images/google-icon.png';
import henryIcon from '../../assets/images/henry-icon.png';
import jetbrainsIcon from '../../assets/images/jetbrains-icon.png';
import pluralsightIcon from '../../assets/images/pluralsight-icon.png';
import rgisIcon from '../../assets/images/rgis-icon.png';
import secutecIcon from '../../assets/images/secutec-icon.png';
import udemyIcon from '../../assets/images/udemy-icon.png';
import utnIcon from '../../assets/images/utn-icon.png';
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
    padding: 30,
  },
  imageNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: '100%',
    width: 100,
    marginRight: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
  },
  abstract: {
    fontSize: 10,
    textAlign: 'justify',
    marginTop: 4,
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 11,
    marginBottom: 2,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    fontSize: 9.5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'relative',
    marginBottom: 4,
  },
  iconInfoSkillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6,
    marginBottom: 4,
    width: '23%',
  },
  gitHubUrlContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 5,
  },
  infoIcon: {
    width: 12,
    height: 12,
    marginRight: 5,
    objectFit: 'contain',
  },
  skillsInfoIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    objectFit: 'contain',
  },
  skillsInfo: {
    fontSize: 10,
  },
  info: {
    marginBottom: 4,
    fontSize: 10,
  },
  experiencesContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  experienceContainer: {
    minWidth: 255,
    maxWidth: 255,
    marginRight: 30,
  },
  mainTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 3,
  },
  mainTitleIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  mainTitle: {
    fontSize: 13,
  },
  line: {
  },
  projectsMainContainer: {
  },
  projectsContainer: {
    maxWidth: 500,
    marginBottom: 4,
  },
  jobsContainer: {
    marginBottom: 2,
  },
  headlinesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
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
    fontSize: 10,
  },
  company: {
    fontSize: 10,
  },
  dates: {
    fontSize: 9.5,
  },
  description: {
    marginBottom: 1.5,
    fontSize: 9.5,
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
  const textData = {
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
        icon: webIcon,
        title: 'Portfolio Web: https://gaston-monzon-portfolio.vercel.app/',
      },
      {
        icon: gitIcon,
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
    abstract: `A lo largo de mi carrera adquirí valiosas experiencias principalmente en atención al cliente y ventas minoristas que me ayudaron a pulir mis habilidades interpersonales y de comunicación. Actualmente, habiendome graduado de un bootcamp en Henry, me dediqué a perfeccionar mis conocimientos de programación en la creación de interfaces amigables para el usuario y proporcionar una amplia gama de opciones utilizando metodologías ágiles. Además, adquirí experiencia en modelado de base de datos, autenticación de registro e inicios de sesión, uso y creación de APIs, implementación de pasarela de pagos, despliegue en web y control de versiones.`,
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
              title: 'PostgreSQL: Medio',
            },
            {
              icon: mysqlIcon,
              title: 'MySQL: Medio',
            },
            {
              icon: mongoIcon,
              title: 'MongoDB: Medio',
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
              icon: gitIcon,
              title: 'Github',
            },
            {
              icon: gitIcon2,
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
          description: `Aplicación web de comercio electrónico de ropa con búsqueda integrada por categoría,filtros y opciones de ordenamiento, registro e inicio de sesión con Firebase con soporte para terceros,sistema de carrito y pagos con Stripe, visualización y creación de reseñas y funciones de administrador para reseñas, productos, usuarios y compras.`,
          gitHubUrl: 'https://github.com/GastonMonzon/ecommerce-ropa',
          madeWith: [
            reactIcon,
            htmlIcon,
            cssIcon,
            javascriptIcon,
            nodeIcon,
            mongoIcon,
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
          madeWith: [
            reactIcon,
            htmlIcon,
            cssIcon,
            javascriptIcon,
            nodeIcon,
            postgresqlIcon,
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
          madeWith: [
            reactIcon,
            htmlIcon,
            cssIcon,
            javascriptIcon,
            nodeIcon,
            mysqlIcon,
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
          madeWith: [
            reactIcon,
            htmlIcon,
            cssIcon,
            javascriptIcon,
            nodeIcon,
            postgresqlIcon,
            firebaseIcon,
            firestoreIcon,
            railwayIcon,
            vercelIcon,
          ],
        },
      ]
    },
    experience: [
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
            description: `Proyecto tipo Startup de fabricación de
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
            dates: 'dic. 2019 - mar. 2020',
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
      {
        mainTitleIcon: educationIcon,
        mainTitle: 'Educación',
        info: [
          {
            isLong: true,
            logo: henryIcon,
            title: 'Desarrollador Full Stack',
            dates: 'ago. 2023 - abr. 2024',
            company: 'Henry',
            description: `Graduado`,
          },
          {
            isLong: false,
            logo: pluralsightIcon,
            title: 'Curso Python Core Courses',
            dates: 'ene. 2023 - abr. 2023',
            company: 'Pluralsight',
            description: `Completado`,
          },
          {
            isLong: false,
            logo: utnIcon,
            title: `Ingeniería en Sistemas de 
Información`,
            dates: 'dic. 2018 - ene. 2021',
            company: `Universidad Tecnológica 
Nacional (UTN)`,
            description: `2° Año abandonado`,
          },
          {
            isLong: false,
            logo: jetbrainsIcon,
            title: 'Curso Java Developer',
            dates: 'dic. 2018 - ene. 2021',
            company: 'JetBrains Academy',
            description: `Completado`,
          },
          {
            isLong: true,
            logo: codecademyIcon,
            title: 'Curso SQL Intermediate',
            dates: 'feb. 2019 - abr. 2019',
            company: 'Codecademy',
            description: `Completado`,
          },
          {
            isLong: true,
            logo: udemyIcon,
            title: 'Curso SQL for Beginners',
            dates: 'feb. 2019 - abr. 2019',
            company: 'Udemy',
            description: `Completado`,
          },
          {
            isLong: true,
            logo: udemyIcon,
            title: `Curso Java Programming 
Masterclass`,
            dates: 'ago. 2018 - ene. 2019',
            company: 'Udemy',
            description: `Completado`,
          },
          {
            isLong: true,
            logo: udemyIcon,
            title: `Learn Java Programming 
Crash Course`,
            dates: 'ago. 2018 - dic. 2018',
            company: 'Udemy',
            description: `Completado`,
          },
          {
            isLong: false,
            logo: doverIcon,
            title: `Bachiller en Humanidades y
Ciencias Sociales`,
            dates: 'ene. 1996 - jul. 2011',
            company: 'Dover High School',
            description: `Primario y Secundario Completado`,
          },
        ],
      }
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
    }
  }

  return (
    <Document style={styles.main} >
      <Page size='A4' style={styles.page}>
        <View style={styles.imageNameContainer} >
          <Image style={styles.image} src={cvImage} />
          <Text style={styles.name} >Gaston Exequiel Monzon</Text>
        </View>
        <Text style={styles.title} >Desarrollador Full Stack Junior Javascript | Node JS | HTML | CSS | SQL</Text>
        <View style={styles.infoContainer}>
          {textData.contactInfo.map(info => (
            <View style={styles.iconInfoContainer} key={info.title}>
              <Image style={styles.infoIcon} source={info.icon} />
              <Text style={styles.info}>{info.title}</Text>
            </View>
          ))}
        </View>
        <Svg width={520} height={2} >
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
        <Text style={styles.subTitle} >Idiomas</Text>
        <Text style={styles.info} >Inglés: Avanzado</Text>
        <Text style={styles.info} >EF SET Certificate En Inglés C2 Proficient</Text>
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
                    <Text style={styles.description}>{project.description}</Text>
                    <View style={styles.gitHubUrlContainer} >
                      <Image style={styles.skillsInfoIcon} src={gitIcon} />
                      <Text style={styles.skillsInfo}>{project.gitHubUrl}</Text>
                    </View>
                    <View style={styles.appsContainer} >
                      <Text style={styles.jobTitle} >Desarrollado Con: </Text>
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
                      stroke={index === 0 ? 'rgb(39, 39, 60)' : 'yellow'}
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
          `${pageNumber} de ${totalPages}`
        )} fixed />
      </Page>
    </Document>
  );
}