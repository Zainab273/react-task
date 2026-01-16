import React from 'react';
import Button from './Button'; 

const Community = () => {
  return (
    <section className="community-section">
      <div className="community-content">
        
        <div className="community-icon-wrapper">
          <svg 
            className="community-logo" 
            viewBox="-10.5 -9.45 21 18.9" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="10" ry="4.5"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
          </svg>
        </div>

        <h2 className="community-title">
          Welcome to the <br />
          React community
        </h2>

        <div className="community-btn-wrapper">
          <Button label="Get Started" variant="primary" />
        </div>

      </div>
    </section>
  );
};

export default Community;