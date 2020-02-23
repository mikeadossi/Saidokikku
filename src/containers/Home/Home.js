import React from 'react';
import './Home.css';
import saitama_img from './images/saitama_200.png'

const Home = () => (
  <div className="content_pages home_content">
    <h2 className="page_title">Saidokikku</h2>
    <div className="home_text_container">
      Saidokikku is a web scraping and efficiency tool for your sales campaigns.
      It hosts several distinct features intended to reduce prior research
      needed for client outreach, automate repetitive processes, and offer access to
      helpful APIs that make work a lot less tedious.
    </div>
    <div className="about_container">
    <div className="about_header">
      <div className="about_icon"><img className="saitama_img" src={saitama_img}></img></div>
      <div className="about_title">Saitama</div>
    </div>
      <div>content</div>
    </div>
  </div>
);

export default Home;
