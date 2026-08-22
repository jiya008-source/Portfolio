import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const Experience = () => {
  const experiences = [
    {
      title: 'Summer Intern',
      company: 'JP Morgan Chase & Co.',
      duration: 'May,2025 - July,2025',
      description: [
        'Developed an internal web-based email triage and automation application to classify client service requests, extract key information, and validate inputs. Built the UI and feedback-driven workflow, achieving 86.04% classification accuracy, saving 6+ hours weekly, and reducing turnaround time by ~50%.',
        'Developed automated reporting workflows to aggregate operational data and generate daily, weekly, and monthly dashboards, reducing manual reporting effort, improving data consistency, and standardizing recurring processes.',
        'Automated the Bloomberg upload workflow by building data preprocessing, validation, and file-generation pipelines, reducing manual reconciliation and cutting completion time from 7 days to 1 day.'
      ],
      technologies: ['Python', 'SQL', 'VSCode', 'Jupyter'],
    }
    
    
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio | Experience</title>
        <meta name="description" content="View my professional experience and internships" />
      </Helmet>

      <Section id="experience" title="Experience">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-tertiary" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-secondary transform -translate-x-1/2" />

                <div className="bg-tertiary p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary">{exp.title}</h3>
                      <p className="text-textSecondary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-secondary mt-2 md:mt-0">{exp.duration}</span>
                  </div>

                  <ul className="list-disc list-inside text-textSecondary mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-primary/50 rounded-full text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Experience; 