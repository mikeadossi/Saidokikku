import React from 'react';
import './Saitama.css';
import SaitamaSelectComponent from '../../components/SaitamaSelectComponent';
import SaitamaCampaignComponent from '../../components/SaitamaCampaignComponent/SaitamaCampaignComponent';


const Saitama = () => (
  <div className="app_grey_background">
    <div className="app_banner_container">
      <div className="app_banner_title">SAITAMA</div>
    </div>
    <div className="app_content_container">
      <div className="app_white_background_container">
        <SaitamaSelectComponent />
        <SaitamaCampaignComponent />
      </div>
    </div>
  </div>
);

export default Saitama;
