import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Reset currentText and currentIndex when text changes
    setCurrentText('');
    setCurrentIndex(0);
  }, [text]); // Run effect whenever text changes

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]); // Re-run effect whenever currentIndex, delay, or text changes

  return <span>{currentText}</span>;
};

export default Typewriter;
