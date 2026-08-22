import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Jiya008-source',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jiya-78bab8291/',
      icon: 'linkedin',
    },
    {
      name: 'Email',
      url: 'mailto:jiyaarora1250@gmail.com',
      icon: 'email',
    },
  ];

  return (
    <footer className="w-full bg-gray-100 dark:bg-[#112240] py-8 mt-auto transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-center md:text-left">
              © {currentYear} Jiya. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-[#38BDF8] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 