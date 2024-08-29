import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Abstract</h4>
          <ul>
            <li><a href="#">Branches</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Release Notes</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Community</h4>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Dribbble</a></li>
            <li><a href="#">Podcast</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#" className='contact'>Contact Us</a></li>
            <li><a href="mailto:info@abstract.com">info@abstract.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2022 Abstract Studio Design, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
