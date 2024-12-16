import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Kabilan',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'B',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'state : ',
    description: 'Tamilnadu',
  },

  {
    id: 6,
    title: 'place : ',
    description: 'Arcot',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91-8778859376',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'kabilan.b2**3@mail.com',
  },

  {
    id: 9,
    title: 'Linkdin : ',
    description: 'kabilan.in',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English,Tamil',
  },
];

export const stats = [
  {
    id: 1,
    no: '-',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '-',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '-',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '8/7/24 - 8/8/24',
    title: 'Fullstack development <span> Offline Intern </span>',
    desc: 'Participated in an offline Intership In Bics Global IT company,Amattur chennai.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '3/3/24 - 3/4/24',
    title: 'Fullstack development <span> Online Intern </span>',
    desc: 'Participated in an online intership in Novi Tech R&D private limited.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '1/4/21 - 1/6/21',
    title: 'Microsoft Office <span> Offline Course </span>',
    desc: 'I learned Ms-Word,Excel,Powerpoint in CSC couching center',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '8/2021 - 8/2025',
    title: 'Engineering Degree <span> CGPA : 9.1 </span>',
    desc: 'Adhiparasakthi College Of Engineering,kalavai and studying Bachelor of Engineering in Computer Science',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '3/2021',
    title: 'Higher Secondary <span> Percentage: 87.5% </span>',
    desc: 'I have completed my Higher Secondary in Vedanikethan Matric Higher Secondary School.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '3/2019',
    title: 'Secondary <span> Percentage: 85.4% </span>',
    desc: 'I have completed my Secondary in Vedanikethan Matric Higher Secondary School.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },

  {
    id: 2,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Reactjs',
    percentage: '65',
  },

  {
    id: 5,
    title: 'Nodejs',
    percentage: '50',
  },

  {
    id: 6,
    title: 'python',
    percentage: '65',
  },

  {
    id: 7,
    title: 'Java',
    percentage: '55',
  },

  {
    id: 8,
    title: 'mongodb',
    percentage: '90',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'BookSky App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Frontend',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html,Css,Js',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Login Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Frontend',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html,Css,Js',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Portfolio website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'frontend',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Next.js,Tailwind.Css',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Portfolio website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'FrontEnd',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html,Css,Js',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Netflix clone app',
    details: [
      {
        title: 'Project : ',
        desc: 'Frontend',
      },
      // {
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        title: 'Language : ',
        desc: 'Html,Css',
      },
      // {
      //   title: 'Preview : ',
      //   desc: 'www.dribble.com',
      // },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'airpodes design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'UI/UX Design',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      // {
      //   icon: <FiExternalLink />,
      //   title: 'Preview : ',
      //   desc: 'www.dibble.com',
      // },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
