import React, { useState } from 'react';
import '../css/introToGame.css'; // Import the CSS file
import Typewriter from '../misc/Typewriter';

const IntroToGame = () => {
  const [sentenceIndex, setSentenceIndex] = useState(0); // State to track the current sentence index
  const [showOptions, setShowOptions] = useState(false); // State to track whether to show options

  const sentences = [
    "As consciousness slowly seeps into your mind, you find yourself in a room shrouded in darkness, illuminated only by the faint glow of moonlight filtering through the curtains.",
    "The air is still, heavy with the silence of the night. You sit up, your senses on high alert as you take in your surroundings. The walls loom ominously around you, their shadows seeming to shift and dance in the dim light.",
    "A chill runs down your spine as you realize that you have no memory of how you came to be here. Fear threatens to grip you, but you force yourself to remain calm, your mind racing with questions and uncertainty.",
    // Add more sentences as needed
  ];

  const handleNextSentence = () => {
    if (sentenceIndex < sentences.length - 1) {
      setSentenceIndex(prevIndex => prevIndex + 1);
    } else {
      setShowOptions(true); // Display options when all sentences have been shown
    }
  };

  return (
    <div className='body'>
      <div className='container'>
        <div className='bigText'>
          <h1 className='bigTxt'>
            <Typewriter text={sentences[sentenceIndex]} delay={25} />
          </h1>
        </div>
        {showOptions ? (
          <div id='optionButtons' className='btnGrid'>
            <button className='optBtn'>Investigate the room</button>
            <button className='optBtn'>Atempt to leave the room</button>
            <button className='optBtn'>Call out for help </button>
            <button className='optBtn'>Stay put and wait</button>
          </div>
        ) : (
          <button onClick={handleNextSentence} className='nxtBtn'>Next</button>
        )}
      </div>
    </div>
  );
}

export default IntroToGame;
