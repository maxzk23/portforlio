'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';
import { useState, useEffect } from 'react';

export const TypingText = ({ title, textStyles }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <p className={`font-normal text-[14px] text-secondary-white ${textStyles}`}>{title}</p>;
  const characters = title.match(/[ก-ฮ\w]\p{M}*|./gu) || [];
  return (
    <motion.p
      variants={textContainer}
      className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
    >
      {characters.map((letter, i) => (
        <motion.span variants={textVariant2} key={`${letter}-${i}`}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >{title}
  </motion.h2>
);
