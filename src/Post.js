import Responses from "./Responses";
import LeaveComment from './LeaveComment';
import author from "./images/author1.jpg";

import ReactAudioPlayer from 'react-audio-player';
/**remove*/
import pic1 from "./images/widget-1.jpg";
import pic2 from "./images/widget-2.jpg";
import pic3 from "./images/widget-3.jpg";
import pic4 from "./images/widget-4.jpg";
import audio from "./images/voice-image.jpg";

import { commentlist} from './commentlist';//remove
/** */
const Post = () => (
  <div className="col-md-9 pt-5">
  <section>

    <div className="section-body mb-3">
      <div className="article">
        <div className="media p-3"> <img src={author} alt="John Doe" className="mr-3 rounded-circle" style={{ width: "86px" }} />
          <div className="media-body">
            <div className="article-title">
              <h5>Why Colleges now imposing uniforms? <a href="#" className="btn btn-round prm-btn font-12 mr-2 float-right">Follow</a> </h5>
            </div>
            <div className="article-body">
              <h5>I Totally agree <a className="btn btn-outline-primary btn-round font-12 float-right create-post"> &nbsp; Create Post</a> </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <a className="font-pink" href="#"><small>more...</small></a></p>
              <p className="author">Posted by <a href="#">James_007 </a>2 hours ago</p>
              <div className="tags mb-4"> <a href="#" className="btn btn-tags selected mr-1"> #COLLEGE </a> <a href="#" className="btn btn-tags mr-1"> #EDUCATION </a> <a href="#" className="btn btn-tags mr-1"> #SCHOOL </a> <a href="#" className="btn btn-language float-right"> English </a> </div>
              {/*<img src={audio} alt="audio" className="img-fluid mb-4" />*/}
              <ReactAudioPlayer  src=" https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-OGG-File.ogg"   autoPlay  controls/>
              <div className="popup-images justify-content-start"> <a href="#" className="m-1"> <img src={pic1} alt="pic" className="brd-rounded5 mb-2" /> </a> <a href="#" className="m-1"> <img src={pic2} alt="pic" className="brd-rounded5 mb-2" /> </a> <a href="#" className="m-1"> <img src={pic3} alt="pic" className="brd-rounded5 mb-2" /> </a> <a href="#" className="m-1"> <img src={pic4} alt="pic" className="brd-rounded5 mb-2" /> </a> </div>
            </div>
          </div>
        </div>


        <Responses />
        
      </div>
    </div>


  </section>
  <LeaveComment commentlist={commentlist} />
  
  </div>
);
export default Post;