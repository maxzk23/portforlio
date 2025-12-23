'use client';

import React from 'react';

const KineticTypography = ({ text, className }) => {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block whitespace-pre hover:scale-110 hover:text-[#A509FF] transition-all duration-300 ease-out cursor-default"
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default KineticTypography;
