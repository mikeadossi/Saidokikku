import React, { Component } from "react";
import './HeaderRight.css';
import { Link }  from 'react-router-dom';

class HeaderRight extends Component {
  render() {
    return (
      <div>
        <div className="header_right">
          <Link to="/logIn" className="nav_links"><a>Log out</a></Link>
        </div>
      </div>
    );
  }
}

export default HeaderRight;
