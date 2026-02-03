import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface ParallaxConfig {
  offset?: ["start start" | "start end" | "end start" | "end end", "start start" | "start end" | "end start" | "end end"];
}

interface ParallaxValues {
  ref: React.RefObject<HTMLElement>;
  scrollYProgress: MotionValue<number>;
  y1: MotionValue<number>;
  y2: MotionValue<number>;
  y3: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  isMobile: boolean;
}

export const useParallax = (config?: ParallaxConfig): ParallaxValues => {
  const ref = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: config?.offset || ["start end", "end start"]
  });

  // Reduced values for mobile, full values for desktop
  const multiplier = isMobile ? 0.3 : 1;

  const y1 = useTransform(scrollYProgress, [0, 1], [50 * multiplier, -50 * multiplier]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80 * multiplier, -80 * multiplier]);
  const y3 = useTransform(scrollYProgress, [0, 1], [120 * multiplier, -120 * multiplier]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return { ref, scrollYProgress, y1, y2, y3, opacity, scale, isMobile };
};

export default useParallax;
