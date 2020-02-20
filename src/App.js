import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Home from './containers/Home/Home';
import SignUp from './containers/SignUp/SignUp';
import LogIn from './containers/LogIn/LogIn';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/signUp" component={ SignUp }/>
            <Route exact path="/logIn" component={ LogIn }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
