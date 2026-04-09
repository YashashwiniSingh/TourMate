import React from 'react';
import HeroGlobe from './components/HeroGlobe';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <HeroGlobe />
      <div className="globe-overlay">
        <h1>Travel Without Boundaries</h1>
        <p>Explore. Discover. Experience the world.</p>
        <button className="cta-button" aria-label="Start Your Journey">
          Start Your Journey
        </button>
      </div>
    </div>
  );
}

export default App;
