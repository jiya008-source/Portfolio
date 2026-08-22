import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import TechStack from '../ui/TechStack';

const About = () => {
  const education = [
  {
    degree: 'BTech in Computer Science',
    institution: 'Punjab Engineering College (Deemed to be University), Chandigarh',
    year: '2023 - 2027',
    score: 'CGPA: 8.06/10.0',
  },
  {
    degree: 'Class XII',
    institution: 'Govt. Model Senior Sec. School, Sector-19, Chandigarh',
    year: '2022 - 2023',
    score: '95.2%',
  },
  {
    degree: 'Class X',
    institution: 'DC Model Senior Secondary School, Sector-7, Panchkula',
    year: '2020 - 2021',
    score: '94.8%',
  },
];

  const roles = [
    {
      title: 'Sub Head Orientation',
      description:
        'Organized and coordinated orientation activities to help new students transition smoothly into college life.',
      duration: '2024 - 25',
    },
    {
      title: 'Sub Head Marketing',
      description:
        'Planned and executed marketing initiatives to promote PECFEST 2024 and drive student engagement.',
      duration: 'PECFEST 2024',
    },
    {
      title: 'Sub Head Spectrum, Art and Photography Relations',
      description:
        'Coordinated with the Spectrum, Art and Photography teams to manage creative collaborations and event activities.',
      duration: '2024 - 25',
    },
    {
      title: 'Member of the Implementation body of the Student Councelling Cell',
      description:'Member of the Implementation Body of the Student Counselling Committee, contributing to the planning and execution of student support and counselling initiatives.',
      duration: '2024 - Present',
    },
  ];

  const galleryImages = [
    {
      src: '/gallery/image1.JPG',
      alt: 'Professional Photo 1',
    },
    {
      src: '/gallery/image2.jpg',
      alt: 'Professional Photo 2',
    },
    {
      src: '/gallery/image3.jpg',
      alt: 'Professional Photo 3',
    },
    {
      src: '/gallery/image4.jpg',
      alt: 'Professional Photo 4',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio | About</title>
        <meta
          name="description"
          content="Learn more about my background, education, and experience"
        />
      </Helmet>

      <Section id="about" title="About Me">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Education */}
          {/* Education */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="mb-12"
>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Education
                  </h3>

            <div className="space-y-4">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-lg shadow-lg"
                >
                  <h4 className="text-xl font-semibold text-[#38BDF8]">
                    {item.degree}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300">
                    {item.institution}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    {item.year} • {item.score}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Position of Responsibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Position of Responsibility
            </h3>

            <div className="space-y-4">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-[#1E293B] p-6 rounded-lg shadow-lg"
                >
                  <h4 className="text-xl font-semibold text-[#38BDF8]">
                    {role.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {role.description}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {role.duration}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Gallery
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Tech Stack
            </h3>

            <TechStack />
          </motion.div>

        </div>
      </Section>
    </>
  );
};

export default About;