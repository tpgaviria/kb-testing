// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const GlobalNav = ({ siteTitle }) => (
  <nav class="navbar navbar-expand-lg navbar-dark" style={{background: `#A4C5E0`}}>
    <a class="navbar-brand align-middle" href="/">PagerDuty | Knowledge Base</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Knowledge Base</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.pagerduty.com/integrations/">Integrations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://developer.pagerduty.com/">API Docs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://community.pagerduty.com/forum/">Community Discussions</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://tickets.pagerduty.com/hc/en-us/requests/new">Contact Support</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://tickets.pagerduty.com/hc/en-us/requests">My Support Tickets</a>
        </li>
      </ul>
    </div>
  </nav>
)


export default GlobalNav
