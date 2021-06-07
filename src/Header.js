import collapse from "./images/collapse-btn.png";
import logo from "./images/logo.png";
import search from "./images/search-btn.png";
import crossheader from "./images/dropdown-cross-btn.png";
import alert from "./images/alert-icon.png";
import user from "./images/user-image.png";
import iconuser from "./images/icon-user.png";
import question from "./images/Untitled-1.png";
import iconhelp from "./images/icon--help.png";
import setting from "./images/icon-setting.png"
import logout from "./images/icon-logout.png"
import CreateTopic from './CreateTopic';
import CreatePost from './CreatePost';
import './Header.css';

const Header=()=>(
  <>
    <header className="header" >
    <nav className="navbar navbar-expand-lg navbar-light" style={{background:" #ffffff"}}>
      <div className="container-fluid "> <a id="sidebarCollapse"> <img src={collapse} alt="" className="mr-4"/> </a> <a href="/"> <img src={logo} alt=""/> </a>
        <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i className="fas fa-align-justify"></i> </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 ml-auto search-form">
            <input className="form-control mr-sm-2 ml-auto" type="search" placeholder="Search" aria-label="Search..."/>
            <button className="search-btn my-2 my-sm-0" type="submit"> <img src={search} alt=""/> </button>
          </form>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item active dropdown"> <a className="nav-link dropdown-toggle bg-skyblue2" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img src={crossheader } alt=""/> </a> 
             
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
            <li className="nav-item active"> <a className="nav-link" href="#"><img src={alert } alt=""/></a> </li>
            
            <li className="nav-item border-none dropdown"> <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><img src={user} alt=""/></a>&nbsp;&nbsp; 
               
              <div className="dropdown-menu userdropdown" aria-labelledby="dropdownMenuLink"> 
                
                <h5><img src={iconuser}/> &nbsp;&nbsp;My Station</h5>
                <ul className="list-unstyled">
                  <li><a href="#"><img src={question} alt=""/>&nbsp;&nbsp;FAQ'S </a></li>
                  <li><a href="#"><img src={iconhelp} alt=""/>&nbsp;&nbsp;Help & Support </a></li>
                  <li><a href="#"><img src={setting} alt=""/>&nbsp;&nbsp;User Setting </a></li>
                  <li><a href="#"><img src={logout} alt=""/>&nbsp;&nbsp;Logout </a></li>
                </ul> 
                 
              </div>
              
            </li>
            <li className="nav-item "> <a className="prm-btn btn nav-item mt-2 btn-round">UPGRADE</a> </li>
          </ul>
        </div>
      </div>
      
      
    </nav>
   
  </header>
  <CreatePost/>
  <CreateTopic/>
  </>
);

export default Header;