import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">bodimak.lk</div>
          <div className="links">
            <a href="#" className="link">About Us</a>
            <a href="#" className="link">Contact</a>
            <a href="#" className="link">Terms of Use</a>
            <a href="#" className="link">Privacy Policy</a>
          </div>
        </div>
        <div className="copyright">
          © 2024 bodimak.lk. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;