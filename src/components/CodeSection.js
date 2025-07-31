import React, { useRef } from 'react';
import LineNumbers from './LineNumbers';

const CodeSection = ({ id, className = '', children, ...props }) => {
  const sectionRef = useRef(null);

  return (
    <div 
      ref={sectionRef}
      id={id}
      className={`section ${className}`}
      {...props}
    >
      <LineNumbers sectionRef={sectionRef} />
      {children}
    </div>
  );
};

export default CodeSection;