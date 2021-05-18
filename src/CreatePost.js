import image from "./images/topic-icon2.png";
import audio from "./images/voice-image.jpg";
import music from "./images/musicgray-icon.png";
import speaker from "./images/music-post.png" ;
import stop from "./images/red-stop-icon.png";
import choose from "./images/choose.png";

const CreatePost=()=>(
    <div className="modal fade" id="createPost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable modal-lg" role="document">
    <div className="modal-content p-4">
      <div className="modal-header border-bottom-0">
        <h5 className="modal-title" id="exampleModalLabel"></h5>
        <button type="button" className=" btn close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
      </div>

      <div className="modal-body">
        <h5 className="text-center title mb-2">Create Post</h5>
      
        <form>
          <div className="form-group mt-5">
           
            <select id="id_select2_example" className="form-control">
              <option data-img_src={image}> Choose a topic</option>
              <option data-img_src={image}> Choose a topic</option>
              <option data-img_src={image}> Choose a topic</option>
            </select>
          </div>

          <div className="form-group">
            <input type="text" name="" className="form-control" placeholder="Title (Max 50 Characters)"/>
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="Labels (Ex: #kerala)"></textarea>
          </div>
          <div className="form-group">
            <h5 className="form-heading-post pt-2 pb-2">Audio</h5>
             <a href="#"><img src={audio} alt="audio" className="img-fluid mb-2"/></a>
          </div>
          <div className="form-group mb-4">
            <div className="row float-right pr-3 pt-1">
               <a href="#"><div className="btn btn-round btn-outline-primary font-12  pl-4 pr-4 ">REMOVE</div></a>
            </div>
          </div>
          <div className="form-group"> 
            <div className="row mt-5 mb-5 pt-2">
            <div className="col-4 box-positionnn">
                  <div className="card-box-dotted p-4 text-center">
                       <a href=""><img src={music} alt="music" className="img-fluid"/></a>   
                      <div>
                        <small><span className="text-primary"><u>Upload</u></span> your audio here</small>
                 </div>
                 </div>
                 
              </div>
              <div className="col-2">
                  <div className="pt-3 imgrecord">
                       <a href="#"><img src={speaker} alt="speaker" className="img-fluid"/></a>
                      <h6 className="text-center pt-2">Record</h6>
                  </div>

                  
              </div>
              <div className="col-2">
                   <div className="pt-3 imgstop">
                     <a href="#"><img src={stop} alt="stop" className="img-fluid"/></a> 
                     <h6 className="text-center pt-2">Stop</h6>
                  </div>
                  
              </div>
              <div className="col-4">
                <div className="btn-dropdawn">
                  <div className="audio-language mt-5">
                      <button type="button" className="btn btn-languages dropdown-toggle" data-toggle="dropdown"> 
                       Audio Language &nbsp; &nbsp;  <i className="fa fa-angle-down fa-lg " aria-hidden="true"></i>
                      </button>
                      <div className="dropdown-menu langaugeee">
                        <a className="dropdown-item pb-2" href="#">Hindi</a>
                        <a className="dropdown-item pb-2" href="#">English </a>
                        <a className="dropdown-item" href="#">Tamil </a>
                      </div>
                    </div>
                </div>
              </div>
          </div>
          </div>
          <hr/>
          <div className="form-group">
            <h5 className="form-heading-post pt-2">Images</h5>
            <div className="col-12 mt-0 pt-0">
              <label htmlFor="exampleFormControlTextarea1"></label>
              <div className="card-box-dotted p-5 text-center"> <a href=""><img src={choose} alt="choose" className="img-fluid mb-4"/></a>
                <div><label>Drag & Drop Images OR Upload <br/>( MAX 4 Images )</label> </div>
              </div>
              
            </div>
          </div>
          <div className="form-group">
            <h5 className="form-heading-post pt-2">Text</h5>
            <label htmlFor="comment" className="pt-2 pb-1">What's on Your mind?</label><br/>
            
            <textarea className="form-control" rows="5" id="comment"></textarea>
          </div>
          <div className="form-group row">
            <div className="col-6">
              <div className="form-check-inline mt-3">
                <div className="custom-control custom-checkbox pmd-checkbox">
                  <input className="custom-control-input" type="checkbox" value="" id="customCheckbox1" checked />
                  <label className="custom-control-label pmd-checkbox-ripple-effect" htmlFor="customCheckbox1"> Lock Comments <br/>
                    <small className="font-blue"> Comments will be disabled for your post.</small> </label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="mt-4 float-right">
                <button type="button" className="btn prm-btn btn-round font-12 mr-1">POST</button>
                <button type="button" className="btn btn-outline-primary btn-round font-12"><b>SAVE DRAFT</b></button>
              </div>
            </div>
          </div>
        </form>
      
        </div>
      </div>
    </div>
  </div>
);

export default CreatePost;