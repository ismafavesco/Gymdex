import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <a href="https://portfolio-ismafavesco.vercel.app" className="footer-link">
        About me
      </a>
      <a href="/privacy" className="footer-link">
        Privacy Policy
      </a>
      <a href="/terms" className="footer-link">
        Terms & Conditions
      </a>
    </div>
    <div className="footer-copyright">
      © {new Date().getFullYear()} Ismael Favela. All rights reserved.
    </div>
    <span className="powered-by">
      Powered by{' '}
      <a href="https://favesco.tech" target="_blank" rel="noopener noreferrer">
        Favesco
      </a>
    </span>
  </footer>
);

export default Footer;