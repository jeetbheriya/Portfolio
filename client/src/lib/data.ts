import { Component, FileCode, Paintbrush, Construction, Wind, FileCode2, Server, ServerCog, Coffee, Bot, Database, DatabaseZap, Brackets, Plug, GitFork } from 'lucide-react';

export const GENERAL_INFO = {
    email: 'jeetbheriya@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Jeet, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/tajmirul',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/jeetbheriya' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/jeet-bheriya' },
    { name: 'leetcode', url: 'https://leetcode.com/u/Jeet__110b/' },
];

export const MY_STACK = {
    frontend: [
        { name: 'React.js', icon: Component },
        { name: 'HTML5', icon: FileCode },
        { name: 'CSS3', icon: Paintbrush },
        { name: 'Bootstrap', icon: Construction },
        { name: 'Tailwind CSS', icon: Wind },
        { name: 'EJS', icon: FileCode2 },
    ],
    backend: [
        { name: 'Node.js', icon: Server },
        { name: 'Express.js', icon: ServerCog },
        { name: 'Java', icon: Coffee },
        { name: 'Python', icon: Bot },
    ],
    database: [
        { name: 'MongoDB', icon: Database },
        { name: 'MySQL', icon: DatabaseZap },
    ],
    tools: [
        { name: 'JavaScript (ES6+)', icon: Brackets },
        { name: 'Socket.IO', icon: Plug },
        { name: 'Git', icon: GitFork },
    ],
};

export const PROJECTS = [
    {
        title: 'COLDSTART',
        slug: 'coldstart',
        liveUrl: 'https://coldstart-frontend-shna.onrender.com/',
        year: null,
        description: 'ColdStart is a full-stack application designed to connect professionals, enable project collaboration, and facilitate job searching.',
        role: 'Full Stack Developer',
        techStack: ['JavaScript'],
        thumbnail: '',
        longThumbnail: '',
        images: [],
        sourceCode: 'https://github.com/jeetbheriya/COLDSTART',
    },
    {
        title: 'FLAVOURVERSE-MERN-',
        slug: 'flavourverse-mern-',
        liveUrl: '',
        year: null,
        description: '',
        role: 'Full Stack Developer',
        techStack: ['JavaScript'],
        thumbnail: '',
        longThumbnail: '',
        images: [],
        sourceCode: 'https://github.com/jeetbheriya/FLAVOURVERSE-MERN-',
    },
    {
        title: 'QUICKSEAT',
        slug: 'quickseat',
        liveUrl: 'https://zerowait.onrender.com/',
        year: null,
        description: '',
        role: 'Full Stack Developer',
        techStack: [],
        thumbnail: '',
        longThumbnail: '',
        images: [],
        sourceCode: 'https://github.com/jeetbheriya/QUICKSEAT',
    },
    {
        title: 'HEAVENLY',
        slug: 'heavenly',
        liveUrl: 'https://heavenly-tkmw.onrender.com/',
        year: null,
        description: 'Heavenly is a sleek, modern, and highly intuitive personal portfolio website template for developers and creatives.',
        role: 'Frontend Developer',
        techStack: ['JavaScript'],
        thumbnail: '',
        longThumbnail: '',
        images: [],
        sourceCode: 'https://github.com/jeetbheriya/HEAVENLY',
    },
];
