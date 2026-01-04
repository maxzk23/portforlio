'use client';

import React from 'react';

const KineticTypography = ({ text, className }) => {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block whitespace-pre hover:scale-110 hover:text-[#A509FF] transition-transform duration-200 ease-out cursor-default"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default React.memo(KineticTypography);
