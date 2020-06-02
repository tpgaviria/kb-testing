// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/PDLogoNav.png"

const GlobalNav = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg navbar-dark pb-0">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="navbar-brand" id="homeLink" href="/docs"><img src={Logo} className="d-inline-block align-middle mx-auto" height="25" alt="PagerDuty"/> | Knowledge Base</a>
      </li>
    </ul>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ml-5">
        <li className="nav-item active">
          <a className="nav-link" href="/docs">Knowledge Base</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.pagerduty.com/integrations/">Integrations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://developer.pagerduty.com/">API Docs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://community.pagerduty.com/forum/">Community Discussions</a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="https://tickets.pagerduty.com/hc/en-us/requests/new">Contact Support</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://tickets.pagerduty.com/hc/en-us/requests">My Support Tickets</a>
        </li>
      </ul>
    </div>
  </nav>
)


export default GlobalNav
