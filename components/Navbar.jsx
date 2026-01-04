'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        {/* Sleek Ultra-Glass Container */}
        <div className="w-full bg-black/20 backdrop-blur-md border-b border-white/5 relative">
          {/* Subtle Glowing Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-mint/30 to-transparent" />

          <div className={`${styles.innerWidth} mx-auto flex justify-between items-center py-4 px-6 lg:px-16`}>
            {/* Left: Title/Logo aligned with Hero Content */}
            <h2
              onClick={scrollToTop}
              className="font-black text-[20px] md:text-[22px] text-white uppercase tracking-[0.2em] hover:text-accent-mint transition-colors cursor-pointer"
            >
              {t.navbarTitle}
            </h2>

            {/* Right: Actions (Hidden on mobile if bottom nav is present) */}
            <div className="hidden md:flex gap-8 items-center">
              {/* Desktop Navigation Links */}
              <div className="flex gap-6">
                <button
                  onClick={() => scrollToSection('explore')}
                  className="text-[11px] font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors"
                >
                  {language === 'th' ? 'ผลงาน' : 'Work'}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[11px] font-bold text-white/60 hover:text-white uppercase tracking-widest transition-colors"
                >
                  {language === 'th' ? 'ติดต่อ' : 'Contact'}
                </button>
              </div>

              {/* Minimalist Language Switcher */}
              <div
                onClick={toggleLanguage}
                className="flex items-center gap-3 cursor-pointer group select-none"
              >
                <span className={`text-[10px] font-bold tracking-widest transition-all ${language === 'en' ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                  EN
                </span>
                <div className="w-8 h-[4px] bg-white/10 rounded-full relative overflow-hidden">
                  <motion.div
                    animate={{ x: language === 'en' ? 0 : 16 }}
                    className="absolute top-0 left-0 w-4 h-full bg-accent-mint rounded-full"
                  />
                </div>
                <span className={`text-[10px] font-bold tracking-widest transition-all ${language === 'th' ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                  TH
                </span>
              </div>

              {/* Premium Menu Icon */}
              <div className="w-10 h-10 flex flex-col justify-center items-end gap-1.5 cursor-pointer group">
                <div className="w-6 h-[2px] bg-white group-hover:bg-accent-mint transition-all rounded-full" />
                <div className="w-4 h-[2px] bg-white/60 group-hover:w-6 group-hover:bg-accent-mint transition-all rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile-First Bottom Navigation (Thumb Zone Optimization) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: 'circOut' }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:hidden glassmorphism rounded-full px-6 py-3 flex justify-around items-center border border-white/10 shadow-2xl"
      >
        {/* Home */}
        <button
          type="button"
          onClick={scrollToTop}
          className="p-2 text-white/60 hover:text-accent-mint transition-colors flex flex-col items-center gap-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          <span className="text-[8px] uppercase tracking-wider">{language === 'th' ? 'หน้าแรก' : 'Home'}</span>
        </button>

        {/* Projects */}
        <button
          type="button"
          onClick={() => scrollToSection('explore')}
          className="p-2 text-white/60 hover:text-accent-mint transition-colors flex flex-col items-center gap-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          <span className="text-[8px] uppercase tracking-wider">{language === 'th' ? 'ผลงาน' : 'Work'}</span>
        </button>

        {/* Language Toggle - Center Accent */}
        <button
          type="button"
          onClick={toggleLanguage}
          className="w-12 h-12 rounded-full bg-accent-mint/20 flex items-center justify-center border border-accent-mint/50 text-[10px] font-black text-white hover:bg-accent-mint/30 transition-colors"
        >
          {language.toUpperCase()}
        </button>

        {/* Contact */}
        <button
          type="button"
          onClick={() => scrollToSection('contact')}
          className="p-2 text-white/60 hover:text-accent-mint transition-colors flex flex-col items-center gap-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          <span className="text-[8px] uppercase tracking-wider">{language === 'th' ? 'ติดต่อ' : 'Contact'}</span>
        </button>

        {/* Profile/About */}
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="p-2 text-white/60 hover:text-accent-mint transition-colors flex flex-col items-center gap-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          <span className="text-[8px] uppercase tracking-wider">{language === 'th' ? 'เกี่ยวกับ' : 'About'}</span>
        </button>
      </motion.div>
    </>
  );
};

export default Navbar;
