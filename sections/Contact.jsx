'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { useLanguage } from '../context/LanguageContext';
import { translations, socials } from '../constants';
import { TypingText, TitleText } from '../components';

const Contact = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className={`${styles.paddings} relative z-10`} id="contact">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
            >
                <TypingText title={t.contactTitle} textStyles="text-center" />
                <TitleText title={<>{t.contactHeading}</>} textStyles="text-center" />

                <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="text-center text-secondary-white text-[16px] md:text-[18px] mt-4 max-w-[500px]"
                >
                    {t.contactSubtitle}
                </motion.p>

                {/* Contact Form */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                    className="w-full max-w-[600px] mt-[50px]"
                >
                    <form className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder={language === 'th' ? 'ชื่อของคุณ' : 'Your Name'}
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent-mint/50 transition-colors"
                                />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-mint/0 to-accent-mint/0 group-hover:from-accent-mint/5 group-hover:to-transparent pointer-events-none transition-all" />
                            </div>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder={language === 'th' ? 'อีเมลของคุณ' : 'Your Email'}
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent-mint/50 transition-colors"
                                />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-mint/0 to-accent-mint/0 group-hover:from-accent-mint/5 group-hover:to-transparent pointer-events-none transition-all" />
                            </div>
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                placeholder={language === 'th' ? 'หัวข้อ' : 'Subject'}
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent-mint/50 transition-colors"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-mint/0 to-accent-mint/0 group-hover:from-accent-mint/5 group-hover:to-transparent pointer-events-none transition-all" />
                        </div>

                        <div className="relative group">
                            <textarea
                                rows={5}
                                placeholder={language === 'th' ? 'ข้อความของคุณ...' : 'Your Message...'}
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-accent-mint/50 transition-colors resize-none"
                            />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-mint/0 to-accent-mint/0 group-hover:from-accent-mint/5 group-hover:to-transparent pointer-events-none transition-all" />
                        </div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-gradient-to-r from-accent-mint to-accent-mint/80 text-black font-bold uppercase tracking-wider rounded-2xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            {t.contactCta}
                        </motion.button>
                    </form>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.5, 1)}
                    className="mt-[60px] flex flex-col items-center gap-6"
                >
                    <p className="text-[12px] text-white/40 uppercase tracking-[0.3em]">
                        {language === 'th' ? 'หรือติดตามผมที่' : 'Or find me on'}
                    </p>
                    <div className="flex gap-6">
                        {socials.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.2, y: -5 }}
                                className="w-[50px] h-[50px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent-mint/50 hover:bg-accent-mint/10 transition-all group"
                            >
                                <img
                                    src={social.url}
                                    alt={social.name}
                                    className="w-[24px] h-[24px] object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                                />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Email Direct */}
                <motion.a
                    href="mailto:hello@apichat.dev"
                    variants={fadeIn('up', 'tween', 0.6, 1)}
                    className="mt-8 text-accent-mint text-[14px] md:text-[16px] hover:underline flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hello@apichat.dev
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Contact;
