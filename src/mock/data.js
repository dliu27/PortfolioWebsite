import { nanoid } from 'nanoid';
import { NavLink } from 'react-bootstrap';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
// REMEMBER THAT EACH LINK NEEDS ITS OWN QUOTES ""
export const projectsData = [
  {
    title: 'Twitch Creator SPA',
    description:
      'Crafted a visually appealing Vue + Tailwind single-page application for searching Twitch creators, utilizing the Twitch API, featuring API caching, input debouncing, and skeleton loading components.',
    technologies: ['Vue', 'TailwindCSS', 'Twitch API', 'Netlify'],
    notes: 'Demo note: try searching for "tarik"',
    liveLink: 'https://twich-analytics-spa.netlify.app/',
    sourceCodeLink: 'https://github.com/dliu27/TwitchAnalyticsSPA',
    images: ['twitch-api-spa.netlify.app_profile_search.png', 'twitch-api-spa.netlify.app_profile_dream.png','twitch-api-spa.netlify.app_profile_tarik.png'],
    videos: []
  },
  {
    title: 'Mark Manager Android App',
    description:
      'Architected an Android App for mark management in Kotlin/Java using MVC/MVVM to separate logic and UI.',
    technologies: ['Android', 'Kotlin', 'Java'],
    // notes: 'Note: created for CS349: User Interfaces',
    notes: null,
    liveLink: null,
    sourceCodeLink: 'https://drive.google.com/drive/u/2/folders/1c2oHZvk4rc2TpRxl7w0xS23tYU2hbGks',
    images: ['android_app_pic.png'],
    videos: ['Ad9xsxNPlrU']
  },
  {
    title: 'Battleship Game Kotlin',
    description:
      'Implemented the Battleship game in Kotlin, using MVC and OOP with MVC classes like BattleShip, Board, Cell, and Game.',
    technologies: ['Kotlin', 'Java'],
    // notes: 'Note: created for CS349: User Interfaces',
    notes: null,
    liveLink: null,
    sourceCodeLink: 'https://drive.google.com/drive/folders/13Yq4ATmteDXI5PYgs5ysTmLK5Nv-47bA?usp=sharing',
    images: ['battleship_pic1.png', 'battleship_pic2.png'],
    videos: [],
  },

  // {
  //   title: 'productivity++',
  //   description:
  //     'Created a custom version of Momentum from scratch as a Chrome Extension due to lack of functionality. Implemented new features such as a time tracker, todo lists with CRUD, and toast notifications using JS, Web Storage API, and chrome.extension API with low coupling / high cohesion.',
  //   liveLink: 'https://example.com/live-link',
  //   sourceCodeLink: 'https://example.com/source-code',
  //   images: ['project.jpg', 'project.jpg'],
  //   videos: [],
  // },
  // Add more projects here if needed
];


// export const projectsData = [
//   {
//     id: nanoid(),
//     img: 'project.jpg',
//     title: '',
//     info: '',
//     info2: '',
//     url: '',
//     repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
//   },
//   {
//     id: nanoid(),
//     img: 'project.jpg',
//     title: '',
//     info: '',
//     info2: '',
//     url: '',
//     repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
//   },
//   {
//     id: nanoid(),
//     img: 'project.jpg',
//     title: '',
//     info: '',
//     info2: '',
//     url: '',
//     repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
//   },
// ];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
