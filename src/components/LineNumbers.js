import React, { useEffect, useRef, useState } from 'react';

const LineNumbers = ({ sectionRef }) => {
  const [lineCount, setLineCount] = useState(20);
  const lineNumbersRef = useRef(null);

  useEffect(() => {
    const calculateLineNumbers = () => {
      if (sectionRef.current) {
        const sectionHeight = sectionRef.current.offsetHeight;
        const lineHeight = 1.7 * 0.7 * 16; // 1.7 line-height * 0.7rem * 16px
        const startOffset = 60; // top offset
        const availableHeight = sectionHeight - startOffset - 20; // minus bottom padding
        const calculatedLines = Math.max(20, Math.floor(availableHeight / lineHeight));
        setLineCount(calculatedLines);
      }
    };

    // Calculate on mount
    calculateLineNumbers();

    // Recalculate on window resize
    const handleResize = () => {
      setTimeout(calculateLineNumbers, 100);
    };

    window.addEventListener('resize', handleResize);
    
    // Use ResizeObserver for more accurate detection
    if (sectionRef.current && window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(calculateLineNumbers);
      resizeObserver.observe(sectionRef.current);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        resizeObserver.disconnect();
      };
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sectionRef]);

  // Generate line numbers
  const generateLineNumbers = () => {
    return Array.from({ length: lineCount }, (_, i) => i + 1).join('\n');
  };

  return (
    <div 
      ref={lineNumbersRef}
      className="line-numbers"
      style={{
        position: 'absolute',
        left: '-25px',
        top: '60px',
        fontFamily: "'Fira Code', monospace",
        fontSize: '0.7rem',
        color: '#3E3D32',
        whiteSpace: 'pre',
        lineHeight: '1.7',
        zIndex: 1,
        pointerEvents: 'none',
        userSelect: 'none'
      }}
    >
      {generateLineNumbers()}
    </div>
  );
};

export default LineNumbers;