import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowUp, FiSettings } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-muted/50 py-8 relative">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <motion.a
              href="#home"
              className="text-xl font-bold gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              AR.dev
            </motion.a>

            <p className="text-sm text-foreground/60 mt-2">
              Building modern web experiences
            </p>

            {/* Admin Link */}
            <a
              href="/emailjs-setup.html"
              target="_blank"
              className="text-xs flex items-center mt-2 text-muted-foreground hover:text-primary transition-colors" rel="noreferrer"
            >
              <FiSettings className="mr-1" size={12} />
              <span>EmailJS Setup</span>
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-3 mb-3">
              <motion.a
                href="https://github.com/AbdulRehmamn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted-foreground/10 text-foreground hover:bg-primary hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub size={18} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/abdul-rehman-shahid-11b2622a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted-foreground/10 text-foreground hover:bg-primary hover:text-white transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin size={18} />
              </motion.a>
            </div>

            <p className="text-sm text-foreground/60">
              &copy; {currentYear} Abdul Rehman. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <FiArrowUp size={16} />
      </motion.button>
    </footer>
  );
};

export default Footer;