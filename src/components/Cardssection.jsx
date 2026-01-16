import React from 'react';
import Button from './Button'; 

const CardsSection = () => {
  const modules = [
    { title: "Components", desc: "Building blocks of UI. Combine them to make screens." },
    { title: "JSX", desc: "Syntax extension for JavaScript to write HTML in React." },
    { title: "Props", desc: "Pass data from parent to child components easily." },
    { title: "State", desc: "Component's memory. Manage dynamic data updates." },
    { title: "Effects", desc: "Synchronize with external systems and lifecycle events." },
    { title: "Hooks", desc: "Use state and other features without writing a class." },
    { title: "Context", desc: "Pass data deeply through the tree without prop drilling." },
    { title: "Router", desc: "Manage navigation and URLs in your single-page app." }
  ];

  return (
    <section className="cards-section">
      <h2 className="section-heading">Core Concepts</h2>
      
      <div className="cards-grid">
        {modules.map((item, index) => (
          <div className="react-card" key={index}>
            <div className="card-icon-bg">
              <svg className="card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>

            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
            
            <div className="card-btn-wrapper">
              <Button label="Read Docs" variant="secondary" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;