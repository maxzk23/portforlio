'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={`${styles.paddings} relative z-10 overflow-hidden`} id="about">
      <div className="gradient-02 z-0" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col relative`}
      >
        {/* Cinematic Scrollytelling Background Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-[10%] -left-[10%] text-[20vw] font-black text-white/5 pointer-events-none select-none"
        >
          STRATEGY
        </motion.div>

        <TypingText
          title={t.aboutTitle}
          textStyles="text-center"
        />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[32px] font-normal sm:text-[42px] text-[24px] text-center text-white leading-tight max-w-[900px] selection:bg-accent-mint/30"
        >
          {t.aboutDesc1.split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="inline-block mr-[0.2em]"
            >
              {word}
            </motion.span>
          ))}
          <br /><br />
          <span className="text-secondary-white sm:text-[28px] text-[18px]">
            {t.aboutDesc2}
          </span>
        </motion.p>

        <motion.div
          variants={fadeIn('up', 'tween', 0.5, 1)}
          className="mt-[48px] p-[2px] rounded-full bg-gradient-to-r from-accent-mint to-secondary-dark group cursor-pointer"
        >
          <div className="bg-black rounded-full px-8 py-3 group-hover:bg-transparent transition-all duration-300">
            <span className="text-white font-bold uppercase tracking-wider text-sm">Download Vision Statement</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
