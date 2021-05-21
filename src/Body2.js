import p1 from "./images/author1.jpg";
import p2 from "./images/widget-1.jpg";
import p3 from "./images/widget-2.jpg";
import p4 from "./images/widget-3.jpg";
import Responses from "./Responses";


function Body2() {
    return (
        <div>
            <div class="section-body mb-3">
                <div class="article">
                    {/* <!-- Media --> */}
                    <div class="media p-3"> <img src={p1}alt="" class="mr-3 rounded-circle" style={{width:"86px"}} />
                        <div class="media-body">
                            <div class="article-title">
                                <h5 >I Totally agree</h5>
                            </div>
                            <div class="article-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a class="font-pink" href="#"><small><u>more...</u></small></a></p>
                                    <p class="author">Posted by <a href="#">Baby </a>2 hours ago</p>
                                    {/* <!----> */}
                                    <div class="tags mb-4">
                                        <a href="#" class="btn btn-tags selected mr-1"> #COLLEGE </a>
                                        <a href="#" class="btn btn-tags mr-1"> #EDUCATION </a>
                                        <a href="#" class="btn btn-tags mr-1"> #SCHOOL </a>
                                    </div>
                                    {/* <!--//-->  */}
                                    <div class="popup-images d-flex"> <a href="#" class="m-1">
                                        <img src={p2} class="brd-rounded5" /> </a> <a href="#" class="m-1">
                                            <img src={p3} class="brd-rounded5" /> </a> <a href="#" class="m-1">
                                            <img src={p4} class="brd-rounded5" /> </a>
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