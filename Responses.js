import like from "./images/icon-like.png";
import dislike from "./images/icon-dislike.png";
import comment from "./images/icon-comment.png";
import share from "./images/icon-forward.png";
import pin from "./images/icon-pin.png" ;
import flag from  "./images/icon-flag.png";
import playlist from "./images/icon-music.png";
import Flag from './Flag';
import PlayList from "./PlayList";

const Responses=()=>(
    <>
    <div className="comment p-3 mt-2 mb-3">
    <ul className="list-unstyled coments-use">
      <li> <a href="#" className="comment"><img src={like}/></a> <span className="total">1 K</span> </li>
      <li> <a href="#" className="comment"><img src={dislike}/></a> <span className="total">15</span> </li>
      <li> <a href="#"> <img src={comment}/> </a> <span className="total">32</span> </li>
      <li> <a href="#" className="comment"><img src={share}/></a> <span className="total">20</span> </li>
      <li> <a href="#" className="comment"><img src={pin}/></a> <span className="total">08</span> </li>
      <li className="border-none"  data-toggle="modal" data-target="#myflag1"> <a href="#" className="comment"><img src={flag}/></a> <span className="total">01</span> </li>
      <li className="float-right"  data-toggle="modal" data-target="#myAddToPlayList"> <a href="#" className="comment"><img src={playlist}/> <span className="total">Add to playlist</span> </a></li>
    </ul>
  </div>
  <Flag/>
  <PlayList/>
  </>
);

export default Responses;