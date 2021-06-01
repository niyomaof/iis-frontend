import './App.css';
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { faCog, faSignOutAlt, faTrash, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom footer-bg footer-navbar">
        <a className="active" href="/">Home</a>
        {/* <a href="/home">HomeTest</a> */}
        <a href="/">Setting</a>  
      </div>

      

    );
  }
}

export default Footer;
