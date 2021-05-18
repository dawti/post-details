import side1 from "./images/image-side1.jpg";
import side2 from "./images/image-side2.png";
import side3 from "./images/image-side3.png";
import side4 from "./images/image-side4.png";


const TopRated=()=>( 
<div className="widget-section blue-bg col-md-12 pt-4">
<section>
  <div className="section-header" >
    <h2 className="sec-heading widgetheading float-left">Top Rated Topics</h2>
    <small className="float-right"> <a href="#">View all</a> </small> </div>
  <div className="topic-list">
    <ul className="list-unstyled">
      <li>
        <div className="media mb-4"> <img className="mr-3 rounded-circle" src={side1} alt="Generic placeholder image"/>
          <div className="media-body mt-2">
            <h6 className="mt-0 topic-title"><a href="#">What is your openion on commercial Ads</a></h6>
          </div>
        </div>
      </li>
      <li>
        <div className="media mb-4"> <img className="mr-3 rounded-circle" src={side2} alt="Generic placeholder image"/>
          <div className="media-body mt-2">
            <h6 className="mt-0 topic-title"><a href="#">Conflict in your aptitude & 
              qualification?</a></h6>
          </div>
        </div>
      </li>
      <li>
        <div className="media mb-4"> <img className="mr-3 rounded-circle" src={side3} alt="Generic placeholder image"/>
          <div className="media-body mt-2">
            <h6 className="mt-0 topic-title"><a href="#">Storiyoh | Core Purpose</a></h6>
          </div>
        </div>
      </li>
      <li>
        <div className="media mb-4"> <img className="mr-3 rounded-circle" src={side4} alt="Generic placeholder image"/>
          <div className="media-body mt-2">
            <h6 className="mt-0 topic-title"><a href="#">Little Storiyohs</a></h6>
          </div>
        </div>
      </li>
      <li>
        <div className="media mb-4"> <img className="mr-3 rounded-circle" src={side2} alt="Generic placeholder image"/>
          <div className="media-body mt-2">
            <h6 className="mt-0 topic-title"><a href="#">Thoughts on IoT</a></h6>
          </div>
        </div>
      </li>
      <li>
        <div className="media mb-4"> <img className="mr-3 rounded-circle" src={side2} alt="Generic placeholder image"/>
          <div className="media-body mt-2">
            <h6 className="mt-0 topic-title"><a href="#">Fundamentals of c progra-
              mming-test</a></h6>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>
</div>
);

export default TopRated;