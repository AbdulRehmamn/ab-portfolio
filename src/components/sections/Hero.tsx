import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub size={20} />,
      url: 'https://github.com/AbdulRehmamn'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/abdul-rehman-shahid-11b2622a4/'
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-16 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300/10 dark:bg-purple-900/10 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2 mb-4"
          >
            <motion.p
              className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Web Developer
            </motion.p>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">Abdul Rehman</span>
            <motion.span
              className="ml-2 inline-block animate-wave"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              👋
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg text-foreground/80 mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A passionate web developer with one year of experience in React.js and modern web development. I build responsive, user-friendly websites and applications.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:shadow-lg transition-all hover:translate-y-[-2px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>

            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-transparent border border-primary text-primary font-medium hover:bg-primary/5 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="text-sm text-foreground/60">Find me on:</span>
            <div className="flex space-x-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted text-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Image / Visual */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
            {/* Outer animated ring */}
            <motion.div
              className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Image placeholder - can be replaced with actual image */}
            <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>

            {/* Orbiting elements */}
            <motion.div
              className="absolute w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center"
              style={{ top: '10%', right: '10%' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <span className="text-lg">⚛️</span>
            </motion.div>

            <motion.div
              className="absolute w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center"
              style={{ bottom: '15%', left: '15%' }}
              animate={{ rotate: -360 }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <span className="text-lg">🌐</span>
            </motion.div>

            <motion.div
              className="absolute w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center"
              style={{ bottom: '20%', right: '20%' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <span className="text-lg">💻</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <span className="text-sm text-foreground/60 mb-2">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
