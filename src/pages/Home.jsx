import React from 'react';
import "../css/Home.css";

const Home = () => {

    

    return (
        <div className='HomePage'>
            <header className='Header'>
                Menagerie's Melody
            </header>
            <div className='HomePgeBtn'>
                <a href='/IntroToGame'>
                    <button className='homeBtn'>Start Now</button>
                </a>
                <a href='/About'>
                    <button className='homeBtn'>About</button>
                </a>
            </div>
        </div>
    );
    
};

export default Home;
