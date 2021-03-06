import React from "react"

const LandingPageCards = () => (
    <div className="container">
        <div className="card-deck landing-page-cards">
            <div className="card card1">
                <div className="card-body">
                    <h4 className="card-title">Integration Guides</h4>
                    <p className="card-text">As part of PagerDuty’s 350+ platform integrations, the PagerDuty Integration Partner Program’s Verified integrations constitute a select tier in the industry’s largest ecosystem of native integrations.</p>
                </div>
                <div className="card-footer">
                <a href="#" className="btn">Go to Guides</a>
                </div>
            </div>
            <div className="card card2">
                <div className="card-body">
                    <h4 className="card-title">Developer Docs</h4>
                    <p className="card-text">Whether you’re building a widget for your team or a first-class product for the enterprise, PagerDuty’s Developer Platform makes it easy to build real-time workflows into your application and meet the expectations of a world that’s always on.</p>
                </div>
                <div className="card-footer">
                <a href="#" className="btn">See the Docs</a>
                </div>
            </div>
            <div className="card card3">
                <div className="card-body">
                    <h4 className="card-title">Community & Best Practices</h4>
                    <p className="card-text">The place to discuss all things PagerDuty, such as incident response, postmortems, or analytics. Get help configuring your account, find out what other are using PagerDuty for.</p>
                </div>
                <div className="card-footer">
                <a href="#" className="btn">Go to Community</a>
                </div>
            </div>
            <div className="card card4">
                <div className="card-body">
                    <h4 className="card-title">PagerDuty University</h4>
                    <p className="card-text">PagerDuty's customer training program provides technical training to current and prospective customers on the use of the PagerDuty platform.</p>
                </div>
                <div className="card-footer">
                <a href="#" className="btn">Learn More</a>
                </div>
            </div>
        </div>
    </div>

)


export default LandingPageCards
