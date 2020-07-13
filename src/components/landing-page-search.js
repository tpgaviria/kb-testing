import React from "react"
import 'font-awesome/css/font-awesome.min.css';

const LandingPageSearch = () => (

    <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid p-0">


            <form className="mb-0 my-lg-5 py-lg-2">
                <div className="form-row justify-content-center" id="searchBar">
                    <div className="col-8 col-lg-6">
                        <input type="text" className="form-control" placeholder="Search Knowledge Base" />
                    </div>
                    <div className="col-1 mr-5 d-none d-sm-none d-md-block">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                    <div className="col-1 mr-5 d-lg-none d-md-none">
                        <button type="submit" className="btn btn-primary"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                </div>
            </form>

        </div>
    </div>

)


export default LandingPageSearch
