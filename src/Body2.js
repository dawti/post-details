import p1 from "./images/author1.jpg";
import p2 from "./images/widget-1.jpg";
import p3 from "./images/widget-2.jpg";
import p4 from "./images/widget-3.jpg";
import Responses from "./Responses";


function Body2() {
    return (
        <div>
            <div className="section-body mb-3">
                <div className="article">
                    {/* <!-- Media --> */}
                    <div className="media p-3"> <img src={p1}alt="" className="mr-3 rounded-circle" style={{width:"86px"}} />
                        <div className="media-body">
                            <div className="article-title">
                                <h5 >I Totally agree</h5>
                            </div>
                            <div className="article-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small><u>more...</u></small></a></p>
                                    <p className="author">Posted by <a href="#">Baby </a>2 hours ago</p>
                                    {/* <!----> */}
                                    <div className="tags mb-4">
                                        <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a>
                                        <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a>
                                        <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a>
                                    </div>
                                    {/* <!--//-->  */}
                                    <div className="popup-images d-flex"> <a href="#" className="m-1">
                                        <img src={p2} className="brd-rounded5" /> </a> <a href="#" className="m-1">
                                            <img src={p3} className="brd-rounded5" /> </a> <a href="#" className="m-1">
                                            <img src={p4} className="brd-rounded5" /> </a>
                                    </div>
                            </div>
                            </div>
                        </div>
                       <Responses/>
                    </div>
                </div>
            </div>

    );
}

export default Body2;