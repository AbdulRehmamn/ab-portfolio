import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Get the active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (href: string) => {
    setIsOpen(false);

    // Smooth scroll
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-background/80 backdrop-blur-md shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-bold gradient-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          AR.dev
        </motion.a>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex space-x-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                activeSection === item.href.replace('#', '')
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-primary'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              onClick={(e) => {
                e.preventDefault();
                handleItemClick(item.href);
              }}
            >
              {item.name}
              {activeSection === item.href.replace('#', '') && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary mx-2"
                  layoutId="navIndicator"
                />
              )}
            </motion.a>
          ))}
        </motion.nav>

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-muted text-foreground"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 w-full bg-background/90 backdrop-blur-md shadow-lg md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col p-4 space-y-2">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-primary/10 text-primary'
                        : 'hover:bg-muted text-foreground/80'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemClick(item.href);
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
