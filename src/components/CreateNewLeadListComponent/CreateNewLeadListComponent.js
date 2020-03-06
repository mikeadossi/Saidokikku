import React, { Component } from "react";
import './CreateNewLeadListComponent.css';

class CreateNewLeadListComponent extends Component {
  render() {
    return (
      <div>
        <div className="name_campaign_container">
          <div><i className="fa fa-times fa-lg create_new_campaign_close app_close_container" aria-hidden="true"></i></div>
          <div className="name_campaign_header">Name new Lead List</div>
          <input className="edit_campaign_name_entry" type="text" placeholder="enter name" />
          <button className="campaign_name_btns save_campaign_name_button">Save</button>
        </div>
        <div className="name_campaign_container">
          <div><i className="fa fa-times fa-lg create_new_campaign_close app_close_container" aria-hidden="true"></i></div>
          <div>
            <div className="name_campaign_header name_new_lead_list">MY LEAD LIST</div>
            <div className="edit_new_lead_list_title"><button className="right_workstation_edit_lead_list_btn">EDIT</button></div>
          </div>
          <button className="lead_list_filter_buttons apply_filter_button">APPLY FILTER</button>
          <button className="lead_list_filter_buttons create_new_filter_button">CREATE FILTER</button>

          <div className="select_filter_to_apply_container">
            <div className="select_filter_title">APPLY FILTER</div>
            <div className="filter_name_button_container">
              <button className="filter_name_button filter_name_button_1">NO SHOW FILTER</button>
              <button className="filter_name_button filter_name_button_2">SAN JOSE EVENT !!!!!!!!!!!!!</button>
              <button className="filter_name_button filter_name_button_3">BURBANK EVENT</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewLeadListComponent;
