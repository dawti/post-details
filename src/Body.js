import ReactAudioPlayer from 'react-audio-player';
import p1 from "./images/author1.jpg";

import Responses from './Responses';


function Body() {
    return (
        <div>
<div className="section-body mb-3">
                <div className="article"> 
                  {/* <!-- Media --> */}
                  <div className="media p-3"> <img src={p1} alt="" className="mr-3 rounded-circle" style={{width:"86px"}}/>
                    <div className="media-body">
                      <div className="article-title">
                        <h5 >I Totally agree</h5>
                      </div>
                      <div className="article-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small><u>more...</u></small></a></p>
                        <p className="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
                        {/* <!----> */}
                        <div className="tags mb-4"> <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a> <a href="#" className="btn btn-language float-right"> English </a> </div>
                        {/* <!--//-->  */}
                        <ReactAudioPlayer src="https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.ogg"  controls/>
                         </div>
                    </div>
                  </div>
                  <Responses/>
                </div>
              </div>


        </div>
    );
}

export default Body;