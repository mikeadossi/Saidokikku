import React from 'react';
import './Saitama.css';
import SaitamaSelectContainer from '../../components/SaitamaSelectContainer';

const Saitama = () => (
  <div className="app_grey_background">
    <div className="app_banner_container">
      <div className="app_banner_title">SAITAMA</div>
    </div>
    <div className="app_content_container">
      <div className="app_white_background_container">
        <SaitamaSelectContainer />
        <div className="saitama_content_window"></div>
      </div>
    </div>
  </div>
);

export default Saitama;
