'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, memo } from 'react';

const Preloader = memo(({ onComplete }) => {
    const [percent, setPercent] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                // Faster increment for quicker loading
                const diff = Math.floor(Math.random() * 10) + 5;
                return Math.min(prev + diff, 100);
            });
        }, 80); // Faster interval

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (percent >= 100) {
            const finishTimer = setTimeout(() => setIsFinished(true), 300);
            const completeTimer = setTimeout(() => onComplete(), 800); // Faster completion
            return () => {
                clearTimeout(finishTimer);
                clearTimeout(completeTimer);
            };
        }
    }, [percent, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505] overflow-hidden"
        >
            <AnimatePresence mode="wait">
                {!isFinished ? (
                    <motion.div
                        key="counter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-white text-[120px] font-black tracking-tighter tabular-nums leading-none">
                            {percent}%
                        </span>
                        <div className="w-64 h-1 bg-white/10 mt-4 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${percent}%` }}
                                transition={{ duration: 0.1 }}
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
                            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                            className="text-white text-[40px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-[0.1em] leading-[1.1]"
                        >
                            DEVELOPER
                        </motion.h1>
                        <motion.h1
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, delay: 0.05, ease: [0.76, 0, 0.24, 1] }}
                            className="text-white text-[40px] md:text-[80px] lg:text-[100px] font-black uppercase tracking-[0.1em] leading-[1.1]"
                        >
                            PORTFOLIO
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Simplified background glow */}
            <div className="absolute w-[500px] h-[500px] bg-primary-black rounded-full blur-[150px] pointer-events-none -z-10 opacity-30" />
        </motion.div>
    );
});

Preloader.displayName = 'Preloader';

export default Preloader;
