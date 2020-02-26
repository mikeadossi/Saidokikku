import React, { Component } from 'react';
import './Nav.css';
import HeaderRight from '../../components/Header/HeaderRight/HeaderRight';
import HeaderCenter from '../../components/Header/HeaderCenter/HeaderCenter';
import HeaderLeft from '../../components/Header/HeaderLeft/HeaderLeft';
import HeaderMobileMenu from '../../components/Header/HeaderMobileMenu/HeaderMobileMenu';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="nav_container">
            <HeaderRight />
            <HeaderCenter />
            <HeaderLeft />
        </div>
        <HeaderMobileMenu />
      </div>
    );
  }
}

export default Nav;
