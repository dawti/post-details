
import topheader from "./images/top-header-img.png";
import whitecircle from "./images/white-circle-btn.png";
import threedots from "./images/three-dots.png";
import share1 from "./images/share1.png";
import repost1 from "./images/repost1.png";
import author1 from "./images/author1.jpg";


function Bodyhead() {
    return (
        <div>
            {/* <div className="col-md-9 pt-5"> */}
                <div className="section-body mb-3">
                    <div className="bg-img-top rounded-top p-3" id="topheader">
                        {/* <!----> */}
                        <div className="row clearfix">
                            <div className="col-md-2 col-12">
                                <img src={topheader} alt="" className="rounded-circle img-responsive" />
                            </div>
                            <div className="col-md-10 col-12">
                                <span className="float-right pt-3">
                                    <a href="#" class="btn btn-round bg-white btn-blue-text font-12 mr-2"> <b>Follow</b></a>
                                    <a href="#"><img src={whitecircle} alt="" className="ml-3" /></a>
                                    <a href="#" class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><img src={threedots} alt="" class="ml-4" /></a>
                                    {/* <!-- User Dropdown --> */}
                                    <div className="dropdown-menu dropdawnPost dropdown-post" aria-labelledby="dropdownMenuLink">
                                        <ul clasNclassNames="list-unstyled pl-3">
                                            <li className="pt-4 "><a href="#"><img src={share1} alt="" class="pl-3 pr-3" />&nbsp;&nbsp;Share </a></li>
                                            <li className="pt-4"><a href="#"><img src={repost1} alt="" class="pl-3 pr-3" />&nbsp;&nbsp;Report </a></li>
                                        </ul>
                                    </div>
                                    {/* <!--//--> */}
                                </span>
                                <h5 className="text-white pt-3 mb-4">What weird food combinations do you<br /> really enjoy?</h5>
                                <ul className="list-unstyled list-left">
                                    <li className="pl-0">
                                        <small>FOLLOWERS <span className="font-white font-semibold pl-3">220</span>  </small>
                                    </li>
                                    <li>
                                        <small >POSTS <span className="font-white font-semibold pl-3">18</span>  </small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--//--> */}




                        {/* <!-- Media --> */}

                        {/* <!--//--> */}
                    </div>
                    <div className="article top-media-box">
                        {/* <!-- Media --> */}
                        <div className="media p-3">
                            <div className="media-body">
                                <div className="article-title border-bottom-0">
                                    <h5 className="pt-4"><img src={author1} alt="" className="mr-3 rounded-circle" style={{ width: "60px;" }} /> John Doe</h5>
                                </div>
                                <div className="article-body pt-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small><u>more...</u></small></a></p>
                                    <p className="author">Posted by <a href="#">James_007 </a>Sep 25 2020</p>
                                    {/* <!----> */}
                                    <div className="tags mb-4"> <a href="#" class="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a></div>
                                    {/* <!--//-->  */}
                                </div>
                            </div>
                        </div>
                        {/* <!--//-->  */}
                    </div>
                </div>
            </div>
        // </div >
    );
}

export default Bodyhead;