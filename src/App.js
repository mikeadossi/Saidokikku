import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Nav from './containers/Nav/Nav';
import Footer from './containers/Footer/Footer';
import Home from './containers/Home/Home';
import SignUp from './containers/SignUp/SignUp';
import LogIn from './containers/LogIn/LogIn';
import Saitama from './containers/Saitama/Saitama';
import Ryuzaki from './containers/Ryuzaki/Ryuzaki';
import Ed from './containers/Ed/Ed';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/signUp" component={ SignUp }/>
            <Route exact path="/logIn" component={ LogIn }/>
            <Route exact path="/saitama" component={ Saitama }/>
            <Route exact path="/ryuzaki" component={ Ryuzaki }/>
            <Route exact path="/ed" component={ Ed }/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
