import React, { Component } from "react";
import './CampaignSelectComponent.css';

class CampaignSelectComponent extends Component {
  render() {
    return (
      <div className="campaign_select_container">
        <ul className="campaign_select_option_ul">
          <li className="campaign_select_option"><input className="campaign_option_name" type="text" value="CAMPAIGN 1" disabled="disabled"/></li>
          <hr className="campaign_select_option_hr"/>
          <li className="campaign_select_option"><input className="campaign_option_name" type="text" value="CAMPAIGN 2" disabled="disabled"/></li>
          <hr className="campaign_select_option_hr"/>
          <li className="campaign_select_option create_new_campaign_btn">CREATE NEW CAMPAIGN</li>
        </ul>
      </div>
    );
  }
}

export default CampaignSelectComponent;
