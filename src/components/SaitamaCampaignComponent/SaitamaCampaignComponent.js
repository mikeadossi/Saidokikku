import React, { Component } from "react";
import './SaitamaCampaignComponent.css';
import CampaignSelectComponent from '../CampaignSelectComponent/CampaignSelectComponent';
import CreateNewCampaignComponent from '../CreateNewCampaignComponent/CreateNewCampaignComponent';
import SetCampaignNameComponent from '../SetCampaignNameComponent/SetCampaignNameComponent';
import CampaignWorkstationComponent from '../CampaignWorkstationComponent/CampaignWorkstationComponent';
import LeadsTableComponent from '../LeadsTableComponent/LeadsTableComponent';
import CreateNewLeadListComponent from '../CreateNewLeadListComponent/CreateNewLeadListComponent';
import SaitamaFiltersComponent from '../SaitamaFiltersComponent/SaitamaFiltersComponent';


class SaitamaCampaignComponent extends Component {
  render() {
    return (
      <div className="saitama_content_window">
          <CampaignSelectComponent />
          <CreateNewCampaignComponent />
          <SetCampaignNameComponent />
          <CampaignWorkstationComponent />
          <CreateNewLeadListComponent />
          <SaitamaFiltersComponent />
          <LeadsTableComponent />
      </div>
    );
  }
}

export default SaitamaCampaignComponent;
