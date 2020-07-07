import React from "react"
import Logo from "../images/PDLogoNav.png"
// import "../styles/global-nav-bar.css"

const LandingPageCards = () => (
    <div class="container">
        <div class="card-deck">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Integration Guides</h5>
                    <p class="card-text">As part of PagerDuty’s 350+ platform integrations, the PagerDuty Integration Partner Program’s Verified integrations constitute a select tier in the industry’s largest ecosystem of native integrations.</p>
                </div>
                <div class="card-footer">
                <a href="#" class="btn btn-primary">Go to Guides</a>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Developer Docs</h5>
                    <p class="card-text">Whether you’re building a widget for your team or a first-class product for the enterprise, PagerDuty’s Developer Platform makes it easy to build real-time workflows into your application and meet the expectations of a world that’s always on.</p>
                </div>
                <div class="card-footer">
                <a href="#" class="btn btn-primary">See the Docs</a>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Community & Best Practices</h5>
                    <p class="card-text">The place to discuss all things PagerDuty, such as incident response, postmortems, or analytics. Get help configuring your account, find out what other are using PagerDuty for.</p>
                </div>
                <div class="card-footer">
                <a href="#" class="btn btn-primary">Go to Community</a>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">PagerDuty University</h5>
                    <p class="card-text">PagerDuty's customer training program provides technical training to current and prospective customers on the use of the PagerDuty platform.</p>
                </div>
                <div class="card-footer">
                <a href="#" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    </div>

)


export default LandingPageCards
