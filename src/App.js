import React from "react";
import ReactDOM from "react-dom";
import MainSection from "./containers/MainSection/MainSection";
import Nav from "./containers/Nav/Nav";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <MainSection />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
