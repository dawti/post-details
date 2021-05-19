import React from 'react';

import iconlike from '../images/icon-like.png';
import icondislike from '../images/icon-dislike.png';
import iconcomment from '../images/icon-comment.png';
// import lockicon from '../images/lock-icon.png';
import iconforward from '../images/icon-forward.png';
import iconpin from '../images/icon-pin.png';
import iconflag from '../images/icon-flag.png';
import iconmusic from '../images/icon-music.png';
import Addtoplaylist from '../PlayList';

import Flag from '../Flag';

const Feedresponse = () => {
    return(

        // {/* <!-- Comments --> */}
        <div className="comment p-3 mt-2 mb-3">
            <ul className="list-unstyled coments-use">
            <li> <a href="#" className="comment"><img src={iconlike}/></a> <span className="total">1 K</span> </li>
            <li> <a href="#" className="comment"><img src={icondislike}/></a> <span className="total">15</span> </li>
            <li> <a href="#"> <img src={iconcomment}/> <sup>
                {/* <span className="locked alert-bg">
                <img src={lockicon}/></span> */}
                </sup> </a> <span className="total">32</span> </li>
            <li> <a href="#" className="comment"><img src={iconforward}/></a> <span className="total">20</span> </li>
            <li> <a href="#" className="comment"><img src={iconpin}/></a> <span className="total">08</span> </li>
            <li className="border-none"  data-toggle="modal" data-target="#myflag1"> <a href="#" className="comment"><img src={iconflag}/></a> <span className="total">01</span> </li>
            <li className="float-right"  data-toggle="modal" data-target="#myAddToPlayList"> <a href="#" className="comment"><img src={iconmusic}/> <span className="total">Add to playlist</span> </a></li>
            </ul>
            <Flag/>
            <Addtoplaylist/>

        </div>
        // {/* <!--//--> */}
    );
}

export default Feedresponse;