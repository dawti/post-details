import Search from './Search';

import collapse from './images/collapse-btn.png';
import logo from './images/logo.png';

import dropdown from "./images/dropdown-cross-btn.png";
import alerticon from "./images/alert-icon.png";
import userimage from "./images/user-image.png";
import iconuser from "./images/icon-user.png";
import img1 from "./images/Untitled-1.png";
import iconhelp from "./images/icon--help.png";
import iconsetting from "./images/icon-setting.png";
import iconlogout from "./images/icon-logout.png"  ;
import CreatePost from './CreatePost';
import CreateTopic from './CreateTopic';

const Header=()=>{
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light header" style={{background:" #ffffff"}}>
    <div className="container-fluid">
     <a id="sidebarCollapse"> <img src={collapse} alt="" className="mr-4"/> </a> 
     <a href="/"> <img src={logo} alt=""/> </a>  
     <Search/>
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active dropdown"> <a className="nav-link dropdown-toggle bg-skyblue2" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img src={dropdown} alt=""/> </a> 
                
                <div className="dropdown-menu createdropdown" aria-labelledby="dropdownMenuLink">
                  <ul className="list-unstyled create-list">
                    <li><h4><b>Create</b></h4></li>
                    <li className="pt-3">
                      <h5 data-toggle="modal" data-target="#createTopic">Topic</h5>
                      <p>Create a topic of interest</p>
                    </li>
                    <li>
                      <h5 data-toggle="modal" data-target="#createPost">Post</h5>
                      <p>Share a post on your OneMic feed</p> 
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item active"> <a className="nav-link" href="#"><img src={alerticon} alt=""/></a> </li>
              
              <li className="nav-item border-none dropdown"> <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><img src={userimage} alt=""/></a>&nbsp;&nbsp; 
                  
                <div className="dropdown-menu userdropdown" aria-labelledby="dropdownMenuLink"> 
                  
                  <h5><img src={iconuser}/> &nbsp;&nbsp;My Station</h5>
                  <ul className="list-unstyled">
                    <li><a href="#"><img src={img1} alt=""/>&nbsp;&nbsp;FAQ'S </a></li>
                    <li><a href="#"><img src={iconhelp} alt=""/>&nbsp;&nbsp;Help & Support </a></li>
                    <li><a href="#"><img src={iconsetting} alt=""/>&nbsp;&nbsp;User Setting </a></li>
                    <li><a href="#"><img src={iconlogout} alt=""/>&nbsp;&nbsp;Logout </a></li>
                  </ul> 
                   
                </div>
                
              </li>
              <li className="nav-item "> <a className="prm-btn btn nav-item mt-2 btn-round">UPGRADE</a> </li>
            </ul>
           
   

    </div>
    </nav>
    <CreatePost/>
    <CreateTopic/>
    </>);
}

export default Header;