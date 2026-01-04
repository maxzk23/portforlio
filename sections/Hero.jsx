'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import styles from '../styles';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants';
import { fadeIn } from '../utils/motion';

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-primary-black selection:bg-accent-mint/30 overflow-hidden"
    >
      <div className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-6 lg:px-16 gap-12 relative z-10`}>
        {/* Left Side: Text Content */}
        <HeroUI />

        {/* Right Side: Image Content */}
        <div className="flex-1 w-full lg:w-1/2 h-[40vh] lg:h-[60vh] relative">
          <PortalReveal />
        </div>
      </div>

      {/* Floating Scroll Indicator - REMOVED */}
    </section>
  );
};

const PortalReveal = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, filter: 'brightness(0.5) blur(10px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'brightness(1) blur(0px)' }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }}
      className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl shadow-accent-mint/20"
    >
      <motion.img
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src="/maxv2.gif"
        alt="The Infinite Expansion"
        className="w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />
      {/* Sophisticated Lighting Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
    </motion.div>
  );
};

const HeroUI = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const containerRef = useRef(null);

  // Scroll-linked Breathing Spacing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const letterSpacing = useTransform(scrollYProgress, [0, 1], [language === 'th' ? '0em' : '0em', language === 'th' ? '0em' : '0.05em']);
  const textBlur = useTransform(scrollYProgress, [0, 0.5], ['blur(0px)', 'blur(10px)']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse-reactive Light Trap
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const lightPositionX = useMotionValue(50);
  const lightPositionY = useMotionValue(50);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    lightPositionX.set(x);
    lightPositionY.set(y);
  };

  const lightBackground = useMotionTemplate`radial-gradient(600px circle at ${lightPositionX}% ${lightPositionY}%, rgba(16, 185, 129, 0.15), transparent 80%)`;

  const titleVariants = {
    hidden: { opacity: 0, filter: 'blur(20px)', y: 20 },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate="show"
      className="flex-1 flex flex-col items-start gap-4 lg:gap-6 relative group"
    >
      {/* Interactive Light Trap Layer */}
      <motion.div
        style={{ background: lightBackground }}
        className="absolute -inset-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"
      />

      <div className="flex flex-col items-start gap-4 relative z-10 pointer-events-none">
        {/* Cinematic Pre-heading */}
        <motion.span
          variants={fadeIn('down', 'tween', 0.5, 1)}
          className="text-accent-mint text-sm lg:text-lg font-medium tracking-[0.3em] uppercase"
        >
          {language === 'th' ? 'พอร์ตโฟลิโอดิจิทัล' : 'Digital Portfolio'}
        </motion.span>

        <motion.div
          style={{ letterSpacing, filter: textBlur, opacity: textOpacity }}
          className="flex flex-col"
        >
          {/* Main Title 1 */}
          <motion.h1
            variants={titleVariants}
            className={`text-[48px] lg:text-[100px] xl:text-[110px] md:text-[80px] ${language === 'th' ? 'leading-[1.1]' : 'leading-[0.9]'} uppercase font-black text-white selection:bg-accent-mint/30 break-words max-w-full`}
          >
            {t.heroTitle1}
          </motion.h1>

          {/* Main Title 2 */}
          <motion.div
            variants={titleVariants}
            className="flex items-center gap-4 lg:gap-8 overflow-visible mt-2"
          >
            <h1 className={`text-[48px] lg:text-[100px] xl:text-[110px] md:text-[80px] ${language === 'th' ? 'leading-[1.1]' : 'leading-[0.9]'} uppercase font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-accent-mint/50 relative break-words max-w-full`}>
              {t.heroTitle2}
            </h1>
          </motion.div>
        </motion.div>

        {/* Tagline with Soft Reveal */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.8, 1)}
          className="flex items-center gap-6 mt-6"
        >
          <div className="h-[1px] w-12 lg:w-24 bg-gradient-to-r from-accent-mint to-transparent" />
          <p className="text-secondary-white text-[14px] lg:text-[22px] uppercase tracking-[8px] lg:tracking-[15px] font-extralight italic">
            {t.heroRole}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};



export default Hero;
