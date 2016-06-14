import React from 'react';

function Wireframe() {
  return (
    <div className="layout-wrapper">
      <header className="header">
        <div className="main-logo">
          <h2>Kefex</h2>
        </div>
        <div className="button-section">
          <button className="sign-up">Register</button>
          <button className="login">Login</button>
        </div>
      </header>
      <div className="wrapper-content">
        <div className="main-banner">
          <div className="video-container">Video Content - Play</div>
          <div className="news-feed">
            <ul>
              <li>News One</li>
              <li>News Two</li>
              <li>News Three</li>
              <li>News Four</li>
              <li>News Five</li>
            </ul>
          </div>
        </div>
        <div className="main-description">
          <div className="main-image">Image</div>
          <div className="description">
            Description
          </div>
        </div>
        <div className="brand-links">
          <div className="brand">
            <div className="profile">
              Profile
            </div>
            <button>Link Button</button>
          </div>
          <div className="brand">
            <div className="profile">
              Profile
            </div>
            <button>Link Button</button>
          </div>
          <div className="brand">
            <div className="profile">
              Profile
            </div>
            <button>Link Button</button>
          </div>
        </div>
        <p></p>
      </div>
      <footer className="footer">
        <div className="footer-cols">
          content one
        </div>
        <div className="footer-cols">
          content two
        </div>
        <div className="footer-cols">
          content three
        </div>
      </footer>
    </div>
  );
}

export default Wireframe;
