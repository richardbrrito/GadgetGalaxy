import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className= "f-wrapper">
    <footer className="footer">
      <span className="primaryText" id="footerLogo">GadgetGalaxy</span> {/* Logo text */}
      <div className="footer__content">
        <p>© 2023 Gadget Galaxy. All rights reserved.</p>
        <p>
          <a href="/privacy-policy">Privacy Policy</a> |
          <a href="/terms-of-service"> Terms of Service</a> |
          <a href="/contact-us"> Contact Us</a>
        </p>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
