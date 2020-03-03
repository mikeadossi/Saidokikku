import React, { Component } from "react";
import './SaitamaCampaignComponent.css';
import CampaignSelectComponent from '../CampaignSelectComponent/CampaignSelectComponent';
import CreateNewCampaignComponent from '../CreateNewCampaignComponent/CreateNewCampaignComponent';
import SetCampaignNameComponent from '../SetCampaignNameComponent/SetCampaignNameComponent';
import CampaignWorkstationComponent from '../CampaignWorkstationComponent/CampaignWorkstationComponent';
import FilterFormComponent from '../FilterFormComponent/FilterFormComponent';

class SaitamaCampaignComponent extends Component {
  render() {
    return (
      <div className="saitama_content_window">
          <CampaignSelectComponent />
          <CreateNewCampaignComponent />
          <SetCampaignNameComponent />
          <CampaignWorkstationComponent />
          <FilterFormComponent />
      </div>
    );
  }
}

export default SaitamaCampaignComponent;
