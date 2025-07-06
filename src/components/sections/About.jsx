import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';

const About = () => {
  const { ref: sectionRef, isVisible: sectionIsVisible } = useAnimateOnScroll({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentIsVisible } = useAnimateOnScroll({ threshold: 0.3 });

  return (
    <section
      id="about"
      className="py-20 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-blue-300/10 dark:bg-blue-900/10 rounded-full filter blur-3xl -z-10" />

      <div className="container">
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-md mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Get to know <span className="gradient-text">me better</span>
          </h2>
          <div className="w-20 h-1 bg-primary mt-6 rounded-full" />
        </motion.div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          ref={contentRef}
        >
          {/* Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -50 }}
            animate={contentIsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg transform rotate-3" />
              <div className="relative p-1 bg-background shadow-lg rounded-lg transform -rotate-3">
                <div className="w-full h-80 md:h-96 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-primary text-white font-medium rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={contentIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                1+ Years Experience
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={contentIsVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold">
              I'm a Web Developer with passion for creating interactive applications
            </h3>

            <p className="text-foreground/80">
              I'm Abdul Rehman, a dedicated web developer with over a year of experience in React.js and frontend development.
              I specialize in building responsive, user-friendly interfaces and websites that provide seamless experiences across all devices.
            </p>

            <p className="text-foreground/80">
              I'm constantly learning and exploring new technologies to stay at the cutting edge of web development. My approach combines technical expertise with creative problem-solving to deliver solutions that meet both business needs and user expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={contentIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>React Development</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={contentIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Responsive Design</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={contentIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Web Development</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={contentIsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>User Interface Design</span>
              </motion.div>
            </div>

            <motion.a
              href="#contact"
              className="inline-block px-6 py-3 mt-4 rounded-lg bg-primary text-white font-medium hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={contentIsVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Let's work together
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;