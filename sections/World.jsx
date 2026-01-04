'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants';

const clients = [
  { name: 'TechCorp', logo: '/people-01.png' },
  { name: 'StartupHub', logo: '/people-02.png' },
  { name: 'Innovation Labs', logo: '/people-03.png' },
  { name: 'Digital Ventures', logo: '/people-04.png' },
  { name: 'CreativeStudio', logo: '/people-05.png' },
  { name: 'FutureTech', logo: '/people-06.png' },
];

const World = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={t.networkTitle} textStyles="text-center" />
        <TitleText
          title={<>{t.networkHeading}</>}
          textStyles="text-center"
        />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="text-center text-secondary-white text-[16px] mt-4 max-w-[600px] mx-auto"
        >
          {t.networkSubtitle}
        </motion.p>

        {/* Client/Collaboration Grid */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[60px] flex flex-wrap justify-center gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-gradient-to-br from-accent-mint/20 to-transparent p-[3px] group-hover:from-accent-mint/50 transition-all duration-500">
                <div className="w-full h-full rounded-full bg-primary-black flex items-center justify-center overflow-hidden">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-[70%] h-[70%] object-cover rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[11px] text-white/60 whitespace-nowrap"
              >
                {client.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.5, 1)}
          className="mt-[80px] grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '50+', label: language === 'th' ? 'โปรเจกต์สำเร็จ' : 'Projects Completed' },
            { number: '30+', label: language === 'th' ? 'ลูกค้าที่พอใจ' : 'Happy Clients' },
            { number: '5+', label: language === 'th' ? 'ปีประสบการณ์' : 'Years Experience' },
            { number: '99%', label: language === 'th' ? 'อัตราความสำเร็จ' : 'Success Rate' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism rounded-2xl p-6 text-center group hover:border-accent-mint/30 transition-colors"
            >
              <span className="text-[36px] md:text-[48px] font-black text-white group-hover:text-accent-mint transition-colors">
                {stat.number}
              </span>
              <p className="text-[12px] md:text-[14px] text-secondary-white uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
