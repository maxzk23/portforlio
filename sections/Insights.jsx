'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights, translations } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';

const Insights = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={t.insightsTitle} textStyles="text-center" />
        <TitleText title={t.insightsHeading} textStyles="text-center" />

        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights[language].map((insight, i) => (
            <InsightCard
              key={`Insight-${i + 1}`}
              {...insight}
              index={i + 1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
