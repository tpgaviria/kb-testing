import React from "react"
import "../styles/landing-page-container.css"

import LandingPageSearch from "./landing-page-search"
import LandingPageArticles from "./landing-page-articles"
import LandingPageCards from "./landing-page-cards"
import Articles from "./article-links"

const LandingPageContainer = () => (
    <div className="container-fluid p-0 landing-container">
        <LandingPageSearch />
        <Articles />
        <LandingPageArticles />
        <LandingPageCards />
    </div>
)

export default LandingPageContainer
