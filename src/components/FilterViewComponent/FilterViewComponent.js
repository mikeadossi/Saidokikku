import React, { Component } from "react";
import './FilterViewComponent.css';

class FilterViewComponent extends Component {
  render() {
    return (
      <div>
      <div className="workstation_filter_container filter_view_container">
        <div className="filter_view_title">NO SHOWS FILTER</div>
        <form className="workstation_filter_items">
          <div className="filter_form_first">
            <div className="cell cell_1">
              <input type="text" placeholder="Opportunity Name"/>
            </div>
            <div className="cell cell_2">
              <input type="text" placeholder="Owner"/>
            </div>
            <div className="cell cell_3">
              <div>Product Family</div>
              <ul className="filter_form_ul_options filter_product_family_options">
                <li>Commerical Charging</li>
                <li>Commercial Energy</li>
                <li>Home Charging</li>
                <li>Vehicle</li>
                <li>None</li>
              </ul>
            </div>
            <div className="cell cell_4">
              <div>Stage</div>
              <ul className="filter_form_ul_options filter_stage_options">
                <li>New</li>
                <li>Attempting to Engage</li>
                <li>Engaged</li>
                <li>Ordered</li>
                <li>Closed Lost</li>
                <li>Unqialified</li>
                <li>Analysis</li>
                <li>Bid/Proposal Submitted</li>
                <li>Verbal Commitment</li>
                <li>Negotiation/Review</li>
                <li>Closed Won</li>
                <li>None</li>
              </ul>
            </div>
            <div className="cell cell_5">
              <input type="text" placeholder="Last Campaign Source"/>
            </div>
            <div className="cell cell_6">
              <input type="text" placeholder="Reservation Number"/>
            </div>
            <div className="cell cell_7">
              <div>Assigned Store</div>
              <ul className="filter_form_ul_options filter_assigned_store_options">
                <li>NA-US-CA-Santa Monica</li>
                <li>NA-US-CA-Santa Monica-3rd Street Promenade</li>
                <li>NA-US-CA-West Los Angeles-Santa Monica Blvd.</li>
                <li>NA-US-CA-Canoga Park-Topanga</li>
                <li>NA-US-CA-Sherman Oaks-Fashion Square Mall</li>
              </ul>
            </div>
            <div className="cell cell_8">
              <input type="text" placeholder="Warehouse"/>
            </div>
            <div className="cell cell_9">
              <div>Product Interested</div>
              <ul className="filter_form_ul_options filter_product_interested_options">
                <li>Commercial Powerwall</li>
                <li>Commercial Solar Panels</li>
                <li>Commercial Wall Connector</li>
                <li>Cybertruck</li>
                <li>Megapack</li>
                <li>Model 3</li>
                <li>Model S</li>
                <li>Model X</li>
                <li>Model Y</li>
                <li>Powerpack</li>
                <li>Powerwall</li>
                <li>Roadster</li>
                <li>Semi</li>
                <li>Solar Panels</li>
                <li>Solarglass</li>
                <li>Wall Connector</li>
                <li>None</li>
              </ul>
            </div>
            <div className="cell cell_10">Webform Link</div>
            <div className="cell cell_11">Created From</div>
            <div className="cell cell_12">Created To</div>
            <div className="cell cell_13">Updated From</div>
            <div className="cell cell_14">Updated To</div>
            <div className="cell cell_15">Closed From</div>
            <div className="cell cell_16">Closed To</div>
            <div className="cell cell_17">
              <div>Account country</div>
              <input type="text" defaultValue="US"/>
            </div>
            <div className="cell cell_18">
              <div>Account Region</div>
              <ul className="filter_form_ul_options filter_account_region_options">
                <li>Americas</li>
                <li>Antartica</li>
                <li>APAC</li>
                <li>EMEA</li>
                <li>None</li>
              </ul>
            </div>
            <div className="cell cell_19">
              <div>Account Market</div>
              <ul className="filter_form_ul_options filter_account_market_options">
                <li>Africa</li>
                <li>Americas-Central</li>
                <li>Americas-Midwest</li>
                <li>Americas-Mountain</li>
                <li>Americas-Northeast</li>
                <li>Americas-Pacific</li>
                <li>Americas-Pacific</li>
                <li>Americas-Southeast</li>
                <li>Americas-West Coast</li>
                <li>Antarctica</li>
                <li>Asia</li>
                <li>Australia & Oceania</li>
                <li>Carribean</li>
                <li>Central America</li>
                <li>Europe</li>
                <li>Latin America & Caribbean</li>
                <li>Middle East</li>
                <li>Middle East & North Africa</li>
                <li>North America</li>
                <li>South America</li>
                <li>Sub-Saharan Africa</li>
                <li>None</li>
              </ul>
            </div>
            <div className="cell cell_20">
              <div>Closest Store</div>
              <ul className="filter_form_ul_options filter_closest_store_options">
                <li>NA-US-CA-Santa Monica</li>
                <li>NA-US-CA-Santa Monica-3rd Street Promenade</li>
                <li>NA-US-CA-West Los Angeles-Santa Monica Blvd.</li>
                <li>NA-US-CA-Canoga Park-Topanga</li>
                <li>NA-US-CA-Sherman Oaks-Fashion Square Mall</li>
              </ul>
            </div>
            <div className="cell cell_21">
              <div>Product Ordered</div>
              <ul className="filter_form_ul_options filter_product_ordered_options">
                <li>Commercial Powerwall</li>
                <li>Commercial Solar Panels</li>
                <li>Commercial Wall Connector</li>
                <li>Cybertruck</li>
                <li>Megapack</li>
                <li>Model 3</li>
                <li>Model S</li>
                <li>Model X</li>
                <li>Model Y</li>
                <li>Powerpack</li>
                <li>Powerwall</li>
                <li>Roadster</li>
                <li>Semi</li>
                <li>Solar Panels</li>
                <li>Solarglass</li>
                <li>Wall Connector</li>
                <li>None</li>
              </ul>
            </div>
          </div>

          <div className="filter_form_second">
            <div className="cell cell_22">
              <input type="text" placeholder="Owner"/>
            </div>
            <div className="cell cell_23">
              <input type="text" placeholder="Next Steps"/>
            </div>
            <div className="cell cell_24">
              <input type="text" placeholder="Product Family"/>
            </div>
            <div className="cell cell_25">
              <input type="text" placeholder="Stage"/>
            </div>
            <div className="cell cell_26">
              <input type="text" placeholder="Assigned Store"/>
            </div>
            <div className="cell cell_27">
              <input type="text" placeholder="Source"/>
            </div>
            <div className="cell cell_28">
              <input type="text" placeholder="Last Campaign Source"/>
            </div>
            <div className="cell cell_29">
              <input type="text" placeholder="Created At"/>
            </div>
            <div className="cell cell_30">
              <input type="text" placeholder="Reservation Number"/>
            </div>
            <div className="cell cell_31">
              <input type="text" placeholder="Warehouse"/>
            </div>
            <div className="cell cell_32">
              <input type="text" placeholder="Product Specialist Credit"/>
            </div>
            <div className="cell cell_33">
              <input type="text" placeholder="Reservation Date"/>
            </div>
            <div className="cell cell_34">
              <input type="text" placeholder="Acquisition ID"/>
            </div>
            <div className="cell cell_35">
              <input type="text" placeholder="Opportunity Capturer"/>
            </div>
            <div className="cell cell_36">
              <input type="text" placeholder="Account Country"/>
            </div>
            <div className="cell cell_37">
              <input type="text" placeholder="Closed Date"/>
            </div>
            <div className="cell cell_38">
              <input type="text" placeholder="Updated At"/>
            </div>
            <div className="cell cell_39">
              <input type="text" placeholder="Updated By"/>
            </div>
            <div className="cell cell_40">
              <input type="text" placeholder="Created By"/>
            </div>
            <div className="cell cell_41">
              <input type="text" placeholder="SFDC 10"/>
            </div>
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default FilterViewComponent;
