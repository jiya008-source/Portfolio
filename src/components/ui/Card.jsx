import { motion } from 'framer-motion';

const Card = ({ title, description = '', tags = [], links = {}, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-tertiary rounded-lg p-6 ${className}`}
    >
      <h3 className="text-xl font-semibold mb-3 text-secondary">{title}</h3>
      <div className="text-textSecondary mb-4 space-y-2">
        {description && description.split('\n').map((line, index) => (
          <p key={index} className="text-textSecondary">
            {line}
          </p>
        ))}
      </div>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-primary/50 rounded-full text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {Object.keys(links).length > 0 && (
        <div className="flex gap-4">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              GitHub
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Card; 