import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 10, 100));
      } else {
        setTimeout(() => {
          onLoadingComplete();
        }, 500); // Slight delay before hiding the loader
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="flex flex-col items-center justify-center space-y-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-5xl font-bold gradient-text"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2
          }}
        >
          ABDUL REHMAN
        </motion.div>

        <motion.div
          className="text-lg text-foreground/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Web Developer
        </motion.div>

        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mt-4">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>

        <motion.div
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Loading... {progress}%
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
