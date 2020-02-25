import React, { Component } from "react";
import saitama_img from './images/saitama_400.jpeg'
import ryuzaki_img from './images/ryuzaki_400.jpeg'
import ed_img from './images/Ed_600.png'

class HomeContentContainer extends Component {
  render() {
    return (
      <div className="home_content_container">
        <div className="features_container">
          <div className="features_header">
            <div className="feature_icon">
              <img className="home_img" src={saitama_img}></img>
              <div className="feature_title">Saitama</div>
            </div>
          </div>
          <div>content</div>
        </div>
        <div className="features_container">
          <div className="features_header">
            <div className="feature_icon">
              <img className="home_img" src={ryuzaki_img}></img>
              <div className="feature_title">Ryuzaki</div>
            </div>
          </div>
          <div>content</div>
        </div>
        <div className="features_container">
          <div className="features_header">
            <div className="feature_icon">
              <img className="home_img" src={ed_img}></img>
              <div className="feature_title">Ed</div>
            </div>
          </div>
          <div>content</div>
        </div>
      </div>
    );
  }
}

export default HomeContentContainer;
