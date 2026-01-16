import React from 'react';
import Button from './Button'; // Button component ko import kiya

const Hero = () => {
  return (
    <section className="hero-container">
      {/* 1. React Logo (SVG) */}
      <div className="hero-logo-wrapper">
        <svg viewBox="-10.5 -9.45 21 18.9" className="hero-logo" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
          </g>
        </svg>
      </div>

      {/* 2. Heading */}
      <h1 className="hero-title">React</h1>

      {/* 3. Subtitle */}
      <p className="hero-subtitle">
        The library for web and native user interfaces
      </p>

      {/* 4. Buttons (Component Call) */}
      <div className="hero-actions">
        {/* Primary Button */}
        <Button label="Learn React" variant="primary" />
        
        {/* Secondary Button */}
        <Button label="API Reference" variant="secondary" />
      </div>
    </section>
  );
};

export default Hero;