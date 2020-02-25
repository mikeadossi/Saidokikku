import React from 'react';
import './Home.css';
import HomeContentContainer from '../../components/HomeContentContainer';
import HomeBanner from '../../components/HomeBanner';

const Home = () => (
  <div className="app_grey_background">
    <div className="app_banner_container">
      <HomeBanner />
    </div>
    <div className="app_content_container">
      <div className="app_white_background_container">
        <HomeContentContainer />
      </div>
    </div>
  </div>
);

export default Home;
