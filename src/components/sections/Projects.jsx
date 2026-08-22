import { Helmet } from 'react-helmet-async';
import Section from '../ui/Section';
import Card from '../ui/Card';

const Projects = () => {
    const projects = [
  {
    title: 'DSA Tutor',
    description:
      'Built an online judge with Docker-isolated execution for C++, Python, and JavaScript, JWT authentication, hidden test-case protection, submission history, and LLM-powered failure diagnosis for incorrect submissions.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'JWT', 'Google Gemini'],
    links: {
      github: 'https://github.com/jiya008-source/dsa-tutor',
      demo: 'https://dsa-tutor-umber.vercel.app/',
    },
  },

  {
    title: 'DevConnector',
    description:
      'Developed a full-stack developer social network with RESTful backend services, user profiles, posts, JWT authentication, and client-side state management.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'JWT'],
    links: {
      github: 'https://github.com/jiya008-source/Devconnector',
      demo: 'https://devconnector-1-gjlt.onrender.com/',
    },
  },

  {
    title: 'Doctor Appointment Platform',
    description:
      'Built a full-stack doctor appointment platform with user authentication, doctor discovery by specialization, appointment scheduling and cancellation, and a separate admin dashboard for managing doctor information.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    links: {
      github: 'https://github.com/jiya008-source/DOCTOR',
      demo: 'https://doctor-two-black.vercel.app/',
    },
  },

  {
    title: 'Wanderlust',
    description:
      'Developed a full-stack travel and accommodation platform for discovering and listing hotels across cities, with structured backend routes, controllers, models, middleware, and MongoDB integration.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Bootstrap'],
    links: {
      github: 'https://github.com/jiya008-source/Wanderlust',
    },
  },

  {
    title: 'Library Management System',
    description:
      'Developed a C++ console-based library management system supporting book and student records, role-based access, issue-return workflows, availability tracking, overdue reports, and automated fine calculation.',
    tags: ['C++', 'OOP', 'File Handling'],
    links: {
      github: 'https://github.com/jiya008-source/Library_Management_System',
    },
  },

  {
    title: 'Memory',
    description:
      'Developed a full-stack web application with separate client and server components, implementing a structured frontend-backend architecture.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    links: {
      github: 'https://github.com/jiya008-source/Memory',
    },
  },

  {
    title: 'Real Estate Website',
    description:
      'Built a responsive real estate website featuring property showcases, interactive navigation, a featured-property carousel, accordion-based content, and a contact section.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Swiper.js'],
    links: {
      github: 'https://github.com/jiya008-source/SHIV_SHAKTI_PROPERTY',
    },
  },

  {
    title: 'Family Travel Tracker',
    description:
      'Developed a server-side travel tracking application with database-backed queries for recording and displaying visited destinations.',
    tags: ['Node.js', 'Express.js', 'EJS', 'PostgreSQL', 'SQL'],
    links: {
      github: 'https://github.com/jiya008-source/Family-Travel-Tracker',
    },
  },

  {
    title: 'Travel Tracker',
    description:
      'Built a server-rendered travel tracking application using Node.js and Express.js with dynamic views for recording and displaying visited locations.',
    tags: ['Node.js', 'Express.js', 'EJS', 'JavaScript'],
    links: {
      github: 'https://github.com/jiya008-source/Travel-Tracker',
    },
  },

  {
    title: 'SHIV SHAKTI',
    description:
      'Web development project maintained as part of the SHIV SHAKTI project collection.',
    tags: ['Web Development'],
    links: {
      github: 'https://github.com/jiya008-source/SHIV-SHAKTI',
    },
  },

  {
    title: 'Country Capital Quiz',
    description:
      'Built an interactive country-capital quiz application using a CSV dataset to dynamically generate and manage quiz questions.',
    tags: ['Node.js', 'Express.js', 'EJS', 'JavaScript', 'CSV'],
    links: {
      github: 'https://github.com/jiya008-source/Country-Capital-Quiz',
    },
  },

  {
    title: 'Secrets',
    description:
      'Built a server-side web application demonstrating user authentication and protected content using a Node.js and Express.js backend.',
    tags: ['Node.js', 'Express.js', 'EJS', 'JavaScript'],
    links: {
      github: 'https://github.com/jiya008-source/Secrets-Project',
    },
  },

  {
    title: 'Blog Project',
    description:
      'Developed a server-rendered blog application with backend routing and dynamic views for creating and displaying blog content.',
    tags: ['Node.js', 'Express.js', 'EJS', 'JavaScript'],
    links: {
      github: 'https://github.com/jiya008-source/Blog-Project',
    },
  },

  {
    title: 'Weather App',
    description:
      'Developed a web-based weather application with a responsive interface for displaying weather information.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/jiya008-source/Weather-App',
    },
  },

  {
    title: 'Simon Game',
    description:
      'Built an interactive browser-based memory game using JavaScript with sequential gameplay and audio feedback.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/jiya008-source/Simons-Game',
    },
  },

  {
    title: 'Drum Kit',
    description:
      'Built an interactive browser-based drum kit with keyboard and click-based controls and audio feedback.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/jiya008-source/Drum-Kit',
    },
  },
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio | Projects</title>
        <meta name="description" content="View my latest projects and contributions" />
      </Helmet>

      <Section id="projects" title="My Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              links={project.links || {}}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Projects; 