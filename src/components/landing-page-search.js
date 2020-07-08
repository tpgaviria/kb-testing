import React from "react"
import Logo from "../images/PDLogoNav.png"
// import "../styles/global-nav-bar.css"

const LandingPageSearch = () => (

    <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">

                <form>
                    <div class="row justify-content-center my-lg-5 my-sm-0">
                        <div class="col-lg-6 col-xs-2">
                            <input type="text" class="form-control" id="inputPassword2" placeholder="Search Knowledge Base" />
                        </div>
                        <div class="col-lg-1">
                            <button type="submit" class="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>

        </div>
    </div>

)


export default LandingPageSearch
