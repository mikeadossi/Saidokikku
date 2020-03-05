import React, { Component } from "react";
import './SetCampaignNameComponent.css';

class SetCampaignNameComponent extends Component {
  render() {
    return (
      <div className="name_campaign_container">
        <div><i className="fa fa-times fa-lg create_new_campaign_close app_close_container" aria-hidden="true"></i></div>
        <div className="name_campaign_header">Set Campaign Name</div>
        <input className="edit_campaign_name_entry" type="text" defaultValue="CAMPAIGN 1" /> 
        <button className="campaign_name_btns save_campaign_name_button">Save</button>
      </div>
    );
  }
}

export default SetCampaignNameComponent;
