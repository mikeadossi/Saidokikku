import React, { Component } from "react";
import './SaitamaFiltersComponent.css';
import FilterFormComponent from '../FilterFormComponent/FilterFormComponent';
import FilterViewComponent from '../FilterViewComponent/FilterViewComponent';

class SaitamaFiltersComponent extends Component {
  render() {
    return (
      <div>
        <FilterFormComponent />
        <FilterViewComponent /> 
      </div>
    );
  }
}

export default SaitamaFiltersComponent;
