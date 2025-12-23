'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion';

import { exploreWorlds, translations } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const bentoClasses = [
  'md:col-span-2 md:row-span-2 h-[400px] md:h-auto',
  'md:col-span-1 md:row-span-1 h-[250px] md:h-[300px]',
  'md:col-span-1 md:row-span-1 h-[250px] md:h-[300px]',
  'md:col-span-1 md:row-span-2 h-[400px] md:h-auto',
  'md:col-span-1 md:row-span-1 h-[250px] md:h-[300px]',
];

const Explore = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={`${styles.paddings} relative z-10`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={t.exploreTitle} textStyles="text-center" />
        <TitleText title={<>{t.exploreHeading}</>} textStyles="text-center" />

        <div className="mt-[50px] grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-auto md:h-[1000px]">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              bentoClass={bentoClasses[index % bentoClasses.length]}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
