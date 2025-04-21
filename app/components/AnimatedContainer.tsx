import React, { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface AnimatedContainerProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  initialY?: number;
  className?: string;
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  initialY = 20,
  className = "",
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{
        delay: delay,
        duration: duration,
        ease: [0.25, 0.1, 0.25, 1.0] // Smooth easing function
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer; 