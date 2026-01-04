'use client';

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Navbar } from '../components';
import { Hero } from '../sections';
import { ReactLenis } from '@studio-freight/react-lenis';

// Lazy load sections below the fold for better performance
const About = lazy(() => import('../sections/About'));
const GetStarted = lazy(() => import('../sections/GetStarted'));
const WhatsNew = lazy(() => import('../sections/WhatsNew'));
const World = lazy(() => import('../sections/World'));
const Insights = lazy(() => import('../sections/Insights'));
const Feedback = lazy(() => import('../sections/Feedback'));
const Contact = lazy(() => import('../sections/Contact'));
const Footer = lazy(() => import('../components/Footer'));

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.15, duration: 1.2, smoothTouch: true }}>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-black"
          >
            <div className="flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="text-white text-[48px] md:text-[80px] font-black tracking-[0.5em] uppercase"
              >
                WELCOME
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
                className="h-[2px] bg-accent-mint mt-4 opacity-50"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-primary-black relative min-h-screen selection:bg-accent-mint/30 overflow-x-hidden">
        <div className="relative">
          <Navbar />

          <Hero />

          <div className="relative z-20">
            <Suspense fallback={null}>
              <div className="relative">
                <About />
                <div className="gradient-03 z-0" />
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
              <Contact />
              <Footer />
            </Suspense>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Page;

