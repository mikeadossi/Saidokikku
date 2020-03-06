import React, { Component } from "react";
import './LeadsTableComponent.css';

class LeadsTableComponent extends Component {
  render() {
    return (
      <div className="leadsTableContainer">
        <caption className="tableHeadContainer">
          <tr className="topLevelTableRow">
            <th className="tableHead">OPPORTUNITY NAME</th>
            <th className="tableHead">OWNER</th>
            <th className="tableHead">PRODUCT FAMILY</th>
            <th className="tableHead">STAGE</th>
            <th className="tableHead">ASSIGNED STORE</th>
            <th className="tableHead">SOURCE</th>
            <th className="tableHead">LAST CAMPAIGN SOURCE</th>
            <th className="tableHead">CREATED AT</th>
          </tr>
        </caption>
        <tbody>
          <tr className="tableRow">
            <td className="tableData">Johnny Unitas</td>
            <td className="tableData">springwell</td>
            <td className="tableData">Vehicle</td>
            <td className="tableData">Test Drive</td>
            <td className="tableData">101</td>
            <td className="tableData">Store</td>
            <td className="tableData"></td>
            <td className="tableData">02/15/2020</td>
          </tr>
          <tr className="tableRow">
            <td className="tableData">Johnny Unitas</td>
            <td className="tableData">springwell</td>
            <td className="tableData">Vehicle</td>
            <td className="tableData">Test Drive</td>
            <td className="tableData">101</td>
            <td className="tableData">Store</td>
            <td className="tableData"></td>
            <td className="tableData">02/15/2020</td>
          </tr>
          <tr className="tableRow">
            <td className="tableData">Johnny Unitas</td>
            <td className="tableData">springwell</td>
            <td className="tableData">Vehicle</td>
            <td className="tableData">Test Drive</td>
            <td className="tableData">101</td>
            <td className="tableData">Store</td>
            <td className="tableData"></td>
            <td className="tableData">02/15/2020</td>
          </tr> 
        </tbody>
      </div>
    );
  }
}

export default LeadsTableComponent;
