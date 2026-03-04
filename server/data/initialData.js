const MY_STACK = {
    frontend: [
        { name: 'React.js', icon: '' },
        { name: 'HTML5', icon: '' },
        { name: 'CSS3', icon: '' },
        { name: 'Bootstrap', icon: '' },
        { name: 'Tailwind CSS', icon: '' },
        { name: 'EJS', icon: '' },
    ],
    backend: [
        { name: 'Node.js', icon: '' },
        { name: 'Express.js', icon: '' },
        { name: 'Java', icon: '' },
        { name: 'Python', icon: '' },
    ],
    database: [
        { name: 'MongoDB', icon: '' },
        { name: 'MySQL', icon: '' },
    ],
    tools: [
        { name: 'JavaScript (ES6+)', icon: '' },
        { name: 'Socket.IO', icon: '' },
        { name: 'Git', icon: '' },
    ],
};

const PROJECTS = [
    {
        title: 'COLDSTART',
        slug: 'coldstart',
        liveUrl: 'https://coldstart-frontend-shna.onrender.com/',
        year: 2023,
        description: 'ColdStart is a full-stack application designed to connect professionals, enable project collaboration, and facilitate job searching. It features real-time chat, project management tools, and a job board.',
        role: 'Full Stack Developer',
        techStack: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
        thumbnail: 'https://via.placeholder.com/400x250?text=COLDSTART+Thumbnail',
        longThumbnail: 'https://via.placeholder.com/800x500?text=COLDSTART+Long+Thumbnail',
        images: ['https://via.placeholder.com/800x500?text=COLDSTART+Image+1', 'https://via.placeholder.com/800x500?text=COLDSTART+Image+2'],
        sourceCode: 'https://github.com/jeetbheriya/COLDSTART',
    },
    {
        title: 'FLAVOURVERSE-MERN-',
        slug: 'flavourverse-mern-',
        liveUrl: 'https://flavourverse.onrender.com/',
        year: 2023,
        description: 'FlavourVerse is a MERN stack e-commerce application for food products. It includes user authentication, product listings, a shopping cart, and an order management system.',
        role: 'Full Stack Developer',
        techStack: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB'],
        thumbnail: 'https://via.placeholder.com/400x250?text=FLAVOURVERSE+Thumbnail',
        longThumbnail: 'https://via.placeholder.com/800x500?text=FLAVOURVERSE+Long+Thumbnail',
        images: ['https://via.placeholder.com/800x500?text=FLAVOURVERSE+Image+1', 'https://via.placeholder.com/800x500?text=FLAVOURVERSE+Image+2'],
        sourceCode: 'https://github.com/jeetbheriya/FLAVOURVERSE-MERN-',
    },
    {
        title: 'QUICKSEAT',
        slug: 'quickseat',
        liveUrl: 'https://zerowait.onrender.com/',
        year: 2022,
        description: 'QuickSeat is a restaurant table reservation system. It allows users to book tables online, view restaurant menus, and manage their reservations. Admin panel for restaurant owners to manage bookings and tables.',
        role: 'Full Stack Developer',
        techStack: ['JavaScript', 'EJS', 'Node.js', 'Express.js', 'MongoDB'],
        thumbnail: 'https://via.placeholder.com/400x250?text=QUICKSEAT+Thumbnail',
        longThumbnail: 'https://via.placeholder.com/800x500?text=QUICKSEAT+Long+Thumbnail',
        images: ['https://via.placeholder.com/800x500?text=QUICKSEAT+Image+1', 'https://via.placeholder.com/800x500?text=QUICKSEAT+Image+2'],
        sourceCode: 'https://github.com/jeetbheriya/QUICKSEAT',
    },
    {
        title: 'HEAVENLY',
        slug: 'heavenly',
        liveUrl: 'https://heavenly-tkmw.onrender.com/',
        year: 2022,
        description: 'Heavenly is a sleek, modern, and highly intuitive personal portfolio website template for developers and creatives, built with modern web technologies.',
        role: 'Frontend Developer',
        techStack: ['JavaScript', 'HTML5', 'CSS3'],
        thumbnail: 'https://via.placeholder.com/400x250?text=HEAVENLY+Thumbnail',
        longThumbnail: 'https://via.placeholder.com/800x500?text=HEAVENLY+Long+Thumbnail',
        images: ['https://via.placeholder.com/800x500?text=HEAVENLY+Image+1', 'https://via.placeholder.com/800x500?text=HEAVENLY+Image+2'],
        sourceCode: 'https://github.com/jeetbheriya/HEAVENLY',
    },
];

const MY_EXPERIENCE = [];

module.exports = {
    PROJECTS,
    MY_EXPERIENCE,
    MY_STACK,
};
