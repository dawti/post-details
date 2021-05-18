import clock from "./images/clock.png";
import like from "./images/icon-like.png";
import dislike from "./images/icon-dislike.png";

const Comment=(props)=>(
    <div className="media border-0 p-2">
  <img src={props.userdp} alt="John Doe" className="mr-3  mt-3 rounded-circle" style={{width: 60}} />
  <div className="media-body pt-3">
    <h6 className="comment-hed-color pt-2"><b>{props.name}</b><small className="gray-color-text"><img src={clock} alt="John Doe" className="pl-2 pr-2" />{props.time}</small></h6>
    <p className="media-p-color">{props.comment}</p>
    <div className="post-comment">
      <ul className="list-unstyled d-flex comments-use">
        <li className="pr-4 border-right"> <a href="#" className="comment"><img src={like} /></a> <span>{props.like}</span></li>
        <li className="ml-4"> <a href="#" className="comment"><img src={dislike} /></a> <span>{props.dislike}</span> </li>
      </ul>
    </div>
    <hr />
  </div>
</div>

);

export default Comment;