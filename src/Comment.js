import clock from "./images/clock.png";
import ilike from "./images/icon-like.png";
import idislike from "./images/icon-dislike.png";
import { useState } from "react";

const Comment=(props)=>{
  const [like, setLike] = useState(props.like);
  const [dislike, setDislike] = useState(props.dislike);
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  const pressLike=()=>{
    if(count1===0){
      setLike(like+1)
      setcount1(1)
      setcount2(2)
      }
      else if(count2===1){
      setDislike(dislike-1)
      setLike(like+1)
      setcount2(2)
      
      }
      else if(count2===2){
        setLike(like-1)
        setcount2(0)
        setcount1(0)
        }
    }
  const pressDislike=()=>{
      if(count1===0){
        setDislike(dislike+1)
        setcount1(1)
        setcount2(1)
        }
        else if(count2===1){
          setDislike(dislike-1)
          setcount2(0)
          setcount1(0)
          }
        else if(count2===2){
            setLike(like-1)
            setDislike(dislike+1)
            setcount2(1)
            
        }
    }
    

  return(
    <div className="media border-0 p-2">
  <img src={props.userdp} alt="John Doe" className="mr-3  mt-3 rounded-circle" style={{width: 60}} />
  <div className="media-body pt-3">
    <h6 className="comment-hed-color pt-2"><b>{props.name}</b><small className="gray-color-text"><img src={clock} alt="John Doe" className="pl-2 pr-2" />{props.time}</small></h6>
    <p className="media-p-color">{props.comment}</p>
    <div className="post-comment">
      <ul className="list-unstyled d-flex comments-use">
        <li className="pr-4 border-right"> <a onClick={pressLike}  className="comment"><img src={ilike} /></a> <span>{like}</span></li>
        <li className="ml-4"> <a onClick={pressDislike} className="comment"><img src={idislike} /></a> <span>{dislike}</span> </li>
      </ul>
    </div>
    <hr />
  </div>
</div>

  );
}
export default Comment;