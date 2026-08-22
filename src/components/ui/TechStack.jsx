import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'C++', color: '#00599C' },
    { name: 'Java', color: '#007396' },
    { name: 'Python', color: '#3776AB' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'SQL', color: '#4479A1' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Express.js', color: '#F7DF1E' },
    { name: 'HTML', color: '#E34F26' },
    { name: 'CSS', color: '#1572B6' },
    { name: 'Tailwind CSS', color: '#06B6D4' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'MySQL', color: '#4479A1' },
    { name: 'Redux', color: '#764ABC' },
    { name: 'REST APIs', color: '#FF6C37' },
    { name: 'JWT', color: '#F7DF1E' },
    { name: 'Git', color: '#F05032' },
    { name: 'GitHub', color: '#F7DF1E' },
    { name: 'Postman', color: '#FF6C37' },
    { name: 'VS Code', color: '#007ACC' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'Google Gemini', color: '#4285F4' },
    { name: 'Vercel', color: '#F7DF1E' },
    { name: 'Render', color: '#46E3B7' },
    { name: 'Netlify', color: '#00C7B7' },
    { name: 'MongoDB Atlas', color: '#47A248' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap gap-3 justify-center"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-gray-800 shadow-md transition-colors duration-300"
          style={{
            color: tech.color,
            border: `1px solid ${tech.color}40`,
          }}
        >
          {tech.name}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack; 