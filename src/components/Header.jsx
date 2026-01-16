import React from 'react';
const Header = () => {
  return (
    <nav className="header-container">
      
      {/* --- Left: Logo --- */}
      <div className="left-section">
        {/* React Logo SVG */}
        <svg viewBox="-10.5 -9.45 21 18.9" className="react-logo" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
          </g>
        </svg>
        <span className="brand-name">React</span>
        <span className="version">v19.2</span>
      </div>

      {/* --- Center: Search Bar --- */}
      <div className="center-section">
        <div className="search-bar">
          <svg className="search-icon" aria-hidden="true" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
          <span className="search-text">Search</span>
          <span className="shortcut-hint">Ctrl K</span>
        </div>
      </div>

      {/* --- Right: Links & Icons --- */}
      <div className="right-section">
        <div className="nav-links">
          <a href="#" className="nav-link">Learn</a>
          <a href="#" className="nav-link">Reference</a>
          <a href="#" className="nav-link">Community</a>
          <a href="#" className="nav-link">Blog</a>
        </div>

        <div className="icon-group">
          {/* Sun Icon */}
          <button className="icon-btn">
            <svg className="nav-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          </button>

          {/* Language Icon */}
          <button className="icon-btn">
            <svg className="nav-icon" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
            </svg>
          </button>

          {/* GitHub Icon */}
          <a href="#" className="icon-btn">
            <svg className="nav-icon" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header