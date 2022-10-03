import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Agi | Your Professional Coach', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Agi!',
  subtitle: "I'm your Professional Coach",
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Executive coach and business advisor',
  paragraphTwo: 'I can help with all aspects of counselling, including work, business, and life',
  paragraphThree: 'And a lot more!',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: "What we're talking about",
    info: "A coach is someone who offers guidance and training to help you develop both personally and professionally, and work towards specific goals you've set. Coaching is similar to mentoring, but it takes a more formal, training-based structure, rather than mainly imparting personal experience. Roughly every fortnight, for an hour or two, a coach will tease out your organizational goals, help you identify what's standing in the way, act as a sounding board as you strategize and hold you accountable.",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'agi@gmail.com',
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
