'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
    const [percent, setPercent] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                const diff = Math.floor(Math.random() * 6) + 1;
                return Math.min(prev + diff, 100);
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (percent >= 100) {
            const finishTimer = setTimeout(() => setIsFinished(true), 800);
            const completeTimer = setTimeout(() => onComplete(), 3000);
            return () => {
                clearTimeout(finishTimer);
                clearTimeout(completeTimer);
            };
        }
    }, [percent, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505] overflow-hidden"
        >
            <AnimatePresence mode="wait">
                {!isFinished ? (
                    <motion.div
                        key="counter"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-white text-[120px] font-black tracking-tighter tabular-nums leading-none">
                            {percent}%
                        </span>
                        <div className="w-64 h-1 bg-white/10 mt-4 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${percent}%` }}
                                className="h-full bg-white"
                            />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="text"
                        className="flex flex-col items-center overflow-hidden gap-2"
                    >
                        <motion.h1
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                            className="text-white text-[40px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-[0.1em] leading-[1.1]"
                        >
                            DEVELOPER
                        </motion.h1>
                        <motion.h1
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                            className="text-white text-[40px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-[0.1em] leading-[1.1]"
                        >
                            PORTFOLIO
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Decorative Shavings or Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute w-[500px] h-[500px] bg-primary-black rounded-full blur-[150px] pointer-events-none -z-10"
            />
        </motion.div>
    );
};

export default Preloader;
