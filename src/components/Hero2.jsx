import React from 'react';

const Hero2 = () => {
  return (
    <section className="hero2-container">
      {/* Heading */}
      <h2 className="hero2-title">
        Create user interfaces <br />
        from components
      </h2>

      {/* Description with Code Badges */}
      <p className="hero2-text">
        React lets you build user interfaces out of individual pieces called components.
        <br className="hidden-mobile"/>
        Create your own React components like <code className="code-badge">Thumbnail</code>, <code className="code-badge">LikeButton</code>, and <code className="code-badge">Video</code>.
        <br className="hidden-mobile"/>
        Then combine them into entire screens, pages, and apps.
      </p>
    </section>
  );
};

export default Hero2;