import React from 'react';
import './Home.css';
import HomeContentComponent from '../../components/HomeContentComponent';
import HomeBanner from '../../components/HomeBanner';

const Home = () => (
  <div className="app_grey_background">
    <div className="app_banner_container">
      <HomeBanner />
    </div>
    <div className="app_content_container">
      <div className="app_white_background_container">
        <HomeContentComponent />
      </div>
    </div>
  </div>
);

export default Home;
