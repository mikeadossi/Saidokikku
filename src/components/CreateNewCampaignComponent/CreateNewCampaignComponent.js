import React, { Component } from "react";
import './CreateNewCampaignComponent.css';

class CreateNewCampaignComponent extends Component {
  render() {
    return (
      <div className="create_new_campaign_container">
        <div className="campaign_url_entry_header">Enter lead list url</div>
        <input className="campaign_url_entry" placeholder="enter url"/>
        <button className="campaign_url_entry_button">Create New Campaign</button>
      </div>
    );
  }
}

export default CreateNewCampaignComponent;
