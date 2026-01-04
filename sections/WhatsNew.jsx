'use client';

import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures, translations } from '../constants';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';
import { Activity, Box, Code2, Globe, Layout, Server, Sparkles } from 'lucide-react';

const IconMap = {
  '/html.svg': Globe,
  '/next.svg': Layout,
  '/nest.svg': Server,
  '/tailwind.svg': Code2,
  '/three.svg': Box,
  '/framer.svg': Activity,
};

const WhatsNew = () => {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const t = translations[language];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col gap-12`}
      >
        <div className="flex flex-col items-center text-center mb-4">
          <TypingText title={t.whatsNewTitle} />
          <TitleText title={<>{t.whatsNewHeading}</>} />
        </div>

        {/* Bento Grid Implementation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {newFeatures[language].map((feature, index) => {
            const Icon = IconMap[feature.imgUrl] || Sparkles;
            return (
              <motion.div
                key={feature.title}
                variants={fadeIn('up', 'spring', index * 0.2, 1)}
                className="glassmorphism rounded-3xl p-8 flex flex-col gap-4 group hover:bg-white/5 transition-all duration-500"
              >
                <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[20px] bg-secondary-dark group-hover:bg-accent-mint/80 transition-colors duration-500`}>
                  <Icon className="w-1/2 h-1/2 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[24px] text-white mb-2">{feature.title}</h3>
                  <p className="text-[14px] text-[#B0B0B0] leading-relaxed">{feature.subtitle}</p>
                </div>
              </motion.div>
            );
          })}

          {/* Strategic Stat Card */}
          <motion.div
            variants={fadeIn('up', 'spring', 0.8, 1)}
            className="md:col-span-1 lg:col-span-2 glassmorphism rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left bg-gradient-to-br from-accent-mint/10 to-transparent gap-6"
          >
            <div className="flex flex-col">
              <span className="text-[64px] font-black text-white mb-0 leading-none">99%</span>
              <span className="text-accent-mint text-[14px] uppercase tracking-[0.2em] font-bold">Client Satisfaction</span>
            </div>
            <div className="max-w-[400px]">
              <p className="text-[16px] text-[#B0B0B0] leading-relaxed">
                Delivering measurable impact through strategic design thinking and high-standard technical execution.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
