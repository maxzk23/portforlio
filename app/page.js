'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useEffect } from 'react';
import { Footer, Navbar, CustomCursor, Preloader, MouseGlow } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useSpring } from 'framer-motion';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const { scrollYProgress } = useScroll();

  // Tighter spring for more responsive feel (less "perceived lag")
  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 100, restDelta: 0.001 });

  const scale = useTransform(smoothProgress, [0, 1], [1, 1.01]);
  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ['#050505', '#0a0a1a', '#050505', '#1a0a1a', '#050505', '#0a0a1a']
  );

  const heroScale = useTransform(smoothProgress, [0, 0.12], [1, 1.15]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);
  const contentY = useTransform(smoothProgress, [0, 0.12], ['0%', '-1%']);
  const contentScale = useTransform(smoothProgress, [0, 0.12], [0.99, 1]);

  if (!isMounted) return <div className="bg-primary-black min-h-screen" />;

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2, smoothTouch: true }}>
      <div className="bg-primary-black relative min-h-screen selection:bg-purple-500/30 overflow-x-hidden">
        <AnimatePresence mode="wait">
          {isLoading && (
            <Preloader key="loader" onComplete={handleLoadingComplete} />
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
    </ReactLenis>
  );
};

export default Page;
