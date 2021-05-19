import Feed from './Feedfile/Feed';
import Feedresponse from './Feedfile/Feedrespose';
import React, { Component } from 'react';


class Pinbody extends Component{
    render(){
        return(
            <div className="col-md-10 p-4">

                            {/* // <!-- section --> */}
                            <section>
                            <div className="section-header">
                                <h2 className="sec-heading post-line float-left">Pin</h2>
                            </div>
                            {/* <!--//--> */}
                            {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                <a className="nav-link active bg-img-btn" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><b>Published</b></a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link bg-img-btn" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><b>Saved</b></a>
                                </li>
                            </ul> */}
                            <div className="section-body mb-3">
                                <div className="article">
                                    {/* Feed */}
                                    <Feed/>
                                    {/* Feed End */}
                                </div>
                                {/* Feed Response */}
                                <Feedresponse/>
                                {/* Feed Response End */}
                            </div>

                            
                            </section>
                            {/* <!--//--> */}
                           
            </div>
        );
    }
}
export default Pinbody;