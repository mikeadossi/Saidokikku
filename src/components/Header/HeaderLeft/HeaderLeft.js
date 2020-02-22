import React, { Component } from "react";
import './HeaderLeft.css';
import { Link }  from 'react-router-dom';

class HeaderLeft extends Component {
  render() {
    return (
      <div>
        <div className="header_left">
          <Link to="/" className="nav_links"><a>Saidokikku</a></Link>
        </div>
      </div>
    );
  }
}

export default HeaderLeft;
