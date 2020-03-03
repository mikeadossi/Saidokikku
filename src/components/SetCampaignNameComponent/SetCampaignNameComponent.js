import React, { Component } from "react";
import './SetCampaignNameComponent.css';

class SetCampaignNameComponent extends Component {
  render() {
    return (
      <div className="name_campaign_container">
        <div className="name_campaign_header">Set Campaign Name</div>
        <input className="edit_campaign_name_entry" type="text" defaultValue="CAMPAIGN 1" />
        <button className="campaign_name_btns clear_campaign_name_button">Clear</button>
        <button className="campaign_name_btns save_campaign_name_button">Save</button>
        <button className="campaign_name_btns cancel_campaign_button">Cancel</button>
      </div>
    );
  }
}

export default SetCampaignNameComponent;
