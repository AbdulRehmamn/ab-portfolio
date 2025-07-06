import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  // Get mouse position
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  // Handle cursor hovering interactive elements
  useEffect(() => {
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [data-cursor="interactive"]');

    const handleMouseEnter = () => setCursorVariant('hover');
    const handleMouseLeave = () => setCursorVariant('default');

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Detect if we're on a touch device
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.body.classList.add('touch-device');
    }
  }, []);

  // Don't show custom cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 h-5 w-5 rounded-full bg-[color:var(--primary-color)] z-[9999] pointer-events-none"
      animate={cursorVariant}
      variants={{
        default: {
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          height: 20,
          width: 20,
          backgroundColor: 'var(--primary-color)',
        },
        hover: {
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          height: 40,
          width: 40,
          backgroundColor: 'var(--secondary-color)',
          opacity: 0.5,
        },
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      style={{ mixBlendMode: 'difference' }}
    />
  );
};

export default Cursor;