import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section about">
          <h3>ShopEase</h3>
          <p>Your one-stop shop for the latest gadgets and accessories.  
             Quality products, great prices, and fast delivery.</p>
        </div>

        
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </div>

        
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: support@shopease.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: 123 Main Street, Mumbai, India</p>
          <div className="social-icons">
            <a href="https://facebook.com/shopease" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/shopease" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/shopease" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
