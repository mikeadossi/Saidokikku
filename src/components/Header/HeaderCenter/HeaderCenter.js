import React, { Component } from "react";
import './HeaderCenter.css';
import { Link }  from 'react-router-dom';

class HeaderCenter extends Component {
  render() {
    return (
      <div className="header_center_content">
        <Link to="/saitama" className="nav_links">
          <div className="header_center_links header_center_link1">Link1</div>
        </Link>
        <Link to="/saitama" className="nav_links">
          <div className="header_center_links header_center_link2">Link2</div>
        </Link>
      </div>
    );
  }
}

export default HeaderCenter;
