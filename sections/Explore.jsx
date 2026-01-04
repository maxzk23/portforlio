'use client';

import { memo } from 'react';
import styles from '../styles';
import { ExploreCard } from '../components';
import { exploreWorlds, translations } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const bentoClasses = [
  'md:col-span-2 md:row-span-2 h-[400px]',
  'md:col-span-1 md:row-span-1 h-[300px]',
  'md:col-span-1 md:row-span-1 h-[300px]',
  'md:col-span-1 md:row-span-2 h-[400px]',
  'md:col-span-1 md:row-span-1 h-[300px]',
];

const Explore = memo(() => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={`${styles.paddings} relative z-10`} id="explore">
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <p className="text-center text-secondary-white text-[14px] uppercase tracking-widest mb-2">
          {t.exploreTitle}
        </p>
        <h2 className="text-center font-bold md:text-[64px] text-[40px] text-white mb-8">
          {t.exploreHeading}
        </h2>

        <div
          className="mt-[50px] grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6"
          style={{
            contentVisibility: 'auto',
            transform: 'translateZ(0)',
            willChange: 'scroll-position'
          }}
        >
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              bentoClass={bentoClasses[index % bentoClasses.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Explore.displayName = 'Explore';

export default Explore;
