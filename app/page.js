'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Footer, Navbar, CustomCursor } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ['#050505', '#0a0a1a', '#050505', '#1a0a1a', '#050505', '#0a0a1a']
  );

  return (
    <motion.div className="overflow-hidden" style={{ backgroundColor }}>
      <CustomCursor />
      <Navbar />
      <Hero />
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
  );
};

export default Page;
