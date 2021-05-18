import invite from "./images/invite-figimage.png";
import Refferal from './Referral';

const Invite=()=>(
  <>
    <div className="widget-section"> 

    <figure className="figure">
        <img src={invite} className="figure-img img-fluid"/>
        <figcaption className="figure-caption p-3 t-0">
          <h3 className="caption-heading2 font-white">Invite Your <b>Friends</b></h3>
            <a href="#"  data-toggle="modal" data-target="#myModalsidebar" title="Invite Friend" className="btn invite-btn mt-2">CLICK HERE</a>
            
        </figcaption>
    </figure>
   </div>
    <Refferal/>
   </>
);

export default Invite;