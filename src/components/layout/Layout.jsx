import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from '../ui/Loader';
import { ThemeProvider } from '../../context/ThemeContext';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    // Add a class to hide scrollbar during loading
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" onLoadingComplete={handleLoadingComplete} />
          ) : (
            <>
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
};

export default Layout;