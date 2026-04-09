import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import '../styles/HeroGlobe.css';

const HeroGlobe = () => {
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      // Auto-rotate the globe
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <div className="globe-container">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        showAtmosphere={true}
        atmosphereColor="lightskyblue"
        backgroundColor="rgba(0, 0, 0, 0)" 
        width={typeof window !== 'undefined' ? window.innerWidth : 1024}
        height={typeof window !== 'undefined' ? window.innerHeight : 768}
      />
    </div>
  );
};


export default HeroGlobe;
