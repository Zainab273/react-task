import React from 'react';

const Button = ({ label, variant = "primary" }) => {
  return (
    <button className={`hero-btn ${variant}`}>
      {label || 'click'}
    </button>
  );
};

export default Button;