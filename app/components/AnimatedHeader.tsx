import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({ title, subtitle, className = "" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const words = title.split(' ');

  return (
    <motion.div
      className={`text-center py-8 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-wrap justify-center">
        {words.map((word, index) => (
          <motion.div
            key={index}
            className="mx-2"
            variants={itemVariants}
          >
            <h1 className="text-2xl md:text-4xl font-bold">{word}</h1>
          </motion.div>
        ))}
      </div>
      
      {subtitle && (
        <motion.p
          className="text-sm md:text-base mt-4 font-light"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default AnimatedHeader; 