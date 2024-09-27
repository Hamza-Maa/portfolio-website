/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  adobexdIcon,
  csharpIcon,
  dartIcon,
  djangoIcon,
  expoIcon,
  firebaseIcon,
  flaskIcon,
  flutterIcon,
  kotlinIcon,
  laravelIcon,
  mongoIcon,
  mysqlIcon,
  oracleIcon,
  jsIcon,
  reactIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  pyIcon,
  nodeIcon,
  figmaIcon,
  pawsitivePrototype,
  memoryGame,
  avatar,
  cartShop,
  tempGuard,
  wareApp,
  website,
  dash,
  spaceGame,
  todoList,
  weatherApp,
  deepafke,
  falsified,
  quality,
  livenest,
  kyclogin,
  kyconbroading,
  kycsignup,
  verified,
  cart,
  carthome,
  cartproducts,
  cartlogin,
  templogin,
  temphome,
  tempfeatures,
  tempsettings,
  warelogin,
  warecustomer,
  waredrivers,
  wareorders,
  warenotes,
  warenotif,
  waresectors,
  spacegameplay,
  dashgameplay,
  weatherhome,
  todohome,
  webhome,
  webdash,
  weborder,
  webcart
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  adobexdIcon,
  csharpIcon,
  dartIcon,
  djangoIcon,
  expoIcon,
  firebaseIcon,
  flaskIcon,
  flutterIcon,
  kotlinIcon,
  laravelIcon,
  mongoIcon,
  mysqlIcon,
  oracleIcon,
  jsIcon,
  reactIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  pyIcon,
  nodeIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

    "I'm a passionate and dedicated mobile developer with a love for creating engaging and intuitive mobile applications. With a strong foundation in Flutter and Dart, I craft seamless user experiences that delight users and solve real-world problems.",
    "My expertise extends to game development, where I combine creativity and technical skills to build immersive and entertaining mobile games.",
    "Whether it's developing practical apps that enhance daily life or designing captivating games that entertain and inspire, I enjoy every aspect of the development process.",
    "You can download my resume here."
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "KYC Mobile App",
    description: 'The KYC App (Know Your Customer) is a Flutter mobile application designed to validate identity documents (such as passports or ID cards) and verify the identity of individuals through live tests. This app utilizes cutting-edge deep learning models for detecting falsified documents and deep fakes, ensuring robust identity verification.',
    image: memoryGame,
    // gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJtY2Mxc3NpcDRxaXRicnFoeDAweXRrcDFjZTcwanE5bTYxbHpoMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QTfVi01W3PJvmOXwMs/giphy.gif",
    source_code_link: 'https://github.com/Hamza-Maa/KYC-Mobile-App',
    // demo_link: 'https://github.com/Hamza-Maa/KYC-Mobile-App',
    playGifOnHover: false, // This project will play the GIF on hover
    demoImages: [kyconbroading, kyclogin, kycsignup, falsified, verified, quality, livenest,
      deepafke],
  },
  {
    name: 'Shopping Cart App',
    description: 'A full-featured shopping cart application built with React Native, allowing users to seamlessly browse products, view detailed information, add items to their cart, and proceed to a streamlined checkout process. The app features secure user authentication, order history tracking, and a responsive design optimized for both iOS and Android devices. Efficient state management and robust backend integration ensure a smooth and real-time shopping experience.',
    image: cartShop,
    // gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJtY2Mxc3NpcDRxaXRicnFoeDAweXRrcDFjZTcwanE5bTYxbHpoMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QTfVi01W3PJvmOXwMs/giphy.gif",
    source_code_link: 'https://github.com/Hamza-Maa/Shopping-Cart-App',
    // demo_link: 'https://github.com/Hamza-Maa/Shopping-Cart-App',
    playGifOnHover: false, // This project will play the GIF on hover
    demoImages: [cartlogin, carthome, cartproducts, cart],
  },
  {
    name: 'Temperature App',
    description: 'A Flutter-based mobile application designed for monitoring temperature and humidity using connected sensors. With TempGuard, users can effortlessly manage multiple sensors, set custom alerts for specific conditions, and visualize real-time and historical data through interactive charts. The app ensures an intuitive user experience, combining advanced functionality with a sleek, user-friendly interface.',
    image: tempGuard,
    // gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJtY2Mxc3NpcDRxaXRicnFoeDAweXRrcDFjZTcwanE5bTYxbHpoMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QTfVi01W3PJvmOXwMs/giphy.gif",
    source_code_link: 'https://github.com/Hamza-Maa/TempGuard',
    // demo_link: 'https://github.com/Hamza-Maa/TempGuard',
    playGifOnHover: false, // This project will play the GIF on hover
    demoImages: [templogin, temphome, tempfeatures, tempsettings],
  },
  {
    name: 'Warehouse Management App',
    description: 'A Flutter application designed for supervisors to efficiently manage various aspects of their operations, including clients, drivers, sectors, and order statuses. The app provides an intuitive and user-friendly interface, enabling supervisors to streamline workflows and enhance productivity, ensuring smooth and effective operational management.',
    image: wareApp,
    // gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJtY2Mxc3NpcDRxaXRicnFoeDAweXRrcDFjZTcwanE5bTYxbHpoMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QTfVi01W3PJvmOXwMs/giphy.gif",
    source_code_link: 'https://github.com/Hamza-Maa/Management-app-with-flutter',
    // demo_link: 'https://github.com/Hamza-Maa/Management-app-with-flutter',
    playGifOnHover: false, // This project will play the GIF on hover
    demoImages: [warelogin, warecustomer, waredrivers, wareorders, 
      warenotes, warenotif, waresectors],
  },
  {
    name: 'Weather App',
    description: 'A Flutter mobile application designed to automatically detect your location and provide real-time temperature updates. The app delivers accurate weather information tailored to your current area. The app also features cool animations that bring the weather data to life, offering a visually engaging experience as you track temperature changes, weather conditions, and forecasts.',
    image: weatherApp,
    // gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJtY2Mxc3NpcDRxaXRicnFoeDAweXRrcDFjZTcwanE5bTYxbHpoMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QTfVi01W3PJvmOXwMs/giphy.gif",
    source_code_link: 'https://github.com/Hamza-Maa/-Flutter-Learning-Library',
    // demo_link: 'https://visitourlands.netlify.app/',
    playGifOnHover: false, // This project will play the GIF on hover
    demoImages: [weatherhome],
  },
  {
    name: 'To Do App',
    description: 'A user-friendly mobile application designed to help you manage your tasks efficiently. With a clean and intuitive interface, the app allows you to create, edit, and organize your to-do items with ease. You can prioritize tasks, and mark them as complete, ensuring you stay on top of your daily responsibilities.',
    image: todoList,
    // gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJtY2Mxc3NpcDRxaXRicnFoeDAweXRrcDFjZTcwanE5bTYxbHpoMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QTfVi01W3PJvmOXwMs/giphy.gif",
    source_code_link: 'https://github.com/Hamza-Maa/-Flutter-Learning-Library',
    // demo_link: 'https://camo.githubusercontent.com/1f7fb7873058b029992d30b8601d2c36582f6bb399482c560d5560c2d02fc37e/68747470733a2f2f6d65646961342e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784d4773314e6d733459336c6a4e4752684e3270354f574a33625456304f484675616d77314d574a314e6d31344d4849786254567963535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f76553246666b6d386e6744494e336d6d36572f67697068792e676966',
    playGifOnHover: false, // This project will play the GIF on hover
    demoImages: [todohome],
  },
  {
    name: 'Space Shooter Game',
    description: 'An exciting space shooter game developed using the Flutter framework and the Flame game engine. The game features a main menu, beautiful background images, and interactive gameplay elements such as player movement, shooting, and enemy spawning.',
    image: spaceGame,
    source_code_link: 'https://github.com/Hamza-Maa/Space_Shooter_Game',
    // demo_link: 'https://disneyplusreplica.netlify.app',
    playGifOnHover: false, // This project will play the GIF on hover
    demoImages: [spacegameplay],
  },
  {
    name: 'Super Dash Game',
    description: 'A Flutter mobile app offers an exciting 2D gaming experience where players control a character to navigate through multiple levels, collect trophies, evade enemies, and reach high scores. With intuitive controls and engaging gameplay, players are challenged to strategize and react swiftly to overcome obstacles and defeat foes. Each level increases in difficulty, adding more complexity and excitement.',
    image: dash,
    // gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJtY2Mxc3NpcDRxaXRicnFoeDAweXRrcDFjZTcwanE5bTYxbHpoMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QTfVi01W3PJvmOXwMs/giphy.gif",
    source_code_link: 'https://github.com/Hamza-Maa/super_dash',
    // demo_link: 'https://github.com/Hamza-Maa/super_dash',
    playGifOnHover: false, // This project will play the GIF on hover
    demoImages: [dashgameplay],
  },
  {
    name: 'Full Ecommece Website',
    description: 'An E-Commerce website offers a comprehensive solution for online shopping, providing a user-friendly interface for seamless navigation. It includes essential features such as product catalog, advanced search and filtering, shopping cart, secure checkout, and payment options. Customers can track orders, leave reviews, and save items to wishlists.',
    image: website,
    // gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJtY2Mxc3NpcDRxaXRicnFoeDAweXRrcDFjZTcwanE5bTYxbHpoMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QTfVi01W3PJvmOXwMs/giphy.gif",
    source_code_link: 'https://github.com/Hamza-Maa/Full-Ecommece-Website',
    // demo_link: 'https://github.com/Hamza-Maa/Full-Ecommece-Website',
    playGifOnHover: false, // No GIF on hover
    demoImages: [webhome, webdash, weborder, webcart],
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'flutter',
    title: 'Flutter',
    icon: flutterIcon,
    description:
      'I have extensive experience with Flutter, enabling me to build fast, visually appealing mobile apps with a single codebase for both Android and iOS.',
  },
  {
    id: 'dart',
    title: 'Dart',
    icon: dartIcon,
    description:
    'I have an expert-level proficiency in Dart, enabling me to architect scalable, robust Flutter applications with clean, efficient code. My deep understanding of Dart asynchronous programming, null safety.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'kotlin',
    title: 'Kotlin',
    icon: kotlinIcon,
    description:
      'I have a strong command of Kotlin, allowing me to build reliable and efficient Android applications. With expertise in Kotlin coroutines, null safety, and extension functions.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'expo',
    title: 'Expo',
    icon: expoIcon,
    description:
      'I have extensive experience with Expo, enabling me to build performant and cross-platform React Native applications efficiently. With its robust development tools, manage device features like push notifications.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With one years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'csharp',
    title: 'C#',
    icon: csharpIcon,
    description:
      'I have a solid grasp of C#, allowing me to build scalable and efficient applications, especially in game development with Unity and backend systems. My expertise includes writing clean, maintainable code, leveraging object-oriented principles.',
  },
  {
    id: 'django',
    title: 'Django',
    icon: djangoIcon,
    description:
      'I have a strong command of Django, enabling me to develop robust and scalable web applications. I am skilled in leveraging Django MVC architecture, ORM for database management.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'adobe xd',
    title: 'Adobe XD',
    icon: adobexdIcon,
    description:
    'Using Adobe XD to design intuitive and visually engaging user interfaces. I excel in creating wireframes, prototypes, and interactive designs that streamline the user experience and effectively convey the design vision.',
  },
  {
    id: 'flask',
    title: 'Flask',
    icon: flaskIcon,
    description:
      ' A lightweight Python web framework, enabling me to build scalable web applications with clean, modular code. I specialize in developing RESTful APIs, handling database interactions, and implementing security measures.',
  },
  {
    id: 'laravel',
    title: 'Laravel',
    icon: laravelIcon,
    description:
      'A robust PHP framework, allowing me to develop elegant, high-performance web applications. I excel in utilizing Laravel’s features such as Eloquent ORM for database management, Blade templating for dynamic content rendering.',
  },
  {
    id: 'firebase',
    title: 'FireBase',
    icon: firebaseIcon,
    description:
      'Leveraging its comprehensive suite of cloud-based services to build scalable and real-time applications. My expertise includes utilizing Firebase Authentication for secure user management, Firestore for dynamic database solutions.',
  },
  {
    id: 'mongodb',
    title: 'MongoDB',
    icon: mongoIcon,
    description:
      ' MongoDB enabling me to design and implement flexible, scalable, and high-performance NoSQL databases. My expertise includes crafting efficient data models, performing complex queries, and ensuring optimal data retrieval and storage strategies.',
  },
  {
    id: 'mysql',
    title: 'MySql',
    icon: mysqlIcon,
    description:
      'I have a strong command of MySQL, allowing me to efficiently manage relational databases. My expertise includes creating normalized database schemas, writing optimized SQL queries, and ensuring data integrity and security.',
  },
  {
    id: 'oracle',
    title: 'Oracle DataBase',
    icon: oracleIcon,
    description:
      'I possess a solid understanding of Oracle Database, enabling me to design and implement robust relational database solutions. My skills include writing complex SQL queries, optimizing database performance.',
  },
];
const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
