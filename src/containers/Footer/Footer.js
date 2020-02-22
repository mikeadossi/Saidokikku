import React from 'react';
import './Footer.css';
import { Link }  from 'react-router-dom';

const Footer = () => (
  <div className="footer_content">
    <Link to="/saitama" className="nav_links nav_footer_links">
      <div className="footer_links footer_link1">Link1</div>
    </Link>
    <Link to="/saitama" className="nav_links nav_footer_links">
      <div className="footer_links footer_link2">Link2</div>
    </Link>
  </div>
);

export default Footer;
