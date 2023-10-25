import React from "react";
import "./Footer.css";

// Component
const Footer = () => (
  <footer className="footer">
    <div style={{ marginBottom: "10px" }}>
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
    <div>
      © {new Date().getFullYear()} Ismael Favela. All rights reserved.
    </div>
  </footer>
);

export default Footer;
