import React, { Component } from "react";
import './CampaignWorkstationComponent.css';

class CampaignWorkstationComponent extends Component {
  render() {
    return (
      <div className="campaign_workstation_container">
        <p className="campaign_workstation_title">CAMPAIGN 1</p>
        <div className="secondary_campaign_workstation_container">
          <div className="campaign_workstation_left">
            <button className="workstation_lead_list workstation_lead_list_0">UNEDITED LIST</button>
            <button className="workstation_lead_list workstation_lead_list_1">LIST 1</button>
            <button className="workstation_lead_list workstation_lead_list_2">LIST 2</button>
            <button className="workstation_create_new_lead_list_btn">CREATE NEW</button>
          </div>
          <div className="campaign_workstation_right">
            <div>
              <p className="right_workstation_lead_list_title">UNEDITED LIST</p>
              <div className="right_workstation_edit_container">
                <button className="right_workstation_edit_lead_list_btn">EDIT</button>
              </div>
            </div>
            <ul className="right_workstation_leads_data_container">
              <li className="right_workstation_leads_data right_workstation_leads_data_0">list has 100 leads</li>
              <li className="right_workstation_leads_data right_workstation_leads_data_1">60 leads have been updated since creation</li>
              <li className="right_workstation_leads_data right_workstation_leads_data_1">40 leads have remained unedited since creation</li>
            </ul>
            <div>create new list</div>
            <div>open edited leads</div>
            <div>open unedited leads</div>
            <div className="right_workstation_filters_container">filters container</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CampaignWorkstationComponent;
