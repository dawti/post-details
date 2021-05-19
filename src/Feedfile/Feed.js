import React from 'react'
import author1 from '../images/author1.jpg';
import dlt11 from '../images/dlt11.png';
import voiceimage from '../images/voice-image.jpg';
import widget1 from '../images/widget-1.jpg';
import widget2 from '../images/widget-2.jpg';
import widget3 from '../images/widget-3.jpg';
import widget4 from '../images/widget-4.jpg';


const Feed = () => {
    return (
        <div>
            <div className="media p-3"> <img src={author1} alt="John Doe" className="mr-3 rounded-circle" style={{width:'86px'}}/>
                <div className="media-body">
                    <div className="article-title">
                        <h5 ><a href="/post-details">Why Colleges now imposing uniforms? </a><a href="#" className="btn btn-round prm-btn font-12 float-right">Follow</a> </h5>
                    </div>
                    <div className="article-body">
                        <h5>I Totally agree <a href=""><img src={dlt11} className="float-right ml-2"/></a><a className="btn btn-outline-primary btn-round font-12 float-right create-post blue-create-post"> &nbsp; <b>Create Post</b> </a> </h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small><u>more...</u></small></a></p>
                        <p className="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
                        {/* <!----> */}
                        <div className="tags mb-4"> <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a> <a href="#" className="btn btn-language float-right"> MALAYALAM </a> 
                        </div>
                        {/* <!--//--> */}
                        <img src={voiceimage} className="img-fluid mb-4"/>
                        <div className="popup-images d-flex"> <a href="#" className="m-1"> <img src={widget1} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget2} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget3} className="brd-rounded5"/> </a> <a href="#" className="m-1"> <img src={widget4} className="brd-rounded5"/> </a> </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Feed;