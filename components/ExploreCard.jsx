'use client';

import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants';

const ExploreCard = memo(({ id, imgUrl, title, description, techStack, liveUrl, githubUrl, category, index, bentoClass }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isHovered, setIsHovered] = useState(false);

  const cardTitle = typeof title === 'object' ? title[language] : title;
  const cardDescription = typeof description === 'object' ? description[language] : description;
  const cardCategory = typeof category === 'object' ? category[language] : category;

  return (
    <motion.div
      className={`relative overflow-hidden bg-black/40 rounded-[32px] cursor-pointer group ${bentoClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <motion.img
        src={imgUrl}
        alt={cardTitle}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          scale: isHovered ? 1.15 : 1.1,
          opacity: isHovered ? 0.6 : 0.4
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-accent-mint/20 to-transparent"
          />
        )}
      </AnimatePresence>

      {/* Content Container */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Top: Category Badge */}
        <div className="flex justify-between items-start">
          {cardCategory && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-1 bg-accent-mint/20 backdrop-blur-sm rounded-full text-[10px] text-accent-mint uppercase tracking-widest font-bold border border-accent-mint/30"
            >
              {cardCategory}
            </motion.span>
          )}
        </div>

        {/* Bottom: Title, Description, Tech Stack, Actions */}
        <div className="flex flex-col gap-3">
          {/* Tech Stack Badges - Visible on Hover */}
          <AnimatePresence>
            {isHovered && techStack && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-2"
              >
                {techStack.slice(0, 4).map((tech, i) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-[10px] text-white/80 font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {techStack.length > 4 && (
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-[10px] text-white/60">
                    +{techStack.length - 4}
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Project Info */}
          <div>
            <p className="font-normal text-[12px] text-secondary-white uppercase tracking-widest mb-1">
              {cardCategory || 'Project'} / {id.replace('project-', '#')}
            </p>
            <h2 className="font-bold sm:text-[28px] text-[20px] text-white leading-tight">
              {cardTitle}
            </h2>
          </div>

          {/* Description - Visible on Hover */}
          <AnimatePresence>
            {isHovered && cardDescription && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[13px] text-white/70 leading-relaxed line-clamp-2"
              >
                {cardDescription}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Action Buttons - Visible on Hover */}
          <AnimatePresence>
            {isHovered && (liveUrl || githubUrl) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex gap-3 mt-2"
              >
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-accent-mint text-black text-[12px] font-bold uppercase tracking-wide rounded-full hover:bg-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {t.viewProject}
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-[12px] font-bold uppercase tracking-wide rounded-full hover:bg-white/20 transition-colors border border-white/20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    {t.viewCode}
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
});

ExploreCard.displayName = 'ExploreCard';

export default ExploreCard;
