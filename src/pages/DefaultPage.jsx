import React from 'react'
import '../css/introToGame.css'; // Import the CSS file
const IntroToGame = () => {

  const playNow = (event) => {
    event.preventDefault(); // Prevent the default action of the link
    
    const audio = new Audio("/music/menuMusic.mp3");
    audio.play();
  }
  return (
    <div className='body'>
    <div className='container' >
      <div className='bigText'>Text</div>
      <div id='optionButtons' className='btnGrid'>
        <button className='optBtn'>option 1</button>
        <button className='optBtn'>option 2</button>
        <button className='optBtn'>option 3</button>
        <button className='optBtn'>option 4</button>
       </div>
    </div>
     <button onClick={playNow} className='musicBtn'>Play Music</button>
    </div>

  )
}

export default IntroToGame