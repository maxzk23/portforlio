'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative z-50`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}>
        <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain opacity-0" />

        <h2 className="font-extrabold text-[24px] text-white leading-[30px] uppercase">
          {t.navbarTitle}
        </h2>

        <div className="flex gap-4 items-center">
          <button
            type="button"
            onClick={toggleLanguage}
            className="text-white glassmorphism px-3 py-1 rounded-full text-xs font-bold hover:bg-white/20 transition-all uppercase"
          >
            {language === 'en' ? 'TH' : 'EN'}
          </button>
          <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain cursor-pointer" />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
