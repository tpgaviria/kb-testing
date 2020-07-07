import React from "react"
import { Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPageContainer from "../components/landing-page-container"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="PagerDuty Knowledge Base" />
    <LandingPageContainer />
  </Layout>
)

export default IndexPage
