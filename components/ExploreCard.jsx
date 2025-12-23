'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from '../styles';
import { fadeIn } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';

const ExploreCard = ({ id, imgUrl, title, index, bentoClass }) => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic effect
    x.set(distanceX * 0.1);
    y.set(distanceY * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`relative overflow-hidden glassmorphism rounded-[32px] group cursor-pointer ${bentoClass}`}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-110 group-hover:scale-100"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

      <div className="absolute bottom-0 p-6 w-full flex flex-col justify-end h-1/2">
        <div className={`${styles.flexCenter} w-[50px] h-[50px] glassmorphism mb-[12px] rounded-[15px] group-hover:bg-white/20 transition-colors`}>
          <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain" />
        </div>
        <p className="font-normal text-[14px] text-secondary-white uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          Metadroid / {id.toUpperCase()}
        </p>
        <h2 className="mt-[8px] font-bold sm:text-[28px] text-[20px] text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {title[language]}
        </h2>
      </div>
    </motion.div>
  );
};

export default ExploreCard;
