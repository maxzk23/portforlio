'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Footer, Navbar, CustomCursor, Preloader, MouseGlow } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.02]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ['#050505', '#0a0a1a', '#050505', '#1a0a1a', '#050505', '#0a0a1a']
  );

  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 1.25]); // Reduced scale slightly
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]); // Fade out much faster
  const contentY = useTransform(scrollYProgress, [0, 0.12], ['0%', '-2%']);
  const contentScale = useTransform(scrollYProgress, [0, 0.12], [0.98, 1]);

  return (
    <div className="bg-primary-black relative min-h-screen selection:bg-purple-500/30">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <MouseGlow />
      <CustomCursor />

      <motion.div
        className="relative will-change-transform"
        style={{ backgroundColor, scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <Navbar />

        {/* Prevent bleeding into next page by using overflow-hidden */}
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            pointerEvents: scrollYProgress.get() > 0.08 ? 'none' : 'auto'
          }}
          className="will-change-[scale,opacity] overflow-hidden sticky top-0"
        >
          <Hero />
        </motion.div>

        <motion.div
          style={{ y: contentY, scale: contentScale }}
          className="relative z-20 will-change-transform"
        >
          <div className="relative">
            <About />
            <div className="gradient-03 z-0" />
            <Explore />
          </div>

          <div className="relative">
            <GetStarted />
            <div className="gradient-04 z-0" />
            <WhatsNew />
          </div>
          <World />
          <div className="relative">
            <Insights />
            <div className="gradient-04 z-0" />
            <Feedback />
          </div>
          <Footer />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
