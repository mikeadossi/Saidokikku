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
        <div className="saitama_content_window">

          <div className="campaign_select_container">
            <ul className="campaign_select_option_ul">
              <li className="campaign_select_option"><input className="campaign_option_name" type="text" value="CAMPAIGN 1" disabled="disabled"/></li>
              <hr className="campaign_select_option_hr"/>
              <li className="campaign_select_option"><input className="campaign_option_name" type="text" value="CAMPAIGN 2" disabled="disabled"/></li>
              <hr className="campaign_select_option_hr"/>
              <li className="campaign_select_option create_new_campaign_btn">CREATE NEW CAMPAIGN</li>
            </ul>
          </div>

          <div className="create_new_campaign_container">
            <div className="campaign_url_entry_header">Enter lead list url</div>
            <input className="campaign_url_entry" placeholder="enter url"/>
            <button className="campaign_url_entry_button">Create New Campaign</button>
          </div>

          <div className="name_campaign_container">
            <div className="name_campaign_header">Set Campaign Name</div>
            <input className="edit_campaign_name_entry" value="CAMPAIGN #1" />
            <button className="campaign_name_btns clear_campaign_name_button">Clear</button>
            <button className="campaign_name_btns save_campaign_name_button">Save</button>
            <button className="campaign_name_btns cancel_campaign_button">Cancel</button>
          </div>

          <div className="campaign_workstation_container">
            <input className="campaign_workstation_title" type="text" value="CAMPAIGN 1" disabled="disabled" />
            <div className="secondary_campaign_workstation_container">
              <div className="campaign_workstation_left">
                <input className="workstation_lead_list workstation_lead_list_0" type="text" value="UNEDITED LIST" disabled="disabled" />
                <input className="workstation_lead_list workstation_lead_list_1" type="text" value="LIST 1" disabled="disabled"  />
                <input className="workstation_lead_list workstation_lead_list_2" type="text" value="LIST 2" disabled="disabled"  />
                <button className="workstation_create_new_lead_list_btn">CREATE NEW</button>
              </div>
              <div className="campaign_workstation_right">
                <div>
                  <input className="right_workstation_lead_list_title" type="text" value="UNEDITED LIST" disabled="disabled"/>
                  <div className="right_workstation_edit_container">
                    <button className="right_workstation_edit_lead_list_btn">EDIT</button>
                  </div>
                </div>
                <ul className="right_workstation_leads_data_container">
                  <input className="right_workstation_leads_data right_workstation_leads_data_0" value="list has 100 leads" disabled="disabled" />
                  <input className="right_workstation_leads_data right_workstation_leads_data_1" value="60 leads have been updated since creation" disabled="disabled" />
                  <input className="right_workstation_leads_data right_workstation_leads_data_1" value="40 leads have remained unedited since creation" disabled="disabled" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Saitama;
