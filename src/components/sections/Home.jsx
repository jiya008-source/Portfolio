import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Portfolio | Home</title>
        <meta name="description" content="Full Stack Developer | SDE Aspirant" />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm <span className="text-[#38BDF8]">Jiya</span>
              </h1>
              
              <div className="h-8 mb-8">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    1000,
                    'SDE Aspirant',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-xl md:text-2xl text-[#38BDF8]"
                />
              </div>

              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
                I build exceptional digital experiences that make an impact.
                BTech Graduate from PEC Chandigarh in Computer Science .
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://docs.google.com/document/d/1d-98rsXTiX0xnrUUcV0OlmTeK5VMmNyOjm9FjbFrs2E/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#38BDF8] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                </motion.a>
                
                <motion.button
                  onClick={() => navigate('/projects')}
                  className="px-6 py-3 border-2 border-[#38BDF8] text-[#38BDF8] font-semibold rounded-lg hover:bg-[#38BDF8] hover:bg-opacity-10 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See Projects
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <img
                  src="/profile-photo.png"
                  alt="Manik Bansal"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-[#38BDF8] shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 