import React, { Component } from "react";
import './Nav.css';
import HeaderRight from "../../components/Header/HeaderRight/HeaderRight";
import HeaderLeft from "../../components/Header/HeaderLeft/HeaderLeft";

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="saidokikku_nav">
          <HeaderRight />
          <HeaderLeft />
        </div>
      </div>
    );
  }
}

export default Nav;
