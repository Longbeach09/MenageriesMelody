import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IntroToGame from './pages/IntroToGame';
import About from './pages/About';

function App() {
  return (
    <div className='OverAll'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/IntroToGame" element={<IntroToGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
