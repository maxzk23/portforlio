'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';
import { KineticTypography, Background3D } from '../components';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants';

const Hero = () => {
  const containerRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className={`${styles.yPaddings} sm:pl-16 pl-6 relative min-h-screen flex flex-col justify-center overflow-hidden`}>
      {/* Background Image with Parallax and Overlay */}
      <motion.div
        style={{ y, opacity: 0.9 }}
        className="absolute inset-0 z-0 overflow-hidden flex justify-end"
      >
        <div className="w-full lg:w-[60%] h-full relative">
          <img
            src="/max.png"
            alt="background"
            className="w-full h-full object-cover object-center -translate-y-5 scale-110"
          />
          {/* Seamless Blend Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent" />
        </div>
      </motion.div>

      <Background3D />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col relative z-10 w-full`}
      >
        <div className="flex flex-col items-start justify-end">
          <motion.div
            variants={textVariant(1.1)}
            style={{ opacity }}
            className="w-full"
          >
            <KineticTypography
              text={t.heroTitle1}
              className="text-[40px] lg:text-[120px] md:text-[80px] leading-[1] uppercase font-black text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row items-center justify-start w-full"
            style={{ opacity }}
          >
            <KineticTypography
              text={t.heroTitle2}
              className="text-[40px] lg:text-[120px] md:text-[80px] leading-[1] uppercase font-black text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          <motion.p
            variants={textVariant(1.3)}
            className="mt-4 text-secondary-white text-[16px] lg:text-[20px] uppercase tracking-[5px] lg:tracking-[10px] font-light bg-black/20 backdrop-blur-sm px-4 py-1 rounded-sm"
          >
            {t.heroRole}
          </motion.p>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
