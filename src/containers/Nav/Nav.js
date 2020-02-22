import React, { Component } from 'react';
import './Nav.css';
import HeaderRight from '../../components/Header/HeaderRight/HeaderRight';
import HeaderCenter from '../../components/Header/HeaderCenter/HeaderCenter';
import HeaderLeft from '../../components/Header/HeaderLeft/HeaderLeft';
// import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="nav_container">
          <HeaderRight />
          <HeaderCenter />
          <HeaderLeft />
      </div>
    );
  }
}

export default Nav;
