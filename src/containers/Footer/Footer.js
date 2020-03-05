import React from 'react';
import './Footer.css';
import { Link }  from 'react-router-dom';

const Footer = () => (
  <div className="footer_content">
    <Link to="/" className="nav_links nav_footer_links">
      <div className="footer_links footer_link1">About</div>
    </Link>
    <Link to="/saitama" className="nav_links nav_footer_links">
      <div className="footer_links footer_link1">Saitama</div>
    </Link>
    <Link to="/ryuzaki" className="nav_links nav_footer_links">
      <div className="footer_links footer_link2">Ryuzaki</div>
    </Link>
    <Link to="/ed" className="nav_links nav_footer_links">
      <div className="footer_links footer_link3">Ed</div>
    </Link>
  </div>
);

export default Footer;
