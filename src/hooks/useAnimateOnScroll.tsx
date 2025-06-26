import { useEffect, useRef, useState } from 'react';

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  animationType?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'rotate' | 'spiral-3d';
  duration?: string;
  delay?: string;
  easing?: string;
}

export const useAnimateOnScroll = (options: AnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
    animationType = 'fade',
    duration = '0.5s',
    delay = '0s',
    easing = 'ease-in-out'
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;

    if (currentRef) {
      // Apply base styles for animation
      currentRef.style.opacity = '0';
      currentRef.style.transition = `all ${duration} ${easing} ${delay}`;
      currentRef.style.willChange = 'transform, opacity';
      currentRef.style.transformStyle = 'preserve-3d'; // Enable 3D transforms

      // Apply animation-specific styles
      switch (animationType) {
        case 'spiral-3d':
          currentRef.style.transform = 'rotateY(180deg) rotateZ(360deg) translateZ(-100px) scale(0.5)';
          currentRef.style.opacity = '0.2';
          break;
        case 'slide-up':
          currentRef.style.transform = 'translateY(50px)';
          break;
        case 'slide-left':
          currentRef.style.transform = 'translateX(50px)';
          break;
        case 'slide-right':
          currentRef.style.transform = 'translateX(-50px)';
          break;
        case 'scale':
          currentRef.style.transform = 'scale(0.8)';
          break;
        case 'rotate':
          currentRef.style.transform = 'rotate(10deg)';
          break;
        case 'fade':
        default:
          currentRef.style.transform = 'none';
          break;
      }

      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once, animationType, duration, delay, easing]);

  // Apply animation when visible
  useEffect(() => {
    if (ref.current && isVisible) {
      ref.current.style.opacity = '1';
      ref.current.style.transform = animationType === 'spiral-3d' ? 'rotateY(0deg) rotateZ(0deg) translateZ(0px) scale(1)' : 'none';
    } else if (ref.current && !once && !isVisible) {
      // Reset styles for non-once animations
      ref.current.style.opacity = animationType === 'spiral-3d' ? '0.2' : '0';
      switch (animationType) {
        case 'spiral-3d':
          ref.current.style.transform = 'rotateY(180deg) rotateZ(360deg) translateZ(-100px) scale(0.5)';
          break;
        case 'slide-up':
          ref.current.style.transform = 'translateY(50px)';
          break;
        case 'slide-left':
          ref.current.style.transform = 'translateX(50px)';
          break;
        case 'slide-right':
          ref.current.style.transform = 'translateX(-50px)';
          break;
        case 'scale':
          ref.current.style.transform = 'scale(0.8)';
          break;
        case 'rotate':
          ref.current.style.transform = 'rotate(10deg)';
          break;
        case 'fade':
        default:
          ref.current.style.transform = 'none';
          break;
      }
    }
  }, [isVisible, animationType, once]);

  return { ref, isVisible };
};