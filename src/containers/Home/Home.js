import React from 'react';
import './Home.css';
import saitama_img from './images/saitama_400.jpeg'
import ryuzaki_img from './images/ryuzaki_400.jpeg'
import ed_img from './images/Ed_600.png'

const Home = () => (
  <div className="content_pages home_content">
  <div className="home_header_container">
    <div className="page_title">Saidokikku</div>
    <div className="home_text_container">
      Saidokikku is a web scraping and efficiency tool for your sales campaigns.
      It hosts several distinct features intended to reduce research needed for
      client outreach, automate repetitive processes, and offer access to
      helpful APIs that make every day tasks a breeze.
    </div>
  </div>
  <div className="home_content_container">
    <div className="features_main_container">
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
  </div>

  </div>
);

export default Home;
