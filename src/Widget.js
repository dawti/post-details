import download from "./images/download-link.png" ;
import google from "./images/google-play.png";
import apple from "./images/apple-store.png";

const Widget=()=>(
    <div className="widget-section">
    <div className="mobi-app mx-auto"> 
      <figure className="figure">
        <img src={download} className="figure-img img-fluid"/>
        <figcaption className="figure-caption p-3">
          <h2 className="caption-heading">Download the app from</h2>
          <ul className="list-unstyled mt-4">
            <li>
              <a href="#" title="google-play"><img src={google} className="img-fluid"/></a>
            </li>
            <li>
              <a href="#" title="apple-store"><img src={apple} className="img-fluid"/></a>
            </li>
          </ul>
        </figcaption>
      </figure> 
      
    </div>
  </div>
);

export default Widget;