'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const KineticTypography = ({ text, className }) => {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {text.split('').map((char, index) => (
        <Letter key={index} char={char} />
      ))}
    </div>
  );
};

const Letter = ({ char }) => {
  const x = useSpring(0, { stiffness: 400, damping: 30 });
  const y = useSpring(0, { stiffness: 400, damping: 30 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 100) {
      const angle = Math.atan2(distanceY, distanceX);
      const force = (100 - distance) / 2;
      x.set(-Math.cos(angle) * force);
      y.set(-Math.sin(angle) * force);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.span
      ref={ref}
      style={{ x, y, display: 'inline-block', whiteSpace: 'pre' }}
      whileHover={{ scale: 1.2, color: '#A509FF' }}
      className="cursor-default"
    >
      {char}
    </motion.span>
  );
};

export default KineticTypography;
