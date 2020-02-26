import React, { Component } from "react";
import './HeaderMobileMenu.css';
import dropIcon_img from '../../images/dropIcon.png';

class HeaderMobileMenu extends Component {
  render() {
    return (
      <div className="header_mobile_menu_container">
        <div className="header_mobile_menu_background"></div>
          <div className="header_mobile_menu_links_container">
            <div className="header_mobile_feature_options">
              <li className="header_mobile_options header_mobile_options_about">ABOUT</li>
              <hr />
              <li className="header_mobile_options header_mobile_options_saitama">
                SAITAMA
                <img className="header_menu_drop_icon" src={dropIcon_img}/>
                <ul className="header_saitama_menu_dropdown">
                  <li>
                    <a>Campaign</a>
                  </li>
                  <li>
                    <a>Filters</a>
                  </li>
                  <li>
                    <a>Walkthrough</a>
                  </li>
                </ul>
              </li>
              <hr />
              <li className="header_mobile_options header_mobile_options_ryuzaki">RYUZAKI</li>
              <hr />
              <li className="header_mobile_options header_mobile_options_ed">ED</li>
              <hr />
              <li className="header_mobile_options header_mobile_options_log_out">Log out</li>
              <hr />
            </div>
          </div>
        </div>
    );
  }
}

export default HeaderMobileMenu;
