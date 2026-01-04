'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';
import { translations, testimonials } from '../constants';
import { TypingText, TitleText } from '../components';

const Feedback = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentTestimonials = testimonials[language];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={t.feedbackTitle} textStyles="text-center" />
        <TitleText title={<>{t.feedbackHeading}</>} textStyles="text-center" />

        <div className="mt-[50px] flex lg:flex-row flex-col gap-6">
          {/* Testimonial Card */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-1 gradient-05 sm:p-10 p-6 rounded-[32px] border border-white/10 relative overflow-hidden"
          >
            <div className="feedback-gradient" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                {/* Quote Icon */}
                <svg className="w-12 h-12 text-accent-mint/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Quote Text */}
                <p className="font-normal sm:text-[24px] text-[18px] sm:leading-[40px] leading-[32px] text-white mb-8">
                  "{currentTestimonials[activeIndex].quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden bg-accent-mint/20 p-[2px]">
                    <img
                      src={currentTestimonials[activeIndex].avatar}
                      alt={currentTestimonials[activeIndex].name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold sm:text-[24px] text-[18px] text-white">
                      {currentTestimonials[activeIndex].name}
                    </h4>
                    <p className="font-normal sm:text-[16px] text-[14px] text-secondary-white">
                      {currentTestimonials[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex gap-3 mt-8 justify-center lg:justify-start">
              {currentTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                      ? 'bg-accent-mint w-8'
                      : 'bg-white/20 hover:bg-white/40'
                    }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Decorative Image */}
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="relative flex-1 flex justify-center items-center min-h-[400px]"
          >
            <img
              src="/planet-09.png"
              alt="Decorative"
              loading="lazy"
              decoding="async"
              className="w-full lg:h-[500px] h-auto min-h-[300px] object-cover rounded-[40px] opacity-80"
            />

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute top-10 right-10 glassmorphism rounded-2xl p-4 text-center"
            >
              <span className="text-[32px] font-black text-accent-mint">100%</span>
              <p className="text-[10px] text-white/70 uppercase tracking-wider">
                {language === 'th' ? 'ส่งมอบตรงเวลา' : 'On-Time Delivery'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-10 left-10 glassmorphism rounded-2xl p-4 text-center"
            >
              <span className="text-[32px] font-black text-white">5★</span>
              <p className="text-[10px] text-white/70 uppercase tracking-wider">
                {language === 'th' ? 'คะแนนเฉลี่ย' : 'Average Rating'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Feedback;
