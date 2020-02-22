import React from 'react';
import './LogIn.css';

const LogIn = () => (
  <div className="logIn_content">
    <h2>SAIDOKIKKU</h2>
    <div className="logIn_select_container">
      <div className="logIn_select_login logIn_select_links">LOG IN</div>
      <div className="logIn_select_seperator logIn_select_links">|</div>
      <div className="logIn_select_signup logIn_select_links">SIGN UP</div>
    </div>
    <div className="logIn_main_container">
      <form className="logIn_main_options logIn_form_logIn">
        <div className="logIn_main_header">LOG IN</div>
        <div className="label logIn_email_label"><label>EMAIL</label></div>
        <div><input className="logIn_logIn_email_input" type="email"></input></div>
        <div className="label logIn_logIn_password_label"><label>PASSWORD</label></div>
        <div><input className="logIn_logIn_password_input" type="password"></input></div>
        <input className="logIn_button logIn_logIn_submit" type="submit" value="LOG IN" />
      </form>
      <form className="logIn_main_options logIn_form_signUp">
        <div className="logIn_main_header">SIGN UP</div>
        <div className="label logIn_email_label"><label>EMAIL</label></div>
        <div><input className="logIn_signUp_email_input" type="email"></input></div>
        <div className="label logIn_signUp_password_label"><label>PASSWORD</label></div>
        <div><input className="logIn_signUp_password_input" type="password"></input></div>
        <div className="label logIn_signUp_password_label"><label>REENTER PASSWORD</label></div>
        <div><input className="logIn_signUp_password_input" type="password"></input></div>
        <input className="logIn_button logIn_signUp_submit" type="submit" value="CREATE ACCOUNT" />
      </form>
    </div>
  </div>
);

export default LogIn;
