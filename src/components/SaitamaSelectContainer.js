import React, { Component } from "react";

class SaitamaSelectContainer extends Component {
  render() {
    return ( 
      <div className="saitama_select_container">
        <input className="saitama_option saitama_option_left" type="text" value="CAMPAIGN"/>
        <input className="saitama_option saitama_option_center" type="text" value="FILTERS"/>
        <input className="saitama_option saitama_option_right" type="text" value="WALKTHROUGH"/>
      </div>
    );
  }
}

export default SaitamaSelectContainer;
